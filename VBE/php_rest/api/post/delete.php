<?php 
  // Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/Database.php';
include_once '../../models/Post.php';

$database = new Database();
$db = $database->connect();
// $data = json_decode(file_get_contents("php://input"), true);
// $id = $data['id'];
$id = $_GET['id'];

$query = "delete from `produit` where `idproduit` = '{$id}'";
$stmt = $db->prepare($query);
$stmt->execute();
if($stmt->execute()){
  return true;
} else {
  return false;
}
// $stmt= 
// $stmt->execute();

