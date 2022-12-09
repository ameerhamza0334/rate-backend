import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from './entities/roles.entity';
import { Flags, Tags, Users } from './entities/users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    controllers: [UsersController],
    imports: [TypeOrmModule.forFeature([Users, Roles, Flags, Tags])],
    providers: [UsersService],
    exports:[UsersModule]
})
export class UsersModule { }
