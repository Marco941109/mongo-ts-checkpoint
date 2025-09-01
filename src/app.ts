import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes";
import truckRoutes from "./routes/truckRoutes";
import locationRoutes from "./routes/locationRoutes";
import orderRoutes from "./routes/orderRoutes";
//codigo para authRoutes
import authRoutes from './routes/authRoutes';
import { authenticate } from './middlewares/auth';



const app = express();
app.use(express.json());

// Endpoint para login y obtener token
app.use('/jwt/v1/login', authRoutes);

// basepath del API
app.use("/practica-api/gestion-usuarios/v1/users", authenticate, userRoutes);
app.use("/practica-api/gestion-trucks/v1/trucks", authenticate, truckRoutes);
app.use("/practica-api/gestion-locations/v1/locations", authenticate, locationRoutes);
app.use("/practica-api/gestion-orders/v1/orders", authenticate, orderRoutes);

export default app;


