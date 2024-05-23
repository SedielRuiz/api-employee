
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put
} from '@nestjs/common'

import { employee, version } from '../../routers/routes'
import { Response } from 'express'
import { ApiTags } from '@nestjs/swagger'
import { EmployeeOperation } from 'src/operations/employee.operation'
import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/employee.request'

@ApiTags('Employee')
@Controller(version.V1+employee.BASE_ROUTE)
export class EmployeeController {

    constructor(private employeeOperation: EmployeeOperation) {}

    @Get(employee.ALL)
    async get(@Param() filters: ConsultRequest): Promise<Response> {
        return await this.employeeOperation.execute(filters)
    }

    @Post(employee.CREATE)
    async create(@Body() request: CreateRequest): Promise<Response> {
        console.log('CreateRequestUser:', request);  // Debugging log
        return await this.employeeOperation.create(request)
    }

    @Put(employee.UPDATE)
    async update(@Param() params, @Body() request: UpdateRequest): Promise<Response> {
        return await this.employeeOperation.update(params, request)
    }

    @Delete(employee.DELETE)
    async delete(@Param() params): Promise<Response> {
        return await this.employeeOperation.delete(params)
    }

}
