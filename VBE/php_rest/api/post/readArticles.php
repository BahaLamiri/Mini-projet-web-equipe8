<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header("Access-Control-Allow-Methods: POST");
header('Access-Control-Allow-Headers: Access-Control-Allow-Methods, Content-Type, Access-Control-Allow-Methods, Authoriszation, X-Resquested-with');

include_once '../../config/Database.php';
include_once '../../models/Post.php';

$database = new Database();
$db = $database->connect();

$id = $_GET['id'];
$query = "select * from `produit` where `idcategorie` = '{$id}' ";
$query2 = "select nomcategorie from `categorie` where `idcategorie` = '{$id}' ";
$stmt = $db->prepare($query);
$stmt2 = $db->prepare($query2);
$stmt->execute();
$stmt2->execute();
//$result = $stmt->fetchAll(PDO::FETCH_ASSOC); 

// Extract the value of nomcategorie from the row
$nomcategorie = $stmt2->fetchColumn();
$count = $stmt->rowCount();

// echo $count;

// print_r($res);


if($count > 0) {
  $post_arr = array();
  $post_arr['data']= array();
  while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
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

  $post_arr['nomcat']= $nomcategorie;
  echo json_encode($post_arr);
} else {
  echo json_encode(array('nomcat' => $nomcategorie));
}

