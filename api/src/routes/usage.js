import { Router } from 'express';
import { notImplemented } from '../lib/notImplemented.js';

const router = Router();

// US-23 Track Clothing Usage
router.post('/', notImplemented('US-23'));
router.get('/:clothingItemId', notImplemented('US-23'));
// US-26 View Rarely Worn Clothing
router.get('/reports/rarely-worn', notImplemented('US-26'));

export default router;
