import { MigrationInterface, QueryRunner } from "typeorm";

export class NpmConfigName1713237423712 implements MigrationInterface {
    name = 'NpmConfigName1713237423712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee_documents" ("id" SERIAL NOT NULL, "employeeId" integer NOT NULL, "name" character varying NOT NULL, "extension" character varying NOT NULL, "version" integer NOT NULL, "url" character varying NOT NULL, "status" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c19b36f5e604e261fb430293b68" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee_afiliations" ("id" SERIAL NOT NULL, "employeeId" integer NOT NULL, "entityName" character varying NOT NULL, "dateAfiliation" TIMESTAMP NOT NULL, "status" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e4454d094ef2a039beee943ecc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee_documents" ADD CONSTRAINT "FK_1e0b96137e88ec3ab8f14709f7c" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee_afiliations" ADD CONSTRAINT "FK_cca27ccc57a32adeb5f45589119" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee_afiliations" DROP CONSTRAINT "FK_cca27ccc57a32adeb5f45589119"`);
        await queryRunner.query(`ALTER TABLE "employee_documents" DROP CONSTRAINT "FK_1e0b96137e88ec3ab8f14709f7c"`);
        await queryRunner.query(`DROP TABLE "employee_afiliations"`);
        await queryRunner.query(`DROP TABLE "employee_documents"`);
    }

}
