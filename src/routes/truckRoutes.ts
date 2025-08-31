import { Router, Request, Response } from "express";
import Truck from "../models/Truck";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const truck = new Truck(req.body);
    await truck.save();
    res.status(201).json(truck);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (_req: Request, res: Response) => {
  try {
    const trucks = await Truck.find();
    res.json(trucks);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
