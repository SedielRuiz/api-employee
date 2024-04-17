import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { DocumentOperation } from 'src/operations/document.operation'
import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/document.request'
import { documents, employee, version } from 'src/routers/routes'

@ApiTags('Documents')
@Controller(version.V1+employee.BASE_ROUTE+"/"+documents.BASE_ROUTE)
export class DocumentController {

    constructor(private documentOperation: DocumentOperation) {}

    @Get(documents.ALL)
    async get(@Param() filters: ConsultRequest): Promise<Response> {
        return await this.documentOperation.execute(filters)
    }

    @Post(documents.CREATE)
    async create(@Body() request: CreateRequest): Promise<Response> {
        return await this.documentOperation.create(request)
    }

    @Put(documents.UPDATE)
    async update(@Param() params, @Body() request: UpdateRequest): Promise<Response> {
        return await this.documentOperation.update(params, request)
    }

    @Delete(documents.DELETE)
    async delete(@Param() params): Promise<Response> {
        return await this.documentOperation.delete(params)
    }

}
