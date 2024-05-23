import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AfiliationOperation } from 'src/operations/afiliation.operation'

import { ConsultAfiliationRequest, CreateAfiliationRequest, UpdateAfiliationRequest } from 'src/requests/requesters/afiliation.request'
import { afiliations, employee, version } from 'src/routers/routes'

@ApiTags('Afiliations')
@Controller(version.V1+employee.BASE_ROUTE+"/"+afiliations.BASE_ROUTE)
export class AfiliationController {

    constructor(private afiliationOperation: AfiliationOperation) {}

    @Get(afiliations.ALL)

    async get(@Param() params,  filters:ConsultAfiliationRequest): Promise<Response> {
        return await this.afiliationOperation.execute(params, filters)
    }

    @Post(afiliations.CREATE)
    async create(@Param('employeeId') employeeId: number, @Body() request:ConsultAfiliationRequest): Promise<any> {
        console.log('employeeId:', employeeId);  // Debugging log
        console.log('CreateRequest:', request);  // Debugging log
        return await this.afiliationOperation.create(employeeId, request);
    }


    @Put(afiliations.UPDATE)
    async update(@Param() params, @Body() request: UpdateAfiliationRequest): Promise<Response> {
        return await this.afiliationOperation.update(params, request)
    }

    @Delete(afiliations.DELETE)
    async delete(@Param() params): Promise<Response> {
        return await this.afiliationOperation.delete(params)
    }

}
