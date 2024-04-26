const { MongoClient } = require('mongodb');

async function seedDatabase() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db('rm-technologies');
        const users = db.collection('users');

        const sampleUsers = [
            { firstName: 'John', lastName: 'Doe', address: '123 Main St', email: 'john.doe@example.com', phone: '123-456-7890', role: 'Administrator', opportunityRating: 5 },
            { firstName: 'Jane', lastName: 'Doe', address: '456 Oak St', email: 'jane.doe@example.com', phone: '987-654-3210', role: 'User', opportunityRating: 4 },
            { firstName: 'William', lastName: 'Smith', address: '789 Pine St', email: 'will.smith@example.com', phone: '555-678-1234', role: 'User', opportunityRating: 3 },
            { firstName: 'Emma', lastName: 'Jones', address: '321 Maple St', email: 'emma.jones@example.com', phone: '456-789-0123', role: 'Administrator', opportunityRating: 4 },
            { firstName: 'Olivia', lastName: 'Brown', address: '654 Spruce St', email: 'olivia.brown@example.com', phone: '321-654-9877', role: 'User', opportunityRating: 2 },
            { firstName: 'Noah', lastName: 'Davis', address: '987 Cedar St', email: 'noah.davis@example.com', phone: '654-321-4567', role: 'User', opportunityRating: 3 },
            { firstName: 'Ava', lastName: 'Miller', address: '123 Birch St', email: 'ava.miller@example.com', phone: '987-123-6548', role: 'User', opportunityRating: 5 },
            { firstName: 'Sophia', lastName: 'Wilson', address: '456 Redwood St', email: 'sophia.wilson@example.com', phone: '132-465-7891', role: 'Administrator', opportunityRating: 4 },
            { firstName: 'Liam', lastName: 'Martinez', address: '789 Cedar Ave', email: 'liam.martinez@example.com', phone: '564-231-7865', role: 'User', opportunityRating: 1 },
            { firstName: 'Isabella', lastName: 'Garcia', address: '321 Oak Ave', email: 'isabella.garcia@example.com', phone: '678-134-5678', role: 'Administrator', opportunityRating: 5 }
        ];

        await users.insertMany(sampleUsers);
        console.log('Database seeded! Sample users added.');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        await client.close();
    }
}

seedDatabase();
