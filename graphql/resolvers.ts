import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb'; // Import ObjectId for type casting

const client = new MongoClient(process.env.MONGODB_URI);
let db = client.db('rmtechdb');

const resolvers = {
    Query: {
        async getUsers() {
            await client.connect();
            return await db.collection('users').find().toArray();
        },
    },
    Mutation: {
        async addUser(_, { firstName, lastName, address, email, phone, role, opportunityRating }): Promise<User> {
            await client.connect();
            const newUser: User = { firstName, lastName, address, email, phone, role, opportunityRating };
            const result = await db.collection('users').insertOne(newUser);
            newUser.id = result.insertedId.toString();  // Convert ObjectId to string if necessary
            return newUser;
        },
    },
};

export default resolvers;
