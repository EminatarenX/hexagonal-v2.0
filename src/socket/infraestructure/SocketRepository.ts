import { ISocketRepository } from "../domain/ISocketRepository";
import { Server } from "socket.io";

export class SocketRepository implements ISocketRepository {
    constructor(private readonly io: Server){}
    connect(): void {
        this.io.on('connection', (socket) => {
            console.log('connected ' + socket.id)

            
        })
    }
}