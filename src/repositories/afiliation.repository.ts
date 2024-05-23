import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EmployeeAfiliations } from 'src/domain/entities/employee-afiliations.entity'
import { ConsultAfiliationRequest, CreateAfiliationRequest, UpdateAfiliationRequest } from 'src/requests/requesters/afiliation.request'
import { Repository } from 'typeorm'

@Injectable()
export class AfiliationRepository {

    constructor(
        @InjectRepository(EmployeeAfiliations)
        private afiliationRepository: Repository<EmployeeAfiliations>,
    ) {}


    async all(id: number, filter: ConsultAfiliationRequest): Promise<EmployeeAfiliations[]> {
        const employeeAfiliations: EmployeeAfiliations[] = await this.afiliationRepository.find({
          where: {
            employeeId: id,
            ...filter,
          },
        });
        return employeeAfiliations;
      }


    async create (data: CreateAfiliationRequest): Promise<EmployeeAfiliations> {
        const employeeAfiliation: EmployeeAfiliations = await this.afiliationRepository.save(data)

        if (!employeeAfiliation)
            throw new NotFoundException(`Afiliation with [body: ${JSON.stringify(data)}] not created`)

        return employeeAfiliation
    }

    async update (id: number, data: UpdateAfiliationRequest): Promise<EmployeeAfiliations> {
        const employeeAfiliation: any = await this.afiliationRepository.update(id, data)

        if (!employeeAfiliation)
            throw new NotFoundException(`Afiliation with [body: ${JSON.stringify(data)}] not updated`)


        return employeeAfiliation
    }

    async delete(id: number) {
        const employeeAfiliation: any = await this.afiliationRepository.delete(id)
        if (!employeeAfiliation)
            throw new NotFoundException(`Afiliation with ID ${id} not found`)
    }

}
