<?php

namespace App\controller;

use App\model\Task;

class TaskController {



	public function insert($name, $description, $id_priority) {

		$task = new Task();
		$task->name = $name;
		$task->description = $description;
		$task->id_priority = $id_priority;

		return $task->save();
	}

	public function delete($id) {
		return return Task::where('id', $id)->delete();
	}

	public function get($id){

	}

	public function update($id, $name){

	}

	



	

}