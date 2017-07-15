'use strict';

angular.module('angularMaterialAdmin', ['ngAnimate', 'ngResource','ngCookies',
  'ngSanitize', 'ui.router', 'ngMaterial', 'nvd3', 'app' , 'md.data.table'])

  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider,
                    $mdIconProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        abstract: true
      })
      .state('home.taskPriority',{
        url: '/task-priority',
        templateUrl: 'app/views/task-priority.html',
        controller: 'TaskPriorityController',
        controllerAs: 'priorityController',
        data: {
          title: 'Prioridade da tarefa'
        }
      })
      .state('home.task', {
        url: '/task',
        controller: 'TaskController',
        controllerAs: 'taskController',
        templateUrl: 'app/views/task.html',
        data: {
          title: 'Lista de tarefas'
        }
      });

    $urlRouterProvider.otherwise('/task');

    $mdThemingProvider
      .theme('dark')
        .primaryPalette('grey', {
          'default': '600'
        })
        .accentPalette('grey', {
          'default': '500'
        })
        .warnPalette('defaultPrimary');

    $mdThemingProvider.theme('dark', 'default')
      .primaryPalette('defaultPrimary')
      .dark();

    $mdThemingProvider.theme('grey', 'default')
      .primaryPalette('grey');

    $mdThemingProvider.theme('custom', 'default')
      .primaryPalette('defaultPrimary', {
        'hue-1': '50'
    });

    $mdThemingProvider.definePalette('defaultPrimary', {
      '50':  '#FFFFFF',
      '100': 'rgb(255, 198, 197)',
      '200': '#E75753',
      '300': '#E75753',
      '400': '#E75753',
      '500': '#E75753',
      '600': '#E75753',
      '700': '#E75753',
      '800': '#E75753',
      '900': '#E75753',
      'A100': '#E75753',
      'A200': '#E75753',
      'A400': '#E75753',
      'A700': '#E75753'
    });

    $mdIconProvider.icon('user', 'assets/images/user.svg', 64);
  });
