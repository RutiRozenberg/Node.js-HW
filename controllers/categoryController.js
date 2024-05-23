#!/usr/bin/env node


const app = require('express').Router();
const { cwd } = require('process');
const categoryService = require('../bl/categoryBl')



async function loadCategories() {


    app.get("/category/:id", async(req, res) => {
        const category = await categoryService.getCategoryById(req.params.id);
        if (!category) {
            res.status(404).send('category not found')
        }
        res.send(category)
    })

    app.get('/category', async(req, res) => {
        const categoryNames= await categoryService.getAllCategories()
        if(!categoryNames){
            res.status(404).send("Categories not found")
        }
        res.send(categoryNames)
    })

    app.post('/category', async(req, res) => {
        try {
            const result =await categoryService.editCategory(req.body)
            res.send(result)
        } catch (err) {
            res.send('faild')
        }
    })

    app.delete('/category/:id', async(req, res) => {
        try {
            const result = await categoryService.deleteCategory(req.params.id)
            res.send(result)

        } catch {
            next(err)
        }

    })

    app.put('/category/:id', async(req, res) => {
        try{
            const id = req.params.id
            const body = req.body
            const result = await categoryService.updateCategory(id ,body)
            res.send(result)
        }
        catch{
            res.send("faild")
        }
    
    })
}
loadCategories();

module.exports = app;