<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;


class Task extends Model {

	protected $table = 'task';
	protected $fillable = ['name', 'description', 'id_priority'];
	public $timestamps = false;

	public function priority() {
		return $this->hasOne('App\model\TaskPriority','id', 'id_priority');
	}



}