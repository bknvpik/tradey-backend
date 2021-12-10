import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Popularity } from 'src/popularity/entities/popularity.entity';
import { createQueryBuilder, Not, Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { Condition } from './entities/condition.entity';
import { Item } from './entities/item.entity';
import { Size } from './entities/size.entity';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private itemsRepository: Repository<Item>,
        @InjectRepository(Category)
        private categoriesRepository: Repository<Category>,
        @InjectRepository(Condition)
        private conditionsRepository: Repository<Condition>,
        @InjectRepository(Size)
        private sizesRepository: Repository<Size>,
        @InjectRepository(Popularity)
        private popularityRepository: Repository<Popularity>
    ) {}

    async findAll(userId: string): Promise<Item[]> {
        return await this.itemsRepository.find({
            select: ["id", "name", "brand", "createdAt", "images"],
            relations: ["images"],
            where: {
                user: { id: Not(userId) }
            }
        });
    }

    async findOne(id: string): Promise<any> {
        const item = await createQueryBuilder().select("item").from(Item, "item")
        .leftJoinAndSelect("item.category", "category")
        .leftJoinAndSelect("item.size", "size")
        .leftJoinAndSelect("item.condition", "condition")
        .leftJoinAndSelect("item.images", "images")
        .where("item.id = :id", { id: id })
        .getOne();
        return item;
    }
    
    async findAllByUserId(userId: string): Promise<Item[]> {
        const items = await createQueryBuilder().select("item").from(Item, "item")
        .leftJoin("item.user", "user")
        .leftJoinAndSelect("item.images", "images")
        .where("item.user = :id", { id: userId })
        .getMany();
        return items;
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

    async findCategories(): Promise<Category[]> {
        return await this.categoriesRepository.find();
    }

    async findConditions(): Promise<Condition[]> {
        return await this.conditionsRepository.find();
    }

    async findSizes(): Promise<Size[]> {
        return await this.sizesRepository.find();
    }

    async checkOwner(itemId: string, userId: string): Promise<boolean> {
        const isOwner = await this.itemsRepository.createQueryBuilder()
        .select("item").from(Item, "item")
        .leftJoin("item.user", "user")
        .where("item.id = :itemId", { itemId: itemId })
        .andWhere("user.id = :userId", { userId: userId })
        .getCount()
        
        return isOwner
        ? true
        : false;
    }

    async addItem(item: any): Promise<any> {
        const popularity = this.popularityRepository.create();
        item.popularity = popularity;
        return await this.itemsRepository.save(item);
    }

}
