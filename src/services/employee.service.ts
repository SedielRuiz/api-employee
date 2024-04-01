import { Injectable, Logger } from '@nestjs/common'

import { Employees } from '../domain/entities/employees.entity'
import { EmployeeRepository } from 'src/repositories/employee.repository'
import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/employee.request';

@Injectable()
export class EmployeeService {
    private readonly logger = new Logger(EmployeeService.name);

    constructor(private employeeRepository: EmployeeRepository) {}

    async all (filter: ConsultRequest): Promise<Employees[]> {
        return await this.employeeRepository.all(filter)
    }

    async create (data: CreateRequest): Promise<Employees> {
        return await this.employeeRepository.create(data)
    }

    async update (id: number, data: UpdateRequest): Promise<Employees> {
        return await this.employeeRepository.update(id, data)
    }

    async delete(id: number): Promise<void> {
        await this.employeeRepository.delete(id)
    }
}
