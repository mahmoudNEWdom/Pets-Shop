# Pets Shop Project 🐾

This is a full-stack project designed to create an interactive **Pets Shop** web application. The project consists of two main components:  

1. **Pets Shop**: The front-end application developed using **React**.  
2. **Server**: A mock server using **JSON Server** to simulate a backend API for managing pet data and images.

---

## Features 🚀

### **Front-end (Pets Shop)**  
- A dynamic and user-friendly interface for browsing and purchasing pets.  
- Detailed product descriptions, including pet type, species, age, price, and availability.  
- A responsive design that works on all devices.  
- A dark/light theme toggle for a personalized user experience.  
- Shopping cart functionality with dynamic quantity adjustments.

### **Back-end (Server)**  
- A **JSON Server** to provide API endpoints for pet data.  
- Hosts images and data in a structured format.  
- Easy to customize and extend.

---

---

## Installation & Usage 🛠️

### **Step 1: Clone the Repository**
Open your terminal and run:
```bash
git clone <repository-url>
cd pets-shop-project
```

### **Step 2: Set Up the Server**

1. Navigate to the server directory:  
   Follow the steps in `cd server`.

2. Install server dependencies:  
   Follow the steps in `npm install`.

3. Start the JSON Server:  
   Follow the steps in `npx json-server --watch data.json --port 3009`.

---

### **Step 3: Set Up the React Front-end**

1. Navigate to the React project directory:  
   Follow the steps in `cd pets-shop`.

2. Install front-end dependencies:  
   Follow the steps in `npm install`.

3. Start the React development server:  
   Follow the steps in `npm run start`.

---
#Open in Browser
Front-end: http://localhost:3000
API (Server): http://localhost:3009
---
#Customization ✏️
Open the `data.json` file in the `server` folder.
Add or modify pet objects. Example:
`{
  "id": 7,
  "kind": "Turtle",
  "species": "Box Turtle",
  "age": 12,
  "price": 50,
  "quantity": 8,
  "img": "http://localhost:3009/images/turtle.png"
}
`




