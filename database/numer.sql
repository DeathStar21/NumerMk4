ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'QlerOrder66';

CREATE DATABASE numer;

use numer;

CREATE TABLE bisection (
    idBisection int not null,
    Equation varchar(255),
	XL float,
    XR float
);

insert into bisection
value (1,"x-13^(1/4)",1.5,2),
	(2,"x^3-x-2",1,2),
    (3,"x^4-x-10",2,5),
	(4,"y^4+1+2",4,5);

CREATE TABLE falseposition (
    idBisection int not null,
    Equation varchar(255),
	XL float,
    XR float
);

insert into falseposition
value (1,"x-13^(1/4)",1.5,2),
	(2,"x^3-x-2",1,2),
    (3,"x^4-x-10",2,5),
	(4,"y^4+1+2",4,5);
    