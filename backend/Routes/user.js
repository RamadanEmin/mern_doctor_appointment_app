import express from 'express';
import { getSingleUser, getAllUser } from '../Controllers/userController.js';

const router = express.Router();

router.get('/:id', getSingleUser);
router.get('/', getAllUser);

export default router;