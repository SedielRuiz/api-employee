import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AfiliationController } from 'src/controllers/afiliation/afiliation.controller'
import { EmployeeAfiliations } from 'src/domain/entities/employee-afiliations.entity'
import { AfiliationOperation } from 'src/operations/afiliation.operation'
import { EmployeeModule } from './employee.module'
import { AfiliationService } from 'src/services/afiliation.service'
import { AfiliationRepository } from 'src/repositories/afiliation.repository'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            EmployeeAfiliations
        ]),
        EmployeeModule
    ],
    controllers: [AfiliationController],
    providers: [
        AfiliationOperation,
        AfiliationService,
        AfiliationRepository
    ],
    exports: [TypeOrmModule]
})
export class AfiliationModule {}
