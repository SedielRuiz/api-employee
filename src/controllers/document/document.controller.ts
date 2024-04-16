import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { EmployeeOperation } from 'src/operations/employee.operation'
import { documents, employee, version } from 'src/routers/routes'

@ApiTags('Documents')
@Controller(version.V1+employee.BASE_ROUTE+"/"+documents.BASE_ROUTE)
export class DocumentController {

    constructor(private employeeOperation: EmployeeOperation) {}

    @Get(documents.ALL)
    async get(@Param() filters: any): Promise<Response> {
        return await this.employeeOperation.execute(filters)
    }

    @Post(documents.CREATE)
    async create(@Body() request: any): Promise<Response> {
        return await this.employeeOperation.create(request)
    }

    @Put(documents.UPDATE)
    async update(@Param() params, @Body() request: any): Promise<Response> {
        return await this.employeeOperation.update(params, request)
    }

    @Delete(documents.DELETE)
    async delete(@Param() params): Promise<Response> {
        return await this.employeeOperation.delete(params)
    }

}
