import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFileName1572448122743 implements MigrationInterface {
    name = 'MigrationFileName1572448122743'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "tags" ("id" int NOT NULL IDENTITY(1,1), "label" nvarchar(255) NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "payments" ("id" int NOT NULL IDENTITY(1,1), "status" nvarchar(255) NOT NULL, "amount" int NOT NULL, "booking_id" int, CONSTRAINT "PK_197ab7af18c93fbb0c9b28b4a59" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "property_properties_tags_tags" ("propertyId" int NOT NULL, "tagsId" int NOT NULL, CONSTRAINT "PK_2513072fe4693802597217f584c" PRIMARY KEY ("propertyId", "tagsId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_63f30296531636dacaad87ff79" ON "property_properties_tags_tags" ("propertyId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_204ec4ea1489ad18ab548f8661" ON "property_properties_tags_tags" ("tagsId") `, undefined);
        await queryRunner.query(`ALTER TABLE "payments" ADD CONSTRAINT "FK_e86edf76dc2424f123b9023a2b2" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "property_properties_tags_tags" ADD CONSTRAINT "FK_63f30296531636dacaad87ff79b" FOREIGN KEY ("propertyId") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "property_properties_tags_tags" ADD CONSTRAINT "FK_204ec4ea1489ad18ab548f8661b" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "property_properties_tags_tags" DROP CONSTRAINT "FK_204ec4ea1489ad18ab548f8661b"`, undefined);
        await queryRunner.query(`ALTER TABLE "property_properties_tags_tags" DROP CONSTRAINT "FK_63f30296531636dacaad87ff79b"`, undefined);
        await queryRunner.query(`ALTER TABLE "payments" DROP CONSTRAINT "FK_e86edf76dc2424f123b9023a2b2"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_204ec4ea1489ad18ab548f8661" ON "property_properties_tags_tags"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_63f30296531636dacaad87ff79" ON "property_properties_tags_tags"`, undefined);
        await queryRunner.query(`DROP TABLE "property_properties_tags_tags"`, undefined);
        await queryRunner.query(`DROP TABLE "payments"`, undefined);
        await queryRunner.query(`DROP TABLE "tags"`, undefined);
    }

}
