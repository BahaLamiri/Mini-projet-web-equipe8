-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`categorie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categorie` (
  `idcategorie` VARCHAR(45) NOT NULL,
  `nomcategorie` VARCHAR(45) NOT NULL,
  `catimage` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategorie`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`produit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`produit` (
  `idproduit` VARCHAR(45) NOT NULL,
  `nomproduit` VARCHAR(45) NOT NULL,
  `stock` INT NOT NULL,
  `disponibilite` CHAR(1) NOT NULL,
  `idcategorie` VARCHAR(45) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `prodimage` VARCHAR(200) NOT NULL,
  `prix` DECIMAL(5) NOT NULL,
  PRIMARY KEY (`idproduit`),
  INDEX `idcategorie_idx` (`idcategorie` ASC) VISIBLE,
  CONSTRAINT `idcategorie`
    FOREIGN KEY (`idcategorie`)
    REFERENCES `mydb`.`categorie` (`idcategorie`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
