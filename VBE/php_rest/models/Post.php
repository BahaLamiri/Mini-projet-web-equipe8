<?php
class Post
{

  private $con;
  private $table = 'categorie';
  // categories property
  public $idcategorie;
  public $nomcategorie;
  public $catimage;
  // Product property
  public $idproduit;
  public $nomproduit;
  public $stock;
  public $disponibilite;
  public $description;
  public $prodimage;
  public $prix;

  public function __construct($db)
  {
    $this->con = $db;
  }

  public function read()
  {
    $query = 'select * from ' . $this->table . ' c';
    $stmt = $this->con->prepare($query);
    $stmt->execute();
    // $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $stmt;
  }

  // public function read_single_cat()
  // {
  //   $query = 'select idcategorie, nomcategorie, catimage from ' . $this->table . ' where idcategorie= :cat';
  //   $stmt = $this->con->prepare($query);
  //   $stmt->bindParam(':cat', $this->idcategorie);
  //   $stmt->execute($stmt);

  //   $row = $stmt->fetch(PDO::FETCH_ASSOC);
  //   $this->idcategorie = $row['ididcategorie'];
  //   $this->nomcategorie = $row['nomcategorie'];
  //   $this->catimage = $row['catimage'];
  // }

  public function readAllProduct()
  {
    $query = 'select idproduit, nomproduit,stock, disponibilite,idcategorie, description, prodimage, prix from produit';
    $stmt = $this->con->prepare($query);
    $stmt->execute();
    // $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $stmt;
  }
  public function readAllCategorie()
  {
    $query = 'select idcategorie, nomcategorie,catimage from categorie';
    $stmt = $this->con->prepare($query);
    $stmt->execute();
    // $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $stmt;
  }

  // public function createProduct()
  // {
  //   header('Access-Control-Allow-Origin: *');
  //   header('Content-Type: application/json');
  //   header("Access-Control-Allow-Methods: POST");
  //   header('Access-Control-Allow-Headers: Access-Control-Allow-Methods, Content-Type, Access-Control-Allow-Methods, Authoriszation, X-Resquested-with');
  //     $query = 'insert into produit set idproduit=:idp, nomproduit= nomp,stock = :stock, disponibilite = :disp ,idcategorie =:idcat, description = :des, prodimage= :prodimage, prix= :prix';
  //     $stmt = $this->con->prepare($query);

  //     $this->idproduit = htmlspecialchars(strip_tags($this->idproduit));
  //     $this->nomproduit = htmlspecialchars(strip_tags($this->nomproduit));
  //     $this->stock = htmlspecialchars(strip_tags($this->stock));
  //     $this->disponibilite = htmlspecialchars(strip_tags($this->disponibilite));
  //     $this->idcategorie = htmlspecialchars(strip_tags($this->idcategorie));
  //     $this->description = htmlspecialchars(strip_tags($this->description));
  //     $this->prodimage = htmlspecialchars(strip_tags($this->prodimage));
  //     $this->prix = htmlspecialchars(strip_tags($this->prix));

  //     $stmt->bindParam(':idp', $this->idproduit);
  //     $stmt->bindParam(':nomp', $this->nomproduit);
  //     $stmt->bindParam(':stock', $this->stock);
  //     $stmt->bindParam(':disp', $this->disponibilite);
  //     $stmt->bindParam(':idcat', $this->idcategorie);
  //     $stmt->bindParam(':des', $this->description);
  //     $stmt->bindParam(':prodimage', $this->prodimage);
  //     $stmt->bindParam(':prix', $this->prix);

  //     if ($stmt->execute()) {
  //       return true;
  //     }

  //     // Print error if something goes wrong
  //     printf("Error: %s.\n", $stmt->error);

  //     return false;
  //   }

  

}
