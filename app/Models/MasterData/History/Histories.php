<?php

namespace App\Models\MasterData\History;

use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

class Histories extends Model
{
	const CREATED_AT      = 'Time_Created';
	const UPDATED_AT      = 'Time_Updated';
	
	protected $table      = 'Unit_History';
	protected $primaryKey = 'ID';
  protected function serializeDate(DateTimeInterface $date)
  {
    return $date->format('Y-m-d H:i:s');
  }
	protected $fillable   = [
    'Unit_ID'
  	,'Name'
  	,'Symbols'
    ,'Type'
    ,'Status'
  	,'Note'
  	,'Time_Created'
  	,'User_Created'
  	,'Time_Updated'
  	,'User_Updated'
  	,'IsDelete'
  ];

  public function user_created()
  {
    return $this->hasOne('App\Models\User', 'id', 'User_Created')->whereIsdelete(0);
  }

  public function user_updated()
  {
    return $this->hasOne('App\Models\User', 'id', 'User_Updated')->whereIsdelete(0);
  }




}
