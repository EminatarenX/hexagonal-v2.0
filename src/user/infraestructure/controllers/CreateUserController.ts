import { CreateUser } from "../../aplication/CreateUser";
import { FindByEmail } from "../../aplication/FindByEmail";
import { Request, Response } from "express";
import { UserRepositoryPrisma } from "../UserRepositoryPrisma";

const repository = new UserRepositoryPrisma()
const findByEmail = new FindByEmail(repository)

export class CreateUserController {
    constructor(private readonly createUser: CreateUser){}
   async run(req: Request, res: Response) {
    const { name, email, password } = req.body;
    try {
        const exist = await findByEmail.run(email)
        if(exist) {
            return res.status(400).json({msg: 'this user is already registered'})
        }
        const user = await this.createUser.run(name, email, password)
        res.status(200).json({user})
        
    } catch (error) {
        res.status(400).json({message: 'there has an error', error})
    }
   }
}