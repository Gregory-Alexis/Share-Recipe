import express from 'express';

import { createReview } from '../controllers/review/createReview.js';
import { updateReview } from '../controllers/review/updateReview.js';
import { deleteReview } from '../controllers/review/deleteReview.js';
import { validateSchema } from '../middleware/zod.js';
import { CreateReviewSchema, UpdateReviewSchema } from '../schema/review.js';

const reviewRouter = express.Router();

reviewRouter.post('/review', validateSchema(CreateReviewSchema), createReview);
reviewRouter.put('/update/review/:reviewID', validateSchema(UpdateReviewSchema), updateReview);
reviewRouter.delete('/delete/review/:reviewID', deleteReview);

export default reviewRouter;
