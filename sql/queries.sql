SELECT username, Firstname, Lastname 
FROM Users;

SELECT FlatSharing_Name
FROM FlatSharing 
WHERE FlatSharing.Zipcode = '92618';

SELECT Chore_Name
FROM Chore
WHERE Chore.Chore_Deadline < '2022-10-20';

SELECT Chore_Name
FROM Chore_Category JOIN Chore
WHERE Chore_Category.Name_Category = 'Kitchen';

SELECT flatsharing.FlatSharing_Name, username
FROM members JOIN flatsharing 
ON (members.Id_FlatSharing = flatsharing.Id_FlatSharing
AND flatsharing.FlatSharing_Name = 'Irvine Flatsharing');

SELECT Firstname, Lastname
FROM Users
INNER JOIN Must_Do ON Users.username = Must_Do.username;