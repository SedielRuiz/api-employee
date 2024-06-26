import { Injectable, Logger } from '@nestjs/common'
import { BaseOperation } from './base-operation'
import { EmployeeService } from '@service/employee.service'
import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/employee.request'
@Injectable()
export class EmployeeOperation implements BaseOperation<any, Promise<any>>
{
    private readonly logger = new Logger(EmployeeOperation.name)
    constructor(
        private employeeService: EmployeeService
    ) {}

    async execute(filters: ConsultRequest): Promise<any> {
        return await this.employeeService.all(filters)
    }

    async create(data: CreateRequest): Promise<any> {
        return await this.employeeService.create(data)
    }

    async update(params, data: UpdateRequest): Promise<any> {
        await this.employeeService.update(params.id, data)
        return 'Updated successfull'
    }
    async delete(id: number): Promise<any> {
        await this.employeeService.delete(id)
        return 'Deleted successfully'
    }
}