import express from 'express';
import { getSingleUser, getAllUser } from '../Controllers/userController.js';
import { authenticate } from '../auth/verifyToken.js';

const router = express.Router();

router.get('/:id', authenticate, getSingleUser);
router.get('/', authenticate, getAllUser);

export default router;