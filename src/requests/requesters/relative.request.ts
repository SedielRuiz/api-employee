import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class ConsultRelativeRequest {

    @ApiProperty({
        type: Number,
        description: 'employeeId',
        example: 1,
    })
    @IsNotEmpty()
    employeeId: number;

    @ApiProperty({
        type: String,
        description: 'name',
        example: 'Pepito Perez'
    })
    @IsOptional()
    name: string;

    @ApiProperty({
        type: String,
        description: 'countryCode',
        example: 'COL'
    })
    @IsOptional()
    countryCode: string;

    @ApiProperty({
        type: Boolean,
        description: 'isActive',
        example: true
    })
    @IsOptional()
    isActive: boolean;

    @ApiProperty({
        type: String,
        description: 'email',
        example: 'pepito@example.com'
    })
    @IsOptional()
    email: string;

    @ApiProperty({
        type: String,
        description: 'phone',
        example: '+1234567890'
    })
    @IsOptional()
    phone: string;

}

export class CreateRelativeRequest {

    @ApiProperty({
        type: Number,
        description: 'employeeId',
        example: 1,
    })
    @IsNotEmpty()
    employeeId: number;

    @ApiProperty({
        type: String,
        description: 'name',
        example: 'Pepito'
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: String,
        description: 'lastname',
        example: 'Perez'
    })
    @IsNotEmpty()
    lastname: string;

    @ApiProperty({
        type: Number,
        description: 'document',
        example: 5
    })
    @IsNotEmpty()
    document: number;

    @ApiProperty({
        type: String,
        description: 'email',
        example: 'pepito@example.com'
    })
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        type: String,
        description: 'phone',
        example: '+1234567890'
    })
    @IsNotEmpty()
    phone: string;

    @ApiProperty({
        type: String,
        description: 'address',
        example: '123 Main St, City, Country'
    })
    @IsNotEmpty()
    address: string;

    @ApiProperty({
        type: Boolean,
        description: 'status',
        example: true
    })
    @IsNotEmpty()
    status: boolean;

    @ApiProperty({
        type: String,
        description: 'department',
        example: 'HR'
    })
    @IsOptional()
    department: string;

    @ApiProperty({
        type: Date,
        description: 'birthDate',
        example: '1990-01-01T00:00:00.000Z'
    })
    @IsOptional()
    birthDate: Date;

    @ApiProperty({
        type: String,
        description: 'relationship',
        example: 'Sibling'
    })
    @IsOptional()
    relationship: string;

}

export class UpdateRelativeRequest {

    @ApiProperty({
        type: String,
        description: 'name',
        example: 'Pepito'
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: String,
        description: 'lastname',
        example: 'Perez'
    })
    @IsNotEmpty()
    lastname: string;

    @ApiProperty({
        type: Number,
        description: 'document',
        example: 123456789
    })
    @IsNotEmpty()
    document: number;

    @ApiProperty({
        type: String,
        description: 'email',
        example: 'pepito@example.com'
    })
    @IsOptional()
    email: string;

    @ApiProperty({
        type: String,
        description: 'phone',
        example: '+1234567890'
    })
    @IsOptional()
    phone: string;

    @ApiProperty({
        type: String,
        description: 'address',
        example: '123 Main St, City, Country'
    })
    @IsOptional()
    address: string;

    @ApiProperty({
        type: Boolean,
        description: 'status',
        example: true
    })
    @IsOptional()
    status: boolean;

    @ApiProperty({
        type: String,
        description: 'department',
        example: 'HR'
    })
    @IsOptional()
    department: string;

    @ApiProperty({
        type: Date,
        description: 'birthDate',
        example: '1990-01-01T00:00:00.000Z'
    })
    @IsOptional()
    birthDate: Date;

    @ApiProperty({
        type: String,
        description: 'relationship',
        example: 'Sibling'
    })
    @IsOptional()
    relationship: string;

}
