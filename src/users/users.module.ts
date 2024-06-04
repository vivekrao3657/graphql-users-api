import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users_data } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([users_data])],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
