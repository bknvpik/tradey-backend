import { Controller, Delete, Get, Param, Post, Put, UseGuards, Req } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { Item } from './entities/item.entity';
import { Condition } from './entities/condition.entity';
import { Size } from './entities/size.entity';
import { ItemsService } from './items.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';

@Controller('items')
export class ItemsController {
    constructor(
        private readonly itemsService: ItemsService,
        private readonly authService: AuthService
    ) {}
    
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Req() req: Request): Promise<Item[]> {
        console.log(req)
        const data = await this.authService.verifyCookie(req.cookies['jwt'])
        console.log(data);
        return await this.itemsService.findAll();
    }

    @Get('categories')
    async getCategories(): Promise<Category[]> {
        return await this.itemsService.findCategories();
    }

    @Get('conditions')
    async getConditions(): Promise<Condition[]> {
        return await this.itemsService.findConditions();
    }

    @Get('sizes')
    async getSizes(): Promise<Size[]> {
        return await this.itemsService.findSizes();
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
