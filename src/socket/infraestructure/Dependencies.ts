import { server, FRONTEND_URL } from "../..";
import { SocketRepository } from "../infraestructure/SocketRepository";
import { SocketHandler } from "../aplication/SocketHandler";

const socketRepository = new SocketRepository(server, FRONTEND_URL)
export const socketHandler = new SocketHandler(socketRepository)
