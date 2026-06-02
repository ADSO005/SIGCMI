# 🏥 SIGCMI  
## Intelligent Medical Appointment Management System  

---

## 🚀 Description

**SIGCMI** is a web-based platform designed to optimize medical appointment management in healthcare centers through a scalable and secure architecture.

The system allows:

- User registration and authentication  
- Profile management (Patient and Doctor)  
- Medical schedule with time-based availability  
- Appointment booking  
- Cancellation and rescheduling  
- Automatic notifications  
- Administrative panel  


Does NOT include:

- Advanced clinical history  
- Real billing system  
- Integration with real health insurance providers (EPS)  

---

## 🏗️ Architecture

The system implements a **Client-Server N-Tier Architecture**:

- 🎨 Frontend: Web/Mobile (React / Angular)  
- ⚙️ Backend: REST API (Node.js / Python)  
- 🗄️ Database: PostgreSQL  
- 🔔 Notifications: Simulated SMTP Service  

### System Layers

1. Presentation Layer (Frontend)  
2. Business Logic Layer (Backend REST API)  
3. Persistence Layer (Database)  

Additionally, the system integrates with an external notification service.

---

## 🔐 Security

- Password encryption using bcrypt  
- JWT-based authentication  
- Role-based access control  
- Protection against SQL injection  
- Sensitive medical data handling  

---

## 👥 System Roles

- Patient  
- Doctor  
- Administrator  

---

## 📊 Main Features

- Patient and doctor registration  
- Secure JWT login  
- Medical availability management  
- Appointment booking  
- Cancellation and rescheduling  
- Automatic notifications  
- Administrative dashboard  

---

## 🧠 Data Model

Main entities:

- Patient  
- Doctor  
- Specialty  
- Appointment  
- MedicalRecord  
- Role  
- User  

All entities use **UUID as primary key**.

---

## 🌿 Methodology

- Scrum  
- Git Flow  
- Fibonacci sprint estimation  
- Mandatory Pull Requests before merging into `main`  

---

## 🌱 Branch Strategy

\`\`\`bash
main      → Production
release     → Stable versions
develop     → Main development branch
feature/*   → New features
\`\`\`

---
## 📂 Project Structure

SIGCMI/
│
├── .github
├── backend/
├── database/
├── docs/
├── frontend/
├── .gitignore
├── LICENSE
└── README.md

## 🛠️ Installation (Backend Example)

`\`\`bash
git clone https://github.com/DeltaG8109/SIGCMI.git
cd backend
npm install
npm run dev
`\`\`

---

## 📚 Documentation

Complete technical documentation (UML diagrams, ER diagrams, detailed architecture, and requirements) can be found on the project <a href="https://github.com/ADSO005/ADSO_3231252_005/wiki">Wiki</a>.

---

## 🎓 Academic Context

Project developed for the ADSO – SENA program.

Includes:

- Architecture Diagram
- Component Diagram
- Deployment Diagram
- Class Diagram
- Entity-Relationship Model
- Sequence Diagrams
- Functional and Non-Functional Requirements

---
## 📌 Development Team

|Name |Email |Number Phone |Roles |User|
|---------------------|----------------------------|-------------|-----------|-----------|
|Juan Esteban Montoya |montoyajuanes11@gmail.com |3137498332 |Full-stack |<a href="https://github.com/DeltaG8109" style="text-decoration: none;">@DeltaG8109</a>|
|Santiago Galindo |hernnadezsantiago.00@gmail.com |3105212658 |Back-end |<a href="https://github.com/SANTIAGO-HERNANDEZ-1089" style="text-decoration: none;">@SANTIAGO-HERNANDEZ-1089</a>|
|Cristians Marmolejo |CFMR25886781@soy.sena.edu.co |3046184021 |Back-end |<a href="https://github.com/CristiansMarmolejo2412" style="text-decoration: none;">@CristiansMarmolejo2412</a>|
|Karen Yulieth Herrera|herrerayulieth254@gmail.com |3132369317 |Analyst/Fronted|<a href="https://github.com/herrerayulieth254-star" style="text-decoration: none;">@herrerayulieth254-star</a>|
|Karen Daniela Tamayo |kdaniela0731@gmail.com |3174035244 |Full-stack |<a href="https://github.com/kdaniela0731-droid" style="text-decoration: none;">@kdaniela0731-droid</a>|

## 📜 License

Academic project – Educational use.
