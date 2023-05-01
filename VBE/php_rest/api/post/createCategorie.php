<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/Post.php';

$database = new Database();
$db = $database->connect();

$data = json_decode(file_get_contents("php://input"), true);

$idcat  = $data['idcategorie'];
$nomcat  = $data['nomcategorie'];
$img  = $data['catimage'];


$query = "insert into `categorie`(`idcategorie`,`nomcategorie`,`catimage`) values(?,?,?)";
$stmt = $db->prepare($query);
$stmt->execute(array($idcat,$nomcat,$img));
