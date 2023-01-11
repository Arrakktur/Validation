import {Controller, Get} from '@nestjs/common';
import {ValidationService} from "./validation.service";

@Controller('validation')
export class ValidationController {

    constructor() {}

    /**
     * Получение всего списка валидации
     */
    @Get()
    getAll(): string[] {
       return [];
    }
}
