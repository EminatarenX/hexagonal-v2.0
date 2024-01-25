import { IUserRepository } from "../../../interfaces/ports/user/IUserRepository";
import { User } from "../../../domain/user/user";
import { PrismaClient } from "@prisma/client";

export class UserRepositoryPrisma implements IUserRepository {
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async create(user: User): Promise<User> {
        const userCreated = await this.prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password
            }
        })

        return new User(
            userCreated.name,
            userCreated.email,
            userCreated.password,
            userCreated.id,
            userCreated.createdAt,
            userCreated.updatedAt
        )
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        })

        if(!user) return null;

        return new User(
            user.name,
            user.email,
            user.password,
            user.id,
            user.createdAt,
            user.updatedAt
        )
    }
}