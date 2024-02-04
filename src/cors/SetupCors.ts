import { ICorsService } from "./ICorsService";
import { Request, Response, NextFunction } from "express";
export class Cors {
    constructor(private readonly repository: ICorsService) {}
    setUp(req: Request, res: Response, next: NextFunction) {
        this.repository.setUp(req, res, next)
    }
}