import { Test, TestingModule } from '@nestjs/testing'
import { EmployeeController } from './employee.controller'
import { EmployeeModule } from '@module/employee.module'
import { ConsultRequest, CreateRequest, UpdateRequest } from 'src/requests/requesters/employee.request'

describe('EmployeeController', () => {
	let controller: EmployeeController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [EmployeeModule],
			providers: [],
			controllers: [EmployeeController],
		}).compile()

		controller = module.get<EmployeeController>(EmployeeController)
	})

	it('should get employees', async () => {
		// Arrange
		const filters = new ConsultRequest()

		// Mock the employeeOperation to return a list of employees
		const mockEmployeeOperation = {
			getEmployees: jest.fn().mockResolvedValueOnce([]),
		}
		jest.spyOn(controller, 'employeeOperation', 'get').mockReturnValue(mockEmployeeOperation)

		// Act
		const result = await controller.get(filters)

		// Assert
		expect(result).toEqual([])
		expect(mockEmployeeOperation.getEmployees).toHaveBeenCalledWith(filters)
	})

	it('should create an employee', async () => {
		// Arrange
		const request = new CreateRequest()

		// Mock the employeeOperation to return the created employee
		const mockEmployeeOperation = {
			createEmployee: jest.fn().mockResolvedValueOnce({ id: 1, name: 'John Doe' }),
		}
		jest.spyOn(controller, 'employeeOperation', 'get').mockReturnValue(mockEmployeeOperation)

		// Act
		const result = await controller.create(request)

		// Assert
		expect(result).toEqual({ id: 1, name: 'John Doe' })
		expect(mockEmployeeOperation.createEmployee).toHaveBeenCalledWith(request)
	})

	it('should update an employee', async () => {
		// Arrange
		const params = { id: 1 }
		const request = new UpdateRequest()

		// Mock the employeeOperation to return the updated employee
		const mockEmployeeOperation = {
			updateEmployee: jest.fn().mockResolvedValueOnce({ id: 1, name: 'John Doe' }),
		}
		jest.spyOn(controller, 'employeeOperation', 'get').mockReturnValue(mockEmployeeOperation)

		// Act
		const result = await controller.update(params, request)

		// Assert
		expect(result).toEqual({ id: 1, name: 'John Doe' })
		expect(mockEmployeeOperation.updateEmployee).toHaveBeenCalledWith(params, request)
	})

	it('should delete an employee', async () => {
		// Arrange
		const params = { id: 1 }

		// Mock the employeeOperation to return a success message
		const mockEmployeeOperation = {
			deleteEmployee: jest.fn().mockResolvedValueOnce('Employee deleted successfully'),
		}
		jest.spyOn(controller, 'employeeOperation', 'get').mockReturnValue(mockEmployeeOperation)

		// Act
		const result = await controller.delete(params)

		// Assert
		expect(result).toEqual('Employee deleted successfully')
		expect(mockEmployeeOperation.deleteEmployee).toHaveBeenCalledWith(params)
	})
})
		const expectedResult = {} // Replace with expected result

		// Act
		const result = await controller.get(filters)

		// Assert
		expect(result).toEqual(expectedResult)
	})
})