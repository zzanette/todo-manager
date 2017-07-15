(function(){

  angular
       .module('app')
       .controller('TaskController', ['$scope', 'TaskFactory', 'TaskPriorityFactory','$mdDialog', '$filter',
                    TaskController
       ]);

  function TaskController($scope, TaskFactory, TaskPriorityFactory, $mdDialog, $filter) {
   		
   	var self = this;
    $scope.tasks = TaskFactory.query();
    $scope.orderByField = 'importance';
    $scope.reverseSort = false;
   	$scope.priorities = TaskPriorityFactory.query();

    var saveTask = function (newTask) {
      console.log(newTask);
      TaskFactory.insert(newTask);

      // TODO: Run a callback function from the factory to be sure that task stored
      $scope.tasks.push(newTask);
      Materialize.toast('Tarefa salva.', 5000, 'green accent-4');
    }

    var updateTask = function(newTask) {
        console.log(newTask);
      TaskFactory.update(newTask);
      Materialize.toast('Tarefa atualizada.', 5000, 'blue accent-4');
    }

    $scope.deleteTask = function (task) {
        TaskFactory.delete(task);
        
        // TODO: Run a callback function from the factory to be sure that task was deleted
        var index = $scope.tasks.indexOf(task);
        
        if (index > -1) {
          $scope.tasks.splice(index, 1);
          Materialize.toast('Tarefa removida.', 5000, 'red accent-4');
        }
    }

    $scope.addNewTask = function() {
        $mdDialog.show({
          controller: ['$scope', 'TaskPriorityFactory',function ($scope, TaskPriorityFactory) {
							var self = this;

							$scope.title = 'Nova';
							$scope.priorities = TaskPriorityFactory.query();


							$scope.saveTask = function(task) {
								$mdDialog.hide(task);
							};
							$scope.cancel = function() {
								$mdDialog.cancel();
							}
                  
            }],
          controllerAs: 'NewTask',
          templateUrl: 'dialog.tmpl.html',
          parent: angular.element(document.body),
          clickOutsideToClose:true,
          locals: {parent: $scope},
        })
       .then(function(task) {  
         saveTask(task);
         
      });
    };

    $scope.editTask = function(oldPriority) {
        $mdDialog.show({
          controller: ['$scope', function ($scope) {
							$scope.title = 'Editar';
							$scope.task = oldPriority;
              $scope.priorities = TaskPriorityFactory.query();

							$scope.updateTask = function(newTask) {
							$mdDialog.hide(newTask);
							};
							$scope.cancel = function() {
							$mdDialog.cancel();
							}
							function querySearch (query) {
							return query ? self.states.filter( createFilterFor(query) ) : self.states;
							}
                  
            }],
          controllerAs: 'editPriority',
          templateUrl: 'dialog.tmpl.html',
          parent: angular.element(document.body),
          clickOutsideToClose:true,
          locals: {parent: $scope},
        })
       .then(function(newTask) {  
         updateTask(newTask);

      });
    };
    

  }

})();
