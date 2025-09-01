import { Router, Request, Response } from "express";
import Location from "../models/Location";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { user, address, place_id, latitude, longitude } = req.body;

    const location = new Location({ user, address, place_id, latitude, longitude });
    await location.save();

    res.status(201).json(location);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (_req: Request, res: Response) => {
  try {
    const locations = await Location.find().populate("user");
    res.json(locations);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Stats: total de ubicaciones por ciudad
router.get("/stats", async (_req: Request, res: Response) => {
  try {
    const result = await Location.aggregate([
      { $group: { _id: "$city", total: { $sum: 1 } } },
      { $sort: { total: -1 } }
    ]);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
