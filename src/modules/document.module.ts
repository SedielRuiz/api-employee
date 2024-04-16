import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DocumentController } from 'src/controllers/document/document.controller'
import { EmployeeDocuments } from 'src/domain/entities/employee-documents.entity'
import { DocumentOperation } from 'src/operations/document.operation'
import { EmployeeModule } from './employee.module'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            EmployeeDocuments
        ]),
        EmployeeModule
    ],
    controllers: [DocumentController],
    providers: [
        DocumentOperation
    ],
    exports: [TypeOrmModule]
})
export class DocumentModule {}
