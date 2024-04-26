
import { ObjectId } from 'mongodb';

export interface User {
    _id?: ObjectId; // MongoDB's ObjectId for the user's ID
    firstName: string;
    lastName: string;
    email: string;
    password: string; // This will be the hashed password
    UserStatus: "New" | "Validated" | "Blocked" | "Expired";
    lastStatusChangeAt: Date;
    verificationToken?: string; // Optional as it only exists before user verifies email
}
