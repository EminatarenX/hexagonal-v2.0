import { Request, Response, NextFunction } from 'express';
export interface ICorsService {
    setUp(req: Request, res: Response, next: NextFunction): void
}