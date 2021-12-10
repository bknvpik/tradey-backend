import { Body, forwardRef, Inject, Injectable, Response } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...rest } = user;
      return rest;
    }
    return null;
  }

  async login(user: any) {

    const payload = { username: user.eMail, sub: user.id };
    return await this.jwtService.signAsync(payload);

  }
  
  async verifyCookie(cookie: string) {
    return await this.jwtService.verifyAsync(cookie);
  }
}