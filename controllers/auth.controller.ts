

router.get('/verify', async (req, res) => {
    const client = new MongoClient(process.env.MONGODB_URI);
    const { token } = req.query;

    try {
        await client.connect();
        const db = client.db('rmtechdb');
        const user = await db.collection<User>('users').findOne({ verificationToken: token });

        if (user) {
            await db.collection<User>('users').updateOne({ _id: user._id }, {
                $set: { UserStatus: "Validated", lastStatusChangeAt: new Date() },
                $unset: { verificationToken: "" }
            });
            res.json({ message: 'Account verified successfully.' });
        } else {
            res.status(400).json({ message: 'Invalid or expired verification token.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error verifying account', error });
    } finally {
        await client.close();
    }
});
