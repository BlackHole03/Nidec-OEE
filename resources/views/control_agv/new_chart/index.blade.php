@extends('layouts.main')

@push('myCss')

<style>
	th {
		text-align: left !important;
		/*padding: 0 !important;*/
	}

	td {
		padding: 0 !important;
	}

	/*td:first-child {
    width: 30%;
*/}

	tr {
		/*height: 5rem !important;*/
	}

	svg {
		padding: 0 !important;
	}

	.my-chart {
		width: 100%;
        height: 250px;
	}
	.my-pie-chart{
		width: 100%;
        height: 250px;
	}

	/*#efficiency-chart {
	  	width: 100%;
	 	height: 100%;
	}*/
</style>

@endpush

@section('content')
	@include('control_agv.efficiency.modal.modal_agv', ['agvs' => $agvs])

    <div class="justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
              		<h3>{{__('Timeline Chart')}}</h3>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="form-group row col-sm-12"> 

                            <div class="col-sm-4 text-center">
                            	<button class="btn btn-success btn-choose-agv">
                            		{{__('Choose')}} {{__('AGV')}}
                            	</button>
                            </div>

                            <div class="form-group row col-sm-3">
                              <label for="inputEmail3" class="col-sm-4 col-form-label" style="text-align: right;">{{__('From')}}</label>
                              <div class="col-sm-8">
                                  <input type="text" name="from" class="form-control" id="from" readonly>
                              </div>
                            </div>

                            <div class="form-group row col-sm-3">
                              <label for="inputEmail3" class="col-sm-3 col-form-label" style="text-align: right;">{{__('To')}}</label>
                              <div class="col-sm-9">
                                  <input type="text" name="to" class="form-control" id="to" readonly>
                              </div>
                            </div>

                            <div class="col-sm-2 hide">
	                            <button type="submit" class="btn btn-info float-right">
	                            	{{__('Export File Excel')}}
	                            </button>
	                        </div>
                        </div>
                    </div>
                  	<div class="row">
                    	<div class="col-sm-3 row text-chart apexcharts-legend apexcharts-align-center">
                      		<div class="apexcharts-legend-series col-sm-6">
                        		<span class="apexcharts-legend-marker float-right" rel="1" data:collapsed="false" style="background: rgb(40, 167, 69); color: rgb(0, 143, 251); height: 20px; width: 40px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 2px; margin-top:5px"></span>
                      		</div>
                      		<h4>{{__('Run')}}</h4>
                    	</div>

                    	<div class="col-sm-3 text-chart row">
                      		<div class="col-sm-4">
                      			<span class="apexcharts-legend-marker float-right" rel="2" data:collapsed="false" style="background: rgb(255, 193, 7); color: rgb(0, 227, 150); height: 20px; width: 40px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 2px;margin-top:5px"></span>
                      		</div>
                      		<h4>{{__('Stop')}}</h4>
                    	</div>

                    	<div class="col-sm-3 text-chart row">
                      		<div class="col-sm-3">
                      			<span class="apexcharts-legend-marker float-right" rel="3" data:collapsed="false" style="background: rgb(220, 53, 69); color: rgb(254, 176, 25); height: 20px; width: 40px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 2px;margin-top:5px"></span>
                      		</div>
                      		<h4>{{__('Error')}}</h4>
                    	</div>

                    	<div class="col-sm-3 text-chart row hide">
                      		<div class="col-sm-4">
                      			<span class="apexcharts-legend-marker float-right" rel="4" data:collapsed="false" style="background: #BCCBD9; color: rgb(255, 69, 96); height: 20px; width: 40px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 2px;margin-top:5px"></span>
                      		</div>
                      		<h4>{{__('Null')}}</h4>
                    	</div>
                    <!-- 
                    	<div class="col-sm-3 text-chart row">
                      		<div class="col-sm-4">
                      			<span class="apexcharts-legend-marker float-right" rel="4" data:collapsed="false" style="background: #C558FF; color: rgb(255, 69, 96); height: 20px; width: 40px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 2px;margin-top:5px"></span>
                      		</div>
                      		<h4>{{__('not run')}}</h4>
                    	</div> 
                    -->

                  	</div>

                    <div class="card-add">
                    	@foreach($agvs as $agv)
                    		<div class="col-md-12 chart-agv chart-agv-{{ $agv->ID }}">
				                <span class="text-bold">{{ strtoupper($agv->Name) }}</span>
				                <table class="table table-bordered">
				                    <tbody>
				                        <tbody>
				                            <tr>
				                                <td width="70%">
				                                    <div id="myChart-{{ $agv->ID }}" class="my-chart"></div>
				                                </td>
				                                <td>
				                                    <div id="pieChart-{{ $agv->ID }}" class="my-pie-chart"></div>
				                                </td>
				                            </tr>
				                        </tbody>
				                    </tbody>
				                </table>
				            </div>
                    	@endforeach
                  	</div>
                </div>
                <div class="card-footer">
                	<a href="{{ route('controlAGV.transportSystem.efficienciesAGV') }}" class="btn btn-info">{{__('Back')}}</a>
                </div>
            </div>  
        </div>
    </div>

@endsection

@push('scripts')

	<script src="{{ asset('dist/js/amchart/core.js') }}"></script>
    <script src="{{ asset('dist/js/amchart/charts.js') }}"></script>
    <script src="{{ asset('dist/js/amchart/animated.js') }}"></script>

    <script src="{{ asset('js/my-timeline.js') }}"></script>
@endpush