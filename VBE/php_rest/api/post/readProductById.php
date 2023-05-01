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
$query = "select * from `produit` where `idproduit` = '{$id}' ";
$stmt = $db->prepare($query);
$stmt->execute();
//$result = $stmt->fetchAll(PDO::FETCH_ASSOC); 
$count = $stmt->rowCount();


// echo $count;

// print_r($res);


if($count > 0) {
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

  }
  echo json_encode($post_items);
} else {
  echo "false";
}
