import { ISocketRepository } from "../domain/ISocketRepository";
import { Server, Socket } from "socket.io";

export class SocketRepository implements ISocketRepository {
    constructor(private readonly io: Server){}
    connect(): void {
        this.io.on('connection', (socket) => {
            console.log('new connection')
            socket.on('disconnect', () => {
                console.log('user disconnected')
            })
        })
    }
    
}