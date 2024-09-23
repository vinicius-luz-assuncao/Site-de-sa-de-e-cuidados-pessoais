var peso = document.getElementById('imcPeso');
var altura = document.getElementById('imcAltura');
var idade = document.getElementById('imcIdade');
var nivelFisico = document.getElementById('imcNivelFisico');
var mensagemResultado = document.getElementById('mensagemFinal')



function calculaImc(e){
  var imc= peso.value / (altura.value*altura.value).toFixed(2);
  imc= imc.toFixed(2);
  var mensagem = 'Por favor, preencha os campos corretamente.'
  
  
    if(imc <= 16.9){
      mensagem = 'Seu IMC é de ' + imc + 'kg/m2' + ' e possivelmente você precisa ganhar peso. Consulte um profissional de nutrição.'
    }else if(imc > 16.9 && imc <= 18.4 ){
    mensagem = 'Seu IMC é de ' + imc + 'kg/m2' + 'e possivelmente você precisa ganhar peso. Consulte um profissional de nutrição.'
    }else if(imc > 18.4 && imc <= 24.9){
    mensagem = 'Seu IMC é de ' + imc + 'kg/m2' + ' Este é um peso adequado! Não deixe de fazer atividades regulares e ter acompanhamento nutricional'
    }else if(imc > 24.9 && imc <= 29.9 && nivelFisico.value != 'intenso'){
    mensagem = 'Seu IMC é de ' + imc + 'kg/m2' + ' valor considerado acima do regular. Procure uma nutricionista.'
    }else if(imc > 24.9 && imc <= 29.9 && nivelFisico.value == 'intenso'){
    mensagem = 'Seu IMC indica ' + imc + 'kg/m2,' + ' mas como você pratica muita atividade física, o seu peso pode ser devido aos músculos, o que é uma coisa boa. Para confirmar isso, o ideal é que você procure o nutricionista ou o médico para avaliar sua composição corporal.'
    }else if(imc > 29.9 && imc <= 34.9 && nivelFisico.value != 'intenso'){
    mensagem = 'Seu IMC é de ' + imc + 'kg/m2' + ' e possivelmente você está acima do peso!. Consulte um profissional de nutrição.'
    }else if(imc > 29.9 && imc <= 34.9 && nivelFisico.value == 'intenso'){
    mensagem = 'Seu IMC indica ' + imc + 'kg/m2,' + ' mas como você pratica muita atividade física, o seu peso pode ser devido aos músculos, o que é uma coisa boa. Para confirmar isso, o ideal é que você procure o nutricionista ou o médico para avaliar sua composição corporal.'
    }else if(imc > 34.9 && imc <= 40 && nivelFisico.value != 'intenso'){
    mensagem = 'Seu IMC é de ' + imc + 'kg/m2' + ' e possivelmente você está acima do peso!. Consulte um profissional de nutrição.'
    }else if(imc > 34.9 && imc <= 40 && nivelFisico.value == 'intenso'){
    mensagem = 'Seu IMC indica ' + imc + 'kg/m2,' + ' mas como você pratica muita atividade física, o seu peso pode ser devido aos músculos, o que é uma coisa boa. Para confirmar isso, o ideal é que você procure o nutricionista ou o médico para avaliar sua composição corporal.'
    }else if(imc > 40 && nivelFisico.value != 'intenso'){
    mensagem = 'Seu IMC é de ' + imc + 'kg/m2' + ' e possivelmente você está acima do peso!. Consulte um profissional de nutrição.'
    }else if(imc > 40 && nivelFisico.value == 'intenso'){
    mensagem = 'Seu IMC indica ' + imc + 'kg/m2,' + ' mas como você pratica muita atividade física, o seu peso pode ser devido aos músculos, o que é uma coisa boa. Para confirmar isso, o ideal é que você procure o nutricionista ou o médico para avaliar sua composição corporal.'
    }
  
  mensagemResultado.innerHTML = mensagem;
  e.preventDefault()
}
