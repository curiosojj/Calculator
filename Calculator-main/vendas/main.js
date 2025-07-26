function mostrarTab(tabId, btn) {
  document.querySelectorAll('.form-container').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
}
function calcBomba() {
  let valor = parseFloat(document.getElementById("precoBomba").value);
  let desc = parseFloat(document.getElementById("descBomba").value);
  let tipo = document.getElementById("pagaBomba").value;
  let descontado = valor - (valor * desc / 100);
  let financeiro = tipo === "faturado" ? descontado * 0.03 : 0;
  let subtotal = descontado + financeiro;
  let ipi = subtotal * 0.0325;
  let total = subtotal + ipi;
  document.getElementById("resBomba").innerHTML =
    `Final: R$ ${total.toFixed(2)}<br>(Desconto: R$ ${descontado.toFixed(2)}, Financeiro: R$ ${financeiro.toFixed(2)}, IPI: R$ ${ipi.toFixed(2)})`;
}
function calcPainel() {
  let base = parseFloat(document.getElementById("precoPainel").value);
  let tipo = document.getElementById("tipoPainel").value;
  let paga = document.getElementById("pagaPainel").value;
  let junto = document.getElementById("juntaPainel").value;
  base += tipo === "compensadora" ? 175 : 92;
  let comDesconto = base - (base * 0.30);
  let financeiro = paga === "faturado" ? comDesconto * 0.03 : 0;
  let subtotal = comDesconto + financeiro;
  let ipi = subtotal * (junto === "sim" ? 0.0325 : 0.0975);
  let total = subtotal + ipi;
  document.getElementById("resPainel").innerHTML =
    `Final: R$ ${total.toFixed(2)}<br>(Desconto: R$ ${comDesconto.toFixed(2)}, Financeiro: R$ ${financeiro.toFixed(2)}, IPI: R$ ${ipi.toFixed(2)})`;
}