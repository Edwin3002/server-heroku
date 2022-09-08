import { Router } from 'express';

const router = Router();


router.get('/tasks');
router.get('/tasks/:id');
router.post('/tasks');
router.put('/tasks/:id');
router.put('/tasks/done/:id');
router.delete('/tasks/:id');


export default router;