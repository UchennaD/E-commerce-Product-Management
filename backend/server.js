//48:33

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

import productRoutes from './routes/product.route.js';


dotenv.config();    

const app = express();

app.use(express.json()); // allows us to request JSON data in the req.body

// Product Routes in route
app.use("/api/products", productRoutes);

app.listen(5000, () => {
  connectDB();
  console.log('Server started at http://localhost:5000');
});


