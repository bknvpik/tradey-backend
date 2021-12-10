import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PopularityService } from './popularity.service';
import { PopularityController } from './popularity.controller';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favorite } from './entities/favorite.entity';
import { PopularityMiddleware } from './middlewares/popularity.middleware';
import { Popularity } from './entities/popularity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Favorite, Popularity])],
  providers: [PopularityService],
  exports: [PopularityModule, PopularityService, TypeOrmModule],
  controllers: [PopularityController]
})
export class PopularityModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PopularityMiddleware)
      .forRoutes('popularity/items/add-favorite', 'popularity/items/delete-favorite')
  }
}
