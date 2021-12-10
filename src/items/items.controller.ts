import { Controller, Delete, Get, Param, Post, Put, UseGuards, Req, Body, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { Item } from './entities/item.entity';
import { Condition } from './entities/condition.entity';
import { Size } from './entities/size.entity';
import { ItemsService } from './items.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { PopularityService } from 'src/popularity/popularity.service';
import { AddItemDto } from './dtos/add-item.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

@Controller('items')
export class ItemsController {
    constructor(
        private readonly itemsService: ItemsService,
        private readonly authService: AuthService,
        private readonly popularityService: PopularityService
    ) {}
    
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Req() req: Request): Promise<Item[]> {
        const data = await this.authService.verifyCookie(req.cookies['jwt'])
        console.log(data);
        console.log(await this.itemsService.findAll(data.sub))
        return await this.itemsService.findAll(data.sub);
    }

    @Get('most-popular')
    async findMostPopular(@Req() req: Request) {
        const data = await this.authService.verifyCookie(req.cookies['jwt'])
        const items = await this.popularityService.findMostPopular(data.sub);
        console.log(items)
        return items;
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

    @Get('category/:category')
    async findAllCategory(@Param('category') category: string): Promise<string> {
        return `finds an items with category: ${category}`;
    }

    @Get('users/:userId')
    async findAllByUserId(@Param('userId') userId: string): Promise<any> {
        return await this.itemsService.findAllByUserId(userId);
    }
    
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<any> {
        console.log(await this.itemsService.findOne(id))
        return await this.itemsService.findOne(id);
    }

    @Get(':itemId/users/:userId/check-owner')
    async checkOwner(@Param() params: { itemId: string, userId: string }): Promise<boolean> {
        return await this.itemsService.checkOwner(params.itemId, params.userId);
    }

    @Post()
    @UseInterceptors(FilesInterceptor('images', 4, {
        storage: diskStorage({
            destination: '../tradey-frontend/public/resources/item_images/',
            filename: (req, file, cb) => {
                const uuid = uuidv4();
                cb(null, `${uuid}${extname(file.originalname)}`)
            }
        })
    }))
    async addItem(@Body() item: AddItemDto, @UploadedFiles() images: Array<Express.Multer.File>): Promise<any> {
        item.images = [];
        images.forEach(img => {
            const image = {
              image: img.filename
            };
            item.images.push(image);
        });
        const itemEntity = await this.itemsService.addItem(item);
        await this.popularityService.createPopularity(itemEntity);
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
