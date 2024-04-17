import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EmployeeDocuments } from 'src/domain/entities/employee-documents.entity'
import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/document.request'
import { Repository } from 'typeorm'

@Injectable()
export class DocumentRepository {

    constructor(
        @InjectRepository(EmployeeDocuments)
        private documentsRepository: Repository<EmployeeDocuments>,
    ) {}

    async all (filter: ConsultRequest): Promise<EmployeeDocuments[]> {
        const employeeDocuments: EmployeeDocuments[] = await this.documentsRepository.find({
            where: filter,
        })

        return employeeDocuments
    }

    async create (data: CreateRequest): Promise<EmployeeDocuments> {
        const employeeDocument: EmployeeDocuments = await this.documentsRepository.save(data)

        if (!employeeDocument)
            throw new NotFoundException(`Document with [body: ${JSON.stringify(data)}] not created`)

        return employeeDocument
    }

    async update (id: number, data: UpdateRequest): Promise<EmployeeDocuments> {
        const employeeDocument: any = await this.documentsRepository.update(id, data)

        if (!employeeDocument)
            throw new NotFoundException(`Document with [body: ${JSON.stringify(data)}] not updated`)


        return employeeDocument
    }

    async delete(id: number) {
        const employeeDocument: any = await this.documentsRepository.delete(id)
        if (!employeeDocument)
            throw new NotFoundException(`Document with ID ${id} not found`)
    }

}
