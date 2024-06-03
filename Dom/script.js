window.document.getElementById("titulo")

titulo.style.fontfamily = "Montserrat"

let clique = 0;

const somarCliques = () => {

    clique++

    document.querySelector("#botao").innerHTML = clique
}

const adicionaritem = () => {

    let novoitem = document.createElement("li")

    novoitem.textContent = "Novo item"

    let lista = document.getElementById("minhalista")

    lista.appendChild(novoitem);
}

const voltarPagina = () =>{
    Window.histor.back()
}

const fecharPagina = () =>{
    window.close()
}