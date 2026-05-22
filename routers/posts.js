import express from 'express';
import routers from 'express';
import posts from '../data/posts.js';

const router = express.Router();

function index (request, response){
    response.json(posts);
}
router.get('/', index);

export default router;