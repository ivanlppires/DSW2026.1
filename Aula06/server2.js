import express from 'express';
const app = express();
app.use(express.json());
const products = [];

/* ------ ENDPOINS CRUD PRODUCTS ------ */

// GET todos produtos
app.get('/products', (req, res) => {
    res.status(200).json(products);
});

// GET produto por id
app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = products.filter(p => p.id === id);
    if (product.length > 0) {
        res.status(200).json(product);
    } else {
        res.status(404).json('Produto não encontrado!');
    }
});

// POST produto
app.post('/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json('Produto adicionado com sucesso!');
});

// PUT produto
app.put('/products/:id', (req, res) => {
    const id = req.params.id;
    const productUpdate = req.body;
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        products[productIndex] = productUpdate;
        res.status(200).json('Produto atualizado com sucesso!');
    } else {
        res.status(404).json('Produto não encontrado!');
    }
});

// DELETE produto
app.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        res.status(200).json('Produto deletado com sucesso!');
    } else {
        res.status(404).json('Produto não encontrado!');
    }
});

/* ------ FIM DOS ENDPOINS ------ */

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})