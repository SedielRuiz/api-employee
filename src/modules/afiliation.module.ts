import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AfiliationController } from 'src/controllers/afiliation/afiliation.controller'
import { EmployeeAfiliations } from 'src/domain/entities/employee-afiliations.entity'
import { AfiliationOperation } from 'src/operations/afiliation.operation'
import { EmployeeModule } from './employee.module'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            EmployeeAfiliations
        ]),
        EmployeeModule
    ],
    controllers: [AfiliationController],
    providers: [
        AfiliationOperation
    ],
    exports: [TypeOrmModule]
})
export class AfiliationModule {}
