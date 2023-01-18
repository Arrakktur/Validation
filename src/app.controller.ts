import {Controller, Get, Render} from '@nestjs/common';
import {AppService} from './app.service';
import {ValidationService} from "./validation/validation.service";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    @ApiOperation({summary: 'Страница с полями валидации'})
    @ApiResponse({status: 200, description: 'html страница со списком полей валидации'})
    @Render('index')
    async root() {
        return {
            title: 'Валидация',
            validation: await this.appService.getAllValidation(),
        };
    }
}
