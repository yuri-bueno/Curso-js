const express = require("express")
const app = express();

app.use(express.urlencoded({ extended: true }))


app.get(("/"), (req, res) => {
    res.send(`
    <form action="/" method="POST"> 
    nome do cliente: <input type="text" name="name">
    <button>enviar</button>   
    </form>
    `);
});

app.post("/", (req, res) => {
    res.send(`o q vc enviou foi ${req.body.name}`)
})

app.get(("/contato"), (req, res) => {
    res.send("pega meu numero ai")
});
app.get(("/teste/:id?"), (req, res) => {
    res.send(req.params.id)
    console.log(req.params)
    console.log(req.query)

});

app.listen(3000, () => {
    console.log("servidor executando na porta 3000")
})