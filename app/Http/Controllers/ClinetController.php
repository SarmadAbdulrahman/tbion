<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Branch;
use App\service;
use App\Post;
use App\appointment;


class ClinetController extends Controller
{
    //service

    public  function PostRequest(Request $request)
    {
        # code... this is new way to update all do this way 

       // dd($request);
      
        $CountOfRecored=appointment::where('branches_id','=',$request->Bracnhes)->where('date','=',$request->Requset_date)->count();

        if($CountOfRecored>=1)
        {





            $Current=appointment::where('branches_id','=',$request->Bracnhes)->where('date','=',$request->Requset_date)->get()->last()->cr_count;
            $av_count=appointment::where('branches_id','=',$request->Bracnhes)->where('date','=',$request->Requset_date)->get()->last()->av_count;

            if( $av_count>$Current) {

                appointment::where('branches_id','=',$request->Bracnhes)->where('date','=',$request->Requset_date)->update(
                    [
                         'cr_count'=>appointment::where('branches_id','=',$request->Bracnhes)->where('date','=',$request->Requset_date)->get()->last()->cr_count+1
                    ]
                    );
    
    
    
                    Post::create([
                        'branches_id'  =>$request['Bracnhes']
                      , 'serviceType_id'=>$request['services']
                      , 'username'=>$request['your_name']
                      , 'email'=>$request['your_email']
                      , 'phonenumber'=>$request['your_phone']
                      , 'date'=>$request['Requset_date']
                      , 'cr_count'=>1
                  ]);


                  session()->flash('message', 'تم الحجز بنجاح');

                  return  back();


            }

            else {




                session()->flash('message', 'نعتذد، لايوجد حجز في هذا اليوم');

                return  back();
              


            }



          



        }

        else
        
        {


            appointment::create([
                'branches_id'  =>$request['Bracnhes']
              , 'date'=>$request['Requset_date']
              , 'cr_count'=>1
          ]);




            Post::create([
                'branches_id'  =>$request['Bracnhes']
              , 'serviceType_id'=>$request['services']
              , 'username'=>$request['your_name']
              , 'email'=>$request['your_email']
              , 'phonenumber'=>$request['your_phone']
              , 'date'=>$request['Requset_date']
              , 'cr_count'=>1
          ]);

        }

     


        session()->flash('message', 'تم الحجز بنجاح');

        return  back();

       // return redirect()->back();
    }


     public function CreateView()
    {
        # code... service

        $Baranchers=Branch::all();
        $services=service::all();
        $InfromationArray=Array(
            'Baranchers'=>$Baranchers,
            'services'=>$services
        );

        return view('welcome',$InfromationArray);
    }
}
