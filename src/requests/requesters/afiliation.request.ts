import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class ConsultRequest {

    @ApiProperty({
        type: Number,
        description: 'employeeId',
        example: 1,
    })
    @IsNotEmpty()
    employeeId: number;

    @ApiProperty({
        type: String,
        description: 'entityName',
        example: 'Health Insurance Company'
    })
    @IsOptional()
    entityName: string;

    @ApiProperty({
        type: Date,
        description: 'dateAfiliation',
        example: '2024-04-15T00:00:00.000Z'
    })
    @IsOptional()
    dateAfiliation: Date;

    @ApiProperty({
        type: Boolean,
        description: 'status',
        example: true
    })
    @IsOptional()
    status: boolean;

}

export class CreateRequest {

    @ApiProperty({
        type: Number,
        description: 'employeeId',
        example: 1,
    })
    @IsNotEmpty()
    employeeId: number;

    @ApiProperty({
        type: String,
        description: 'entityName',
        example: 'Health Insurance Company'
    })
    @IsNotEmpty()
    entityName: string;

    @ApiProperty({
        type: Date,
        description: 'dateAfiliation',
        example: '2024-04-15T00:00:00.000Z'
    })
    @IsNotEmpty()
    dateAfiliation: Date;

    @ApiProperty({
        type: Boolean,
        description: 'status',
        example: true
    })
    @IsNotEmpty()
    status: boolean;

}

export class UpdateRequest {

    @ApiProperty({
        type: Number,
        description: 'employeeId',
        example: 1,
    })
    @IsNotEmpty()
    employeeId: number;

    @ApiProperty({
        type: String,
        description: 'entityName',
        example: 'New Health Insurance Company'
    })
    @IsNotEmpty()
    entityName: string;

    @ApiProperty({
        type: Date,
        description: 'dateAfiliation',
        example: '2024-04-15T00:00:00.000Z'
    })
    @IsNotEmpty()
    dateAfiliation: Date;

    @ApiProperty({
        type: Boolean,
        description: 'status',
        example: true
    })
    @IsNotEmpty()
    status: boolean;
}