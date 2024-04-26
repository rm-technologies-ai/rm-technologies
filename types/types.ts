
interface User {
    id?: string;  // Make 'id' optional because it won't exist on new users before they're inserted
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    phone: string;
    role: string;
    opportunityRating: number;
}