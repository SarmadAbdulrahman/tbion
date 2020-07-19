<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {

        $UserRoloes=auth()->user()->getRoleNames()[0];


// IwAgent
        switch ($UserRoloes)
        {
            case "SystemAdministrator": return redirect("SystemAdministrator"); break;
            case "ClientAgent": return redirect("ClientAgent"); break;
            case "TaskManager": return redirect("TaskManager"); break;
            case "IwDepartmentAdmin": return redirect("IwDepartmentAdmin"); break;
            case "IwAgent": return redirect("IwAgent"); break;
            default: dd("on");
        }


    }
}
