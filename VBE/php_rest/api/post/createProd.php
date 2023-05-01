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

$idp  = $data['idproduit'];
$nomp  = $data['nomproduit'];
$des  = $data['description'];
$cat  = $data['categorie'];
$dis  = $data['disponibilite'];
$prix  = $data['prix'];
$stock  = $data['stock'];
$img  = $data['img'];

$query = "insert into `produit`(`idproduit`,`nomproduit`,`description`,`idcategorie`,`disponibilite`,`prodimage`,`prix`,`stock`) values(?,?,?,?,?,?,?,?)";
$stmt = $db->prepare($query);
$stmt->execute(array($idp,$nomp,$des,$cat,$dis,$img,$prix,$stock));
