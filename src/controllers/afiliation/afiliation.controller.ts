import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { EmployeeOperation } from 'src/operations/employee.operation'
import { afiliations, employee, version } from 'src/routers/routes'

@ApiTags('Afiliations')
@Controller(version.V1+employee.BASE_ROUTE+"/"+afiliations.BASE_ROUTE)
export class AfiliationController {

    constructor(private employeeOperation: EmployeeOperation) {}

    @Get(afiliations.ALL)
    async get(@Param() filters: any): Promise<Response> {
        return await this.employeeOperation.execute(filters)
    }

    @Post(afiliations.CREATE)
    async create(@Body() request: any): Promise<Response> {
        return await this.employeeOperation.create(request)
    }

    @Put(afiliations.UPDATE)
    async update(@Param() params, @Body() request: any): Promise<Response> {
        return await this.employeeOperation.update(params, request)
    }

    @Delete(afiliations.DELETE)
    async delete(@Param() params): Promise<Response> {
        return await this.employeeOperation.delete(params)
    }

}
