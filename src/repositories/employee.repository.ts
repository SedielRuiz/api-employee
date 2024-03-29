import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employees } from 'src/domain/entities/employees.entity';
import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/employee.request';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeRepository {
    
    constructor(
        @InjectRepository(Employees)
        private employeeRepository: Repository<Employees>,
    ) {}

    async all (filter: ConsultRequest): Promise<Employees[]> {
        const employees: Employees[] = await this.employeeRepository.find({
            where: filter,
        })

        return employees
    }

    async create (data: CreateRequest): Promise<Employees> {
        const employee: Employees = await this.employeeRepository.save(data)

        if (!employee)
            throw new NotFoundException(`Employee with [body: ${JSON.stringify(data)}] not created`);

        return employee
    }

    async update (id: number, data: UpdateRequest): Promise<Employees> {
        const employee: any = await this.employeeRepository.update(id, data)

        if (!employee)
            throw new NotFoundException(`Employee with [body: ${JSON.stringify(data)}] not updated`);


        return employee
    }

}
