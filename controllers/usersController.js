#!/usr/bin/env node

const app = require('express').Router();

const {getToken ,getUser,editUser} = require('../bl/userBl')


async function loadUsers() {

    app.post("/signup", async(req, res) => {
        try {
            const user = req.body;
            if (!(user.email && user.name && user.password)) {
                res.status(400).send("All input is required")
            }
            const currentUser= await getUser(user.email)
            if (currentUser) {
                res.status(409).send("User Already Exist.")
            } else {
                await editUser(user)
                res.status(200).send("Succeeded")
            }

        } catch (err) {
            res.status(500).send(err)
        }

    })


    app.post("/login", async(req, res) => {
        try {
            const email = req.body.email
            const password = req.body.password
            if (!(email && password)) {
                res.status(400).send("All input is required");
            }
            const token = await getToken(email,password)
            if(token){
                res.status(200).json(token)
            } else {
                res.status(400).send("user not found")
            }

        } catch (err) {
            res.status(500).send(err)
        }
    })
}
loadUsers()


module.exports = app;