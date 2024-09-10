// pages/api/contact.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        // Set up Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail', // You can use other services like SendGrid or Mailgun
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });

        const mailOptions = {
            from: 'info@eideas.io',
            to: 'shorenavanadze01@gmail.com',
            subject: 'New Form Submission',
            text: `User Name: ${name}\nUser Email: ${email}\nSubject: ${subject}\nUser Message: ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}