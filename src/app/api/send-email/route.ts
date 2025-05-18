import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { 
      name, email, phone, address, city, postalCode, 
      appliance, model, issueDescription, preferredDate, preferredTime, 
      urgentRepair, couponCode, originalPrice, discount, estimatedPrice 
    } = data;

    // Create a transporter with Gmail settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Format price information
    const priceInfo = discount 
      ? `<p><strong>Original Price:</strong> $${originalPrice || 'N/A'}</p>
         <p><strong>Discount Applied:</strong> ${couponCode} (${typeof discount === 'number' && discount > 0 && discount < 100 ? discount + '%' : '$' + discount} off)</p>
         <p><strong>Estimated Price:</strong> $${estimatedPrice || 'N/A'}</p>`
      : `<p><strong>Estimated Price:</strong> $${originalPrice || 'N/A'}</p>`;

    // Prepare email content with HTML formatting for business owner
    const ownerEmailContent = `
      <h1>New Booking Request</h1>
      <h2>Customer Information:</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Postal Code:</strong> ${postalCode || 'Not provided'}</p>
      
      <h2>Service Information:</h2>
      <p><strong>Appliance:</strong> ${appliance}</p>
      <p><strong>Model/Brand:</strong> ${model || 'Not provided'}</p>
      <p><strong>Issue Description:</strong> ${issueDescription}</p>
      <p><strong>Preferred Date:</strong> ${preferredDate || 'Not specified'}</p>
      <p><strong>Preferred Time:</strong> ${preferredTime || 'Not specified'}</p>
      <p><strong>Urgent Repair:</strong> ${urgentRepair ? 'Yes (+$50 fee)' : 'No'}</p>
      
      <h2>Pricing:</h2>
      ${priceInfo}
      ${couponCode ? `<p><strong>Coupon Code Used:</strong> ${couponCode}</p>` : ''}
    `;

    // Prepare email content for customer confirmation
    const customerEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e5e5; border-radius: 5px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #333; margin-bottom: 10px;">Your Booking is Confirmed</h1>
          <p style="font-size: 16px; color: #666;">Thank you for choosing JK Appliances for your repair needs.</p>
        </div>
        
        <div style="background-color: #f8f8f8; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <h2 style="color: #333; font-size: 18px; margin-top: 0;">Booking Details:</h2>
          <p><strong>Service:</strong> ${appliance} Repair</p>
          <p><strong>Preferred Date:</strong> ${preferredDate || 'To be scheduled'}</p>
          <p><strong>Preferred Time:</strong> ${preferredTime || 'To be scheduled'}</p>
          <p><strong>Address:</strong> ${address}, ${city}, ${postalCode || ''}</p>
          ${couponCode ? `<p><strong>Coupon Applied:</strong> ${couponCode}</p>` : ''}
          ${estimatedPrice ? `<p><strong>Estimated Service Fee:</strong> $${estimatedPrice}</p>` : ''}
        </div>
        
        <div style="margin-bottom: 20px;">
          <h2 style="color: #333; font-size: 18px;">What's Next?</h2>
          <p>Our team will review your request and contact you shortly to confirm the exact date and time for your service appointment.</p>
          <p>If you need to make any changes to your booking, please contact us at:</p>
          <p style="text-align: center; font-weight: bold; font-size: 18px;">📞 (647) 560-8966</p>
        </div>
        
        <div style="background-color: #f1f8e9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <h2 style="color: #333; font-size: 18px; margin-top: 0;">Preparing for Your Service:</h2>
          <ul style="padding-left: 20px;">
            <li>Ensure someone over 18 years of age will be present during the appointment</li>
            <li>Make sure the appliance is accessible</li>
            <li>Clear the surrounding area to provide our technician with enough workspace</li>
          </ul>
        </div>
        
        <div style="text-align: center; color: #666; font-size: 14px; margin-top: 30px;">
          <p>Thank you for choosing JK Appliances!</p>
          <p>8 Lorraine Cres, Brampton, ON L6S 2R7</p>
          <p><a href="https://jkappliancerepair.ca" style="color: #0071e3; text-decoration: none;">jkappliancerepair.ca</a></p>
        </div>
      </div>
    `;

    // Send email to business owner
    const ownerMailOptions = {
      from: `"JK Appliances Booking" <${process.env.GMAIL_USER}>`,
      to: 'vrsabhaya@gmail.com',
      subject: `New Booking Request from ${name}`,
      html: ownerEmailContent
    };

    // Send email to customer
    const customerMailOptions = {
      from: `"JK Appliances" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Your JK Appliances Booking Confirmation',
      html: customerEmailContent
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
} 