const Button = document.querySelector('#bt');
const Tab = document.querySelector('#tab');
const Descont = document.querySelector('#descont');
const DescResult = document.querySelector('.desconto');
const FinalResult = document.querySelector('.final');
const IpiResult = document.querySelector('.ipi');
const FinanceResult = document.querySelector('.finance');




Button.addEventListener('click', ()=>{
let calculo = Tab.value * Descont.value / 100;
let valorDesc1 = Tab.value - calculo ;
let IpiResult = valorDesc1 + (valorDesc1 * 0.03); // Assuming a 3% IPI for the final price
let FinanceResult = IpiResult + (IpiResult * 0.0325); // Assuming a 4% finance charge on the IPI result
let valorFinal = FinanceResult.toFixed(2); // Final price rounded to 2 decimal places


    
    
    

    DescResult.innerHTML = `.desconto: ${calculo}`;
    DescResult.innerHTML = `.desconto1: ${valorDesc1}`;
    IpiResult.innerHTML = `.ipi: ${IpiResult}`;
    FinanceResult.innerHTML = `.finance: ${FinanceResult}`;
    FinalResult.innerHTML = `.final: ${valorFinal}`;
});