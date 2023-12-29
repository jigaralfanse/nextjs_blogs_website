import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = 'mongodb+srv://alfanseiiita:3KXM3UbzSXFBr7X0@cluster0.4n2hhg0.mongodb.net/?retryWrites=true&w=majority';

    try {
      client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    } catch (error) {
      console.error('Error connecting to the database:', error);
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db('yourdatabase'); // Replace 'yourdatabase' with the actual name of your MongoDB database

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      console.error('Error storing message:', error);
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message!', data: newMessage });
  }
}

export default handler;
