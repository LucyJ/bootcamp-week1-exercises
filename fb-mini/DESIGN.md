Table 1: Users
int id
string FirstName 
string LastName
date DateofBirth
string PasswordHash // safer than storing passwords themselves, use SHA or something
string PersonalBio
string Relationship Status

Table 2: Posts
int id
string Text
date DayPosted
int Likes
int poster (Foreign Key)

Table 3: Friends
int id
int Requester (Foreign Key to users)
int Requestee (Foreign Key to users)
string Status

Table 4: Likes
int id
int liker (Foreign Key to Users)
int post (Foreign key to Posts)