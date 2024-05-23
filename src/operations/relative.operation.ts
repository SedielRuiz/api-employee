import { Injectable, Logger } from '@nestjs/common'
import { BaseOperation } from './base-operation'

import { RelativeService } from 'src/services/relative.service'
import { ConsultRelativeRequest, CreateRelativeRequest, UpdateRelativeRequest } from 'src/requests/requesters/relative.request'

@Injectable()
export class RelativeOperation implements BaseOperation<any, Promise<any>>
{
    private readonly logger = new Logger(RelativeOperation.name)
    constructor(
        private relativeService: RelativeService
    ) {}

    async execute(filters: ConsultRelativeRequest): Promise<any> {
        return await this.relativeService.all(filters)
    }

    async create(data: CreateRelativeRequest): Promise<any> {
        return await this.relativeService.create(data)
    }

    async update(params, data: UpdateRelativeRequest): Promise<any> {
        await this.relativeService.update(params.id, data)
        return 'Updated successfull'
    }
    async delete(id: number): Promise<any> {
        await this.relativeService.delete(id)
        return 'Deleted successfully'
    }
}