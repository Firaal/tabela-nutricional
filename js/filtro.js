var campoFiltro = document.querySelector("#filtrar-tabela");

//Esse input serve para pegarmos o que foi digitado dentro do campo.
campoFiltro.addEventListener("input", function()
{
    let pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0)//Verifica se algo foi digitado no filtro de busca
    {
        for (let i = 0; i < pacientes.length; i++) 
        {
            var nome = pacientes[i].querySelector(".info-nome").textContent;  

            var expressao = new RegExp (this.value, "i"); // Essa é uma expressão própria do JS que se chama expressão regular e que vai nos ajudar a filtar as palavras que queremos. Então passamos onde e como queremos filtrar, nesse caso colocamos i de insensitive procurando letras maiusculas e minusculas. 
            
            if(!expressao.test(nome))//Usamos a função regexp com o test para testar se o nome ou uma parte dele, que eu estou colocando, tem no this.value colocado na expressao.
            {
                pacientes[i].classList.add("invisivel");
            }
            else
            {
                pacientes[i].classList.remove("invisivel");
            }
        }
    }
    else
    {
        for (let i = 0; i < pacientes.length; i++) 
        {
            pacientes[i].classList.remove("invisivel");
        }
    }
})