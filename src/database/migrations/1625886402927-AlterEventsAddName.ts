import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterEventsAddName1625886402927 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('events', new TableColumn({
      name: 'name',
      type: 'varchar',
      isNullable: false,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('events', 'name');
  }
}
