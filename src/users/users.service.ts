import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
    constructor(
        @Inject(forwardRef(() => AuthService))
        public authService: AuthService,
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.usersRepository.findOne({ eMail: username });
    }

    async findOneById(id: string): Promise<any | undefined> {
        const user = await createQueryBuilder().select("user").from(User, "user")
        .leftJoinAndSelect("user.image", "image")
        .leftJoinAndSelect("user.details", "details")
        .where("user.id = :id", { id: id })
        .getOne();
        return user;
    }

    async findUserByItemId(itemId: string): Promise<string> {
        const user = await createQueryBuilder().select("user").from(User, "user")
        .leftJoin("user.items", "items")
        .where("items.id = :id", { id: itemId })
        .getOne();
        const { id, ...rest} = user;
        return id;
    }

    async create(user: CreateUserDto): Promise<Object> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        const newUser = {
            ...user,
            password: hash
        }

        await this.usersRepository.save(newUser);

        return { type: 'message', text: 'Account created successfully'}
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }

}
