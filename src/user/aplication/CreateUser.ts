import { IUserRepository } from "../dominio/IUserRepository";
import { User } from "../dominio/user";

export class CreateUser {
    constructor(private readonly repository: IUserRepository){}
    async run(name: string, email: string, password: string){
        const exist = await this.repository.findByEmail(email)
        if(exist) throw new Error('user already exist')
        const user = new User(name, email, password)
        return await this.repository.create(user)
    }
}