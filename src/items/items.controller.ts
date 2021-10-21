import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(
        private readonly itemsService: ItemsService
    ) {}

    @Get()
    async findAll(): Promise<Item[]> {
        return await this.itemsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<string> {
        return `finds all items with id: ${id}`;
    }

    @Get('category/:category')
    async findAllCategory(@Param('category') category: string): Promise<string> {
        return `finds an items with category: ${category}`;
    }

    @Get('user/:userId')
    async findAllUser(@Param('userId') userId: string): Promise<string> {
        return `finds an items of user with ID: ${userId}`;
    }

    @Post()
    async addItem(): Promise<string> {
        return `adds new item`;
    }

    @Put(':id') 
    async editItem(@Param('id') id: string): Promise<string> {
        return `edits an item with id: ${id}`;
    }

    @Delete(':id')
    async deleteItem(@Param('id') id: string): Promise<string> {
        return `removes an item with id: ${id}`;
    }
}
