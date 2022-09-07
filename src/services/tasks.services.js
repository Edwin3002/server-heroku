import db from "../config/db.js";

export const getTaskDb = async () => {
    const query = "SELECT * FROM tasks";
    const data = await db.execute(query);
    return data[0];
};
export const getOneTaskDb = async (id) => {
    const query = (`SELECT * FROM tasks where id = (${id})`);
    const data = await db.execute(query);
    return data[0];
};

export const createTaskDb = async (task , title) => {
    console.log(task, title);
    const query = (`INSERT INTO tasks (task, title)  VALUES (?, ?)`) ;
    const data = await db.execute(query, [task, title]);
    return data[0];
};
export const updateTaskDb = async (task , title, id) => {
    console.log(id, task, title);
    const query = (`UPDATE tasks SET task = ?, title = ? WHERE id = (${id})`) ;
    const data = await db.execute(query, [task, title]);
    return data[0];
};

export const deleteTaskDb = async (id) => {
    const query = (`DELETE FROM tasks where id = ${id}`);
    const data = await db.execute(query);
    return data[0];
};