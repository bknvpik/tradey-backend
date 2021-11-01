import { CreateUserDto } from './users/dtos/create-user.dto';
import { UsersService } from './users/users.service';
export declare class AppController {
    private usersService;
    constructor(usersService: UsersService);
    signUp(createUserDto: CreateUserDto): Promise<void>;
}
