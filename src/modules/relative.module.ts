import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RelativeController } from 'src/controllers/relative/relative.controller'
import { EmployeeRelatives } from 'src/domain/entities/employee-relatives.entity'
import { RelativeOperation } from 'src/operations/relative.operation'
import { RelativeRepository } from 'src/repositories/relative.repository'
import { RelativeService } from 'src/services/relative.service'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            EmployeeRelatives
        ])
    ],
    controllers: [RelativeController],
    providers: [
        RelativeOperation,
        RelativeService,
        RelativeRepository
    ],
    exports: [TypeOrmModule]
})
export class RelativeModule {}
