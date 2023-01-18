import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ValidationEntity} from "./validation.entity";
import {Repository} from "typeorm";
import {RemoveValidateDto} from "./dto/removeValidation.dto";
import {AddValidateDto} from "./dto/addValidation.dto";

@Injectable()
export class ValidationService {
    constructor( @InjectRepository(ValidationEntity) private validationRepository: Repository<ValidationEntity> ) {}

    add(addValidationDto: AddValidateDto): Promise<ValidationEntity> {
        return this.validationRepository.save(addValidationDto);
    }

    getAll(): Promise<ValidationEntity[]> {
        return this.validationRepository.find();
    }

    getByName(name: string): Promise<ValidationEntity> {
        return this.validationRepository.findOneBy({name});
    }

    getById(id: number): Promise<ValidationEntity> {
        return this.validationRepository.findOneBy({id});
    }

    getByKey(key: string): Promise<ValidationEntity> {
        return this.validationRepository.findOneBy({key});
    }

    getByGroup(groupId: number): Promise<ValidationEntity[]> {
        return this.validationRepository.findBy({group: groupId});
    }

    getByRegexp(regexp: string): Promise<ValidationEntity> {
        return this.validationRepository.findOneBy({regexp});
    }

    async remove(removeValidateDto: RemoveValidateDto): Promise<void> {
        await this.validationRepository.delete(removeValidateDto.id);
    }
}
