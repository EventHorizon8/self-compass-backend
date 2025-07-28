import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserRelationToDairyEntry1753720515397 implements MigrationInterface {
    name = 'AddUserRelationToDairyEntry1753720515397'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diary_entry" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "diary_entry" ADD CONSTRAINT "FK_0414326ce079d179a5e6a1ca993" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diary_entry" DROP CONSTRAINT "FK_0414326ce079d179a5e6a1ca993"`);
        await queryRunner.query(`ALTER TABLE "diary_entry" DROP COLUMN "userId"`);
    }
}
