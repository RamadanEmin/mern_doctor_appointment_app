import express from 'express';
import {
    getSingleDoctor,
    getAllDoctor,
    getDoctorProfile
} from '../Controllers/doctorController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router();

router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile);

export default router;