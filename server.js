import app from './src/app.js'

const port = process.env.PORT || 8000; //Definir porta para o ambiente de produção ou teste.

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})

//mongodb+srv://gilvsalves:<password>@cluster0.ij89iw8.mongodb.net/?retryWrites=true&w=majority
//Gilvs21