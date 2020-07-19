<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    //

    protected $fillable=[
          'user_id'
        , 'agent_id'
        ,'department_id'
        , 'ticket_type_id'
        , 'issue_name'
        , 'progress'
    ];
}
