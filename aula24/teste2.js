/*AJAX */


fetch("https://rui-filho.github.io/banda-bloco")
  .then(resposta => resposta.json())
  .then(dados => {
      console.log(dados)
  })