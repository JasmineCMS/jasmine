@extends('jasmine::app.layout')

@section('title', call_user_func("$breadableName::getPluralTitle"))

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
                                <a href="{{ route('jasmine.bread.create', $breadableName) }}"
                                   class="btn btn-outline-primary">
                                    <i class="fas fa-plus"></i>
                                    {{ __('New') }}
                                    {{ call_user_func("$breadableName::getSingularTitle") }}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <v-data-table table-class="table table-striped table-responsive-md"
                                      data-url="{{ route('jasmine.bread.index', $breadableName) }}">
                            <template v-slot:thead="{t}">
                                <tr>
                                    @foreach($browseableColumns as $column)
                                        <th v-dt-column="[t, {name: '{{ $column }}', data:'{{ $column }}'}]">
                                            {{ \Illuminate\Support\Str::title(str_replace('_', ' ', $column)) }}
                                        </th>
                                    @endforeach

                                    <th v-dt-column="[t, {name: '{{ $breadableIdColumn }}', data:'{{ $breadableIdColumn }}'}]">
                                        @lang('Actions')
                                    </th>
                                </tr>
                            </template>

                            <template v-slot:td_{{ count($browseableColumns) }}="{data,row}">
                                <a class="btn btn-info"
                                   :href="'{{ route('jasmine.bread.edit', [$breadableName, '-id-']) }}'.replace('-id-', data)">
                                    <i class="fas fa-pen"></i>
                                </a>

                                <a role="button" class="btn btn-danger" :data-title="data" v-delete
                                   :href="'{{ route('jasmine.bread.edit', [$breadableName, '-id-']) }}'.replace('-id-', data)">
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
