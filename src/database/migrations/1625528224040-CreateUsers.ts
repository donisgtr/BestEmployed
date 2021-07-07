import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1625528224040 implements MigrationInterface {

    /* o metodo up queeremos criar uma table criar algo. */
    public async up(queryRunner: QueryRunner): Promise<void> {
        /* vamos criar nossa tabela */
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "admin",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ]
            })
        )
    }

    /* o metodo down e o contrario do up. */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
