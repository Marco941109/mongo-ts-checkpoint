import { Router, Request, Response } from "express";
import Order from "../models/Order";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (_req: Request, res: Response) => {
  try {
    const orders = await Order.find().populate("truckId").populate("locationId");
    res.json(orders);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
