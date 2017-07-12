(function(){
  'use strict';
  angular
    .module('app')
    .controller('TaskPriorityController', ['$scope', 'TaskPriorityFactory', '$mdDialog', 
      TaskPriorityController]);

  function TaskPriorityController($scope, TaskPriorityFactory, $mdDialog) {
    var ctrl = this;
    //TODO: If does not have properties then tell if the problem is the server or not
    $scope.priorities = TaskPriorityFactory.query();
  
    var savePriority = function (newPriority) {
      TaskPriorityFactory.insert(newPriority);

      // TODO: Run a callback function from the factory to be sure that priority stored
      $scope.priorities.push(newPriority);
      Materialize.toast('Prioridade salva.', 5000, 'green accent-4');
    }

    var updatePriority = function(newPriority) {
      TaskPriorityFactory.update(newPriority);
      Materialize.toast('Prioridade atualizada.', 5000, 'blue accent-4');
    }

    $scope.deletePriority = function (priority) {
        TaskPriorityFactory.delete(priority);
        
        // TODO: Run a callback function from the factory to be sure that priority was deleted
        var index = $scope.priorities.indexOf(priority);
        
        if (index > -1) {
          $scope.priorities.splice(index, 1);
          Materialize.toast('Prioridade removida.', 5000, 'red accent-4');
        }
    }

    $scope.addNewPriority = function() {
        $mdDialog.show({
          controller: ['$scope', function ($scope) {
                  $scope.title = 'Nova';

                  $scope.savePriority = function(priority) {
                    $mdDialog.hide(priority);
                  };
                  $scope.cancel = function() {
                    $mdDialog.cancel();
                  }
                  
            }],
          controllerAs: 'newPriority',
          templateUrl: 'dialog.tmpl.html',
          parent: angular.element(document.body),
          clickOutsideToClose:true,
          locals: {parent: $scope},
        })
       .then(function(priority) {  
         savePriority(priority);
         
      });
    };

    $scope.editPriority = function(oldPriority) {
        $mdDialog.show({
          controller: ['$scope', function ($scope) {
                  $scope.title = 'Editar';
                  $scope.priority = oldPriority;

                  $scope.updatePriority = function(newPriority) {
                    $mdDialog.hide(newPriority);
                  };
                  $scope.cancel = function() {
                    $mdDialog.cancel();
                  }
                  
            }],
          controllerAs: 'editPriority',
          templateUrl: 'dialog.tmpl.html',
          parent: angular.element(document.body),
          clickOutsideToClose:true,
          locals: {parent: $scope},
        })
       .then(function(newPriority) {  
         updatePriority(newPriority);

      });
    };


  }

})();
