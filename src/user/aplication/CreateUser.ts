import { IUserRepository } from "../dominio/IUserRepository";
import { User } from "../dominio/user";
import { IBcryptRepository } from "../dominio/IBcryptRepository";

export class CreateUser {
    constructor(private readonly userRepository: IUserRepository, private readonly bcryptRepository: IBcryptRepository){}
    async run(name: string, email: string, password: string){
        const exist = await this.userRepository.findByEmail(email)
        if(exist) throw new Error('user already exist')
        const hashPassword = await this.bcryptRepository.hash(password)
        const user = new User(name, email, hashPassword)
        return await this.userRepository.create(user)
    }
}