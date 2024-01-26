import { Router } from "express";
import { 
    createUserController,
    updateUserController,
    deleteUserController,
} from './dependencies'

const UserRouter = Router()

UserRouter.post(
    '/',
    createUserController.run.bind(createUserController)
)

// soon find by id, find all, update, delete
UserRouter.put(
    '/:id',
    updateUserController.run.bind(updateUserController)
)

UserRouter.delete(
    '/:id', 
    deleteUserController.run.bind(deleteUserController)
)

export default UserRouter;
