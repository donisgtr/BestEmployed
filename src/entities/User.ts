/* vamos importar as funcoes do typeorm */
import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"


/* o que é uma entidade do nosso projeto? entitidade seria uma tabela usuario */
@Entity("users") /* como eu digo que essa minha classe e referecia a tabela de users? so coloca aqui */
class User {

    /* preciso agora definir as que isso aqui sao colunas, para isso devemos importar. */
    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    /* o que é um contructor  */
    constructor() {
         /* quando estamos acessando o atributo de uma classe usamos o this */
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { User } ; 