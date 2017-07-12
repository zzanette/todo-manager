<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;


class Task extends Model {

	protected $table = 'task';
	protected $table = 'task_priority';
	protected $fillable = ['name', 'description', 'id_priority'];
	public $timestamps = false;

	public function priority() {
		return $this->hasOne('TaskPriority','id', 'id_priority');
	}



}