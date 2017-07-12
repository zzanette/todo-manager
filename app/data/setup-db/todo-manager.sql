CREATE TABLE task_priority   (
	id INTEGER primary key auto_increment,
	name varchar(50),
	importance INTEGER
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE task (
	id INTEGER primary key auto_increment,
	name varchar(50) not null,
	description varchar(200),
	id_priority INTEGER,
	
	foreign key (id_priority) references task_priority(id) on delete set null
) ENGINE=InnoDB DEFAULT CHARSET=utf8;