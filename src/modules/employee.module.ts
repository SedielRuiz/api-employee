import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EmployeeController } from 'src/controllers/employee/employee.controller'
import { Employees } from 'src/domain/entities/employees.entity'
import { EmployeeService } from 'src/services/employee.service'
import { EmployeeRepository } from 'src/repositories/employee.repository'
import { EmployeeOperation } from 'src/operations/employee.operation'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Employees
        ])
    ],
    controllers: [EmployeeController],
    providers: [
        EmployeeOperation,
        EmployeeService,
        EmployeeRepository
    ],
    exports: [TypeOrmModule, EmployeeOperation]
})
export class EmployeeModule {}
