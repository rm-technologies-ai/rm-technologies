

import nodemailer from 'nodemailer';

// Configure your SMTP transporter
const transporter = nodemailer.createTransport({
    // ... SMTP settings
});

export async function sendVerificationEmail(userEmail: string, token: string) {
    const verificationUrl = `http://yourdomain.com/verify?token=${token}`;
    await transporter.sendMail({
        from: '"RM Technologies Assistant" <assistant@rmtechnologies.ai>',
        to: userEmail,
        subject: 'Account Verification',
        text: `Please click on the following link to verify your account: ${verificationUrl}`,
        // Consider using a template or HTML email for a better user experience
    });
}
