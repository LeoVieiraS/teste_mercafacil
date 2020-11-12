CREATE TABLE users(
	id serial PRIMARY KEY,
	email varchar (50) NOT NULL,
	pass varchar (50) NOT NULL,
  role varchar(10) NOT NULL,
	token varchar (250)
);
insert into users(email,pass,role) values ('email@varejao.com','admin','varejao');

insert into users(email,pass,role) values ('email@macapa.com','admin','macapa');