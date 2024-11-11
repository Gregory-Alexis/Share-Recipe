import express from 'express';
import { createReview } from '../controllers/review/createReview.js';
import { updateReview } from '../controllers/review/updateReview.js';

const reviewRouter = express.Router();

reviewRouter.post('/review', createReview);
reviewRouter.put('/update/review/:reviewID', updateReview);

export default reviewRouter;
