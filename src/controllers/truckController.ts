import Truck from '../models/Truck';

export const createTruck = async (req: any, res: any) => {
  try {
    const truck = await Truck.create(req.body);
    res.status(201).json(truck);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
