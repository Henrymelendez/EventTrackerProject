-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema rentaldb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `rentaldb` ;

-- -----------------------------------------------------
-- Schema rentaldb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rentaldb` DEFAULT CHARACTER SET utf8 ;
USE `rentaldb` ;

-- -----------------------------------------------------
-- Table `property`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `property` ;

CREATE TABLE IF NOT EXISTS `property` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `property_type` VARCHAR(45) NOT NULL,
  `property_address` VARCHAR(45) NULL,
  `rental_amount` DOUBLE NULL,
  `purchase_date` DATETIME NULL,
  `purchase_amount` DOUBLE NULL,
  `note` VARCHAR(45) NULL,
  `lease_status` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS user;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'user' IDENTIFIED BY 'user';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'user';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `property`
-- -----------------------------------------------------
START TRANSACTION;
USE `rentaldb`;
INSERT INTO `property` (`id`, `property_type`, `property_address`, `rental_amount`, `purchase_date`, `purchase_amount`, `note`, `lease_status`) VALUES (1, 'Condo', '123 Elm Street', 1900, '2001-04-04', 200000, 'this is a house', 'active');

COMMIT;

