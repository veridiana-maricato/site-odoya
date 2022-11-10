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
var endereco
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
              endereco = JSON.parse(req.response)
              document.querySelector('#txtRua').value = endereco.street;
              document.querySelector('#txtBairro').value = endereco.neighborhood;
              document.querySelector('#txtCidade').value = endereco.city;
              document.querySelector('#txtEstado').value = endereco.state;                    

              localStorage.setItem('adress', endereco)
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


// Checar se inputs obrigatórios estão preenchidos
function checkMandatoryInputs(mandatoryInput) {    
    var filled = true;
    
    mandatoryInput.forEach(function(input) {        
      if(input.value === "") {
          filled = false;
      }    
    });    
    return filled;
    
  }
  var mandatoryInput = document.querySelectorAll(".mandatoryInput");
  var button = document.querySelector("button");
  mandatoryInput.forEach(function(input) {
      
    input.addEventListener("keyup", function() {
      if(checkMandatoryInputs(mandatoryInput)) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });
  });

  // Ir para endereço

  function irParaEndereco(){
    window.location.href = "/endereco.html" 
  }


//Checar se e-mail e verdadeiro
   
  function checkEmail(){
  if( document.forms[0].email.value=="" 
     || document.forms[0].email.value.indexOf('@')==-1 
       || document.forms[0].email.value.indexOf('.')==-1 )
      {
         alert( "Por favor, informe um e-mail válido" );        
         button.disabled = true;
         return false
      }
      else{
        button.disabled = false
      }
  }

// PIX

function removeClassPix(value){
  if(value == 'pix'){
      document.querySelector('.pix').classList.toggle('hidden')
      document.querySelector('.cartao').classList.add('hidden')

  }
}
function removeClassCartao(value){
  if(value == 'cartao'){
      document.querySelector('.cartao').classList.toggle('hidden')
  }document.querySelector('.pix').classList.add('hidden')
}



// checar numero do endereco e CPF ou CNPJ validos

function checkNumber(){
  let num = document.querySelector('#txtNumero').value
  if(num > 9999){
     alert("Insira um número válido.")  
     button.disabled = true;
      return false   
  }else{
    checkDados()
  }
}

function checkDados(){
  var txtDados = document.querySelector('#dados').value
  if(txtDados < 9999999999){
      alert("Por favor, informe um CPF ou CNPJ válido" );        
      button.disabled = true;
      return false
}else{
  checarEIrParaPagamento()
}
}

  // Ir para pagamento

function checarEIrParaPagamento(){
  window.location.href = '/pagamento.html' 
  }


// DEPOIMENTOS
const controls = document.querySelectorAll('.control');
let currentItem = 0
const items = document.querySelectorAll('.depoimentos__item');
const maxItems = items.length
controls.forEach((control) => {
  control.addEventListener('click', () => {
    const isLeft = control.classList.contains('arrow-left')

    if (isLeft) {
      currentItem -= 1
    }else{
      currentItem += 1
    }

    if(currentItem >= maxItems){
      currentItem = 0
    }
    if(currentItem < 0){
      currentItem = maxItems -1
    }

    items.forEach(item => item.classList.remove('depoimentos__item__current'))  
    items[currentItem].scrollIntoView({
      block: "center",
      inline: "center"
    }) 
    items[currentItem].classList.add('depoimentos__item__current')
   
  })
})

let count = 1;
document.getElementById('arrow-right').clicked = true;

setInterval( function(){
  nextImage();
}, 2000)

function nextImage(){
  count++
  if(count>4){
    count = 1
  }
  document.getElementById('arrow-right'+count).clicked = true
}

// conferir endereco

// function retomarEndereco(){
//   var enderecoEntrega = document.getElementById('endereco-texto-teste')
//   enderecoEntrega.innerHTML = localStorage.getItem('adress')
// }
// retomarEndereco()









  // Ver se colocou algo no lugar do e-mail (por enquanto não precisa porque o botão só ativa se tiver preenchido todos os mandatoryInputs)
  // function verifyEmail() {
//     if (document.forms[0].email.value.length == 0) {
//       alert('Por favor, informe o seu e-mail');
//       document.sendForm.email.focus();
//       return false;
//     }
//     return true;
//   }