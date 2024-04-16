import { Injectable, Logger } from '@nestjs/common'
import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/employee.request';
import { RelativeRepository } from 'src/repositories/relative.repository';
import { EmployeeRelatives } from 'src/domain/entities/employee-relatives.entity';

@Injectable()
export class RelativeService {
    private readonly logger = new Logger(RelativeService.name);

    constructor(private employeeRelativeRepository: RelativeRepository) {}

    async all (filter: ConsultRequest): Promise<EmployeeRelatives[]> {
        return await this.employeeRelativeRepository.all(filter)
    }

    async create (data: CreateRequest): Promise<EmployeeRelatives> {
        return await this.employeeRelativeRepository.create(data)
    }

    async update (id: number, data: UpdateRequest): Promise<EmployeeRelatives> {
        return await this.employeeRelativeRepository.update(id, data)
    }

    async delete(id: number): Promise<void> {
        await this.employeeRelativeRepository.delete(id)
    }
}
