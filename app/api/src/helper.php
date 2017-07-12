<?php
use Slim\Slim;

class helper {

  public static function jsonResponse( $oldResponse, $data = array() ) {

    $responseData = $data;
	$newResponse = $oldResponse->withJson($responseData, 201);

	return $newResponse;

  }

}