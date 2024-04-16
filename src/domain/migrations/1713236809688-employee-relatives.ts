import { MigrationInterface, QueryRunner } from "typeorm";

export class NpmConfigName1713236809688 implements MigrationInterface {
    name = 'NpmConfigName1713236809688'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee_relatives" ("id" SERIAL NOT NULL, "employeeId" integer NOT NULL, "name" character varying NOT NULL, "lastname" character varying NOT NULL, "document" integer NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "address" character varying NOT NULL, "status" boolean NOT NULL, "department" character varying, "birthDate" TIMESTAMP, "relationship" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0aa6690cf7ed6ccb557390fa717" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee_relatives" ADD CONSTRAINT "FK_a9d5501aef6810d644bfc9f4576" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee_relatives" DROP CONSTRAINT "FK_a9d5501aef6810d644bfc9f4576"`);
        await queryRunner.query(`DROP TABLE "employee_relatives"`);
    }

}
