import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { EmployeeRelatives } from "./employee-relatives.entity"
import { EmployeeDocuments } from "./employee-documents.entity"
import { EmployeeAfiliations } from "./employee-afiliations.entity"

@Entity()
export class Employees extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

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
    salary: number

    @Column({ nullable: true })
    hireDate: Date

    @Column({ nullable: true })
    supervisor: string

    @Column({ nullable: true })
    emergencyContactName: string

    @Column({ nullable: true })
    emergencyContactPhone: string

	@CreateDateColumn({ name: 'created_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

	@UpdateDateColumn({ name: 'updated_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date

    //relations 
    @OneToMany(() => EmployeeRelatives, (relative) => relative.employee )
    relatives: EmployeeRelatives

    @OneToMany(() => EmployeeDocuments, (document) => document.employee )
    documents: EmployeeDocuments

    @OneToMany(() => EmployeeAfiliations, (afiliation) => afiliation.employee )
    afiliations: EmployeeAfiliations
}
