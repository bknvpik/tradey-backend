import { Repository } from 'typeorm';
import { Offer } from './entities/offer.entity';
import { OfferInterface } from './interfaces/offer.interface';
export declare class OffersService {
    private offersRepository;
    constructor(offersRepository: Repository<Offer>);
    findAll(): Promise<Offer[]>;
    findOne(id: string): Promise<Offer>;
    findAllUser(userId: string): Promise<Offer[]>;
    findAllOutgoing(userId: string): Promise<Offer[]>;
    findAllIncoming(userId: string): Promise<Offer[]>;
    findAllByStatus(status: string): Promise<Offer[]>;
    findAllUserStatus(userId: string, status: string): Promise<Offer[]>;
    findAllUserStatusOutgoing(userId: string, status: string): Promise<Offer[]>;
    findAllUserStatusIncoming(userId: string, status: string): Promise<Offer[]>;
    createOffer(offer: OfferInterface): Promise<void>;
    editOffer(id: string, offer: OfferInterface): Promise<void>;
    deleteOffer(id: string): Promise<void>;
}
