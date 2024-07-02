const Button = document.querySelector('#bt');
const Tab = document.querySelector('#tab');
const Client = document.querySelector('#client');
const FinalResult = document.querySelector('.result');
const Percentual = 100;
const Ipi = 3.25  ;

Button.addEventListener('click', ()=>{
    let tabResult = parseInt(Tab.value) / Percentual ;
    let InputsCauculator = tabResult * parseInt(Client.value);

    FinalResult.innerHTML = `Result: ${InputsCauculator}`;
});