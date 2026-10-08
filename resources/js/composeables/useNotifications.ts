import {ref} from 'vue';
import {router, usePage} from '@inertiajs/vue3';

import {getCookie} from '@/js/utils.ts';

type NotificationsConfig = {
  poll: number;
  channel: string | null;
  echo: Record<string, unknown> | null;
};

/** The bits of Laravel Echo we use; any Echo instance (window.Echo) fits. */
type EchoLike = {
  private(channel: string): {listen(event: string, cb: (e: {unread: number}) => void): unknown};
  leave(channel: string): void;
  connector?: {
    pusher?: {connection: {state: string; bind(event: string, cb: (s: {current: string}) => void): void}};
    socket?: {connected: boolean; on(event: string, cb: () => void): void};
  };
};

declare global {
  interface Window {
    Echo?: EchoLike;
    Pusher?: unknown;
  }
}

// one store for the whole app; AppLayout (and so the bell) remounts on every visit
const unread = ref(0);
const changed = ref(0); // bumps whenever the count changes from outside a page load

let started = false;
let unreadUrl = '';
let pollSeconds = 0;
let pollTimer: ReturnType<typeof setInterval> | undefined;
let live = false; // a broadcast connection is up, so polling can rest
let echo: EchoLike | null = null;
let ownEcho = false;
let channel: string | null = null;
let removeNavigate: VoidFunction | undefined;

const setUnread = (n: number) => {
  if (n === unread.value) return;
  unread.value = n;
  changed.value++;
};

const fetchUnread = async () => {
  try {
    // manual: an expired session redirects to the login page; treat that as "stop"
    const r = await fetch(unreadUrl, {headers: {Accept: 'application/json'}, redirect: 'manual'});
    if (!r.ok) return stop();
    setUnread((await r.json()).unread ?? 0);
  } catch {
    // network blip; try again next tick
  }
};

const schedulePolling = () => {
  clearInterval(pollTimer);
  pollTimer = undefined;
  if (!pollSeconds || live || document.hidden) return;
  pollTimer = setInterval(fetchUnread, pollSeconds * 1000);
};

const onVisibility = () => {
  if (!document.hidden && !live) void fetchUnread();
  schedulePolling();
};

const setLive = (up: boolean) => {
  if (up === live) return;
  live = up;
  if (up) void fetchUnread(); // catch up on anything missed while disconnected
  schedulePolling();
};

const connectEcho = async (config: NotificationsConfig) => {
  if (!config.channel) return;

  if (window.Echo) {
    echo = window.Echo;
  } else if (config.echo && ['reverb', 'pusher'].includes(String(config.echo.broadcaster))) {
    const [{default: Echo}, {default: Pusher}] = await Promise.all([import('laravel-echo'), import('pusher-js')]);
    if (!started) return; // signed out while loading
    window.Pusher = Pusher;
    echo = new Echo({
      ...config.echo,
      auth: {headers: {'X-XSRF-TOKEN': getCookie('XSRF-TOKEN') ?? ''}},
    } as never) as unknown as EchoLike;
    ownEcho = true;
  } else {
    return; // nothing to connect with; polling covers it
  }

  channel = config.channel;
  echo.private(channel).listen('.notifications.updated', (e) => setUnread(e.unread));

  // only trust connection state we can observe; otherwise keep polling as a safety net
  const pusher = echo.connector?.pusher;
  const socket = echo.connector?.socket;
  if (pusher) {
    setLive(pusher.connection.state === 'connected');
    pusher.connection.bind('state_change', ({current}) => setLive(current === 'connected'));
  } else if (socket) {
    setLive(socket.connected);
    socket.on('connect', () => setLive(true));
    socket.on('disconnect', () => setLive(false));
  }
};

const start = (config: NotificationsConfig, url: string) => {
  started = true;
  unreadUrl = url;
  pollSeconds = config.poll;

  document.addEventListener('visibilitychange', onVisibility);
  schedulePolling();
  void connectEcho(config);

  // every Inertia response carries a fresh count; leaving the signed-in area tears down
  removeNavigate = router.on('navigate', ({detail}) => {
    if (!detail.page.props._notifications) return stop();
    setUnread((detail.page.props._notifications_unread as number) ?? 0);
  });
};

function stop() {
  if (!started) return;
  started = false;
  live = false;

  clearInterval(pollTimer);
  pollTimer = undefined;
  document.removeEventListener('visibilitychange', onVisibility);
  removeNavigate?.();

  if (echo && channel) echo.leave(channel);
  if (ownEcho) (echo as unknown as {disconnect(): void}).disconnect();
  echo = null;
  ownEcho = false;
  channel = null;
}

/**
 * The signed-in user's unread notification count, kept current by page loads,
 * polling (`jasmine.notifications.poll`) and, when available, broadcasts.
 */
export function useNotifications(route: (name: string) => string) {
  const page = usePage();
  const config = page.props._notifications;

  if (config && !started) {
    unread.value = page.props._notifications_unread ?? 0;
    start(config, route('jasmine.notifications.unread'));
  }

  return {unread, changed, setUnread};
}
