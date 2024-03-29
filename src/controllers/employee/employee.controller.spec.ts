import { Test, TestingModule } from '@nestjs/testing'
import { EmployeeController } from './employee.controller'
import { EmployeeModule } from 'src/modules/employee.module'
import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/employee.request'
import { EmployeeOperation } from 'src/operations/employee.operation'

describe('EmployeeController', () => {
	let controller: EmployeeController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [EmployeeModule],
			providers: [
				EmployeeOperation,
				ConsultRequest,
				CreateRequest,
				UpdateRequest
			],
			controllers: [EmployeeController],
		}).compile()

		controller = module.get<EmployeeController>(EmployeeController)
	})

	it('should be defined', () => {
		expect(controller).toBeDefined()
	})
})
