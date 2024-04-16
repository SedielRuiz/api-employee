import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { EmployeeOperation } from 'src/operations/employee.operation'
import { employee, relatives, version } from 'src/routers/routes'

@ApiTags('Relatives')
@Controller(version.V1+employee.BASE_ROUTE+"/"+relatives.BASE_ROUTE)
export class RelativeController {

    constructor(private employeeOperation: EmployeeOperation) {}

    @Get(relatives.ALL)
    async get(@Param() filters: any): Promise<Response> {
        return await this.employeeOperation.execute(filters)
    }

    @Post(relatives.CREATE)
    async create(@Body() request: any): Promise<Response> {
        return await this.employeeOperation.create(request)
    }

    @Put(relatives.UPDATE)
    async update(@Param() params, @Body() request: any): Promise<Response> {
        return await this.employeeOperation.update(params, request)
    }

    @Delete(relatives.DELETE)
    async delete(@Param() params): Promise<Response> {
        return await this.employeeOperation.delete(params)
    }

}
