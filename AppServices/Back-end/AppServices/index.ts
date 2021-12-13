import express from 'express';
import cors from 'cors';
import './src/infrastructure/persistence/firestore'
import routes from './src/presentation/routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(3000, ()=>{
    console.log('AppServices running...');
})