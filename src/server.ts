import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import {prisma} from './db/prismaClient.db'; 

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await prisma.$connect();
    console.log(' Database connected');

    app.listen(PORT, () => {
      console.log(` Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Error connecting to database:', err);
    process.exit(1);
  }
}

startServer();
