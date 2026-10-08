export function getCookie(name: string): string | null {
  const match = document?.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  return match ? decodeURIComponent(match[3]) : null;
}

const relativeUnits: Array<[Intl.RelativeTimeFormatUnit, number]> = [
  ['year', 31536000],
  ['month', 2592000],
  ['week', 604800],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
];

/** "5 minutes ago" in the given locale. */
export function timeAgo(date: string | null, locale: string): string {
  if (!date) return '';

  const seconds = Math.round((new Date(date).getTime() - Date.now()) / 1000);
  const rtf = new Intl.RelativeTimeFormat(locale, {numeric: 'auto'});

  for (const [unit, size] of relativeUnits) {
    if (Math.abs(seconds) >= size) return rtf.format(Math.round(seconds / size), unit);
  }

  return rtf.format(0, 'second');
}
