
const app = require('express').Router();

const productService= require('../bl/productsBl')


async function loadProducts() {

    app.get('/products/:categoryId/:productId', async(req, res) => {
        const products = await productService.getProductById(req.params.categoryId , req.params.productId)
        if(products){
            res.send(products)
        }
        else{
            res.status(404).send("Not Found")
        }
    })

    app.get('/products/:id', async(req, res) => {
        const products = await productService.getAllProductById(req.params.id)
        if(!products)
        {
            res.status(404).send("Not found")
        }
        res.send(products)
    })


    app.post('/products/:categoryId', async(req, res) => {

        try {
            const result = await productService.editProduct(req.params.categoryId , req.body)
            res.send(result)
        } catch {
            res.send('faild')
        }
    })


    app.delete('/products/:categoryId/:productId', async(req, res) => {
        try {
            await productService.deleteProduct(req.params.categoryId , req.params.productId)
            res.send("Succeeded")

        } catch {
            res.send('faild')
        }

    })

    
    app.put('/products/:categoryId/:productId', async(req, res) => {
        try {
            const result = await productService.updateProduct(req.params.categoryId ,req.params.productId ,req.body )
            res.send(result)
        }
        catch{
            res.send('faild')
        }
    })
}

loadProducts();


module.exports = app;
