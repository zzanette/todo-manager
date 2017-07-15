<?php

namespace App\controller;

use App\model\Task;
use App\model\TaskPriority;
class TaskController {



	public function insert($name, $description, $id_priority) {

		$task = new Task();
		$task->name = $name;
		$task->description = $description;
		$task->id_priority = $id_priority;

		return $task->save();
	}

	public function delete($id) {
		return Task::where('id', $id)->delete();
	}

	public function get($id){
		$task = Task::find($id); 

		$priority = $task->priority;

		$data = array('id' => $task['id'], 
					'name' => $task['name'], 
					'description' => $task['description'],
					'priority' => array(  'id' => $priority['id'],
										  'name' => $priority['name'],
										  'importance' => $priority['importance']
										)
					  );
		return $data;
	}

	// TODO: Limit of return and do pagination
	public function getAll() {
		$tasks = Task::all();

		$data = array ();

		foreach ($tasks as $key => $task) {
			$priority = TaskPriority::find($task['id_priority']);
			if(empty($priority)){
				$priority['id'] = null;
				$priority['name'] = null;
				$priority['importance'] = null;
			}
			array_push($data, array('id' => $task['id'], 
									'name' => $task['name'], 
									'description' => $task['description'],
									'priority' => array(  'id' => $priority['id'],
														  'name' => $priority['name'],
														  'importance' => $priority['importance']
														)
									
									)
					  );	
		}

		return $data;

	}

	public function update($id, $name, $description, $id_priority){
		return Task::where('id', $id)->update(['name' => $name, 'description' => $description, 'id_priority', $id_priority]);
	}

	



	

}