import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

import courseRoutes from './routes/course.route.js';
import authRoutes from './routes/auth.route.js';
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Bienvenido al sistema de gestión académica');
});

app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoutes);

await connectDB();

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});