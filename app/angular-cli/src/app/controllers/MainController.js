(function(){

  angular
       .module('app')
       .controller('MainController', [
          'navService', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$state', '$mdToast',
          MainController
       ]);

  function MainController(navService, $mdSidenav, $mdBottomSheet, $log, $q, $state, $mdToast) {
    var vm = this;

    vm.menuItems = [ ];
    vm.selectItem = selectItem;
    vm.title = $state.current.data.title;
    vm.showSimpleToast = showSimpleToast;
    vm.toggleRightSidebar = toggleRightSidebar;

    navService
      .loadAllItems()
      .then(function(menuItems) {
        vm.menuItems = [].concat(menuItems);
      });

    function toggleRightSidebar() {
        $mdSidenav('right').toggle();
    }

    function selectItem (item) {
      vm.title = item.name;
      vm.showSimpleToast(vm.title);
    }


    function showSimpleToast(title) {
      $mdToast.show(
        $mdToast.simple()
          .content(title)
          .hideDelay(2000)
          .position('bottom right')
      );
    }
  }

})();
