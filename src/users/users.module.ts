import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDetails } from './entities/user-details.entity';
import { UserImage } from './entities/user-image.entity';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    User,
    UserDetails,
    UserImage
  ])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersModule, UsersService, TypeOrmModule]
})
export class UsersModule {}
