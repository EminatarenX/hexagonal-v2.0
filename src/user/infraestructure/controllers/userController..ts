import { Router } from "express";
import { CreateUser } from "../../aplication/CreateUser";
import { UserRepositoryPrisma } from "../UserRepositoryPrisma";
import { UpdateUser } from "../../aplication/UpdateUser";
import { FindByEmail } from "../../aplication/FindByEmail";

const UserRouter = Router()
const repository = new UserRepositoryPrisma()
const createUser = new CreateUser(repository)
const updateUser = new UpdateUser(repository)
const findByEmail = new FindByEmail(repository)

UserRouter.post('/', async(req, res) => {
    const { name, email, password } = req.body;
    try {
        const exist = await findByEmail.run(email)
        if(exist) {
            return res.status(400).json({msg: 'this user is already registered'})
        }
        const user = await createUser.run(name, email, password)
        res.status(201).json({user})
        
    } catch (error) {
        res.status(400).json({message: 'there has an error', error})
    }
})

// soon find by id, find all, update, delete
UserRouter.put('/:id', async(req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const user = await updateUser.run(id, name)
        res.status(201).json({user})
    } catch (error) {
        res.status(400).json({message: 'there has an error', error})
    }
})

export default UserRouter;
