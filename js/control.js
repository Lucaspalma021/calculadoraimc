const nome = document.querySelector('#nome')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const botao = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')
const imcFinal = document.querySelector('#imc')

botao.addEventListener('click', ()=>{

    if(nome.value!=='' && peso.value!== '' && altura.value!==''){
        
        event.preventDefault()
        let imc = peso.value/(altura.value**2)


        imcFinal.value = imc.toFixed(2)

    }else{
      
        resultado.innerHTML = 'Preencha todos os campos'

    }

})