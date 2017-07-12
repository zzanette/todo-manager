<?php


// Routes

$app->get('/[{name}]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});


$app->group('/api/v1/priority', function () use ($app) {

	$priorityController = $app->getContainer()['PriorityController'];

	// Route to insert a task
    $this->post('/insert', function ($request, $response, $args) use ($priorityController){   
        $data = $request->getParsedBody();
        $newPriority = $priorityController->insert($data['name'], $data['order']);

        if($newPriority) {
        	return helper::jsonResponse($response, array('status' => true, 'data' => $newPriority, 'msg' => 'Priodade salva com sucesso!'));
        }else {
        	return helper::jsonResponse($response, array('status' => false, 'msg' => 'Não foi possível salvar a prioridade!'));
        }
    })->setName('insert-priority');

    // Route to update a priority by id
    $this->put('/update', function ($request, $response, $args) use ($priorityController){   
        $data = $request->getParsedBody();
        return helper::jsonResponse($response, array('status' => true, 'data' => $priorityController->update($data['id'], $data['name'], $data['order']), 'msg' => 'Prioridade atualizada.') );

    })->setName('update-priority');

    // Route to delete a priority by id
    $this->delete('/delete/{id:[0-9]+}', function ($request, $response, $args) use ($priorityController){   
        return helper::jsonResponse($response, array('status' => true, 'data' => $priorityController->delete($args['id']), 'msg' => 'Prioridade deletada.') );

    })->setName('delete-priority');

    // Route to get All priority
    $this->get('/get/{id:[0-9]+}', function ($request, $response, $args) use ($priorityController){   
        return helper::jsonResponse($response, $priorityController->get($args['id']));

    })->setName('get-priority');

    // Route to get All priority
    $this->get('/get', function ($request, $response, $args) use ($priorityController){   
        return helper::jsonResponse($response, $priorityController->getAll());

    })->setName('get-all-priorities');

});


/*
$app->group('/api/v1/task', function () use ($app){

	/*$priorityController = $app->getContainer()['PriorityController'];

    $this->post('/insert', function ($request, $response, $args) use ($app) {
        
        echo var_dump($request);

    })->setName('insert-priority');

});*/