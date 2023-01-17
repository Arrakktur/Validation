import {Controller, Get, Render} from '@nestjs/common';
import {AppService} from './app.service';
import {ValidationService} from "./validation/validation.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    @Render('index')
    async root() {
        return {
            title: 'Валидация',
            validation: await this.appService.getAllValidation(),
        };
    }
}
