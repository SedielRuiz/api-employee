import { Injectable, Logger } from '@nestjs/common'
import { EmployeeAfiliations } from 'src/domain/entities/employee-afiliations.entity';
import { AfiliationRepository } from 'src/repositories/afiliation.repository';
import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/afiliation.request';



@Injectable()
export class AfiliationService {
    private readonly logger = new Logger(AfiliationService.name);

    constructor(private afiliationRepository: AfiliationRepository) {}

    async all (id: number, filter: ConsultRequest): Promise<EmployeeAfiliations[]> {
        return await this.afiliationRepository.all(id, filter)
    }

    async create(employeeId: number, data: CreateRequest): Promise<EmployeeAfiliations> {
        data.employeeId = employeeId;  // Asegúrate de que employeeId se asigna correctamente
        console.log('AfiliationService - employeeId:', employeeId);  // Log para depuración
        console.log('AfiliationService - CreateRequest:', data);  // Log para depuración
        return await this.afiliationRepository.create(data);
    }

    async update (id: number, data: UpdateRequest): Promise<EmployeeAfiliations> {
        return await this.afiliationRepository.update(id, data)
    }

    async delete(id: number): Promise<void> {
        await this.afiliationRepository.delete(id)
    }
}
