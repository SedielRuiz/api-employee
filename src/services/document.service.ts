import { Injectable, Logger } from '@nestjs/common'
import { EmployeeDocuments } from 'src/domain/entities/employee-documents.entity';
import { DocumentRepository } from 'src/repositories/document.repository';
import { ConsultDocumentRequest, CreateDocumentRequest, UpdateDocumentRequest } from 'src/requests/requesters/document.request';


@Injectable()
export class DocumentService {
    private readonly logger = new Logger(DocumentService.name);

    constructor(private documentRepository: DocumentRepository) {}

    async all (filter: ConsultDocumentRequest): Promise<EmployeeDocuments[]> {
        return await this.documentRepository.all(filter)
    }

    async create (data: CreateDocumentRequest): Promise<EmployeeDocuments> {
        return await this.documentRepository.create(data)
    }

    async update (id: number, data: UpdateDocumentRequest): Promise<EmployeeDocuments> {
        return await this.documentRepository.update(id, data)
    }

    async delete(id: number): Promise<void> {
        await this.documentRepository.delete(id)
    }
}
