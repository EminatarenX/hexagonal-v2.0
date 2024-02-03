import { IUserRepository } from "../dominio/IUserRepository";
import { IJWTRepository } from "../dominio/IJWTRepository";
import { IBcryptRepository } from "../dominio/IBcryptRepository";
export class AuthUser {
    constructor(
        private readonly userRepository: IUserRepository, 
        private readonly bcryptRepository: IBcryptRepository,
        private readonly jwtRepository: IJWTRepository
    ){}

    async run(email: string, password: string){
        const user = await this.userRepository.findByEmail(email)
        if(!user){
            throw new Error('user not found')
        }
        const isPasswordValid = await this.bcryptRepository.compare(password, user.password)
        if(!isPasswordValid){
            throw new Error('password is invalid')
        }
        const token = await this.jwtRepository.sign(user.id, '1h')
        user.setJwt(token)
        user.setPassword()

        return user
    }
}