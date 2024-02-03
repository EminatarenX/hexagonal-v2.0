import { IBcryptRepository } from '../../dominio/IBcryptRepository'
import bcrypt from 'bcrypt'

export class BcryptHashService implements IBcryptRepository {
    hash(password: string): Promise<string> {
        password = bcrypt.genSaltSync(10)
        return bcrypt.hash(password, 10)
    }
    compare(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash)
    }
}