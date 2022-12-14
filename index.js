import express from 'express';
import db from './src/config/db.js';
import cors from 'cors'
import appRoutes from './src/routes/app.routes.js';
import taskRoutes from './src/routes/task.routes.js';

const app = express();
// const whiteList = ['http://localhost:3000/', 'http://localhost:3001/']
app.use(cors());
// app.use(cors({origin: whiteList, credentials: true}));
app.use(express.json());

//routes

app.use(appRoutes);
app.use(taskRoutes);


const PORT = 4000;
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