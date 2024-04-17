import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { DocumentOperation } from 'src/operations/document.operation'
import { ConsultDocumentRequest, CreateDocumentRequest, UpdateDocumentRequest } from 'src/requests/requesters/document.request'
import { documents, employee, version } from 'src/routers/routes'

@ApiTags('Documents')
@Controller(version.V1+employee.BASE_ROUTE+"/"+documents.BASE_ROUTE)
export class DocumentController {

    constructor(private documentOperation: DocumentOperation) {}

    @Get(documents.ALL)
    async get(@Query() filters: ConsultDocumentRequest): Promise<Response> {
        return await this.documentOperation.execute(filters)
    }

    @Post(documents.CREATE)
    async create(@Body() request: CreateDocumentRequest): Promise<Response> {
        return await this.documentOperation.create(request)
    }

    @Put(documents.UPDATE)
    async update(@Param() params, @Body() request: UpdateDocumentRequest): Promise<Response> {
        return await this.documentOperation.update(params, request)
    }

    @Delete(documents.DELETE)
    async delete(@Param() params): Promise<Response> {
        return await this.documentOperation.delete(params)
    }

}
