import { Router, Request, Response} from 'express'
import { CreateUser } from '../../../aplication/user/CreateUser'
import { UserRepositoryPrisma } from '../../../infraestructure/db/user/UserRepositoryPrisma'
import { hashPassword } from '../../../infraestructure/security/HashPassword';
import { FindByEmail } from '../../../aplication/user/FindByEmail';

const UserRouter = Router();
const repository = new UserRepositoryPrisma();
const createUser = new CreateUser(repository);
const findByEmail = new FindByEmail(repository);

UserRouter.post('/create', async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    try {
        const exist = await findByEmail.run(email);
        if(exist) return res.status(400).json({ message: "Email already exists" });
        const passwordHashed = hashPassword(password as string);
        const user = await createUser.run({ name, email, password: passwordHashed })
        res.status(201).json({user})
        
    } catch (error: unknown) {
        const message = (error as Error).message;
        res.status(400).json({ message });
    }
})

export default UserRouter;