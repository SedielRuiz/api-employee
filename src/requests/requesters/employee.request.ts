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
        type: Boolean,
        description: 'isActive',
        example: true
    })
    @IsOptional()
    isActive: boolean

    @ApiProperty({
        type: String,
        description: 'email',
        example: 'pepito@example.com'
    })
    @IsOptional()
    email: string

    @ApiProperty({
        type: String,
        description: 'phone',
        example: '+1234567890'
    })
    @IsOptional()
    phone: string

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
        example: 123456789
    })
    @IsNotEmpty()
    document: number

    @ApiProperty({
        type: String,
        description: 'email',
        example: 'pepito@example.com'
    })
    @IsNotEmpty()
    email: string

    @ApiProperty({
        type: String,
        description: 'phone',
        example: '+1234567890'
    })
    @IsNotEmpty()
    phone: string

    @ApiProperty({
        type: String,
        description: 'address',
        example: '123 Main St, City, Country'
    })
    @IsNotEmpty()
    address: string

    @ApiProperty({
        type: Boolean,
        description: 'status',
        example: true
    })
    @IsNotEmpty()
    status: boolean

    @ApiProperty({
        type: String,
        description: 'department',
        example: 'HR'
    })
    @IsOptional()
    department: string

    @ApiProperty({
        type: Number,
        description: 'salary',
        example: 50000
    })
    @IsOptional()
    salary: number

    @ApiProperty({
        type: Date,
        description: 'hireDate',
        example: '2024-03-31T00:00:00.000Z'
    })
    @IsOptional()
    hireDate: Date

    @ApiProperty({
        type: String,
        description: 'supervisor',
        example: 'John Doe'
    })
    @IsOptional()
    supervisor: string

    @ApiProperty({
        type: String,
        description: 'emergencyContactName',
        example: 'Jane Doe'
    })
    @IsOptional()
    emergencyContactName: string

    @ApiProperty({
        type: String,
        description: 'emergencyContactPhone',
        example: '+1234567890'
    })
    @IsOptional()
    emergencyContactPhone: string
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
        example: 123456789
    })
    @IsNotEmpty()
    document: number

    @ApiProperty({
        type: String,
        description: 'email',
        example: 'pepito@example.com'
    })
    @IsOptional()
    email: string

    @ApiProperty({
        type: String,
        description: 'phone',
        example: '+1234567890'
    })
    @IsOptional()
    phone: string

    @ApiProperty({
        type: String,
        description: 'address',
        example: '123 Main St, City, Country'
    })
    @IsOptional()
    address: string

    @ApiProperty({
        type: Boolean,
        description: 'status',
        example: true
    })
    @IsOptional()
    status: boolean

    @ApiProperty({
        type: String,
        description: 'department',
        example: 'HR'
    })
    @IsOptional()
    department: string

    @ApiProperty({
        type: Number,
        description: 'salary',
        example: 50000
    })
    @IsOptional()
    salary: number

    @ApiProperty({
        type: Date,
        description: 'hireDate',
        example: '2024-03-31T00:00:00.000Z'
    })
    @IsOptional()
    hireDate: Date

    @ApiProperty({
        type: String,
        description: 'supervisor',
        example: 'John Doe'
    })
    @IsOptional()
    supervisor: string

    @ApiProperty({
        type: String,
        description: 'emergencyContactName',
        example: 'Richard Smith'
    })
    @IsOptional()
    emergencyContactName: string

    @ApiProperty({
        type: String,
        description: 'emergencyContactPhone',
        example: '+1234584890'
    })
    @IsOptional()
    emergencyContactPhone: string
}
