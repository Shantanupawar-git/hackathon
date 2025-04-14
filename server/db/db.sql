create database hackathon;
use hackathon;

create table user
(id int primary key auto_increment,
full_name varchar(50),
email varchar(30),
password varchar(100),
phone_no varchar(10),
created_time DATETIME default CURRENT_TIMESTAMP
);

create table blogs
(id int primary key auto_increment,
title varchar(20),
contents varchar(30),
created_time datetime default current_timestamp ,
user_Id int,
category_Id int,
FOREIGN KEY (user_Id) REFERENCES user(id),
FOREIGN KEY (category_Id) REFERENCES categories(id)
);

create table categories
(id int primary key auto_increment,
title varchar(30),
description varchar(50));