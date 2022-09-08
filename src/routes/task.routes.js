import { Router } from "express";
import { createTask, deleteTask, getOneTask, getTask, updateDoneTask, updateTask } from "../controllers/task.controllers.js";

const router = Router();

router.get('/tasks', getTask);

router.get('/tasks/:id', getOneTask);

router.post('/tasks', createTask);

router.put('/tasks/:id', updateTask);

router.put('/tasks/done/:id', updateDoneTask);

router.delete('/tasks/:id', deleteTask);
export default router;