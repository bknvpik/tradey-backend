import { Controller, Get, Param } from '@nestjs/common';
import { ViewUserDto } from './dtos/view-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}
    
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<ViewUserDto> {
        return await this.usersService.findOneById(id);
    }

    @Get('items/:itemId')
    async findUserByItemId(@Param('itemId') itemId: string): Promise<string> {
        console.log(await this.usersService.findUserByItemId(itemId))
        return await this.usersService.findUserByItemId(itemId);
    }
}
