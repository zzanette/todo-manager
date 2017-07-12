<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;


class Task extends Model {

	protected $table = 'task';

	public function Priority() {
		return $this->hasOne('TaskPriority','id', 'id_priority');
	}



}