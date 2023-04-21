var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event)//Todo EventListiner tem um event(serve para saber o que estamos fazendo), podendo de click, doubleclick etc.
{
    event.target.parentNode.classList.add("fadeOut");//Aqui queremos remover um paciente da tabela(uma linha toda), mas se usarmos somente o remove() ele só irá remover no espaço que clicamos, e como queremos tirar toda linha, ou seja o pai e não os filhos, usamos esse comando, parentNode.
    
    setTimeout(function(){event.target.parentNode.remove();}, 400) //Setamos um tempo ate o JS remover por completo a linha e dar tempo do codigo de cima executar, porque se não dermos esse tempo o remove() apaga muito rapido a linha sem dar tempo da class de cima ser executada;     
})