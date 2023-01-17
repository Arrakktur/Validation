import {Controller, Get} from '@nestjs/common';
import {ValidationService} from "./validation.service";
import {ValidationEntity} from "./validation.entity";

@Controller('validation')
export class ValidationController {

    constructor(private validationService: ValidationService) {}

    /**
     * Получение всего списка валидации
     */
    @Get()
    async getAll(): Promise<ValidationEntity[]> {
       return await this.validationService.getAll();
    }
}
