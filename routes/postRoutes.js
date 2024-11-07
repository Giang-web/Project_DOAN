import express from 'express'
import {creatpost,getAllPosts} from '../controllers/postControllers.js'

const router = express.Router();

router.post('/creatpost',creatpost)
router.post('/getAllPosts',getAllPosts)

export default router