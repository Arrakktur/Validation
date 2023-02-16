import {ApiProperty} from "@nestjs/swagger";

export class AddValidateDto{
    @ApiProperty({description: 'id поля', required: false})
    id?: number;
    @ApiProperty({description: 'Название поля', required: true})
    name: string;
    @ApiProperty({description: 'Ключ', required: true})
    key: string;
    @ApiProperty({description: 'Описание', required: true})
    description: string;
    @ApiProperty({description: 'id группы', required: false})
    group?: number;
    @ApiProperty({description: 'Рег. выражение', required: true})
    regexp: string;
}