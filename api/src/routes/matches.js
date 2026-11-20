import { Router } from 'express';
import { notImplemented } from '../lib/notImplemented.js';

const router = Router();

// US-17 Find Matches (matching rule is an open question, see docs/CONFLICTS.md)
router.get('/:clothingItemId', notImplemented('US-17'));

export default router;
