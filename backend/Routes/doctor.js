import express from 'express';
import { getSingleDoctor, getAllDoctor } from '../Contollers/doctorController.js';

const router = express.Router();

router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);

export default router;