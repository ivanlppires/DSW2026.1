import express from 'express';
import index from './index.js';
const app = express();

// middleware
app.use(express.json()); // converte os request de json para objeto
app.use(index);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});