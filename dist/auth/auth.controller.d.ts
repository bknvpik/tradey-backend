/// <reference types="passport" />
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: Request, res: Response): Promise<any>;
    signOut(res: Response): Promise<string>;
    getProfile(req: Request): Promise<Express.User>;
    checkAuth(req: Request): Promise<boolean>;
}
