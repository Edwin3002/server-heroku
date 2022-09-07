import { Router } from "express";
import { createTask, deleteTask, getOneTask, getTask, updateTask } from "../controllers/task.controllers.js";

const router = Router();

router.get('/tasks', getTask);

router.get('/tasks/:id', getOneTask);

router.post('/tasks', createTask);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);
export default router;