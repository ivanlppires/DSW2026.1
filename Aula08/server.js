import express from 'express';
import dotenv from 'dotenv'
import indexRouter from './index.js'
dotenv.config()
const app = express();

app.use(express.json());
app.use('/', indexRouter);

const port = process.env.PORT;

app.listen(port, () => {
    console.log('Servidor Rodando em ' + port)
})