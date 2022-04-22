USE nodedb;

create table people (name varchar(255));

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

insert into people(name) values('Marcos');
insert into people(name) values('Luis');
insert into people(name) values('Willian');
insert into people(name) values('Ricardo');

