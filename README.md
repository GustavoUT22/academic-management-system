# Academic Management System API Documentation

## Overview

Academic Management System is a Full Stack application built with Angular, Express.js, MongoDB and JWT authentication.

The system supports three roles:

* Admin
* Teacher
* Student

Each role has different permissions and access levels.

---

# Authentication

## Register User

**POST** `/api/auth/register`

### Request Body

```json
{
  "name": "Gustavo Ugarte",
  "email": "gustavo@test.com",
  "password": "123456",
  "role": "student"
}
```

### Response

```json
{
  "message": "Usuario registrado exitosamente"
}
```

---

## Login

**POST** `/api/auth/login`

### Request Body

```json
{
  "email": "gustavo@test.com",
  "password": "123456"
}
```

### Response

```json
{
  "token": "jwt_token"
}
```

---

# Users Module

Administrative management of users.

## Get All Users

**GET** `/api/users`

Access:

* Admin

---

## Get User By Id

**GET** `/api/users/:id`

Access:

* Admin

---

## Create User

**POST** `/api/users`

Access:

* Admin

### Request Body

```json
{
  "name": "Juan Pérez",
  "email": "juan@test.com",
  "password": "123456",
  "role": "teacher"
}
```

---

## Update User

**PUT** `/api/users/:id`

Access:

* Admin

### Request Body

```json
{
  "name": "Juan Pérez Actualizado",
  "email": "juan@test.com",
  "role": "teacher"
}
```

---

## Delete User

**DELETE** `/api/users/:id`

Access:

* Admin

---

# Courses Module

## Get Course Catalog

**GET** `/api/courses`

Access:

* Admin
* Teacher
* Student

Optional filters:

```http
/api/courses?category=Programming
/api/courses?modality=virtual
```

---

## Get Course Details

**GET** `/api/courses/:id`

Access:

* Admin
* Teacher
* Student

---

## Create Course

**POST** `/api/courses`

Access:

* Admin

### Request Body

```json
{
  "name": "Angular Advanced",
  "description": "Complete Angular Course",
  "teacherId": "teacher_object_id",
  "category": "Programming",
  "modality": "virtual",
  "schedule": "Monday and Wednesday"
}
```

---

## Update Course

**PUT** `/api/courses/:id`

Access:

* Admin

### Request Body

```json
{
  "name": "Angular 20",
  "description": "Updated course",
  "teacherId": "teacher_object_id",
  "category": "Frontend",
  "modality": "hybrid",
  "schedule": "Tuesday"
}
```

---

## Activate Course

**PATCH** `/api/courses/:id/activate`

Access:

* Admin

---

## Deactivate Course

**PATCH** `/api/courses/:id/deactivate`

Access:

* Admin

---

# Enrollment Module

## Create Enrollment

**POST** `/api/enrollments`

Access:

* Student

### Request Body

```json
{
  "studentId": "student_object_id",
  "courseId": "course_object_id"
}
```

---

## Student Enrollment History

**GET** `/api/enrollments/student/:studentId`

Access:

* Admin

---

## Update Enrollment Status

**PATCH** `/api/enrollments/:id`

Access:

* Admin

### Request Body

```json
{
  "status": "completed"
}
```

Available values:

* active
* completed
* dropped

---

# Student Module

## Student Profile

**GET** `/api/students/profile`

Access:

* Student

---

## My Courses

**GET** `/api/students/my-courses`

Access:

* Student

---

# Teacher Module

## Assigned Courses

**GET** `/api/teachers/my-courses`

Access:

* Teacher

---

## Assigned Course Details

**GET** `/api/teachers/my-courses/:courseId`

Access:

* Teacher

---

# Dashboard Module

## System Statistics

**GET** `/api/dashboard/stats`

Access:

* Admin

### Response

```json
{
  "totalStudents": 50,
  "totalTeachers": 10,
  "totalCourses": 20,
  "totalEnrollments": 100
}
```

---

# User Roles

## Student

Permissions:

* Register account
* Login
* Browse course catalog
* View course details
* Enroll in courses
* View personal enrollment history
* View profile

---

## Teacher

Permissions:

* Login
* View assigned courses
* View assigned course details
* Browse course catalog

---

## Admin

Permissions:

* Manage users
* Manage courses
* Manage enrollments
* Access dashboard statistics
* Activate and deactivate courses

---

# Database Models

## User

```text
name
email
password
role
createdAt
updatedAt
```

Roles:

* admin
* teacher
* student

---

## Course

```text
name
description
teacherId
category
modality
schedule
isActive
createdAt
updatedAt
```

Modalities:

* virtual
* presential
* hybrid

---

## Enrollment

```text
studentId
courseId
status
enrolledAt
createdAt
updatedAt
```

Statuses:

* active
* completed
* dropped

---

# Authentication and Authorization

The application uses JWT (JSON Web Tokens) for authentication.

Protected routes require:

```http
Authorization: Bearer <token>
```

Authorization middleware validates:

* Authenticated user
* User role
* Access permissions

---

# Project Structure

```text
backend-express/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── seeds/
│   └── app.js
├── .env
├── package.json
└── README.md
```
