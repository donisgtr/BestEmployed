/* vamos importar as funcoes do typeorm */
import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { } from "uuid"


/* o que é uma entidade do nosso projeto? entitidade seria uma tabela usuario */
@Entity("users") /* como eu digo que essa minha classe e referecia a tabela de users? so coloca aqui */
class User {

    /* preciso agora definir as que isso aqui sao colunas, para isso devemos importar. */
    @Column()
    id: string;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}

export { User } ; 