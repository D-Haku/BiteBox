# BiteBox
<h1 align="center">BITEBOX</h1>
<p align="center">
<img alt="Logo" width="142px" src="client/src/assets/AppLogoFinal.png"/>
</p>

<h3 align="center">A robust food ordering and delivery platform built using the toolset from the MERN stack.</h3>

<br />

<h2 align="center">🖥️ Tech Stack</h2>

<h4 align="center">Frontend:</h4>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactjs" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
  <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcnUI" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwindCSS" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html5" />
</p>

<h4 align="center">Backend:</h4>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="expressjs" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />

</p>

  </em>
</p>
<br />

## Table of Contents:

1) [Features](#fet)
2) [Getting Started](#install)
3) [Website Link](#projectLink)
4) [Tech-Stack Used](#depend) 
5) [APIs Used](#apis)
6) [Contributors](#contri)

<a name="fet"></a>
## Features

### 🚀 Essential Features

- Registration and Login: Google Auth0 Integration: Secure and seamless login and signup using Google Auth0.
- User Profile Form: Update your profile information in real-time, with pre-population of existing data.
- Restaurant Listings: Browse through a variety of restaurants and their menus.
- Menu Browsing: View menus and prices of various restaurants.
- Cart Management: Add, update, or remove items from your cart seamlessly. 
- Real-Time Order Tracking: Track the status of your order from preparation to delivery and remaining time based on current status.
- Estimated Delivery Time: Get accurate delivery time estimates for your orders.
- Cloudinary Integration: Seamless management and upload of images for restaurants.
.


<br />

### 🚀 Advanced Features

- Restaurant Profile Form: Manage restaurant details, upload multiple items, and images, with real-time updates.
- Advance Search: Find restaurants and dishes based on your location and city.
- Advanced Filtering and Sorting: Search and filter restaurants and dishes based on various criteria, including estimated delivery time, delivery price and cuisine.
- Order Summary: Review your cart with itemized details before proceeding to checkout.
- Order History: Access and review your past orders and their details.
- Delivery Address Customization: Add and manage delivery preferences.
- Responsive Design: Ensure a smooth user experience across all devices.
- Stripe Integration: Order foods securely using Stripe payment gateway and receive detailed information about the ordered items in the checkout session.
- Payments Page: A dedicated page for handling payments smoothly.

<br />

<a name="install"></a> 
## Getting Started

This project was built using React, Redux, Sass, HTML, JavaScript, Rest API, Node JS, Express and MongoDB with JWT and Stripe integration. It is an freelance outsourcing web application and for running on your local environment you should follow these guidelines.

1) Clone the repository using:
```bash
https://github.com/PaulSaurav19/WorkHive-Project.git
```
2) Run the following in both the "client" and "server" folders:
```bash
npm install 
```
3) Start MongoDB and set up the following ENV files:

### Server
```
`JWT_SECRET`
e.g. this_is_secret_123

`MONGODB_URI`
e.g. mongodb cluster URI

`STRIPE_SECRET`
e.g. Secret key from stripe dashboard

`NODE_ENV`
e.g. 'development' for local and 'production' for production

`DEV_CORS_ORIGIN`
e.g. http://localhost:6173 (client localhost)

`PROD_CORS_ORIGIN`
e.g. client deployed link (https://yourProjectName.com) 
```
### Client
```
`VITE_API_URL`
e.g. http://localhost:3000/api or production deployed server link

`VITE_STRIPE_PUBLISHABLE_KEY`
e.g. Publishable key from stripe dashboard
```
4) Run following in both "client" and "server" folders:
```bash
npm start
```

<a name="projectLink"></a> 
## Website Link

* [Workhive](https://workhive-one.vercel.app)


<a name="depend"></a>
## Tech-Stack Used

* NodeJS(ExpressJS) 
* React JS
* SASS
* Vite-JS Template
* JavaScript
* MongoDB (as Database)

<a name="apis"></a>
## APIs Used

* Stripe(to monitor payments)
* Postman

<a name="contri"></a>
## Contributors

* [Sourav Paul](https://github.com/PaulSaurav19)
* [Vishesh Agrawal](https://github.com/Vishesh-MNNIT)

## Feedback
Feel free to file an issue if you come across any bugs

### Made at:

<p align="center">
<img alt="MNNIT" width="112px" src="http://www.mnnit.ac.in/institutelogo/MNNIT%20(logo)png.png" />
</p>
