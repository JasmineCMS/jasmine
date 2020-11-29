@extends('jasmine::app.layout')

@php

    @endphp

@section('title', call_user_func("$breadableName::getPluralName"))

@section('content')
    <div class="mt-2">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h3>@yield('title')</h3>
                            </div>

                            <div>
                                @if(property_exists($breadableName, 'exportable'))
                                    <a href="{{ route('jasmine.bread.export', $breadableName) }}"
                                       target="_blank"
                                       class="btn btn-outline-info">
                                        <i class="fas fa-table"></i>
                                        {{ __('Export') }}
                                    </a>
                                @endif

                                <a href="{{ route('jasmine.bread.create', $breadableName) }}"
                                   class="btn btn-outline-primary">
                                    <i class="fas fa-plus"></i>
                                    {{ __('New') }}
                                    {{ call_user_func("$breadableName::getSingularName") }}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <v-data-table table-class="table table-striped table-responsive-md"
                                      ref="dt"
                                      key-column="{{ $breadableIdColumn }}"
                                      sort-url="{{ route('jasmine.bread.reorder', $breadableName) }}"
                                      sort-column="{{ $order_column }}"
                                      data-url="{{ route('jasmine.bread.index', $breadableName) }}">
                            <template v-slot:thead="{t}">
                                <tr>
                                    @foreach($browseableColumns as $column)
                                        @if(strpos($column, '_') === 0) @continue @endif
                                        <th v-dt-column="[t, {name: '{{ $column }}', data:'{{ $column }}'}]">
                                            {{ __(\Illuminate\Support\Str::title(preg_replace('/[_\.]/', ' ', $column))) }}
                                        </th>
                                    @endforeach

                                    <th v-dt-column="[t, {name: '{{ $breadableIdColumn }}', data:'{{ $breadableIdColumn }}'}]">
                                        @lang('Actions')
                                    </th>
                                </tr>
                            </template>

                            @if(in_array(\Spatie\EloquentSortable\SortableTrait::class, class_uses($breadableName)))
                                <template v-slot:td_0="{data,row,col}">
                                    <template v-if="$refs.dt.request.order.length
                                    && $refs.dt.request.order[0].column === 0
                                    && $refs.dt.request.order[0].dir === 'asc'
">
                                        <span v-text="data"></span>
                                        <button class="btn btn-secondary mx-2 dnd-handler" type="button">
                                            <i class="fas fa-arrows-alt"></i>
                                        </button>
                                    </template>
                                </template>
                            @endif

                            <template v-slot:td_{{ count($browseableColumns) }}="{data,row,col}">
                                <a class="btn btn-info"
                                   :href="'{{ route('jasmine.bread.edit', [$breadableName, '-id-']) }}'.replace('-id-', data)">
                                    <i class="fas fa-pen"></i>
                                </a>

                                <a role="button" class="btn btn-danger" :data-title="data" v-delete
                                   :href="'{{ route('jasmine.bread.destroy', [$breadableName, '-id-']) }}'.replace('-id-', data)">
                                    <i class="fas fa-trash"></i>
                                </a>
                            </template>
                        </v-data-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
