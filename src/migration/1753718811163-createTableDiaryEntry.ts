import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableDiaryEntry1753718811163 implements MigrationInterface {
    name = 'CreateTableDiaryEntry1753718811163'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "diary_entry" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_31547daef53774d068540599e40" PRIMARY KEY ("id"))`);
        await queryRunner.query(`COMMENT ON TABLE "diary_entry" IS 'Diary entries table, storing user diary entries.'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON TABLE "diary_entry" IS NULL`);
        await queryRunner.query(`DROP TABLE "diary_entry"`);
    }
}
