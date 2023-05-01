<?php
class Database {
  private $servername = 'localhost:3307';
  private $db_name = 'mydb';
  private $username = 'root';
  private $password = '';
  private $con;

  public function connect() {
    $this->con = null;
    try{
      $this->con = new PDO('mysql:host='.$this->servername.';dbname='.$this->db_name, $this->username, $this->password );
      $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e){
      echo 'Connexion Failed : '. $e->getMessage();
    }
    return $this->con;
  }


}