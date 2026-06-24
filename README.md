# Rent Your Wheels – Car Rental Web Application

A full-stack MERN project for renting and listing cars. Users can browse cars, view details, make bookings, add their own listings, and manage them with edit/delete options.

---

## 🚀 Features

### 🔐 Authentication
- Email/password signup & login  
- Google Sign-in  
- Private routes using Firebase Auth  

### 🚗 Car Management
- Add new cars  
- View all cars  
- View featured cars  
- Edit your listed cars (modal based)  
- Delete your listings with confirmation  

### 📅 Booking System
- Book any available car  
- View all your bookings  
- Delete a booking (optional)  
- Prevent duplicate booking from UI  

### 🔍 Search System
- Search cars by name directly in banner  
- Instant filtered results (client-side search)  

---

## 🔐 Test Credentials / Login Information

You can use the following default credentials to test the authentication capabilities:

| Email | Password |
| :--- | :--- |
| test@email.com | Test@123456 |

> 💡 **Note:** You can also use the "Google Sign-In" feature on the login page to authenticate seamlessly with your personal Google account.

---

## 🧰 Technologies Used

### **Frontend**
- React + Vite  
- React Router  
- Axios (secure instance)  
- TailwindCSS + DaisyUI  
- Firebase Authentication  
- SweetAlert2  
- React Toastify  

### **Backend**
- Node.js + Express.js  
- MongoDB (native driver, no Mongoose)  
- CORS Middleware  

---

## 📁 Project Folder Structure

```
project/
│── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── Layouts/
│   │   └── router/
│   └── public/
│
│── server/
│   ├── index.js
│   ├── routes/
│   ├── controllers/
│   └── config/
│
└── README.md
```

---

## 🔌 Backend API Endpoints

### **Cars**
| Method | Endpoint        | Description             |
|--------|------------------|-------------------------|
| GET    | /cars            | Get all cars            |
| GET    | /featured-cars   | Get featured cars       |
| GET    | /cars/:id        | Get car details         |
| POST   | /cars            | Add new car             |

### **Bookings**
| Method | Endpoint                      | Description          |
|--------|--------------------------------|----------------------|
| GET    | /bookings?email=user@example   | Get user bookings    |
| POST   | /bookings                     | Create a booking     |
| DELETE | /bookings/:id                 | Delete a booking     |

### **My Listings**
| Method | Endpoint                     | Description             |
|--------|------------------------------|-------------------------|
| GET    | /myListings?email=...        | Get user-listed cars    |
| PATCH  | /myListings/:id              | Update listed car       |
| DELETE | /myListings/:id              | Delete listed car       |

---

## 🛠 How to Run Project

### **1️⃣ Client Setup**
```
cd client
npm install
npm run dev
```

### **2️⃣ Server Setup**
```
cd server
npm install
node index.js
```

---

## 🔐 Environment Variables

### **Firebase Config**
```
VITE_apiKey=xxxx
VITE_authDomain=xxxx
VITE_projectId=xxxx
VITE_storageBucket=xxxx
VITE_messagingSenderId=xxxx
VITE_appId=xxxx
```

### **MongoDB**
```
MONGODB_URI=mongodb+srv://...
PORT=3000
```

---

## 💡 Key Features to Highlight  
- Fully functional CRUD operations  
- User-based filtering (only your own listings/bookings)  
- Clean UI + modern responsive design  
- Secure Axios instance  
- Reusable components  
- Modal-based editing system  
- Search functionality implemented correctly  

---

## 🔗 Live Links

### 🌐 **Client Live URL**
🔸 https://rent-your-wheels.web.app/

### 🛠 **Server API URL**
🔸 https://rent-your-wheels-server.vercel.app/

---

## 🧑‍💻 Author  
**Md. Misskhat Hossen Milon**  
Full-Stack Web Developer  

---

## 📄 License  
This project is free to use for educational and learning purposes.
