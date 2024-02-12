import express from 'express';
import {
    getSingleUser,
    getAllUser,
    getUserProfile,
    getMyAppointments,
    updateUser
} from '../Controllers/userController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router();

router.get('/:id', authenticate, restrict(['patient']), getSingleUser);
router.get('/', authenticate, restrict(['admin']), getAllUser);
router.get('/profile/me', authenticate, restrict(['patient']), getUserProfile);
router.get('/appointments/my-appointments', authenticate, restrict(['patient']), getMyAppointments);
router.put('/:id', authenticate, restrict(['patient']), updateUser);

export default router;