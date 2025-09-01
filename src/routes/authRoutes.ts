import { Router, Request, Response } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

// Login simple (solo email para demo)
  router.post('/', async (req: Request, res: Response) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: 'Usuario no encontrado' });

   console.log(user);

  // Firmar token

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET as string,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

export default router;
