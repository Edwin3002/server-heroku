import express from 'express';
import { createTaskDb, deleteTaskDb, getOneTaskDb, getTaskDb, updateTaskDb } from '../services/tasks.services.js';

export const getTask = async (req, res) => {
    try {
        const data = await getTaskDb();
        return res.json(data);
    } catch (err) {
        return console.log('error ' + err);
    }
};
export const getOneTask = async (req, res) => {
    const id = req.params.id
    try {
        const data = await getOneTaskDb(id);
        return res.json(data);

    } catch (err) {
        return console.log('error ' + err);
    }
};
export const createTask = async (req, res) => {
    const {task, title} = req.body
    try {
        const data = await createTaskDb(task, title);
        return res.status(200).json({mesage: 'post va good'})
    } catch (err) {
        return console.log('error ' + err);
    }
};
export const updateTask = async (req, res) => {
    const id = req.params.id
    const {task, title} = req.body
    try {
        const data = await updateTaskDb(task, title, id);
        return res.status(200).json({mesage: 'put va good'})
    } catch (err) {
        return console.log('error ' + err);
    }
};
export const deleteTask = async (req, res) => {
    const id = req.params.id
    try {
        const data = await deleteTaskDb(id);
        return res.status(200).json({mesage: 'delete va good'})
    } catch (err) {
        return console.log('error ' + err);
    }
}