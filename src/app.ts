import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes";
import truckRoutes from "./routes/truckRoutes";
import locationRoutes from "./routes/locationRoutes";
import orderRoutes from "./routes/orderRoutes";

const app = express();
app.use(express.json());

// basepath del API
app.use("/practica-api/gestion-usuarios/v1/users", userRoutes);
app.use("/trucks", truckRoutes);
app.use("/locations", locationRoutes);
app.use("/orders", orderRoutes);

export default app;


