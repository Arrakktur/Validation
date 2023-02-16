import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ValidationEntity} from "./validation.entity";
import {ValidationService} from "./validation.service";
import {ValidationController} from "./validation.controller";
import {ExceptionModule} from "../exception/exception.module";

@Module({
    imports: [TypeOrmModule.forFeature([ValidationEntity]), ExceptionModule],
    providers: [ValidationService],
    controllers: [ValidationController],
    exports: [ValidationService],
})
export class ValidationModule {}
