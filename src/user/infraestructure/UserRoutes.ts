import { Router } from "express";
import { 
    createUserController,
    updateUserController,
    deleteUserController,
    findAllUserController
} from './dependencies'

const UserRouter = Router()

UserRouter.post(
    '/',
    createUserController.run.bind(createUserController)
)

UserRouter.put(
    '/:id',
    updateUserController.run.bind(updateUserController)
)

UserRouter.delete(
    '/:id', 
    deleteUserController.run.bind(deleteUserController)
)

UserRouter.get(
    '/',
    findAllUserController.run.bind(findAllUserController)
)

export default UserRouter;
