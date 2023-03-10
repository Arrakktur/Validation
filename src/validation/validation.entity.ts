import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {GroupEntity} from "../group/group.entity";
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class ValidationEntity {
    @ApiProperty({description: 'id поля', required: true})
    @PrimaryGeneratedColumn()
    id: number;
    @ApiProperty({description: 'Название поля'})
    @Column()
    name: string;
    @ApiProperty({description: 'Ключ'})
    @Column()
    key: string;
    @ApiProperty({description: 'Описание'})
    @Column()
    description: string;
    @ApiProperty({description: 'id группы'})
    @ManyToOne(type => GroupEntity, group => group.id)
    group: number;
    @ApiProperty({description: 'Рег. выражение'})
    @Column()
    regexp: string;
}