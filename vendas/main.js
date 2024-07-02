const Button = document.querySelector('#bt');
const Tab = document.querySelector('#tab');
const Descont = document.querySelector('#descont');
const Ipi = document.querySelector('#ipi');
const Fat = document.querySelector('#fat');
const DescResult = document.querySelector('.desconto');
const IpiResult = document.querySelector('.ipi')
const FatResult = document.querySelector('.fat')
const FinalResult = document.querySelector('.final');
const Percentual = 100;




Button.addEventListener('click', ()=>{
    let tabResult = Tab.value / Percentual * Descont.value;
    let ipiValor = tabResult / Percentual * Ipi.value ;
    let fatValor = tabResult / Percentual * Fat.value ;
    let valorFinal = Tab.value - tabResult + fatValor + ipiValor ;
    
    
    

    
    

    DescResult.innerHTML = `.desconto: ${tabResult}`;
    IpiResult.innerHTML =  `.ipi: ${ipiValor}`;
    FatResult.innerHTML =  `.fat: ${fatValor}`;
    FinalResult.innerHTML = `.final: ${valorFinal}`;
    
});