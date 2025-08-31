import Order from '../models/Order';

export const createOrder = async (req: any, res: any) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
