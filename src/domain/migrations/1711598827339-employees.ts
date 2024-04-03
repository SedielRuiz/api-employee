import {MigrationInterface, QueryRunner} from "typeorm"

export class CreateEmployeesTable1612345678901 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "employees" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "lastname" character varying NOT NULL,
                "document" integer NOT NULL,
                "email" character varying NOT NULL,
                "phone" character varying NOT NULL,
                "address" character varying NOT NULL,
                "position" character varying NOT NULL,
                "status" boolean NOT NULL,
                "department" character varying,
                "salary" integer,
                "hireDate" TIMESTAMP,
                "supervisor" character varying,
                "emergencyContactName" character varying,
                "emergencyContactPhone" character varying,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id")
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "employees"`)
    }
}
