import { ISocketRepository } from "../domain/ISocketRepository";

export class SocketHandler {
    constructor(private readonly socketRepository: ISocketRepository){}
    connect(): void {
        this.socketRepository.connect()
    }

}