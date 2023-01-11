import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class GroupEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() name: string;
    @Column() key: string;
    @Column() description: string;
}