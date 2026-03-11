import e from 'express';
import { createUser } from '../models/userModel.js';

export  async function createUserController(req, res){

    const user = {
        avatar: "https://github.com/rafaelknji.png",
        name: "Rafael Knji",
        email: "rafael.obara10@outlook.com",
        password: "12345678"  
    }

    const result = await createUser(user);

    res.json({
        message: "User created successfully",
        user: result
    })

}