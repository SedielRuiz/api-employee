import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Employees } from "./employees.entity"

@Entity()
export class EmployeeAfiliations extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    employeeId: number

    @Column()
    entityName: string

    @Column()
    dateAfiliation: Date

    @Column()
    status: boolean

	@CreateDateColumn({ name: 'created_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

	@UpdateDateColumn({ name: 'updated_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date

    //relations
    @ManyToOne (() => Employees, (employee) => employee.afiliations )
    employee: Employees
}
