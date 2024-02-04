import { Request, Response, NextFunction } from "express"
import { ICorsService } from "./ICorsService"

export class CorsService implements ICorsService{
    private readonly _origin: string
    constructor(origin: string) {
        this._origin = origin
    }
    setUp(_: Request, res: Response, next: NextFunction) {
        res.header('Access-Control-Allow-Origin', this._origin)
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        next()
    }
}