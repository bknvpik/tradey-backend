import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Repository } from 'typeorm';
import { Popularity } from '../entities/popularity.entity';
import { PopularityService } from '../popularity.service';
export declare class PopularityMiddleware implements NestMiddleware {
    private readonly popularityRepository;
    private readonly popularityService;
    constructor(popularityRepository: Repository<Popularity>, popularityService: PopularityService);
    use(req: Request, res: Response, next: NextFunction): void;
}
