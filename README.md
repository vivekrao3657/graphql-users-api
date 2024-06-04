**Overview**
This project is a basic NestJS application that leverages GraphQL for API interactions and PostgreSQL for data persistence. It provides a simple user management system with functionalities to sign up, log in, and retrieve user profiles.

**Key Features**
Signup: Allows new users to create an account.
Login: Authenticates users based on their credentials.
Get All Users: Retrieves a list of all users.
Get User Profile: Fetches the profile details of a specific user by username.

**Example Queries and Mutations**
**1) Signup:**
mutation {
  signup(username: "testuser", email: "test@example.com", password: "password1") {
    id
    username
    email
  }
}

**2) Login:**
mutation {
  login(username: "testuser", password: "password123")
}


**3) Get All Users:**
query {
  getAllUsers {
    id
    username
    email
  }
}

**4) Get User Profile:**
query {
  getUserProfile(username: "testuser") {
    id
    username
    email
  }
}
