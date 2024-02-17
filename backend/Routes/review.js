import express from 'express';
import { createReview, getAllReviews } from '../Controllers/reviewController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router({ mergeParams: true });

router.get('/', getAllReviews);
router.post('/', authenticate, restrict(['patient']), createReview);

export default router;