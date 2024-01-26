
import { IUserRepository } from "../dominio/IUserRepository";

export class UpdateUser {
    constructor(private readonly repository: IUserRepository) {}
    async run(id: string, name: string ){
        const user = await this.repository.findById(id);
        if(!user) return null
        user.update(name);
        return await this.repository.update(user);       
    }
}