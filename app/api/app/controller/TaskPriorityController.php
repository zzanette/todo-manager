<?php

namespace App\controller;

use App\model\TaskPriority;

class TaskPriorityController {



	public function insert($name, $importance) {

		$priority = new TaskPriority();
		$priority->name = $name;
		$priority->importance = $importance;

		return $priority->save();
	}


	public function delete($id) {
		return TaskPriority::where('id', $id)->delete();
	}

	public function get($id){
		return TaskPriority::where('id', $id)->get(); 
	}

	public function update($id, $name, $importance){
		return TaskPriority::where('id', $id)->update(['name' => $name, 'importance' => $importance]);
	}

	// TODO: Limit of return and do pagination
	public function getAll(){
		$priorities = TaskPriority::all();
		$data = array ();

		foreach ($priorities as $key => $property) {
			if(empty($property['importance'])){
				$property['importance'] = 0;
			}
			array_push($data, array('id' => $property['id'], 'name' => $property['name'], 'importance' => $property['importance']) );	
		}

		return $data;

	}


}