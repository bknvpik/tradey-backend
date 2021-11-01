import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { OffersModule } from './offers/offers.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, getConnectionOptions } from 'typeorm';
import { UrlGeneratorModule } from 'nestjs-url-generator';
import { ConfigModule } from '@nestjs/config';
import { urlGeneratorModuleConfig } from './config/singed-url.config';
import { AuthService } from './auth/auth.service';

TypeOrmModule.forRootAsync({
  useFactory: async () =>
    Object.assign(await getConnectionOptions(), {
      autoLoadEntities: true,
    }),
});

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    ItemsModule,
    OffersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
