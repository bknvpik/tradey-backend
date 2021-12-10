import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response, NextFunction } from 'express';
import { getRepository, Repository } from 'typeorm';
import { Popularity } from '../entities/popularity.entity';
import { PopularityService } from '../popularity.service';

@Injectable()
export class PopularityMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(Popularity)
    private readonly popularityRepository: Repository<Popularity>,
    private readonly popularityService: PopularityService
  ) {}

  use(req: Request, res: Response, next: NextFunction) {

    if(req.baseUrl.endsWith('add-favorite')) {
      this.popularityRepository.createQueryBuilder()
        .update(Popularity)
        .set({ likes: () => 'likes + 1' })
        .where('item = :id', { id: req.body.item })
        .execute();
    }

    if(req.baseUrl.endsWith('delete-favorite')) {
    this.popularityRepository.createQueryBuilder()
        .update(Popularity)
        .set({ likes: () => 'likes - 1' })
        .where('item = :id', { id: req.body.item })
        .execute();
    }

    this.popularityService.calcAndUpdatePopularity(req.body.item);

    next();
  }
}
