exports.paginaInicial = (req, res) => {
    res.send(` <form action="/" method="POST"> 
    nome do cliente: <input type="text" name="name">
    <button>enviar</button>   
    </form>
    
    `)
}

exports.trataPost = (req, res) => {
    res.send("sou sua nova rota")


}