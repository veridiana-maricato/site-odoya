//Javascript puro

// var menuButton = document.querySelector('.menu-principal__btn')
// var menuPrincipal = document.querySelector(".menu-principal")

// menuButton.addEventListener('click', abreFechaMenu);

// function abreFechaMenu(){
// menuPrincipal.classList.toggle("menu-principal--fechado")
// }

// jquery
// $(document).ready(function(){

//     // Slide depoimentos
//     $('.depoimentos__caixa').slick({
//         autoplay:true,
//         arrows: false,
//         dots: true,
//         autoplaySpeed: 3000,
//     });
// })

function removeClass(value){
    if(value == 'Selecione'){
        document.querySelector('.dados__granola__2').classList.add('hidden')
    }else{
        document.querySelector('.dados__granola__2').classList.remove('hidden')
    }
}

// CEP
function buscaCep(){
    var cep = document.querySelector('#txtCep').value;
    if(cep !==""){
        var url = "https://brasilapi.com.br/api/cep/v1/" + cep;
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.send();

        // resposta da requisicao
        req.onload = function() {
            if(req.status === 200){
                var endereco = JSON.parse(req.response)
                document.querySelector('#txtRua').value = endereco.street;
                document.querySelector('#txtBairro').value = endereco.neighborhood;
                document.querySelector('#txtCidade').value = endereco.city;
                document.querySelector('#txtEstado').value = endereco.state;
                document.getElementById("btnPagamento").disabled = false

            }
            else if(req.status === 404){
                alert("CEP invalido!")
            }
            else{
                alert('Erro')
            }
        }
    }
}

window.onload = function(){
    var txtCep = document.querySelector('#txtCep');
    txtCep.addEventListener('blur', buscaCep)
}


// Ir para o endereco
function checkInputs(inputs) {
    var filled = true;
    
    inputs.forEach(function(input) {
        
      if(input.value === "") {
          filled = false;
      }
    
    });
    
    return filled;
    
  }
  var inputs = document.querySelectorAll("input");
  var button = document.querySelector("button");
  inputs.forEach(function(input) {
      
    input.addEventListener("keyup", function() {
      if(checkInputs(inputs)) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });
  });

  function irParaEndereco(){
    window.location.href = "/endereco.html"
  }


// Ir para pagamento
function irParaPagamento(){
    let num = document.querySelector('#txtNumero').value
    if(num !==""){
        window.location.href = "/pagamento.html";
    }
    else{
        alert("Insira um numero valido.")
    }
}



