CREATE DATABASE ChoresCount;

\c ChoresCount;

-- create a table
CREATE TABLE Users(
   username VARCHAR(50) PRIMARY KEY,
   Firstname VARCHAR(50) not null,
   Lastname VARCHAR(50) not null,
   Pword VARCHAR(50) not null

);

CREATE TABLE Chores(
   Id_Chores SERIAL PRIMARY KEY,
   Chore_Name VARCHAR(250) NOT NULL,
   Descr VARCHAR(350),
   username VARCHAR(50),©
   room_name VARCHAR(50) NOT NULL,
   FOREIGN KEY(username) REFERENCES Users(username)
);