<?php

namespace App\model;

use Slim\Slim;
use Illuminate\Database\Eloquent\Model;

class TaskPriority extends Model {

	protected $table = 'task_priority';
	protected $fillable = ['name', 'importance'];
	public $timestamps = false;





	

}