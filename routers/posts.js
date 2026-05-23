import express from 'express';
import { index, modify, store, update} from '../controllers/postsController.js';

const router = express.Router();


router.get('/', index);

router.post('/', store);

router.put('/:id', update);

router.patch('/:id', modify);
export default router;