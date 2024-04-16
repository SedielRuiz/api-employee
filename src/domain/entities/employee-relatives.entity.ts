import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Employees } from "./employees.entity"

@Entity()
export class EmployeeRelatives extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number  

    @Column()
    employeeId: number

    @Column()
    name: string

    @Column()
    lastname: string

    @Column()
    document: number

    @Column()
    email: string

    @Column()
    phone: string

    @Column()
    address: string

    @Column()
    status: boolean

    @Column({ nullable: true })
    department: string

    @Column({ nullable: true })
    birthDate: Date

    @Column({ nullable: true })
    relationship: string

	@CreateDateColumn({ name: 'created_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

	@UpdateDateColumn({ name: 'updated_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date

    //relations
    @ManyToOne (() => Employees, (employee) => employee.relatives )
    employee: Employees
}
