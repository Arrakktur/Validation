import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ValidationEntity} from "./validation/validation.entity";
import {GroupEntity} from "./group/group.entity";
import {ValidationModule} from "./validation/validation.module";
import {GroupModule} from "./group/group.module";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'validation',
          entities: [ValidationEntity, GroupEntity],
          retryAttempts: 10,
          retryDelay: 3000,
          autoLoadEntities: false,
          synchronize: true, // не для прода
      }),
      ValidationModule,
      GroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
