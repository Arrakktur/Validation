import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {GroupEntity} from "../group/group.entity";

@Entity()
export class ValidationEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() name: string;
    @Column() key: string;
    @Column() description: string;
    @ManyToOne(type => GroupEntity, group => group.id) group: number;
    @Column() regexp: string;
}