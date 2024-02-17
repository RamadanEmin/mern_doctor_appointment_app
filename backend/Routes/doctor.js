import express from 'express';
import {
    getSingleDoctor,
    getAllDoctor,
    getDoctorProfile,
    updateDoctor,
    deleteDoctor
} from '../Controllers/doctorController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';
import reviewRouter from './review.js';

const router = express.Router();

router.use('/:doctorId/reviews', reviewRouter);

router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile);
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor);
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor);

export default router;