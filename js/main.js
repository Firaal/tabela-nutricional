let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) 
{
    let paciente = pacientes[i];

    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;
    let tdImc = paciente.querySelector(".info-imc");
    
    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);
    
    if(!pesoValido)
    {
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
        pesoValido = false;
    }
    if(!alturaValida)
    {
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
        alturaValida = false
    }
    if(pesoValido && alturaValida)
    {
        tdImc.textContent = calculaImc(peso, altura);
    }
}

function validaPeso(peso)
{
    if(peso > 0 && peso < 600)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function validaAltura(altura)
{
    if(altura > 0 && altura < 3.00)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function validaGordura(gordura)
{
    if(gordura > 0 && gordura < 100)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function calculaImc(peso, altura)
{
    var imc = peso / (altura * altura)
    return imc.toFixed(2);
}

