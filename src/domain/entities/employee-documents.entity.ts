import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Employees } from "./employees.entity"

@Entity()
export class EmployeeDocuments extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    employeeId: number

    @Column()
    name: string

    @Column()
    extension: string

    @Column()
    version: number

    @Column()
    url: string

    @Column()
    status: boolean

	@CreateDateColumn({ name: 'created_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

	@UpdateDateColumn({ name: 'updated_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date

    //relations
    @ManyToOne (() => Employees, (employee) => employee.documents )
    employee: Employees
}
