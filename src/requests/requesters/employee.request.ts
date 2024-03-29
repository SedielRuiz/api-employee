
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional } from 'class-validator'

export class ConsultRequest {

    @ApiProperty({
        type: String,
        description: 'name',
        example: 'Pepito Perez'
    })
    @IsOptional()
    name: string

    @ApiProperty({
        type: String,
        description: 'countryCode',
        example: 'COL'
    })
    @IsOptional()
    countryCode: string


    @ApiProperty({
        type: String,
        description: 'isActive',
        example: true,
        required: false
    })
    @IsOptional()
    isActive: string
}

export class CreateRequest {

    @ApiProperty({
        type: String,
        description: 'name',
        example: 'Pepito'
    })
    @IsNotEmpty()
    name: string

    @ApiProperty({
        type: String,
        description: 'lastname',
        example: 'Perez'
    })
    @IsNotEmpty()
    lastname: string

    @ApiProperty({
        type: Number,
        description: 'document',
        example: '123456789'
    })
    @IsNotEmpty()
    document: number
}

export class UpdateRequest {

    @ApiProperty({
        type: String,
        description: 'name',
        example: 'Pepito'
    })
    @IsNotEmpty()
    name: string

    @ApiProperty({
        type: String,
        description: 'lastname',
        example: 'Perez'
    })
    @IsNotEmpty()
    lastname: string

    @ApiProperty({
        type: Number,
        description: 'document',
        example: '123456789'
    })
    @IsNotEmpty()
    document: number
}