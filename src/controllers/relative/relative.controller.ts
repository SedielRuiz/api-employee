import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { RelativeOperation } from 'src/operations/relative.operation'
import { ConsultRelativeRequest, CreateRelativeRequest, UpdateRelativeRequest } from 'src/requests/requesters/relative.request'
import { employee, relatives, version } from 'src/routers/routes'

@ApiTags('Relatives')
@Controller(version.V1+employee.BASE_ROUTE+"/"+relatives.BASE_ROUTE)
export class RelativeController {

    constructor(private relativeOperation: RelativeOperation) {}

    @Get(relatives.ALL)
    async get(@Query() filters: ConsultRelativeRequest): Promise<Response> {
        return await this.relativeOperation.execute(filters)
    }

    @Post(relatives.CREATE)
    async create(@Body() request: CreateRelativeRequest): Promise<Response> {
        return await this.relativeOperation.create(request)
    }

    @Put(relatives.UPDATE)
    async update(@Param() params, @Body() request: UpdateRelativeRequest): Promise<Response> {
        return await this.relativeOperation.update(params, request)
    }

    @Delete(relatives.DELETE)
    async delete(@Param() params): Promise<Response> {
        return await this.relativeOperation.delete(params)
    }

}
