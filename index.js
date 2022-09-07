import express from 'express';
import db from './src/config/db.js';
import cors from 'cors'
import appRoutes from './src/routes/app.routes.js';
import taskRoutes from './src/routes/task.routes.js';

const app = express();
app.use(express.json());
app.use(cors());

//routes

app.use(appRoutes);
app.use(taskRoutes);


const PORT = 3000;
//start server
app.listen(process.env.PORT || PORT, () => {
    console.log(`server is up ${PORT}`);
});

//data base connection
db.connect()
.then(() => {
    console.log('se conecto la data base');
}).catch((err) => {
    console.log('error', err);
});