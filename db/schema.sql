DROP DATABASE IF EXISTS burger_DB;

CREATE DATABASE burger_DB;

USE burger_DB;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR( 255) NOT NULL,
	devoured BOOL DEFAULT FALSE,
	PRIMARY KEY (id)
);