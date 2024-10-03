# Project: Backend + SQL - Tinder for Personal Skills

## Description
This API allows users to search for people based on their skills, with the aim of hiring them.

### Example Scenario:
Pedrito Sola is introverted but highly skilled in public speaking. He wants to earn some money by offering his services, so he creates an account on **'Tinder for Skills'**, where he advertises his skills at a rate of $30 per hour.

Meanwhile, **Rappi**, a company looking for someone with strong public speaking skills to record commercials, searches for talent on the **'Tinder for Skills'** platform and finds Pedrito Sola.

They contact Pedrito and agree on 6 hours of work to record the commercial. Rappi needs to receive a quote for Pedrito’s services.

**'Tinder for Skills'** requests an advance payment from Rappi so that Pedrito Sola can show up at the agreed-upon location to start working. Once the advance is paid, Pedrito Sola is notified of the date, time, and place of the work.

After the commercial is completed, both Pedrito Sola and Rappi confirm the service in the app. Rappi then completes the remaining payment and rates Pedrito Sola’s service.

## API Deployment and Testing
- **Deployed API**: [https://backend-sql-tinder-for-personal-skills.onrender.com](https://backend-sql-tinder-for-personal-skills.onrender.com)
- **Test Endpoint**: `/test` - Use this endpoint to verify the API is functioning correctly.

### Note:
> The API on Render gets turned off if not in use and could take up to 60 seconds to restart.

---

## API ENDPOINTS

### **User Routes**

#### 1. **POST /api/v1/users**
- **Description**: Register a new user.
- **Request Body**:
    ```json
    {
      "id":"21"
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "hashedpassword123",
      "hourly_rate": 25.00,
      "average_rating": 4.50,
      "role": "user"
    }
    ```
- **Response**:
    ```json
    {
      "id": 21,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "hourly_rate": 25.00,
      "average_rating": 4.50,
      "role": "user",
      "created_at": "2024-01-01T00:00:00.000Z"
    }
    ```

#### 2. **GET /users**
- **Description**: Get all users.
- **Response**:
    ```json
    [
      {
        "id": 26,
        "name": "David Black",
        "email": "david.black@example.com",
        "password": "hashedpassword321",
        "hourly_rate": "45.00",
        "average_rating": "4.00",
        "role": "user",
        "created_at": "2024-09-29T17:05:52.488Z",
        "skills": [
            {
                "id": 252,
                "name": "Docker"
            },
            {
                "id": 253,
                "name": "AWS"
            },
            {
                "id": 254,
                "name": "Azure"
            }
        ],
        "contracts": [
            {
                "id": 7,
                "status": "completed",
                "company": "Blockchain Ventures",
                "hours_contracted": 50
            }
        ],
        "payments": [
            {
                "id": 11,
                "amount": 4000,
                "payment_date": "2023-10-15"
            },
            {
                "id": 12,
                "amount": 3000,
                "payment_date": "2023-11-01"
            }
        ]
    },
     {
        "id": 21,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "hashedpassword123",
        "hourly_rate": "25.00",
        "average_rating": "4.50",
        "role": "user",
        "created_at": "2024-09-29T17:05:52.488Z",
        "skills": [
            {
                "id": 237,
                "name": "JavaScript"
            },
            {
                "id": 238,
                "name": "Python"
            },
            {
                "id": 239,
                "name": "React"
            }
        ],
        "contracts": [
            {
                "id": 1,
                "status": "active",
                "company": "Tech Corp",
                "hours_contracted": 40
            }
        ],
        "payments": [
            {
                "id": 1,
                "amount": 1000,
                "payment_date": "2024-01-10"
            },
            {
                "id": 2,
                "amount": 500,
                "payment_date": "2024-01-25"
            }
        ]
    }

    ]
    ```

#### 3. **GET /users/:userId**
- **Description**: Get user details by ID.
- **Request Parameters**: 
    - `userId` (integer): The ID of the user.
- **Response**:
    ```json
    {
     "id": 26,
        "name": "David Black",
        "email": "david.black@example.com",
        "password": "hashedpassword321",
        "hourly_rate": "45.00",
        "average_rating": "4.00",
        "role": "user",
        "created_at": "2024-09-29T17:05:52.488Z",
        "skills": [
            {
                "id": 252,
                "name": "Docker"
            },
            {
                "id": 253,
                "name": "AWS"
            },
            {
                "id": 254,
                "name": "Azure"
            }
        ],
        "contracts": [
            {
                "id": 7,
                "status": "completed",
                "company": "Blockchain Ventures",
                "hours_contracted": 50
            }
        ],
        "payments": [
            {
                "id": 11,
                "amount": 4000,
                "payment_date": "2023-10-15"
            },
            {
                "id": 12,
                "amount": 3000,
                "payment_date": "2023-11-01"
            }
        ]
    }
    ```

#### 4. **PATCH /users/:userId**
- **Description**: Update user details by ID.
- **Request Body**: (You can send partial updates, e.g., updating the hourly rate)
    ```json
    {
      "hourly_rate": 60.00
    }
    ```
- **Response**:
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "hourly_rate": 60.00,
      "average_rating": 4.50,
      "role": "user",
      "updated_at": "2024-02-01T00:00:00.000Z"
    }
    ```

#### 5. **DELETE /users/:userId**
- **Description**: Delete a user by ID.
- **Response**:
    ```json
    {
      "message": "User deleted successfully"
    }
    ```

#### 6. **GET /users/skill/:skillName**
- **Description**: Find users by skill name.
- **Request Parameters**: 
    - `skillName` (string): The name of the skill.
- **Response**:
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "hourly_rate": 25.00,
        "average_rating": 4.50,
        "role": "user",
        "skills": ["JavaScript", "React"]
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "hourly_rate": 30.00,
        "average_rating": 4.85,
        "role": "user",
        "skills": ["JavaScript"]
      }
    ]
    ```

### **Contract Routes**
- **Endpoint**: `/contracts`
- **Description**: Manage user contracts, create new ones, or fetch all contracts.

### **Payment Routes**
- **Endpoint**: `/payments`
- **Description**: Handle payments for services provided through contracts.

---

### **Database Schema**
- **Users Table**: Contains user details (name, email, hourly rate, etc.).
- **Skills Table**: Contains the available skills.
- **User_Skills Table**: Links users and their skills.
- **Contracts Table**: Stores contract details between users and companies.
- **Payments Table**: Handles payments made for services provided.

---

This is your **final README**, which includes all relevant routes, descriptions, and details about your API.

Let me know if you'd like any final changes!