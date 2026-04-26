
const buttonSortear = document.getElementById("button-sortear");

buttonSortear.onclick = () => {
    const min = Math.ceil(document.getElementById("input-left").value);
    const max = Math.floor(document.getElementById("input-right").value);
    const resultadoSortear = document.getElementById("resultado");

    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    resultadoSortear.textContent = numeroAleatorio
}