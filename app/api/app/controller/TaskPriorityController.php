<?php

namespace App\controller;

use App\model\TaskPriority;

class TaskPriorityController {



	public function insert($name, $order) {

		$priority = new TaskPriority();
		$priority->name = $name;
		$priority->order = $order;

		return $priority->save();
	}


	public function delete($id) {
		return TaskPriority::where('id', $id)->delete();
	}

	public function get($id){
		return TaskPriority::where('id', $id)->get(); 
	}

	public function update($id, $name, $order){
		return TaskPriority::where('id', $id)->update(['name' => $name, 'order' => $order]);
	}

	// TODO: Limit of return and do pagination
	public function getAll(){
		$priorities = TaskPriority::all();
		$data = array ();

		foreach ($priorities as $key => $property) {
			if(empty($property['order'])){
				$property['order'] = 0;
			}
			array_push($data, array('id' => $property['id'], 'name' => $property['name'], 'order' => $property['order']) );	
		}

		return $data;

	}


}