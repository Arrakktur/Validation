import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ValidationEntity} from "./validation.entity";
import {Repository} from "typeorm";
import {RemoveValidateDto} from "./dto/removeValidation.dto";
import {AddValidateDto} from "./dto/addValidation.dto";
import {ExceptionService} from "../exception/exception.service";

@Injectable()
export class ValidationService {
    constructor( @InjectRepository(ValidationEntity) private validationRepository: Repository<ValidationEntity>, private exceptionService: ExceptionService ) {}

    async add(addValidationDto: AddValidateDto): Promise<ValidationEntity> {
        try {
            return await this.validationRepository.save(addValidationDto);
        } catch (error) {
            throw this.exceptionService.newException(error);
        }
    }

    getAll(): Promise<ValidationEntity[]> {
        try {
            return this.validationRepository.find();
        } catch (error) {
            throw this.exceptionService.newException(error);
        }
    }

    getByName(name: string): Promise<ValidationEntity> {
        try {
            return this.validationRepository.findOneBy({name});
        } catch (error) {
            throw this.exceptionService.newException(error);
        }
    }

    getById(id: number): Promise<ValidationEntity> {
        try {
            return this.validationRepository.findOneBy({id: id});
        } catch (error) {
            throw this.exceptionService.newException(error);
        }
    }

    getByKey(key: string): Promise<ValidationEntity> {
        try {
            return this.validationRepository.findOneBy({key});
        } catch (error) {
            throw this.exceptionService.newException(error);
        }
    }

    getByGroup(groupId: number): Promise<ValidationEntity[]> {
        try {
            return this.validationRepository.findBy({group: groupId});
        } catch (error) {
            throw this.exceptionService.newException(error);
        }
    }

    getByRegexp(regexp: string): Promise<ValidationEntity> {
        try {
            return this.validationRepository.findOneBy({regexp});
        } catch (error) {
            throw this.exceptionService.newException(error);
        }
    }

    async remove(removeValidateDto: RemoveValidateDto): Promise<void> {
        try {
            await this.validationRepository.delete(removeValidateDto.id);
        } catch (error) {
            throw this.exceptionService.newException(error);
        }
    }

    async validate(value: string, key: string): Promise<boolean>{
        const regexp = new RegExp((await this.getByKey(key)).regexp);
        return regexp.test(value);
    }
}
