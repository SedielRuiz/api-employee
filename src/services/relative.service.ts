import { Injectable, Logger } from '@nestjs/common'
import { RelativeRepository } from 'src/repositories/relative.repository';
import { EmployeeRelatives } from 'src/domain/entities/employee-relatives.entity';
import { ConsultRelativeRequest, CreateRelativeRequest, UpdateRelativeRequest } from 'src/requests/requesters/relative.request';

@Injectable()
export class RelativeService {
    private readonly logger = new Logger(RelativeService.name);

    constructor(private employeeRelativeRepository: RelativeRepository) {}

    async all (filter: ConsultRelativeRequest): Promise<EmployeeRelatives[]> {
        return await this.employeeRelativeRepository.all(filter)
    }

    async create (data: CreateRelativeRequest): Promise<EmployeeRelatives> {
        return await this.employeeRelativeRepository.create(data)
    }

    async update (id: number, data: UpdateRelativeRequest): Promise<EmployeeRelatives> {
        return await this.employeeRelativeRepository.update(id, data)
    }

    async delete(id: number): Promise<void> {
        await this.employeeRelativeRepository.delete(id)
    }
}
