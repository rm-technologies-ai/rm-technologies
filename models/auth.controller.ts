
import express from 'express';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { User } from '../models/user.model';
import { sendVerificationEmail } from '../services/email.service'; // Define this function in a separate service
import { MongoClient } from 'mongodb';

const router = express.Router();

router.post('/register', async (req, res) => {
    const client = new MongoClient(process.env.MONGODB_URI);
    const { firstName, lastName, email, password } = req.body;

    try {
        await client.connect();
        const db = client.db('rmtechdb');
        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = crypto.randomBytes(16).toString('hex');

        const newUser: User = {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            UserStatus: "New",
            lastStatusChangeAt: new Date(),
            verificationToken
        };

        const result = await db.collection<User>('users').insertOne(newUser);
        await sendVerificationEmail(email, verificationToken); // Implement this function

        res.status(201).json({ message: 'User registered. Please check your email to verify your account.' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    } finally {
        await client.close();
    }
});

export default router;
