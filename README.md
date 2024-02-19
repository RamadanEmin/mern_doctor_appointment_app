You can view the site here
[Click Me](https://mern-doctor-booking.vercel.app/)

# Doctor Appointment Booking Application

This is a web application designed to facilitate booking appointments with doctors online. It provides a convenient platform for users to browse available doctors, schedule appointments, and manage their bookings.

## Features

- **User Authentication**: Users can sign up for an account, log in, and manage their profile.
- **Doctor Listings**: Users can browse a list of available doctors, view their profiles, and see their availability for appointments.
- **Appointment Booking**: Users can schedule appointments with doctors based on their availability.
- **Booking Management**: Users can view and manage their upcoming appointments, including canceling or rescheduling appointments.
- **Stripe Integration**: Secure payment processing through Stripe for appointment bookings.
- **Admin Dashboard**: Admin users can manage doctors, appointments, and user accounts.

## Technologies Used

- **Frontend**: Tailwind CSS, JavaScript, React.js
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Database**: MongoDB Atlas
- **Payment Processing**: Stripe API

## Setup Instructions

1. Clone the repository: **git clone https://github.com/RamadanEmin/mern_doctor_appointment_app.git**
2. Install dependencies in both server and client folder: **cd client / cd server** > **npm install**

   1. Set up environment variables:

      - Create a `.env` file in the root directory in backend folder.
      - Define the following environment variables:
        - PORT=5000
        - MONGO_URL=`<your-mongodb-uri>`
        - JWT_SECRET_KEY=`<your-jwt-secret>`
        - STRIPE_SECRET_KEY=`<your-stripe-secret-key>`
        - CLIENT_SITE_URL=http://localhost:5173/
      - Create a `.env` file in the root directory in frontend folder.
      - Define the following environment variables:
        - VITE_CLOUD_NAME=`<your-cloudinary-cloud-name>`
        - VITE_UPLOAD_PRESET=`<your-upload-preset>`

## Deployment

The frontend and backend can be deployed separately to their respective hosting platforms. Ensure that environment variables are properly configured in your deployment environment.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or create a pull request.
