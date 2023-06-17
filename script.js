const button = document.querySelector('.botao')
const input = document.querySelector('.input')
const listaCompleta = document.querySelector('.lista')
const img = document.querySelector('.img')
let minhaListaDeItens = []

function adicionarNovaTarefa() {
    const input1 = document.querySelector('.input').value
    if(input1.trim() === ''){
        
        alert('Coloque uma tarefa que deseja fazer.')
        adicionarNovaTarefa.remove()
    }
        minhaListaDeItens.push({
            tarefa: input.value,
            concluida: false
        })
        input.value = ''
        mostrarTarefas()
    }

function concluirTarefa(index) {
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida
    mostrarTarefas()
}

function deletarItem(index) {
    minhaListaDeItens.splice(index, 1)
    mostrarTarefas()

}
function mostrarTarefas() {
    let novaLi = '';
    minhaListaDeItens.forEach((coisa, index) => {
        novaLi = novaLi + `
        <li class="itens-lista ${coisa.concluida && "done"}">
        <img src="img/checked.png" onclick="concluirTarefa(${index})">
        <p>${coisa.tarefa}</p>
        <img src="img/trash.png" onclick="deletarItem(${index})">
    </li>
    `
    })

    listaCompleta.innerHTML = novaLi
    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    if (tarefasDoLocalStorage){
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }

mostrarTarefas()
}
recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)

