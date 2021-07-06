import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
import { UserRoleType } from '../../models/User';

export default class AlterUsersAddRole1625570079437 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('users', new TableColumn({
      name: 'role',
      type: 'enum',
      enum: [`${UserRoleType.USER}`, `${UserRoleType.ADMIN}`],
      default: `${UserRoleType.USER}`,
      isNullable: false,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'role');
  }
}
