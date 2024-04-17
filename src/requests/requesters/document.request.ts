import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional } from 'class-validator'

export class ConsultDocumentRequest {

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
        example: 'Document Name',
        required: false,
    })
    @IsOptional()
    name?: string;

    @ApiProperty({
        type: String,
        description: 'extension',
        example: 'pdf',
        required: false,
    })
    @IsOptional()
    extension?: string;

    @ApiProperty({
        type: Number,
        description: 'version',
        example: 1,
        required: false,
    })
    @IsOptional()
    version?: number;

    @ApiProperty({
        type: Boolean,
        description: 'status',
        example: true,
        required: false,
    })
    @IsOptional()
    status?: boolean;
}

export class CreateDocumentRequest {

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
        example: 'Document Name',
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: String,
        description: 'extension',
        example: 'pdf',
    })
    @IsNotEmpty()
    extension: string;

    @ApiProperty({
        type: Number,
        description: 'version',
        example: 1,
    })
    @IsNotEmpty()
    version: number;

    @ApiProperty({
        type: String,
        description: 'url',
        example: 'http://example.com/document.pdf',
    })
    @IsNotEmpty()
    url: string;

    @ApiProperty({
        type: Boolean,
        description: 'status',
        example: true,
    })
    @IsNotEmpty()
    status: boolean;
}

export class UpdateDocumentRequest {

    @ApiProperty({
        type: String,
        description: 'name',
        example: 'Updated Document Name',
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: String,
        description: 'extension',
        example: 'docx',
    })
    @IsNotEmpty()
    extension: string;

    @ApiProperty({
        type: Number,
        description: 'version',
        example: 2,
    })
    @IsNotEmpty()
    version: number;

    @ApiProperty({
        type: String,
        description: 'url',
        example: 'http://example.com/updated_document.docx',
    })
    @IsNotEmpty()
    url: string;

    @ApiProperty({
        type: Boolean,
        description: 'status',
        example: false,
    })
    @IsNotEmpty()
    status: boolean;
}