import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EmployeeRelatives } from 'src/domain/entities/employee-relatives.entity'
import { ConsultRelativeRequest, CreateRelativeRequest, UpdateRelativeRequest } from 'src/requests/requesters/relative.request'
import { Repository } from 'typeorm'

@Injectable()
export class RelativeRepository {

    constructor(
        @InjectRepository(EmployeeRelatives)
        private relativeRepository: Repository<EmployeeRelatives>,
    ) {}

    async all (filter: ConsultRelativeRequest): Promise<EmployeeRelatives[]> {
        const employeeRelatives: EmployeeRelatives[] = await this.relativeRepository.find({
            where: filter,
            relations: ['employee']
        })

        return employeeRelatives
    }

    async create (data: CreateRelativeRequest): Promise<EmployeeRelatives> {
        const employeeRelative: EmployeeRelatives = await this.relativeRepository.save(data)

        if (!employeeRelative)
            throw new NotFoundException(`Relative with [body: ${JSON.stringify(data)}] not created`)

        return employeeRelative
    }

    async update (id: number, data: UpdateRelativeRequest): Promise<EmployeeRelatives> {
        const employeeRelative: any = await this.relativeRepository.update(id, data)

        if (!employeeRelative)
            throw new NotFoundException(`Relative with [body: ${JSON.stringify(data)}] not updated`)


        return employeeRelative
    }

    async delete(id: number) {
        const employeeRelative: any = await this.relativeRepository.delete(id)
        if (!employeeRelative)
            throw new NotFoundException(`Relative with ID ${id} not found`)
    }

}
