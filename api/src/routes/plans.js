import { Router } from 'express';
import { notImplemented } from '../lib/notImplemented.js';

const router = Router();

// US-20 Plan Outfit (work, school, events, vacations)
router.post('/', notImplemented('US-20'));
router.get('/', notImplemented('US-20'));

export default router;
