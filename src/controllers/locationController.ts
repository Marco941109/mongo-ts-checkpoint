import Location from '../models/Location';

export const createLocation = async (req: any, res: any) => {
  try {
    const location = await Location.create(req.body);
    res.status(201).json(location);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
