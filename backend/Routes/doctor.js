import express from 'express';
import {
    getSingleDoctor,
    getAllDoctor,
    getDoctorProfile,
    deleteDoctor
} from '../Controllers/doctorController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router();

router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile);
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor);

export default router;