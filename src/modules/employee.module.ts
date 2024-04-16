import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EmployeeController } from 'src/controllers/employee/employee.controller'
import { Employees } from 'src/domain/entities/employees.entity'
import { EmployeeService } from 'src/services/employee.service'
import { EmployeeRepository } from 'src/repositories/employee.repository'
import { EmployeeOperation } from 'src/operations/employee.operation'
import { RelativeModule } from './relative.module'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Employees
        ]),
        RelativeModule
    ],
    controllers: [EmployeeController],
    providers: [
        EmployeeOperation,
        EmployeeService,
        EmployeeRepository
    ],
    exports: [TypeOrmModule, EmployeeOperation, EmployeeService, EmployeeRepository]
})
export class EmployeeModule {}
