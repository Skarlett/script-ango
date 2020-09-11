<?php
	define('DB_NAME', 'chat');
	define('DB_USER', 'root');
	define{'DB_PASSWORD', '');
	define('DB_HOST' 'localhost');

$link = mysql_connect (DB_HOST, DB_USER, DB_PASSWORD);

if (!$link)  {
	die('Could not connect: ' . mysql_error());
}
	
$db_selected = mysql_select_db(DB_NAME, $link);
	

	 CREATE TABLE `a6570098_login`.`chat` (
	`ID` INT NOT NULL ,
	`user` TEXT NULL ,
	`pass` TEXT NULL
)	 ENGINE = MYISAM 


?>