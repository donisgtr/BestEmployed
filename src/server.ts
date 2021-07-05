import "reflect-metadata";
import express from "express"; /* ... pontinhos sigifina que instalar as tipagens como devDepencies  @types/nomedabiblioteca nesse caso yarn add @types/express*/
import "./database"; /* importando aquele codigo que acabei de criar para conexão do banco de dados */

const app = express();

app.listen(3000, () => console.log("Server is running NLW"))