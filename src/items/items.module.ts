import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Category } from './entities/category.entity';
import { Condition } from './entities/condition.entity';
import { ItemImages } from './entities/item-images.entity';
import { Size } from './entities/size.entity';

@Module({
  imports: [TypeOrmModule.forFeature
    ([
      Category,
      Condition,
      ItemImages,
      Item,
      Size
    ])
  ],
  providers: [ItemsService],
  controllers: [ItemsController]
})
export class ItemsModule {}
