
CREATE TABLE STUDENTS (
	ID VARCHAR PRIMARY KEY,
	NOMBRE VARCHAR NOT NULL,
	RUT VARCHAR(9) NOT NULL,
	CURSO VARCHAR NOT NULL,
	NIVEL INTEGER NOT NULL CHECK(NIVEL>0 AND NIVEL<=5)
);


-- seeders
INSERT INTO STUDENTS (ID, NOMBRE, RUT, CURSO, NIVEL) VALUES 
('z-FrmrjC3B-ttWgg5n7Tu', 'NOMBRE 1', '171111115', 'CANTO',2),
('A-FrmrjC3B-ttWgg5n7Tu', 'NOMBRE 2', '181234567', 'DANZA',3);

SELECT * FROM STUDENTS;