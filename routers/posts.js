import express from 'express';
import { index, create, update} from '../controllers/postsController.js';

const router = express.Router();


router.get('/', index);

router.post('/', create);

router.put('/:id', update)
export default router;