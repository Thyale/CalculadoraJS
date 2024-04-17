var espaçoresposta = window.document.querySelector("p.Resposta")

function gerar(){
  if(espaçoresposta.innerHTML == ""){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, insira uma expressão antes de gerar.",
    })
    return
  }

  var respostaDocalculo = eval(espaçoresposta.innerHTML)
  espaçoresposta.innerHTML = respostaDocalculo.toFixed(2)
}
function limpar(){
  espaçoresposta.innerHTML = ""
}
function aparecer(item){
  espaçoresposta.innerHTML += item
}