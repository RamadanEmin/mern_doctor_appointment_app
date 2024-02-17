import express from 'express';
import { getAllReviews } from '../Controllers/reviewController.js';

const router = express.Router({ mergeParams: true });

router.get('/', getAllReviews);

export default router;