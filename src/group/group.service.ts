import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ValidationEntity} from "../validation/validation.entity";
import {Repository} from "typeorm";
import {GroupEntity} from "./group.entity";

@Injectable()
export class GroupService {
    constructor( @InjectRepository(GroupEntity) private groupRepository: Repository<GroupEntity> ) {}
    getAll(): Promise<GroupEntity[]> {
        return this.groupRepository.find();
    }

    getByName(name: string): Promise<GroupEntity> {
        return this.groupRepository.findOneBy({name});
    }

    getById(id: number): Promise<GroupEntity> {
        return this.groupRepository.findOneBy({id});
    }

    getByKey(key: string): Promise<GroupEntity> {
        return this.groupRepository.findOneBy({key});
    }

    async remove(id: number): Promise<void> {
        await this.groupRepository.delete(id);
    }
}
