<div class="p-4">
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Top authors</span>

    @forelse($authors as $row)
        <div class="mt-2">
            <div class="flex justify-between text-sm">
                <span class="truncate text-gray-900 dark:text-white">{{ $row->author?->name ?? 'No author' }}</span>
                <span class="text-gray-500">{{ $row->articles }}</span>
            </div>
            <div class="mt-1 h-1.5 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                <div class="h-full rounded-full bg-brand-500" style="width: {{ $row->articles / $max * 100 }}%"></div>
            </div>
        </div>
    @empty
        <p class="mt-2 text-sm text-gray-500">No articles match the current filters.</p>
    @endforelse
</div>
