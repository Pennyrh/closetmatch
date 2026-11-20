import { Router } from 'express';
import { notImplemented } from '../lib/notImplemented.js';

const router = Router();

// US-09 Create Outfit / US-13 Save Outfit (includes naming)
router.post('/', notImplemented('US-09/US-13'));
// US-13 Save Outfit (view saved outfits)
router.get('/', notImplemented('US-13'));
router.get('/:id', notImplemented('US-13'));
// US-11 Swap Clothing
router.put('/:id/items/:slot', notImplemented('US-11'));

export default router;
