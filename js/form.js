let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(e)
{
    e.preventDefault(); // Como o nome já diz ele previne o evento padrao do botão

    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemFormulario(form);

    var erros = validaPaciente(paciente);

    if(erros.length > 0)
    {
        exibirErro(erros);
        return;
    }

    adicionaPaciente(paciente);
    
    form.reset();
    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = "";
}) 


function obtemFormulario(form)
{
    //Podemos acessar um input através do seu NAME também, só precisamos usar o . mais o NAME do input. 
    //Podemos usar querySelector, mas o NAME é mais curto, além de que o querySelector é melhor para classe e id
    var paciente = {
        nome: form.nome.value, 
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function adicionaPaciente(paciente)
{
    var tabela = document.querySelector("#tabela-pacientes");
    var pacienteTr = montaTr(paciente);
    tabela.appendChild(pacienteTr);
}

function montaTr(paciente)
{
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr
}

function montaTd(dado, classe)
{
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)
    
    return td
}

function exibirErro(erros)
{
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    
    for (let i = 0; i < erros.length; i++) 
    {
        var li = document.createElement("li");
        li.textContent = erros[i];
        ul.appendChild(li);

    }
    /*Todo array possui a função forEach(), em JavaScript. Passamos para ela uma função por parâmetro, e nessa função fazemos o que quisermos para cada item do array. O item do array é recebido por parâmetro na função interna;
    erros.forEach(function(item)
    {
        var li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });*/ 
    
}

function validaPaciente(paciente)
{
    var erros = [];

    if(!validaPeso(paciente.peso) || paciente.peso.length == 0)
    {
        erros.push("Peso inválido ou está em branco");    
    }
    if(!validaAltura(paciente.altura) || paciente.altura.length == 0)
    {
        erros.push("Altura inválida ou está em branco");
    }
    if(!validaGordura(paciente.gordura) || paciente.gordura.length == 0)
    {
        erros.push("Gordura inválida ou está em branco")
    }
    if(paciente.nome.length == 0)
    {
        erros.push("Nome não pode ser em branco");
    }
    return erros;
}