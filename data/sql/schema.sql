DROP DATABASE IF EXISTS guidefinder_db;
CREATE DATABASE guidefinder_db;

USE guidefinder_db;
CREATE TABLE guideinfo(
guideID INT AUTO_INCREMENT,
name VARCHAR (255) NULL,
photolink VARCHAR(255) NULL,
age INT NULL,
activity VARCHAR(500) NULL,
city VARCHAR(255) NULL,
yearsofExperience INT NULL,
descriptionActivity VARCHAR(9001) NULL,
PRIMARY KEY (guideID)); 

SELECT * from guideinfo;


DROP DATABASE IF EXISTS guidepictures_db;
CREATE DATABASE guidepictures_db;

USE guidepictures_db;
CREATE TABLE pictures(
guideID INT AUTO_INCREMENT,
pic1 VARCHAR(255) NULL,
pic2 VARCHAR(255) NULL,
pic3 VARCHAR(255) NULL,
pic4 VARCHAR(255) NULL,
pic5 VARCHAR(255) NULL,
PRIMARY KEY (guideID)); 

SELECT * from pictures;