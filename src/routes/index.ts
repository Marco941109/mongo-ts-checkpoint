import { Router } from 'express';
import userRoutes from './userRoutes';
import truckRoutes from './truckRoutes';
import locationRoutes from './locationRoutes';
import orderRoutes from './orderRoutes';

const router = Router();
router.use('/users', userRoutes);
router.use('/trucks', truckRoutes);
router.use('/locations', locationRoutes);
router.use('/orders', orderRoutes);

export default router;
