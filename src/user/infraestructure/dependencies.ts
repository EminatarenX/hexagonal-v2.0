import { CreateUserController } from "./controllers/CreateUserController";
import { CreateUser } from "../aplication/CreateUser";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { UpdateUser } from "../aplication/UpdateUser";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { DeleteUser } from "../aplication/DeleteUser";
import { FindAll } from "../aplication/FindAll";
import { FindAllController } from "./controllers/FindAllController";

import { UserRepositoryPrisma } from "./UserRepositoryPrisma";
export const repository = new UserRepositoryPrisma()

// Create
export const createUserUseCase = new CreateUser(repository)
export const createUserController = new CreateUserController(createUserUseCase)
// Update
export const updateUserUseCase = new UpdateUser(repository)
export const updateUserController = new UpdateUserController(updateUserUseCase)
// Delete
export const deleteUserUseCase = new DeleteUser(repository)
export const deleteUserController = new DeleteUserController(deleteUserUseCase)
// FindAll
export const findAllUserUseCase = new FindAll(repository)
export const findAllUserController = new FindAllController(findAllUserUseCase)