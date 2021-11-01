import { CreateOfferDto } from './dtos/create-offer.dto';
import { UpdateOfferDto } from './dtos/update-offer.dto';
import { Offer } from './entities/offer.entity';
import { OffersService } from './offers.service';
export declare class OffersController {
    private readonly offersService;
    constructor(offersService: OffersService);
    findAll(): Promise<Offer[]>;
    findOne(id: string): Promise<Offer>;
    findAllUserOutgoing(userId: string): Promise<Offer[]>;
    findAllUserIncoming(userId: string): Promise<Offer[]>;
    findAllStatus(status: string): Promise<Offer[]>;
    findAllUserStatus(params: {
        userId: string;
        status: string;
    }): Promise<Offer[]>;
    findAllUserStatusOutgoing(params: {
        userId: string;
        status: string;
    }): Promise<Offer[]>;
    findAllUserStatusIncoming(params: {
        userId: string;
        status: string;
    }): Promise<Offer[]>;
    createOffer(createOfferDto: CreateOfferDto): Promise<void>;
    editOffer(id: string, updateOfferDto: UpdateOfferDto): Promise<void>;
    deleteOffer(id: string): Promise<void>;
}
