const nome = process.argv[2]

if(!nome) {
    console.log("Aplicativo iniciado. Insira seu nome.")
} else {
    console.log(`Bem-vindo(a) ${nome}!`)
}