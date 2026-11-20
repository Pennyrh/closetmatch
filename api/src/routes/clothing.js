import { Router } from 'express';
import { notImplemented } from '../lib/notImplemented.js';

const router = Router();

// US-01 Add Clothing (includes picture, name, color, category)
router.post('/', notImplemented('US-01'));
// US-04 Organize Clothing (list, optional ?category= filter)
router.get('/', notImplemented('US-04'));
router.get('/:id', notImplemented('US-04'));
// US-07 Edit Clothing
router.patch('/:id', notImplemented('US-07'));

export default router;
