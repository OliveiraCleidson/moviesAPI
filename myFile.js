function acrescentaOliveiraNoNome(nome, callback){
  const result = new Promise((resolve, reject) => {
    try{
      let nomeSobrenome =`${nome} OliVeIra`
      return resolve(nomeSobrenome)   
    } catch{
      return reject('Erro inesperado')
    }
  })

  return result
}

function deixaLetrasMaiusculas(frase){
  return frase.toUpperCase()
}

function deixaLetrasMinusculas(frase){
  return frase.toLowerCase()
}


async function bootstrap(){
  const nome = 'iAgO';
  const resultado = acrescentaOliveiraNoNome(nome)



  acrescentaOliveiraNoNome(nome)
  .then((resultado) => console.log(deixaLetrasMinusculas(resultado)))
  .catch(err => console.log(err))

  console.log(deixaLetrasMaiusculas(await resultado))

}

bootstrap()
