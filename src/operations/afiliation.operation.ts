import { Injectable, Logger } from '@nestjs/common'
import { BaseOperation } from './base-operation'
import { AfiliationService } from 'src/services/afiliation.service'
import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/afiliation.request'


@Injectable()
export class AfiliationOperation implements BaseOperation<any, Promise<any>>
{
    private readonly logger = new Logger(AfiliationOperation.name)
    constructor(
        private afiliationService: AfiliationService
    ) {}

    async execute(filters: ConsultRequest): Promise<any> {
        return await this.afiliationService.all(filters)
    }

    async create(data: CreateRequest): Promise<any> {
        return await this.afiliationService.create(data)
    }

    async update(params, data: UpdateRequest): Promise<any> {
        await this.afiliationService.update(params.id, data)
        return 'Updated successfull'
    }
    async delete(id: number): Promise<any> {
        await this.afiliationService.delete(id)
        return 'Deleted successfully'
    }
}