(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Tarefas',
        icon: 'assignment',
        sref: '.task'
      },
      {
        name: 'Prioridades',
        icon: 'present_to_all',
        sref: '.taskPriority'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
