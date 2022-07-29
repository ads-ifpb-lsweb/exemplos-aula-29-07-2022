const botao = document.querySelector("button");
const funcionarios = [];

botao.addEventListener("click", (event) => {
  const nome = document.querySelector("#input-nome");
  const salario = document.querySelector("#input-salario");
  const novoFuncionario = {
    nome: nome.value,
    salario: salario.value,
  };
  funcionarios.push(novoFuncionario);
  nome.value = "";
  salario.value = "";
  atualizarFuncionarios();
  atualizarMaiorSalario();
  atualizarTotalSalarios();
});

function atualizarFuncionarios() {
  const listaFuncionarios = document.querySelector("#funcionarios");
  listaFuncionarios.innerHTML = "";
  funcionarios.forEach((funcionario) => {
    const novoItemFuncionario = document.createElement("li");
    novoItemFuncionario.textContent = `${funcionario.nome} - R$ ${funcionario.salario}`;
    listaFuncionarios.appendChild(novoItemFuncionario);
  });
}

function atualizarMaiorSalario() {
  const funcionarioMaiorSalario = getFuncionarioMaiorSalario();
  const divFuncionarioMaiorSalario = document.querySelector(
    "#funcionario-maior-salario"
  );
  divFuncionarioMaiorSalario.textContent = `${funcionarioMaiorSalario.nome} - R$ ${funcionarioMaiorSalario.salario}`;
}

function atualizarTotalSalarios() {
  const divTotalSalarios = document.querySelector("#total-salarios");
  divTotalSalarios.textContent = getTotalSalarios();
}

function getTotalSalarios() {
  const total = funcionarios.reduce(
    (acumulado, atual) => acumulado + parseFloat(atual.salario),
    0
  );
  return total;
}

function getFuncionarioMaiorSalario() {
  let funcionarioMaiorSalario = null;
  let maiorSalario = 0;
  funcionarios.forEach((funcionario) => {
    if (funcionario.salario > maiorSalario) {
      funcionarioMaiorSalario = funcionario;
      maiorSalario = funcionario.salario;
    }
  });
  return funcionarioMaiorSalario;
}
