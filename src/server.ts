import express from 'express';
import cors from 'cors';
import routes from './modules/trintemo.routes';

const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true, 
}));
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});