<aside class="main-sidebar sidebar-light-info shadow">
    <div class="d-flex justify-content-center align-items-center py-3">
        <a href="{{ route('home') }}">
            <img src="{{ asset('logo.png') }}" width="50px">
        </a>
    </div>
    <div class="sidebar">
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item has-treeview">
                    <a href="{{ route('home') }}" class="nav-link home">
                        <i class="nav-icon fas fa-home"></i>
                        <p>{{ __('Dashboard') }}</p>
                    </a>
                </li>
                @if (Auth::user()->checkRole('view_plan') || Auth::user()->level == 9999)
                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link Production">
                            <i class="nav-icon fas fa-th-list"></i>
                            <p>
                                {{ __('Production Plan') }}
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="{{ route('productionplan') }}" class="nav-link production">
                                    <p>{{ __('Task') }} {{ __('Schedule') }}</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                @endif
                @if (Auth::user()->checkRole('export_materials') || Auth::user()->level == 9999)
                    <li class="nav-item has-treeview">
                        <a href="{{ route('warehouse_system.export_materials') }}" class="nav-link export">
                            <i class=" nav-icon fas fa-dolly"></i>
                            <p>{{ __('Export') }} {{ __('Materials') }}</p>
                        </a>
                    </li>
                @endif
                @if (Auth::user()->checkRole('view_AGV') || Auth::user()->level == 9999)
                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link control-agv">
                            <i class="nav-icon fas fa-truck"></i>
                            <p>
                                {{ __('Transport System') }}
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="{{ route('controlAGV.agvControl.index', [0]) }}"
                                    class="nav-link agv agv-control">
                                    {{-- <i class="far fa-circle nav-icon"></i> --}}
                                    <p>{{ __('Follow AGV') }}</p>
                                </a>
                            </li>
                        </ul>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="{{ route('index.trans') }}" class="nav-link trans">
                                    <p>{{ __('List') }} {{ __('Command') }} {{ __('AGV') }}</p>
                                </a>
                            </li>
                        </ul>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="{{ route('controlAGV.trans.efficienciesAGV') }}"
                                    class="nav-link efficiency-agv">
                                    {{-- <i class="far fa-circle nav-icon"></i> --}}
                                    <p>{{ __('Efficiency') }} {{ __('AGV') }}</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                @endif
                @if (Auth::user()->checkRole('view_OEE') || Auth::user()->level == 9999)
                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link oee">
                            <i class="nav-icon fa-solid fa-weight-scale"></i>
                            <p>
                                {{ __('Overall Equipment Effectiveness') }}
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="{{ route('oee.visualization') }}" class="nav-link visualization">
                                    <p>{{ __('Visualization') }}</p>
                                </a>
                            </li>
                        </ul>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="{{ route('oee.report') }}" class="nav-link report">
                                    <p>{{ __('Report') }}</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                @endif
                @if (Auth::user()->checkRole('view_master') || Auth::user()->level == 9999)
                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link setting">
                            <i class="nav-icon fas fa-cogs"></i>
                            <p>
                                {{ __('Setting') }}
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item d-none">
                                <a href="{{ route('masterData.unit') }}" class="nav-link setting-unit">
                                    <p>{{ __('Unit') }}</p>
                                </a>
                            </li>
                            <li class="nav-item ">
                                <a href="{{ route('masterData.product') }}" class="nav-link setting-product">
                                    <p>{{ __('B.O.M') }}</p>
                                </a>
                            </li>
                            <li class="nav-item d-none">
                                <a href="{{ route('masterData.mold') }}" class="nav-link setting-mold">
                                    <p>{{ __('Mold') }}</p>
                                </a>
                            </li>
                            <li class="nav-item d-none">
                                <a href="{{ route('masterData.materials') }}" class="nav-link setting-materials">
                                    <p>{{ __('Materials') }}</p>
                                </a>
                            </li>
                            <li class="nav-item ">
                                <a href="{{ route('masterData.machine') }}" class="nav-link setting-machine">
                                    <p>{{ __('Machine') }}</p>
                                </a>
                            </li>
                            <li class="nav-item d-none">
                                <a href="{{ route('masterData.status') }}" class="nav-link setting-status">
                                    <p>{{ __('Status') }}</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('masterData.shift') }}" class="nav-link setting-shift">
                                    <p>{{ __('Shift') }}</p>
                                </a>
                            </li>
                            <li class="nav-item ">
                                <a href="{{ route('masterData.agv') }}" class="nav-link setting-agv">
                                    <p>{{ __('AGV') }}</p>
                                </a>
                            </li>
                            <li class="nav-item d-none">
                                <a href="{{ route('masterData.holiday') }}" class="nav-link setting-holiday">
                                    <p>{{ __('Holiday') }}</p>
                                </a>
                            </li>
                            {{-- @if (Auth::user()->level == 9999) --}}
                            {{-- @endif --}}
                        </ul>
                    </li>
                @endif

                <li class="nav-item has-treeview">
                    <a href="{{ route('account') }}" class="nav-link account">
                        <i class="nav-icon fas fa-user"></i>
                        <p>
                            {{ __('Account') }}
                        </p>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
