(function(){
  'use strict';

  angular
	  .module('app')
	  .factory('TaskPriorityFactory', ['$resource', 
	    								TaskPriorityFactory ]);

 	function TaskPriorityFactory ($resource){
 		var baseUrl = "http://localhost:9001/api/v1/priority/";

     	return $resource(baseUrl + "get/:id", {
				id: "@id"
			}, 
			{
				update: {
					url: baseUrl + "update/",
					method: "PUT"
				},
				insert: {
					url: baseUrl + "insert/",
					method: "POST"
				},
				delete: {
					url: baseUrl + "delete/:id",
					method: "DELETE"
				}
			}
		);
 	}
})();