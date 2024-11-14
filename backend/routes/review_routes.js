import express from 'express';

import { createReview } from '../controllers/review/createReview.js';
import { updateReview } from '../controllers/review/updateReview.js';
import { deleteReview } from '../controllers/review/deleteReview.js';
import { validateSchema } from '../middleware/zod.js';
import { CreateReviewSchema, UpdateReviewSchema } from '../schema/review.js';
import verifyToken from '../middleware/verifyToken.js';

const reviewRouter = express.Router();

reviewRouter.post('/review', validateSchema(CreateReviewSchema), verifyToken, createReview);
reviewRouter.put(
  '/review/:reviewID',
  validateSchema(UpdateReviewSchema),
  verifyToken,
  updateReview
);
reviewRouter.delete('/review/:reviewID', verifyToken, deleteReview);

export default reviewRouter;
