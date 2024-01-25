import express from 'express';
import UserRouter from './interfaces/controllers/user/UserController';
import ProductRouter from './interfaces/controllers/product/ProductController';
const app = express();
app.use(express.json());
app.use('/api/users', UserRouter);
app.use('/api/products', ProductRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`))