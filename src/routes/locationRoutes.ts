import { Router, Request, Response } from "express";
import Location from "../models/Location";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const location = new Location(req.body);
    await location.save();
    res.status(201).json(location);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (_req: Request, res: Response) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
