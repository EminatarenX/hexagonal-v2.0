import { IUserRepository } from "../dominio/IUserRepository";

export class FindAll {
    constructor(private readonly repository: IUserRepository){}
    async run() {
        return await this.repository.findAll()
    }
}