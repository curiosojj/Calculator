const Button = document.querySelector('#bt');
const Tab = document.querySelector('#tab');
const Descont = document.querySelector('#descont');
const DescResult = document.querySelector('.desconto');
const FinalResult = document.querySelector('.final');





Button.addEventListener('click', ()=>{
let calculo = Tab.value * Descont.value / 100;
let valorFinal = Tab.value - calculo ;
    
    
    

    DescResult.innerHTML = `.desconto: ${calculo}`;
    FinalResult.innerHTML = `.final: ${valorFinal}`;
    
});