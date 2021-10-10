import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { OffersModule } from './offers/offers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, ItemsModule, OffersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
