# Email Sending Setup for JK Appliances Website

This document explains how to set up email sending from the booking form on the JK Appliances website.

## What Has Been Implemented

1. A new API route at `/api/send-email/route.ts` that handles email sending using Nodemailer
2. Updated the BookingSection component to send form data to this API endpoint
3. **Dual Email Functionality:**
   - Business owner receives detailed booking information
   - Customer receives a professional confirmation email with their booking details

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
# Gmail credentials for Nodemailer
GMAIL_USER=your_email@gmail.com
GMAIL_APP_PASSWORD=your_app_password
```

## How to Get Gmail App Password

Since you want to use vrsabhaya@gmail.com for sending and receiving booking emails, you'll need to:

1. **Enable 2-Step Verification for your Google account**
   - Go to your Google Account settings
   - Navigate to Security
   - Enable 2-Step Verification if not already enabled


   

2. **Create an App Password**
   - Visit https://myaccount.google.com/apppasswords
   - Select "Mail" as the app and "Other" as the device (name it "JK Appliances")
   - Google will generate a 16-character password
   - Copy this password and use it as the GMAIL_APP_PASSWORD in your .env.local file

3. **Set GMAIL_USER to vrsabhaya@gmail.com**

## Deployment Instructions

1. Add these environment variables to your Vercel project:
   - Go to your Vercel dashboard
   - Select your project
   - Navigate to Settings > Environment Variables
   - Add the GMAIL_USER and GMAIL_APP_PASSWORD variables
   - Save and redeploy your project

## Email Flow

When a customer submits a booking form:

1. The customer receives a professional confirmation email with:
   - Booking details summary
   - What to expect next
   - Preparation instructions
   - Contact information

2. You (the business owner) receive a detailed email with:
   - Complete customer information
   - Service details
   - Appointment preferences

## Testing

Once set up, test the booking form by submitting a test inquiry. The form should:

1. Submit the data to the API endpoint
2. Send an email to vrsabhaya@gmail.com with the booking details
3. Send a confirmation email to the customer's provided email
4. Show a success message to the user

If you encounter any issues, check the browser console and server logs for error messages.

## Gmail Sending Limits

Note that Gmail has sending limits for regular accounts:
- Maximum of 500 emails per day
- Up to 100 recipients per email

If your booking volume exceeds these limits, consider upgrading to a Google Workspace account or using a dedicated email service like SendGrid or Amazon SES. 