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

    @Get('id/:id')
    @ApiOperation({summary: 'Получение полей валидации по id'})
    @ApiResponse({status: 200, description: 'Поля списка валидации по id', type: ValidationEntity})
    async getById(@Param('id') param: number): Promise<ValidationEntity> {
        return await this.validationService.getById(param);
    }

    @Delete('id/:id')
    @ApiOperation({summary: 'Удаление поля по id'})
    @ApiResponse({status: 200, description: 'Удаление поля по id'})
    remove(@Body('id') removeValidateDto: RemoveValidateDto){
        this.validationService.remove(removeValidateDto);
    }

    @Get('name/:name')
    @ApiOperation({summary: 'Получение полей валидации по имени'})
    @ApiResponse({status: 200, description: 'Поля списка валидации по имени', type: ValidationEntity})
    async getByName(@Param('name') param: string): Promise<ValidationEntity> {
        return await this.validationService.getByName(param);
    }

    @Get('key/:key')
    @ApiOperation({summary: 'Получение полей валидации по ключу'})
    @ApiResponse({status: 200, description: 'Поля списка валидации по ключу', type: ValidationEntity})
    async getByKey(@Param('key') param: string): Promise<ValidationEntity> {
        return await this.validationService.getByKey(param);
    }

    @Get('group/:group')
    @ApiOperation({summary: 'Получение полей валидации по id группы'})
    @ApiResponse({status: 200, description: 'Поля списка валидации по id группы', type: ValidationEntity, isArray: true})
    async getByGroup(@Param('group') param: number): Promise<ValidationEntity[]> {
        return await this.validationService.getByGroup(param);
    }

    @Get('regexp/:regexp')
    @ApiOperation({summary: 'Получение полей валидации по регулярному выражению'})
    @ApiResponse({status: 200, description: 'Поля списка валидации по регулярному выражению', type: ValidationEntity})
    async getByRegexp(@Param('regexp') param: string): Promise<ValidationEntity> {
        return await this.validationService.getByRegexp(param);
    }

    @Get('validate/:value/:key')
    @ApiOperation({summary: 'Валидация значений'})
    @ApiResponse({status: 200, description: 'Валидация значения по ключу регулярного выражения'})
    validate(@Param('value') value: string, @Param('key') key: string){
        return this.validationService.validate(value, key);
    }
}
