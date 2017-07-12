<?php

namespace App\model;

use Slim\Slim;
use Illuminate\Database\Eloquent\Model;

class TaskPriority extends Model {

	protected $table = 'task_priority';
	protected $fillable = ['name', 'order'];
	public $timestamps = false;

	public static function getAll(){
		$app = Slim::getInstance();
		$priorities = $app->getContainer()['secheduler-mysql']->table('task_priority')->get();

		return $priorities;
	}




	

}