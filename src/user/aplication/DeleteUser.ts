import { IUserRepository } from "../dominio/IUserRepository";

export class DeleteUser {
    constructor(private readonly repository: IUserRepository){}
    async run(id: string) {
        return await this.repository.delete(id)
    }
}