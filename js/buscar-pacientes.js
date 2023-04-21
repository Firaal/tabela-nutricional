var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", () =>
{
    var xhr = new XMLHttpRequest();//Com essa função podemos habilitar o programa para fazer requisições, ou seja solicitações, de http. Podemos interagir com servidores.
    var erroAjax = document.querySelector("#erro-ajax");
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");//Com essa função abrimos a conexão com o endereço e dentro vai o tipo de requisição que queremos fazer, nesse caso, a padrão de apenas pegar as informações.

    xhr.addEventListener("load", () =>
    {
        if(xhr.status == 200)
        {
            erroAjax.classList.add("invisivel");
            var pacientes = JSON.parse(xhr.responseText);//O texto que pegamos de lá do http vem formato de texto(text) mesmo sendo arrays, podemos tranformar esse text para JS no caso, arrays com o json.parse, do mesmo jeito que faz o parseInt.
            pacientes.forEach(function(paciente)
            {
                adicionaPaciente(paciente);
            });
        }
        else
        {
            console.log(xhr.status);
            erroAjax.classList.remove("invisivel");
        }
    })

    xhr.send();
});




