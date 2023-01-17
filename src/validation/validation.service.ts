import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ValidationEntity} from "./validation.entity";
import {Repository} from "typeorm";

@Injectable()
export class ValidationService {
    constructor( @InjectRepository(ValidationEntity) private validationRepository: Repository<ValidationEntity> ) {}

    /**
     * Получение всего списка
     * @returns {Promise<ValidationEntity[]>} список всей валидации
     */
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

    getByGroup(groupId: number): Promise<ValidationEntity> {
        return this.validationRepository.findOneBy({group: groupId});
    }

    getByRegexp(regexp: string): Promise<ValidationEntity> {
        return this.validationRepository.findOneBy({regexp});
    }

    async remove(id: number): Promise<void> {
        await this.validationRepository.delete(id);
    }
}
