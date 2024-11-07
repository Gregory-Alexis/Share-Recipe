import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import router from './routes/user_routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5173;

app.use(cors({ origin: `http://localhost:${PORT}`, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
