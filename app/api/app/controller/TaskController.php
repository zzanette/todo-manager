<?php

namespace App\controller;

use App\model\Task;

class TaskController {



	public function insert($name) {

		$priority = new Task();
		$priority->name = $name;

		return $priority->save();
	}

	public function delete($id) {

	}

	public function get($id){

	}

	public function update($id, $name){

	}

	



	

}