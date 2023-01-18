import {ApiProperty} from "@nestjs/swagger";

export class AddValidateDto{
    @ApiProperty({description: 'id поля'})
    id: number;
    @ApiProperty({description: 'Название поля'})
    name: string;
    @ApiProperty({description: 'Ключ'})
    key: string;
    @ApiProperty({description: 'Описание'})
    description: string;
    @ApiProperty({description: 'id группы'})
    group: number;
    @ApiProperty({description: 'Рег. выражение'})
    regexp: string;
}