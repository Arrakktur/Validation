import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ValidationService} from "./validation.service";
import {ValidationEntity} from "./validation.entity";
import {ApiBearerAuth, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {RemoveValidateDto} from "./dto/removeValidation.dto";
import {AddValidateDto} from "./dto/addValidation.dto";

@ApiBearerAuth()
@ApiTags('validation')
@Controller('validation')
export class ValidationController {

    constructor(private validationService: ValidationService) {}

    @Get()
    @ApiOperation({summary: 'Получение полей валидации'})
    @ApiResponse({status: 200, description: 'Поля списка валидации', type: ValidationEntity, isArray: true})
    async getAll(): Promise<ValidationEntity[]> {
       return await this.validationService.getAll();
    }

    @Post()
    @ApiOperation({summary: 'Добавление поля валидации'})
    @ApiResponse({status: 200, description: 'Добавление поля валидации'})
    async add(@Body() addValidationDto: AddValidateDto){
        return this.validationService.add(addValidationDto);
    }

    @Get(':name')
    @ApiOperation({summary: 'Получение полей валидации по имени'})
    @ApiResponse({status: 200, description: 'Поля списка валидации по имени', type: ValidationEntity})
    async getByName(@Param() param): Promise<ValidationEntity> {
        return await this.validationService.getByName(param);
    }

    @Get(':id')
    @ApiOperation({summary: 'Получение полей валидации по id'})
    @ApiResponse({status: 200, description: 'Поля списка валидации по id', type: ValidationEntity})
    async getById(@Param() param): Promise<ValidationEntity> {
        return await this.validationService.getById(param);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Удаление поля по id'})
    @ApiResponse({status: 200, description: 'Удаление поля по id'})
    remove(@Body() removeValidateDto: RemoveValidateDto){
        this.validationService.remove(removeValidateDto);
    }

    @Get(':key')
    @ApiOperation({summary: 'Получение полей валидации по ключу'})
    @ApiResponse({status: 200, description: 'Поля списка валидации по ключу', type: ValidationEntity})
    async getByKey(@Param() param): Promise<ValidationEntity> {
        return await this.validationService.getByKey(param);
    }

    @Get(':group')
    @ApiOperation({summary: 'Получение полей валидации по id группы'})
    @ApiResponse({status: 200, description: 'Поля списка валидации по id группы', type: ValidationEntity, isArray: true})
    async getByGroup(@Param() param): Promise<ValidationEntity[]> {
        return await this.validationService.getByGroup(param);
    }

    @Get(':regexp')
    @ApiOperation({summary: 'Получение полей валидации по регулярному выражению'})
    @ApiResponse({status: 200, description: 'Поля списка валидации по регулярному выражению', type: ValidationEntity})
    async getByRegexp(@Param() param): Promise<ValidationEntity> {
        return await this.validationService.getByRegexp(param);
    }
}
