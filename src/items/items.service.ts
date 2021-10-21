import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private itemsRepository: Repository<Item>,
    ) {}

    async findAll(): Promise<Item[]> {
        return await this.itemsRepository.find({
            select: ["name", "description", "brand", "createdAt", "likes", "views"],
            relations: [
                "category",
                "condition",
                "size",
                "user",
                "images"
            ]
        });
    }

    async findOne(id: string): Promise<Item> {
        return await this.itemsRepository.findOne(id);
    }

    async findAllCategory(category: string): Promise<Item[]> {
        return await this.itemsRepository.find({
            where: {
                item: {category: category}
            },
            relations: [
                "category",
                "condition",
                "size",
                "user",
                "images"
            ]
        });
    }

    async findAllUser(userId: string): Promise<Item[]> {
        return await this.itemsRepository.find({
            where: {
                item: {user: userId},
            },
            relations: [
                "category",
                "condition",
                "size",
                "user",
                "images"
            ]
        })
    }
}
