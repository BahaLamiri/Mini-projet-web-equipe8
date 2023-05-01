<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/Post.php';

$database = new Database();
$db = $database->connect();

$post = new Post($db);

$res = $post->readAllProduct();

// $result = $res->fetchAll(PDO::FETCH_ASSOC); 
$count = $res->rowCount();

// echo $count;

// print_r($res);


if($count > 0) {
  $post_arr = array();
  $post_arr['data']= array();
  while($row = $res->fetch(PDO::FETCH_ASSOC)) {
    extract($row);

    $post_items = array(
      'id' => $idproduit,
      'nom' => $nomproduit,
      'stock' => $stock,
      'disponibilite' => $disponibilite,
      'idcategorie' => $idcategorie,
      'description' => $description,
      'prodimage' => $prodimage,
      'prix' => $prix

    );

    array_push($post_arr['data'], $post_items);
  }
  echo json_encode($post_arr);
} else {
  echo '0 result';
}

