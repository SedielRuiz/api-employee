import { Injectable, Logger } from '@nestjs/common'
import { EmployeeDocuments } from 'src/domain/entities/employee-documents.entity';
import { DocumentRepository } from 'src/repositories/document.repository';
import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/document.request';


@Injectable()
export class DocumentService {
    private readonly logger = new Logger(DocumentService.name);

    constructor(private documentRepository: DocumentRepository) {}

    async all (filter: ConsultRequest): Promise<EmployeeDocuments[]> {
        return await this.documentRepository.all(filter)
    }

    async create (data: CreateRequest): Promise<EmployeeDocuments> {
        return await this.documentRepository.create(data)
    }

    async update (id: number, data: UpdateRequest): Promise<EmployeeDocuments> {
        return await this.documentRepository.update(id, data)
    }

    async delete(id: number): Promise<void> {
        await this.documentRepository.delete(id)
    }
}
