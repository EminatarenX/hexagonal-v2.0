import { IUserRepository } from "../../interfaces/ports/user/IUserRepository";
import { User } from "../../domain/user/user";

export class CreateUser {
    constructor(private readonly repository: IUserRepository){}
    async run(user: User): Promise<User>{
        return await this.repository.create(user);
    }
}