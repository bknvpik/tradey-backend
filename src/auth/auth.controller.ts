import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) {}
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response
    ): Promise<any> {
        const jwt = await this.authService.login(req.user);
        res.cookie('jwt', jwt, { httpOnly: true })

        return {
            jwt: jwt,
            message: 'Succesfully signed in!'
        }
    }

    @Get('sign-out')
    async signOut(@Res({ passthrough: true }) res: Response) {
        res.clearCookie('jwt');
        return 'logged out!';
    }
    
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@Req() req: Request) {
        return req.user;
    }
}
