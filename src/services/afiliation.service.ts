import { Injectable, Logger } from '@nestjs/common'
import { EmployeeAfiliations } from 'src/domain/entities/employee-afiliations.entity';
import { AfiliationRepository } from 'src/repositories/afiliation.repository';
import { ConsultAfiliationRequest, CreateAfiliationRequest, UpdateAfiliationRequest } from 'src/requests/requesters/afiliation.request';

@Injectable()
export class AfiliationService {
    private readonly logger = new Logger(AfiliationService.name);

    constructor(private afiliationRepository: AfiliationRepository) {}

    async all (filter: ConsultAfiliationRequest): Promise<EmployeeAfiliations[]> {
        return await this.afiliationRepository.all(filter)
    }

    async create (data: CreateAfiliationRequest): Promise<EmployeeAfiliations> {
        return await this.afiliationRepository.create(data)
    }

    async update (id: number, data: UpdateAfiliationRequest): Promise<EmployeeAfiliations> {
        return await this.afiliationRepository.update(id, data)
    }

    async delete(id: number): Promise<void> {
        await this.afiliationRepository.delete(id)
    }
}
