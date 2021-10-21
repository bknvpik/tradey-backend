import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateOfferDto } from './dtos/create-offer.dto';
import { UpdateOfferDto } from './dtos/update-offer.dto';
import { Offer } from './entities/offer.entity';
import { OffersService } from './offers.service';

@Controller('offers')
export class OffersController {
    constructor(
        private readonly offersService: OffersService
    ) {}

    @Get()
    async findAll(): Promise<Offer[]> {
        return await this.offersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Offer> {
        return await this.offersService.findOne(id);
    }

    @Get('user/:userId/outgoing')
    async findAllUserOutgoing(@Param('userId') userId: string): Promise<Offer[]> {
        return await this.offersService.findAllOutgoing(userId);
    }

    @Get('user/:userId/incoming')
    async findAllUserIncoming(@Param('userId') userId: string): Promise<Offer[]> {
        return await this.offersService.findAllIncoming(userId);
    }
    
    @Get('status/:status')
    async findAllStatus(@Param('status') status: string): Promise<Offer[]> {
        return await this.offersService.findAllByStatus(status);
    }

    @Get('user/:userId/status/:status')
    async findAllUserStatus(@Param() params: {userId: string, status: string}): Promise<Offer[]> {
        return await this.offersService.findAllUserStatus(params.userId, params.status)
    }

    @Get('user/:userId/status/:status/outgoing')
    async findAllUserStatusOutgoing(@Param() params: {userId: string, status: string}): Promise<Offer[]> {
        return await this.offersService.findAllUserStatusOutgoing(params.userId, params.status)
    }

    @Get('user/:userId/status/:status/incoming')
    async findAllUserStatusIncoming(@Param() params: {userId: string, status: string}): Promise<Offer[]> {
        return await this.offersService.findAllUserStatusIncoming(params.userId, params.status)
    }

    @Post()
    async createOffer(@Body() createOfferDto: CreateOfferDto): Promise<void> {
        return await this.offersService.createOffer(createOfferDto);
    }

    @Put(':id')
    async editOffer(@Param('id') id: string, @Body() updateOfferDto: UpdateOfferDto): Promise<void> {
        return await this.offersService.editOffer(id, updateOfferDto);
    }

    @Delete()
    async deleteOffer(@Param('id') id: string): Promise<void> {
        return await this.offersService.deleteOffer(id);
    }
}
