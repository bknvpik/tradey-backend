import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { Item } from 'src/items/entities/item.entity';
import { ItemsService } from 'src/items/items.service';
import { UsersService } from 'src/users/users.service';
import UserFavoriteDto from './dtos/FavoriteDto';
import { Popularity } from './entities/popularity.entity';
import { PopularityService } from './popularity.service';

@Controller('popularity')
export class PopularityController {
    constructor(
        private readonly popularityService: PopularityService,
    ) {}
    
    @Post('items/add-favorite')
    async addFavorite(@Body() favorite: UserFavoriteDto): Promise<any> {
        return await this.popularityService.addFavorite(favorite);
    }

    @Delete('items/delete-favorite')
    async deleteFavorite(@Body() favorite: UserFavoriteDto): Promise<void> {
        return await this.popularityService.deleteFavorite(favorite);
    }

    @Get('items/:itemId/get-popularity')
    async getPopularity(@Param('itemId') itemId: string): Promise<Popularity> {
        return await this.popularityService.getItemPopularity(itemId);
    }

    @Get('items/:itemId/users/:userId/is-liked')
    async isLiked(@Param() params: {itemId: string, userId: string}): Promise<boolean> {
        return await this.popularityService.isLiked(params.itemId, params.userId);
    }

    @Get('users/:userId/get-favorites')
    async getUserFavorites(@Param('userId') userId: string): Promise<Item[]> {
        return await this.popularityService.getUserFavorites(userId);
    }

    @Put('items/:itemId/views')
    async incrementViews(@Param('itemId') itemId: string): Promise<void> {
        await this.popularityService.incrementViews(itemId);
        await this.popularityService.calcAndUpdatePopularity(itemId);
    }
}
