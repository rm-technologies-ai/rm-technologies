

export type User = {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    phone: string;
    role: 'Administrator' | 'User';
    opportunityRating: number;
};
