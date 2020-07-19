@extends('layouts.ThemeSource.sidebar')
@section('content')
    <!-- Page Content -->
    <div class="page-content">
        <!-- Page Breadcrumb -->
        <div class="page-breadcrumbs">
            <ul class="breadcrumb">
                <li>
                    <i class="fa fa-home"></i>
                    <a href="/IwDepartmentAdmin">IwDepartmentAdmin</a>
                </li>
                <li>
                    <a href="#">Show Ticket</a>
                </li>
                <li class="active">Show Ticket</li>
            </ul>
        </div>
        <!-- /Page Breadcrumb -->
        <!-- Page Header -->
        <div class="page-header position-relative">
            <div class="header-title">
                <h1>
                IwDepartmentAdmin Agent
                    <small>
                        <i class="fa fa-angle-right"></i>
                        Tickets
                    </small>
                </h1>
            </div>
            <!--Header Buttons-->
            <div class="header-buttons">
                <a class="sidebar-toggler" href="/IwDepartmentAdmin">
                    <i class="fa fa-arrows-h"></i>
                </a>
                <a class="refresh" id="refresh-toggler" href="/IwDepartmentAdmin">
                    <i class="glyphicon glyphicon-refresh"></i>
                </a>
                <a class="fullscreen" id="fullscreen-toggler" href="#">
                    <i class="glyphicon glyphicon-fullscreen"></i>
                </a>
            </div>
            <!--Header Buttons End-->
        </div>
        <!-- /Page Header -->
        <!-- Page Body -->

        <div class="row">
            <div class="col-xs-12 col-md-12">
                <div class="widget">
                    <div class="widget-header  with-footer">
                        <span class="widget-caption">Tickets Progress</span>
                        <div class="widget-buttons">
                            <a href="#" data-toggle="maximize">
                                <i class="fa fa-expand"></i>
                            </a>
                            <a href="#" data-toggle="collapse">
                                <i class="fa fa-minus"></i>
                            </a>
                            <a href="#" data-toggle="dispose">
                                <i class="fa fa-times"></i>
                            </a>
                        </div>
                    </div>
                    <div class="widget-body">

                        <div class="flip-scroll">
                            <table class="table table-bordered table-striped table-condensed flip-content">
                                <thead class="flip-content bordered-palegreen">
                                <tr>
                                    <th>
                                        {{ trans('messages.Ticket Code') }}
                                    </th>
                                    <th>
                                        {{ trans('messages.Ticket Date') }}
                                    </th>
                                    <th class="numeric">
                                        {{ trans('messages.Ticket issue') }}
                                    </th>
                                    <th class="numeric">
                                        {{ trans('messages.Ticket comment') }}
                                    </th>
                                    <th class="numeric">
                                        {{ trans('messages.Ticket status') }}
                                    </th>

                                    <th class="numeric">
                                        {{ trans('messages.Ticket type') }}
                                    </th>
                                    <th class="numeric">
                                        {{ trans('messages.Action') }}
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($tickets as $ticket)
                                    <tr>
                                        <td>TICKET0000000000000{{$ticket->id}}</td>
                                        <td>{{$ticket->created_at}}</td>
                                        <td>{{$ticket->issue_name}}</td>
                                        <td>{{$ticket->agent_comment}}</td>
                                        <td>{{$ticket->progress}}</td>
                                        <td>{{App\TicketType::find($ticket->ticket_type_id)->ar_name}}</td>
                                        <td>
                                            <a href="{{url('IwDepartmentAdmin/GetDetails?id=')}}{{$ticket->id}}" class=" btn btn-success"> {{ trans('messages.GetDetails') }}</a>
                                            <a id="{{$ticket->id}}" class=" btn btn-danger AssignEmp"> {{ trans('messages.AssignAgent') }}</a>
                                            <a id="{{$ticket->id}}" class=" btn btn-primary cc"> comment</a>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Chose Department</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <form class="form-inline" method="post" action="{{url('IwDepartmentAdmin/AssingTaskToUser')}}">
                                            @csrf
                                            <div class="modal-body">

                                                <div class="form-group">
                                                    <select class="form-control  input-lg Roles" name="username">
                                                        @foreach($Users as $User)
                                                            <option value="{{$User->id}}">{{$User->name}}</option>
                                                        @endforeach
                                                    </select>
                                                    <input type="hidden" class="id" name="id" >
                                                </div>

                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="submit" class="btn btn-primary">Save changes</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>

                            <!-- Modal -->



                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel2">Update Case</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <form class="form-inline" method="post" action="{{url('IwDepartmentAdmin/UpdateTaskToUser')}}">
                                            @csrf
                                            <div class="modal-body">

                                                <div class="form-group">
                                                  
                                                    <input type="hidden" class="id" name="id" >
                                                </div>


                                                              <div class="form-group">
                                                <span class="input-icon icon-right">
                                                    <input type="text" class="form-control" name="userameComment" id="userameInput" placeholder="Comment">
                                                  
                                                </span>
                                            </div>



                                                <div class="form-group">
                                                <span class="input-icon icon-right">
                                                    <input type="text" class="form-control" name="status" id="userameInput" placeholder="status">
                                                 
                                                </span>
                                            </div>

                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="submit" class="btn btn-primary">Save changes</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>

                            <!-- Modal -->



















                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Page Body -->
@endsection
@extends('layouts.ThemeSource.footer')
@section('js')
    <script>
        $(document).ready(function () {
            // this is for get a way  department
            $('.Roles').select2({
                placeholder: 'Select user'
            });

            $('body').on('click','.AssignEmp',function () {


                var TicketID=$(this).attr('id');

                $('.id').val(TicketID);
                $('#exampleModal').modal('show');


            });






                $('body').on('click','.cc',function () {


                            var TicketID=$(this).attr('id');

                            $('.id').val(TicketID);
                            $('#exampleModal2').modal('show');


});

        });
    </script>
@endsection
