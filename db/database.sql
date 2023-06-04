CREATE DATABASE companydb;
-- Creando si la tabla no existe 
CREATE DATABASE IF NOT EXISTS companydb;


CREATE TABLE employees(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
)

DESCRIBE "employees"

--INSERT INTO employees
INSERT INTO employees  VALUES (1, "Joe", 2000),

--DETELETE FOR ID IN EMPLOYEES
DELETE FROM employee where id = 2;