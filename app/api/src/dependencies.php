<?php
//TODO: Separe in class all distinct type of factory.

// DIC configuration
$container = $app->getContainer();

// view renderer
$container['renderer'] = function ($c) {
    $settings = $c->get('settings')['renderer'];
    return new Slim\Views\PhpRenderer($settings['template_path']);
};

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
    return $logger;
};

// Service factory for the ORM
$container['secheduler-mysql'] = function ($c) {
    $capsule = new \Illuminate\Database\Capsule\Manager;
    $capsule->addConnection($c->get('settings')['databases']['secheduler-mysql']);

    $capsule->setAsGlobal();
    $capsule->bootEloquent();
    return $capsule;
};

//Factory for PropertyController
$container['PriorityController'] = function ($c) {
    return new App\controller\TaskPriorityController();
};

//Factory for TaskController
$container['TaskController'] = function ($c) {
    return new \App\controller\TaskController();
};



