import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { AuthService } from 'src/auth/auth.service';
export declare class UsersService {
    authService: AuthService;
    private usersRepository;
    constructor(authService: AuthService, usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(username: string): Promise<User | undefined>;
    findOneById(id: string): Promise<any | undefined>;
    findUserByItemId(itemId: string): Promise<string>;
    create(user: CreateUserDto): Promise<Object>;
    remove(id: string): Promise<void>;
}
