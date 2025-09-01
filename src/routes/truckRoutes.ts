import { Router, Request, Response } from "express";
import Truck from "../models/Truck";

const router = Router();

// Crear un Truck
router.post("/", async (req: Request, res: Response) => {
  try {
    const { user, year, color, plates } = req.body;

    const truck = new Truck({ user, year, color, plates });
    await truck.save();

    res.status(201).json(truck);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Listar todos los Trucks
router.get("/", async (_req: Request, res: Response) => {
  try {
    const trucks = await Truck.find().populate("user"); // muestra info del User relacionado
    res.json(trucks);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Stats: total de camiones por modelo
router.get("/stats", async (_req: Request, res: Response) => {
  try {
    const result = await Truck.aggregate([
      { $group: { _id: "$model", total: { $sum: 1 } } },
      { $sort: { total: -1 } }
    ]);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
