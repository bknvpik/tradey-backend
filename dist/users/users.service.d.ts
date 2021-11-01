import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(username: string): Promise<User | undefined>;
    create(user: CreateUserDto): Promise<void>;
    remove(id: string): Promise<void>;
}
