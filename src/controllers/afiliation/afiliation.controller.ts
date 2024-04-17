import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AfiliationOperation } from 'src/operations/afiliation.operation'

import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/afiliation.request'
import { afiliations, employee, version } from 'src/routers/routes'

@ApiTags('Afiliations')
@Controller(version.V1+employee.BASE_ROUTE+"/"+afiliations.BASE_ROUTE)
export class AfiliationController {

    constructor(private afiliationOperation: AfiliationOperation) {}

    @Get(afiliations.ALL)
    async get(@Param() filters: ConsultRequest): Promise<Response> {
        return await this.afiliationOperation.execute(filters)
    }

    @Post(afiliations.CREATE)
    async create(@Body() request: CreateRequest): Promise<Response> {
        return await this.afiliationOperation.create(request)
    }

    @Put(afiliations.UPDATE)
    async update(@Param() params, @Body() request: UpdateRequest): Promise<Response> {
        return await this.afiliationOperation.update(params, request)
    }

    @Delete(afiliations.DELETE)
    async delete(@Param() params): Promise<Response> {
        return await this.afiliationOperation.delete(params)
    }

}
