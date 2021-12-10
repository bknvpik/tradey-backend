import { ViewUserDto } from './dtos/view-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findOne(id: string): Promise<ViewUserDto>;
    findUserByItemId(itemId: string): Promise<string>;
}
