import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from './entities/offer.entity';
import { OfferInterface } from './interfaces/offer.interface';

@Injectable()
export class OffersService {
    constructor(
        @InjectRepository(Offer)
        private offersRepository: Repository<Offer>
    ) {}

    async findAll(): Promise<Offer[]> {
        return await this.offersRepository.find({
            relations: ["item", "itemOffered"]
        });
    }

    async findOne(id: string): Promise<Offer> {
        return await this.offersRepository.findOne(id);
    }

    async findAllUser(userId: string): Promise<Offer[]> {
        return await this.offersRepository.find({
            where: {
                item: {user: userId},
                itemOffered: {user: userId}
            },
            relations: ["item", "itemOffered"]
        });
    }

    async findAllOutgoing(userId: string): Promise<Offer[]> {
        return await this.offersRepository.find({
            where: {
                itemOffered: {user: userId}
            },
            relations: ["item", "itemOffered"]
        });
    }

    async findAllIncoming(userId: string): Promise<Offer[]> {
        return await this.offersRepository.find({
            where: {
                item: {user: userId}
            },
            relations: ["item", "itemOffered"]
        });
    }

    async findAllByStatus(status: string): Promise<Offer[]> {
        return await this.offersRepository.find({
            where: { 
                offer: {status: status}
            },
            relations: ["item", "itemOffered"]
        });
    }

    async findAllUserStatus(userId: string, status: string): Promise<Offer[]> {
        return await this.offersRepository.find({
            where: { 
                offer: {status: status}
            },
            relations: ["item", "itemOffered"]
        });
    }

    async findAllUserStatusOutgoing(userId: string, status: string): Promise<Offer[]> {
        return await this.offersRepository.find({
            where: {
                itemOffered: {user: userId},
                offer: {status: status}
            },
            relations: ["item", "itemOffered"]
        })
    }

    async findAllUserStatusIncoming(userId: string, status: string): Promise<Offer[]> {
        return await this.offersRepository.find({
            where: {
                item: {user: userId},
                offer: {status: status}
            },
            relations: ["item", "itemOffered"]
        })
    }

    async createOffer(offer: OfferInterface): Promise<void> {
        console.log(offer);
        console.log(await this.offersRepository.save(offer))
        await this.offersRepository.create(offer);
    }

    async editOffer(id: string, offer: OfferInterface): Promise<void> {
        await this.offersRepository.update(id, offer)
    }

    async deleteOffer(id: string): Promise<void> {
        await this.offersRepository.delete(id);
    }
}
