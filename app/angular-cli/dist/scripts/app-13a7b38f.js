!function(){"use strict";angular.module("app",["ngMaterial","ngResource"])}(),function(){"use strict";function e(e){var t="http://localhost:9001/api/v1/priority/";return e(t+"get/:id",{id:"@id"},{update:{url:t+"update/",method:"PUT"},insert:{url:t+"insert/",method:"POST"},"delete":{url:t+"delete/:id",method:"DELETE"}})}angular.module("app").factory("TaskPriorityFactory",["$resource",e])}(),function(){"use strict";function e(e){var t="http://localhost:9001/api/v1/task/";return e(t+"get/:id",{id:"@id"},{update:{url:t+"update/:id",method:"PUT"},insert:{url:t+"insert/",method:"POST"},"delete":{url:t+"delete/:id",method:"DELETE"}})}angular.module("app").factory("TaskFactory",["$resource",e])}(),function(){"use strict";function e(e){var t=[{name:"Tarefas",icon:"assignment",sref:".task"},{name:"Prioridades",icon:"present_to_all",sref:".taskPriority"}];return{loadAllItems:function(){return e.when(t)}}}angular.module("app").service("navService",["$q",e])}(),function(){"use strict";function e(e,t,a){e.priorities=t.query();var i=function(a){t.insert(a),e.priorities.push(a),Materialize.toast("Prioridade salva.",5e3,"green accent-4")},r=function(e){t.update(e),Materialize.toast("Prioridade atualizada.",5e3,"blue accent-4")};e.deletePriority=function(a){t.delete(a);var i=e.priorities.indexOf(a);i>-1&&(e.priorities.splice(i,1),Materialize.toast("Prioridade removida.",5e3,"red accent-4"))},e.addNewPriority=function(){a.show({controller:["$scope",function(e){e.title="Nova",e.savePriority=function(e){a.hide(e)},e.cancel=function(){a.cancel()}}],controllerAs:"newPriority",templateUrl:"dialog.tmpl.html",parent:angular.element(document.body),clickOutsideToClose:!0,locals:{parent:e}}).then(function(e){i(e)})},e.editPriority=function(t){a.show({controller:["$scope",function(e){e.title="Editar",e.priority=t,e.updatePriority=function(e){a.hide(e)},e.cancel=function(){a.cancel()}}],controllerAs:"editPriority",templateUrl:"dialog.tmpl.html",parent:angular.element(document.body),clickOutsideToClose:!0,locals:{parent:e}}).then(function(e){r(e)})}}angular.module("app").controller("TaskPriorityController",["$scope","TaskPriorityFactory","$mdDialog",e])}(),function(){function e(e,t,a,i){e.tasks=t.query(),e.orderByField="importance",e.reverseSort=!1,e.priorities=a.query();var r=function(a){console.log(a),t.insert(a),e.tasks.push(a),Materialize.toast("Tarefa salva.",5e3,"green accent-4")},l=function(e){console.log(e),t.update(e),Materialize.toast("Tarefa atualizada.",5e3,"blue accent-4")};e.deleteTask=function(a){t.delete(a);var i=e.tasks.indexOf(a);i>-1&&(e.tasks.splice(i,1),Materialize.toast("Tarefa removida.",5e3,"red accent-4"))},e.addNewTask=function(){i.show({controller:["$scope","TaskPriorityFactory",function(e,t){e.title="Nova",e.priorities=t.query(),e.saveTask=function(e){i.hide(e)},e.cancel=function(){i.cancel()}}],controllerAs:"NewTask",templateUrl:"dialog.tmpl.html",parent:angular.element(document.body),clickOutsideToClose:!0,locals:{parent:e}}).then(function(e){r(e)})},e.editTask=function(t){i.show({controller:["$scope",function(e){e.title="Editar",e.task=t,e.priorities=a.query(),e.updateTask=function(e){i.hide(e)},e.cancel=function(){i.cancel()}}],controllerAs:"editPriority",templateUrl:"dialog.tmpl.html",parent:angular.element(document.body),clickOutsideToClose:!0,locals:{parent:e}}).then(function(e){l(e)})}}angular.module("app").controller("TaskController",["$scope","TaskFactory","TaskPriorityFactory","$mdDialog","$filter",e])}(),function(){function e(e,t,a,i,r,l,o){function s(){t("right").toggle()}function n(e){c.title=e.name,c.showSimpleToast(c.title)}function d(e){o.show(o.simple().content(e).hideDelay(2e3).position("bottom right"))}var c=this;c.menuItems=[],c.selectItem=n,c.title=l.current.data.title,c.showSimpleToast=d,c.toggleRightSidebar=s,e.loadAllItems().then(function(e){c.menuItems=[].concat(e)})}angular.module("app").controller("MainController",["navService","$mdSidenav","$mdBottomSheet","$log","$q","$state","$mdToast",e])}(),angular.module("angularMaterialAdmin",["ngAnimate","ngResource","ngCookies","ngSanitize","ui.router","ngMaterial","nvd3","app","md.data.table"]).config(["$stateProvider","$urlRouterProvider","$mdThemingProvider","$mdIconProvider",function(e,t,a,i){e.state("home",{url:"",templateUrl:"app/views/main.html",controller:"MainController",controllerAs:"vm","abstract":!0}).state("home.taskPriority",{url:"/task-priority",templateUrl:"app/views/task-priority.html",controller:"TaskPriorityController",controllerAs:"priorityController",data:{title:"Prioridade da tarefa"}}).state("home.task",{url:"/task",controller:"TaskController",controllerAs:"taskController",templateUrl:"app/views/task.html",data:{title:"Lista de tarefas"}}),t.otherwise("/task"),a.theme("dark").primaryPalette("grey",{"default":"600"}).accentPalette("grey",{"default":"500"}).warnPalette("defaultPrimary"),a.theme("dark","default").primaryPalette("defaultPrimary").dark(),a.theme("grey","default").primaryPalette("grey"),a.theme("custom","default").primaryPalette("defaultPrimary",{"hue-1":"50"}),a.definePalette("defaultPrimary",{50:"#FFFFFF",100:"rgb(255, 198, 197)",200:"#E75753",300:"#E75753",400:"#E75753",500:"#E75753",600:"#E75753",700:"#E75753",800:"#E75753",900:"#E75753",A100:"#E75753",A200:"#E75753",A400:"#E75753",A700:"#E75753"}),i.icon("user","assets/images/user.svg",64)}]),angular.module("angularMaterialAdmin").run(["$templateCache",function(e){e.put("app/views/main.html",'<md-sidenav md-is-locked-open="$mdMedia(\'gt-sm\')" md-component-id="left" class="md-whiteframe-z2 md-sidenav-left"><md-toolbar md-theme="custom" class="md-hue-1 md-whiteframe-z2"><md-button layout="row" layout-align="center center" class="md-toolbar-tools md-warn" href="https://github.com/zzanette/"><h6>TODO List</h6></md-button></md-toolbar><md-button ng-repeat-start="item in vm.menuItems" layout="column" layout-align="center center" flex="" class="capitalize" ng-click="vm.selectItem(item)" ui-sref-active="md-warn" ui-sref="{{item.sref}}"><div hide-sm="" hide-md="" class="md-tile-content"><i class="material-icons md-36">{{item.icon}}</i></div><div class="md-tile-content">{{item.name}}</div></md-button><md-divider ng-repeat-end=""></md-divider></md-sidenav><div layout="column" flex=""><md-toolbar layout="row" layout-align="center center"><section layout-align="start center" layout-fill="" flex=""><md-button hide-gt-sm="" aria-label="Menu"><i class="material-icons">menu</i></md-button></section></md-toolbar><md-content flex="" class="md-padding page-content"><div ui-view=""></div></md-content></div>'),e.put("app/views/task-priority.html",'<h1>Prioridade das tarefas</h1><div class="row"><div class="table-responsive-vertical" ng-if="!(priorities === undefined) && !(priorities.length == 0)"><table id="table" class="table table-hover table-bordered"><thead><tr><th style="width: 33%;">Nome</th><th style="width: 33%;">Importância</th><th style="width: 33%;">Excluir</th></tr></thead><tbody><tr ng-repeat="data in priorities track by $index"><td data-title="Nome"><a ng-click="editProperty(data)" style="cursor: pointer">{{data.name}}</a></td><td data-title="Importancia">{{data.importance}}</td><td data-title="Acoes"><a class="btn-floating btn-large waves-effect waves-light red" ng-click="deletePriority(data)"><i class="material-icons">delete</i></a></td></tr></tbody></table></div><div ng-if="(priorities === undefined) || (priorities.length == 0)"><h4>Não exitem prioridades cadastradas = (</h4></div></div><div class="fixed-action-btn" style="bottom: 45px; right: 100px;"><a class="btn-floating btn-large waves-effect waves-light green" ng-click="addNewPriority()"><i class="material-icons">add</i></a></div><script type="text/ng-template" id="dialog.tmpl.html"><md-dialog aria-label="Autocomplete Dialog Example" ng-cloak> <md-toolbar> <div class="md-toolbar-tools"> <h2>{{ title }} Prioridade de Tarefa</h2> <span flex></span> <md-button class="md-icon-button" ng-click="cancel()"> <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon> </md-button> </div> </md-toolbar> <md-dialog-content> <div class="md-dialog-content"> <div class="row"> <form class="col s12"> <div class="row"> <div class="input-field col s6"> <input id="name" type="text" class="validate active" ng-model="priority.name"> <label for="name">Nome da prioridade</label> </div> <div class="input-field col s6"> <input id="importance" type="number" class="validate active" step="1" min="0" ng-model="priority.importance"> <label for="importance">Grau de importiancia</label> </div> <div class="input-field col s1 "> <a class="waves-effect waves-light btn" ng-if="title == \'Nova\'" ng-click="savePriority(priority)">Salvar</a> <a class="waves-effect waves-light btn blue" ng-if="title == \'Editar\'" ng-click="updatePriority(priority)">Atualizar</a> </div> </div> </form> </div> </div> </md-dialog-content> </md-dialog></script>'),e.put("app/views/task.html",'<h1>Adicionar tarefas</h1><div class="row"><div class="col 6"><h5>Filtrar por:</h5><label class="col s3">Nome <input ng-model="search.name"></label> <label class="col s3">Descrição <input ng-model="search.description"></label> <label class="col s3">Prioridade<input ng-model="search.priority.name"></label> <label class="col s3">Importancia <input ng-model="search.priority.importance"></label></div><div class="row"><div class="table-responsive-vertical" ng-if="!(tasks === undefined) && !(tasks.length == 0)"><table id="table" class="table table-hover table-bordered"><thead><tr><th style="font-size: 20px; width: 33%;"><a href="#" ng-click="orderByField=\'name\'; reverseSort = !reverseSort">Nome <span ng-show="orderByField == \'name\'"><span ng-show="!reverseSort">^</span> <span ng-show="reverseSort">v</span></span></a></th><th style="font-size: 20px; width: 33%;"><a href="#" ng-click="orderByField=\'description\'; reverseSort = !reverseSort">Descrição <span ng-show="orderByField == \'description\'"><span ng-show="!reverseSort">^</span> <span ng-show="reverseSort">v</span></span></a></th><th style="font-size: 20px; width: 33%;"><a href="#" ng-click="orderByField=\'priority.name\'; reverseSort = !reverseSort">Prioridade <span ng-show="orderByField == \'priority.name\'"><span ng-show="!reverseSort">^</span> <span ng-show="reverseSort">v</span></span></a></th><th style="font-size: 20px; width: 33%;"><a href="#" ng-click="orderByField=\'priority.importance\'; reverseSort = !reverseSort">Importância <span ng-show="orderByField == \'priority.importance\'"><span ng-show="!reverseSort">^</span> <span ng-show="reverseSort">v</span></span></a></th><th style="font-size: 20px; width: 33%;">Excluir</th></tr></thead><tbody><tr ng-repeat="task in tasks | orderBy:orderByField:reverseSort | filter:search"><td data-title="Nome"><a ng-click="editTask(task)" style="cursor: pointer">{{ task.name }}</a></td><td data-title="Descrição">{{ task.description}}</td><td data-title="Prioridade">{{ task.priority.name }}</td><td data-title="grau">{{ task.priority.importance }}</td><td data-title="Acoes"><a class="btn-floating btn-large waves-effect waves-light red" ng-click="deleteTask(task)"><i class="material-icons">delete</i></a></td></tr></tbody></table></div><div class="col 6" ng-if="(tasks == undefined) || (tasks.length == 0)"><h4>Não exitem tarefas cadastradas = (</h4></div></div><div class="fixed-action-btn" style="bottom: 45px; right: 100px;"><a class="btn-floating btn-large waves-effect waves-light green" ng-click="addNewTask()"><i class="material-icons">add</i></a></div><script type="text/ng-template" id="dialog.tmpl.html"><md-dialog aria-label="Autocomplete Dialog Example" ng-cloak> <md-toolbar> <div class="md-toolbar-tools"> <h2>{{ title }} Tarefa</h2> <span flex></span> <md-button class="md-icon-button" ng-click="cancel()"> <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon> </md-button> </div> </md-toolbar> <md-dialog-content> <div class="md-dialog-content"> <div class="row"> <form class="col s12"> <div class="row"> <div class="input-field col s6"> <input id="name" type="text" class="validate active" ng-model="task.name"> <label for="name">Nome da tarefa</label> </div> <div class="input-field col s6"> <md-autocomplete md-selected-item="task.priority" md-search-text="searchText" md-items="priority in priorities" md-item-text="priority.name" md-min-length="0" placeholder="Prioridade da tarefa"> <md-item-template> <span md-highlight-text="searchText" md-highlight-flags="^i">{{priority.name}}</span> </md-item-template> </md-autocomplete> </div> <div class="input-field col s12"> <input id="description" type="text" class="validate active" ng-model="task.description"> <label for="description">Descrição</label> </div> <div class="input-field col s8 "> <a class="waves-effect waves-light btn" ng-if="title == \'Nova\'" ng-click="saveTask(task)">Salvar</a> <a class="waves-effect waves-light btn blue" ng-if="title == \'Editar\'" ng-click="updateTask(task)">Atualizar</a> </div> </div> </form> </div> </div> </md-dialog-content> </md-dialog></script></div>')}]);