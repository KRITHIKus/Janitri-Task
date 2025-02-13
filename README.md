# 🚀 Janitri Backend API

## 📌 Overview
This is a **backend API** built using **Node.js, Express, and MongoDB** for a system that monitors **patients' heart rate data**.

## 📂 Directory Structure
```
janitri-backend/
│── controllers/          # API logic
│── models/               # Database schemas
│── routes/               # API endpoints
│── middleware/           # JWT authentication
│── config/               # Database connection
│── server.js             # Main server file
│── .env                  # Environment variables
│── README.md             # Documentation
```

## 🔧 **Installation & Setup**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/janitri-backend-api.git
cd janitri-backend-api
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file and add:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/janitri_db
JWT_SECRET=your-secret-key
```

### **4️⃣ Run the Server**
```sh
npm start
```

---

## 📌 **API Documentation**
### **1️⃣ User Registration**
- **URL:** `POST /users/register`
- **Request:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered",
    "token": "eyJhbGciOiJIUzI1..."
  }
  ```

---

### **2️⃣ User Login**
- **URL:** `POST /users/login`
- **Request:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1..."
  }
  ```

---

### **3️⃣ Add Patient**
- **URL:** `POST /patients`
- **Headers:**
  ```
  Authorization: Bearer <your-token>
  ```
- **Request:**
  ```json
  {
    "name": "Robert Smith",
    "age": 45
  }
  ```
- **Response:**
  ```json
  {
    "message": "Patient added",
    "patient": {
      "_id": "65b5678abcd90123ef045678",
      "name": "Robert Smith",
      "age": 45
    }
  }
  ```

---

### **4️⃣ Get Patient Details**
- **URL:** `GET /patients/:id`
- **Headers:**
  ```
  Authorization: Bearer <your-token>
  ```
- **Response:**
  ```json
  {
    "_id": "65b5678abcd90123ef045678",
    "name": "Robert Smith",
    "age": 45
  }
  ```

---

### **5️⃣ Add Heart Rate Data**
- **URL:** `POST /heart-rate`
- **Headers:**
  ```
  Authorization: Bearer <your-token>
  ```
- **Request:**
  ```json
  {
    "patientId": "65b5678abcd90123ef045678",
    "bpm": 82
  }
  ```
- **Response:**
  ```json
  {
    "message": "Heart rate recorded",
    "heartRate": {
      "_id": "65b6789abcd01234ef056789",
      "patientId": "65b5678abcd90123ef045678",
      "bpm": 82
    }
  }
  ```

---

### **6️⃣ Get Heart Rate Data**
- **URL:** `GET /heart-rate/:id`
- **Headers:**
  ```
  Authorization: Bearer <your-token>
  ```
- **Response:**
  ```json
  {
    "patient": {
      "id": "65b5678abcd90123ef045678",
      "name": "Robert Smith",
      "age": 45
    },
    "heartRates": [
      {
        "_id": "65b6789abcd01234ef056789",
        "patientId": "65b5678abcd90123ef045678",
        "bpm": 82
      }
    ]
  }
  ```

---

## 🛠 **Assumptions & Design Choices**
- **JWT Authentication** ensures secure API access.
- **MongoDB Database** used to store patient & heart rate data.
- **Password Hashing (bcrypt.js)** for user security.
- **Error Handling** for invalid user input & server issues.

---

## 🤝 **Contributing**
If you'd like to improve this project, feel free to **fork** and submit a **pull request**.

---

## 🔗 **Repository Link**
[GitHub Repo](https://github.com/KRITHIKus/Janitri-Task.git)

