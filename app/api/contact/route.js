// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'surafelwondu5647@gmail.com',
        pass: 'utygthjfyhdfvjim', // Use App Password
      },
    });

    // Verify transporter
    try {
      await transporter.verify();
    } catch (error) {
      console.error('Email configuration error:', error);
      return NextResponse.json(
        { success: false, message: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Email to you (portfolio owner)
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <div style="background: #e9ecef; padding: 20px; border-radius: 8px;">
            <strong>Message:</strong>
            <p style="margin-top: 10px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background: #d1ecf1; border-radius: 5px;">
            <small>This message was sent from your portfolio contact form.</small>
          </div>
        </div>
      `,
    };

    // Email to user (confirmation)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Reaching Out!</h2>
          <p>Hello <strong>${name}</strong>,</p>
          <p>Thank you for getting in touch! I have received your message and will get back to you within 24-48 hours.</p>
          
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #3B82F6;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Your Message:</strong><br>
              "${message}"
            </p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background: #e7f3ff; border-radius: 8px;">
            <h4 style="margin-top: 0; color: #1e40af;">What's Next?</h4>
            <ul style="color: #4b5563;">
              <li>I'll review your message and respond personally</li>
              <li>For urgent matters, you can expect a response within a few hours</li>
              <li>Feel free to follow up if you don't hear back within 48 hours</li>
            </ul>
          </div>

          <p style="margin-top: 30px;">
            Best regards,<br>
            <strong>Your Name</strong><br>
            <span style="color: #6b7280;">Full Stack Developer</span>
          </p>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again later or contact me directly.' 
      },
      { status: 500 }
    );
  }
}

// Optional: Add GET method for testing
export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Contact API is working!',
    timestamp: new Date().toISOString()
  });
}