import express from "express"; /* ... pontinhos sigifina que instalar as tipagens como devDepencies  @types/nomedabiblioteca nesse caso yarn add @types/express*/

const app = express();

app.get("/teste", (req, res) => {
    return res.send("Donis Teste");
})

app.listen(3000, () => console.log("Server is running NLW"))