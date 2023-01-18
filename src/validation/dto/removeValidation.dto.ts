import {ApiProperty} from "@nestjs/swagger";

export class RemoveValidateDto{
    @ApiProperty({description: 'id поля'})
    id: number;
}