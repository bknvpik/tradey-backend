import { Controller, Request, Post, UseGuards, Get, Body, Redirect, Res, Req } from '@nestjs/common';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { UrlGeneratorService, SignedUrlGuard } from 'nestjs-url-generator';
import { CreateUserDto } from './users/dtos/create-user.dto';
import { UsersService } from './users/users.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(
    private usersService: UsersService,
  ) {}
  
  @Post('sign-up')
  async signUp(@Body() user: CreateUserDto) {
    await this.usersService.create(user);
  }
}