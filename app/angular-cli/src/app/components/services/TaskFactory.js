(function(){
  'use strict';

  angular
	  .module('app')
	  .factory('TaskFactory', ['$resource', 
	    								TaskFactory ]);

 	function TaskFactory ($resource){
 		var baseUrl = "http://localhost:9001/api/v1/task/";

     	return $resource(baseUrl + "get/:id", {
				id: "@id"
			}, 
			{
				update: {
					url: baseUrl + "update/:id",
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