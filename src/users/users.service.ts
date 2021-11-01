import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as dayjs from 'dayjs'
import { UrlGeneratorService } from 'nestjs-url-generator';
import { AppController } from 'src/app.controller';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.usersRepository.findOne({ eMail: username});
    }

    async create(user: CreateUserDto) {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        const newUser = {
            ...user,
            password: hash
        }

        await this.usersRepository.save(newUser);
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
