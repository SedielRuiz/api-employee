import { Injectable, Logger } from '@nestjs/common'
import { BaseOperation } from './base-operation'
import { DocumentService } from 'src/services/document.service'
import { ConsultDocumentRequest, CreateDocumentRequest, UpdateDocumentRequest } from 'src/requests/requesters/document.request'

@Injectable()
export class DocumentOperation implements BaseOperation<any, Promise<any>>
{
    private readonly logger = new Logger(DocumentOperation.name)
    constructor(
        private documentService: DocumentService
    ) {}

    async execute(filters: ConsultDocumentRequest): Promise<any> {
        return await this.documentService.all(filters)
    }

    async create(data: CreateDocumentRequest): Promise<any> {
        return await this.documentService.create(data)
    }

    async update(params, data: UpdateDocumentRequest): Promise<any> {
        await this.documentService.update(params.id, data)
        return 'Updated successfull'
    }
    async delete(id: number): Promise<any> {
        await this.documentService.delete(id)
        return 'Deleted successfully'
    }
}