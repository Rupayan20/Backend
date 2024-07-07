import {DB_NAME} from "../constants.js";
import { MongoClient, ServerApiVersion } from 'mongodb';

/**
 * Connects to MongoDB using the provided connection options.
 * This code defines an async function connectToMongoDB that establishes a connection to a MongoDB database using the URL provided in the environment variables. It returns a Promise that resolves to the MongoDB database client. If the connection fails, it throws an error and logs the details.
 * @return {Promise<Db>} A Promise that resolves to the MongoDB database client
 */
async function connectDB() {
  const uri = process.env.MONGODB_URL;
  if (!uri) {
    throw new Error('MongoDB connection URL is not defined in environment variables');
  }

  const connectionOptions = {
    serverApi: ServerApiVersion.v1,
  };

  const client = new MongoClient(uri, connectionOptions);

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(DB_NAME);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
}

export default connectDB;