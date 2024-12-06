-- MySQL dump 10.13  Distrib 9.0.1, for macos14.4 (arm64)
--
-- Host: localhost    Database: MIZZOUMARKET
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CHATTING_ROOM`
--

DROP TABLE IF EXISTS `CHATTING_ROOM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CHATTING_ROOM` (
  `Room_id` int NOT NULL AUTO_INCREMENT,
  `Room_name` varchar(64) DEFAULT NULL,
  `Item_id` int NOT NULL,
  `Buyer_id` int NOT NULL,
  PRIMARY KEY (`Room_id`),
  KEY `Item_id` (`Item_id`),
  KEY `Buyer_id` (`Buyer_id`),
  CONSTRAINT `chatting_room_ibfk_1` FOREIGN KEY (`Item_id`) REFERENCES `ITEM` (`Item_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `chatting_room_ibfk_2` FOREIGN KEY (`Buyer_id`) REFERENCES `USER` (`User_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CHATTING_ROOM`
--

LOCK TABLES `CHATTING_ROOM` WRITE;
/*!40000 ALTER TABLE `CHATTING_ROOM` DISABLE KEYS */;
INSERT INTO `CHATTING_ROOM` VALUES (1,'Room_Laptop',1,2),(2,'Room_Vintage T-shirt',2,5),(3,'Room_Smartphone',3,4),(4,'Room_4K TV',4,6),(5,'Room_Headphones',5,7),(6,'Room_Bluetooth Speaker',6,8),(7,'Room_Camera',7,9),(8,'Room_Sneakers Exchange',8,10),(9,'Room_Gaming Console Negotiation',9,1),(10,'Room_Smartwatch Purchase',10,3),(39,'Room_Smartphone with 128GB storage',3,1),(40,'Room_Wireless Headphones',5,1),(42,'Room_Gaming Console',9,1),(47,'Room_Amazon Coupon $600',11,1),(48,'Room_Samsung Refrigerator ',49,1);
/*!40000 ALTER TABLE `CHATTING_ROOM` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CHATTING_ROOM2`
--

DROP TABLE IF EXISTS `CHATTING_ROOM2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CHATTING_ROOM2` (
  `Item_id` int NOT NULL,
  `Seller_id` int NOT NULL,
  PRIMARY KEY (`Item_id`),
  KEY `Seller_id` (`Seller_id`),
  CONSTRAINT `chatting_room2_ibfk_1` FOREIGN KEY (`Item_id`) REFERENCES `ITEM` (`Item_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `chatting_room2_ibfk_2` FOREIGN KEY (`Seller_id`) REFERENCES `USER` (`User_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `chatting_room2_ibfk_3` FOREIGN KEY (`Item_id`) REFERENCES `ITEM` (`Item_id`),
  CONSTRAINT `chatting_room2_ibfk_4` FOREIGN KEY (`Seller_id`) REFERENCES `USER` (`User_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CHATTING_ROOM2`
--

LOCK TABLES `CHATTING_ROOM2` WRITE;
/*!40000 ALTER TABLE `CHATTING_ROOM2` DISABLE KEYS */;
INSERT INTO `CHATTING_ROOM2` VALUES (1,1),(49,1),(2,2),(11,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10);
/*!40000 ALTER TABLE `CHATTING_ROOM2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ITEM`
--

DROP TABLE IF EXISTS `ITEM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ITEM` (
  `Item_id` int NOT NULL AUTO_INCREMENT,
  `Price` int NOT NULL,
  `Description` varchar(500) DEFAULT NULL,
  `Date_registered` date NOT NULL,
  `Owner_id` int NOT NULL,
  `Is_sold` tinyint NOT NULL,
  `Item_image` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`Item_id`),
  KEY `Owner_id` (`Owner_id`),
  CONSTRAINT `item_ibfk_1` FOREIGN KEY (`Owner_id`) REFERENCES `USER` (`User_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ITEM`
--

LOCK TABLES `ITEM` WRITE;
/*!40000 ALTER TABLE `ITEM` DISABLE KEYS */;
INSERT INTO `ITEM` VALUES (1,500,'Laptop with 16GB RAM','2024-11-01',1,1,'https://picsum.photos/seed/item1/200/300'),(2,150,'Vintage T-shirt','2024-11-05',2,0,'https://picsum.photos/seed/item2/200/300'),(3,1200,'Smartphone with 128GB storage','2024-11-07',3,1,'https://picsum.photos/seed/item3/200/300'),(4,800,'4K LED TV','2024-11-10',4,0,'https://picsum.photos/seed/item4/200/300'),(5,250,'Wireless Headphones','2024-11-12',5,1,'https://picsum.photos/seed/item5/200/300'),(6,100,'Bluetooth Speaker','2024-11-15',6,0,'https://picsum.photos/seed/item6/200/300'),(7,300,'Used Camera','2024-11-20',7,0,'https://picsum.photos/seed/item7/200/300'),(8,50,'Brand new Sneakers','2024-11-22',8,0,'https://picsum.photos/seed/item8/200/300'),(9,900,'Gaming Console','2024-11-25',9,1,'https://picsum.photos/seed/item9/200/300'),(10,450,'LG 100X Refrigerator','2024-11-27',10,0,'https://picsum.photos/seed/item10/200/300'),(11,500,'Amazon Coupon $600','2024-11-28',2,0,'https://picsum.photos/seed/item11/200/300'),(12,1200,'Gaming Laptop with 32GB RAM and RTX 3080','2024-12-06',2,0,'https://picsum.photos/seed/item10/200/300'),(13,1500,'High-end Laptop with 16GB RAM and i9 Processor','2024-12-06',3,0,'https://picsum.photos/seed/item11/200/300'),(14,350,'Smart Watch with Health Tracking','2024-12-06',4,0,'https://picsum.photos/seed/item12/200/300'),(15,50,'Portable Charger for Phones','2024-12-06',5,0,'https://picsum.photos/seed/item13/200/300'),(16,200,'Bluetooth Earbuds with Noise Cancellation','2024-12-06',6,0,'https://picsum.photos/seed/item14/200/300'),(17,40,'JavaScript for Beginners - Programming Book','2024-12-06',7,0,'https://picsum.photos/seed/item15/200/300'),(18,25,'Python for Data Science - A Practical Guide','2024-12-06',8,0,'https://picsum.photos/seed/item16/200/300'),(19,60,'Machine Learning Algorithms - A Deep Dive','2024-12-06',9,0,'https://picsum.photos/seed/item17/200/300'),(49,400,'Samsung Refrigerator ','2024-12-06',1,1,'https://raw.githubusercontent.com/WIWLEE/ImageStorage/master/img/image-20241202235746970.png'),(50,400,'Samsung Refrigerator V2','2024-12-06',1,0,'https://raw.githubusercontent.com/WIWLEE/ImageStorage/master/img/image-20241202235746970.png');
/*!40000 ALTER TABLE `ITEM` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ITEM_CATEGORY`
--

DROP TABLE IF EXISTS `ITEM_CATEGORY`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ITEM_CATEGORY` (
  `Item_id` int NOT NULL,
  `Category` enum('BOOK','CLOTHES','ELECTRONICS','REFRIGERATOR','LAPTOP','ETC') NOT NULL,
  PRIMARY KEY (`Item_id`,`Category`),
  CONSTRAINT `item_category_ibfk_1` FOREIGN KEY (`Item_id`) REFERENCES `ITEM` (`Item_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ITEM_CATEGORY`
--

LOCK TABLES `ITEM_CATEGORY` WRITE;
/*!40000 ALTER TABLE `ITEM_CATEGORY` DISABLE KEYS */;
INSERT INTO `ITEM_CATEGORY` VALUES (1,'ELECTRONICS'),(1,'LAPTOP'),(2,'CLOTHES'),(3,'ELECTRONICS'),(4,'ELECTRONICS'),(5,'ELECTRONICS'),(6,'ELECTRONICS'),(7,'ELECTRONICS'),(8,'CLOTHES'),(9,'ELECTRONICS'),(10,'ELECTRONICS'),(10,'REFRIGERATOR'),(11,'ETC'),(12,'LAPTOP'),(13,'LAPTOP'),(14,'ETC'),(15,'ETC'),(16,'ELECTRONICS'),(16,'ETC'),(17,'BOOK'),(18,'BOOK'),(19,'BOOK'),(49,'REFRIGERATOR'),(49,'ETC'),(50,'ELECTRONICS'),(50,'REFRIGERATOR');
/*!40000 ALTER TABLE `ITEM_CATEGORY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MESSAGE`
--

DROP TABLE IF EXISTS `MESSAGE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MESSAGE` (
  `Room_id` int NOT NULL,
  `Message_no` int NOT NULL,
  `Message_content` varchar(500) DEFAULT NULL,
  `Date_sent` date NOT NULL,
  `Time_sent` datetime NOT NULL,
  `Sender_id` int NOT NULL,
  PRIMARY KEY (`Room_id`,`Message_no`),
  KEY `Sender_id` (`Sender_id`),
  CONSTRAINT `message_ibfk_1` FOREIGN KEY (`Room_id`) REFERENCES `CHATTING_ROOM` (`Room_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `message_ibfk_2` FOREIGN KEY (`Sender_id`) REFERENCES `USER` (`User_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MESSAGE`
--

LOCK TABLES `MESSAGE` WRITE;
/*!40000 ALTER TABLE `MESSAGE` DISABLE KEYS */;
INSERT INTO `MESSAGE` VALUES (1,1,'Is the laptop still available?','2024-11-03','2024-11-03 10:30:00',2),(1,2,'Yes, it is. I can meet tomorrow.','2024-11-03','2024-11-03 12:00:00',1),(2,1,'Is the T-shirt still for sale?','2024-11-06','2024-11-06 14:00:00',5),(2,2,'Yes, it is. Can I get it at your price?','2024-11-06','2024-11-06 15:30:00',2),(3,1,'Is the smartphone still available?','2024-11-08','2024-11-08 11:00:00',4),(3,2,'Yes, it is. Ready for pickup!','2024-11-08','2024-11-08 12:30:00',3),(4,1,'I would like to buy the TV.','2024-11-11','2024-11-11 09:00:00',6),(4,2,'Great! We can meet on Saturday.','2024-11-11','2024-11-11 10:30:00',5),(5,1,'Are the headphones new?','2024-11-13','2024-11-13 13:30:00',7),(5,2,'Yes, they are new and unused.','2024-11-13','2024-11-13 14:00:00',6);
/*!40000 ALTER TABLE `MESSAGE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TRANSACTION`
--

DROP TABLE IF EXISTS `TRANSACTION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TRANSACTION` (
  `Transaction_id` int NOT NULL AUTO_INCREMENT,
  `Date_of_transaction` date NOT NULL,
  `Item_id` int NOT NULL,
  `Buyer_id` int NOT NULL,
  PRIMARY KEY (`Transaction_id`),
  KEY `Item_id` (`Item_id`),
  KEY `Buyer_id` (`Buyer_id`),
  CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`Item_id`) REFERENCES `ITEM` (`Item_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`Buyer_id`) REFERENCES `USER` (`User_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TRANSACTION`
--

LOCK TABLES `TRANSACTION` WRITE;
/*!40000 ALTER TABLE `TRANSACTION` DISABLE KEYS */;
INSERT INTO `TRANSACTION` VALUES (1,'2024-11-03',1,2),(9,'2024-11-23',9,1),(26,'2024-12-06',49,1),(27,'2024-12-06',3,1);
/*!40000 ALTER TABLE `TRANSACTION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TRANSACTION2`
--

DROP TABLE IF EXISTS `TRANSACTION2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TRANSACTION2` (
  `Item_id` int NOT NULL,
  `Seller_id` int NOT NULL,
  PRIMARY KEY (`Item_id`),
  KEY `Seller_id` (`Seller_id`),
  CONSTRAINT `FK_Item` FOREIGN KEY (`Item_id`) REFERENCES `ITEM` (`Item_id`),
  CONSTRAINT `transaction2_ibfk_1` FOREIGN KEY (`Item_id`) REFERENCES `ITEM` (`Item_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `transaction2_ibfk_2` FOREIGN KEY (`Seller_id`) REFERENCES `USER` (`User_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `transaction2_ibfk_3` FOREIGN KEY (`Item_id`) REFERENCES `ITEM` (`Item_id`),
  CONSTRAINT `transaction2_ibfk_4` FOREIGN KEY (`Item_id`) REFERENCES `ITEM` (`Item_id`),
  CONSTRAINT `transaction2_ibfk_5` FOREIGN KEY (`Item_id`) REFERENCES `ITEM` (`Item_id`),
  CONSTRAINT `transaction2_ibfk_6` FOREIGN KEY (`Seller_id`) REFERENCES `USER` (`User_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TRANSACTION2`
--

LOCK TABLES `TRANSACTION2` WRITE;
/*!40000 ALTER TABLE `TRANSACTION2` DISABLE KEYS */;
INSERT INTO `TRANSACTION2` VALUES (1,1),(49,1),(3,3),(9,9);
/*!40000 ALTER TABLE `TRANSACTION2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USER`
--

DROP TABLE IF EXISTS `USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USER` (
  `User_id` int NOT NULL AUTO_INCREMENT,
  `Nickname` varchar(10) NOT NULL,
  `Fname` varchar(64) NOT NULL,
  `Lname` varchar(64) NOT NULL,
  `Email` varchar(64) NOT NULL,
  `Date_of_birth` date DEFAULT NULL,
  `Profile_image` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`User_id`),
  UNIQUE KEY `Nickname` (`Nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USER`
--

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;
INSERT INTO `USER` VALUES (1,'user1','John','Doe','john.doe@example.com','1990-05-15','https://picsum.photos/seed/user1/200/200'),(2,'user2','Jane','Smith','jane.smith@example.com','1992-08-25','https://picsum.photos/seed/user2/200/200'),(3,'user3','Mike','Jordan','mike.jordan@example.com','1988-11-01','https://picsum.photos/seed/user3/200/200'),(4,'user4','Alice','Brown','alice.brown@example.com','1995-01-22','https://picsum.photos/seed/user4/200/200'),(5,'user5','Bob','Davis','bob.davis@example.com','1993-04-12','https://picsum.photos/seed/user5/200/200'),(6,'user6','Eve','Miller','eve.miller@example.com','1990-06-30','https://picsum.photos/seed/user6/200/200'),(7,'user7','Charlie','Wilson','charlie.wilson@example.com','1996-09-10','https://picsum.photos/seed/user7/200/200'),(8,'user8','David','Moore','david.moore@example.com','1989-07-14','https://picsum.photos/seed/user8/200/200'),(9,'user9','Sophia','Taylor','sophia.taylor@example.com','1994-02-17','https://picsum.photos/seed/user9/200/200'),(10,'user10','Lucas','Anderson','lucas.anderson@example.com','1997-03-29','https://picsum.photos/seed/user10/200/200');
/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-06  4:42:43
