const { MongoClient, ObjectId } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('rmtechdb');

        // Insert User
        const userResult = await db.collection('users').insertOne({
            firstName: "Alice",
            lastName: "Johnson",
            email: "alice.johnson@example.com",
            password: "secure_hashed_password",
            role: "Editor",
            createdAt: new Date()
        });
        const userId = userResult.insertedId;

        // Insert Blog Post
        const blogResult = await db.collection('blogs').insertOne({
            title: "Advanced MongoDB Tips",
            content: "Here are some advanced tips for using MongoDB effectively...",
            authorId: userId,
            createdAt: new Date(),
            tags: ["Advanced", "Tips", "MongoDB"]
        });
        const blogId = blogResult.insertedId;

        // Insert Comments
        await db.collection('comments').insertMany([
            {
                blogId: blogId,
                userId: userId,
                text: "Great article, very informative!",
                createdAt: new Date(),
                likes: 10
            },
            {
                blogId: blogId,
                userId: userId,
                text: "Thanks for the tips, looking forward to more posts.",
                createdAt: new Date(),
                likes: 5
            }
        ]);

        console.log("Database setup with users, blogs, and comments completed!");
    } catch (e) {
        console.error("An error occurred:", e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
