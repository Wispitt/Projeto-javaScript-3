
const buttonSortear = document.getElementById("button-sortear");

buttonSortear.onclick = () => {
    const inputLeft = document.getElementById("input-left");
    const inputRight = document.getElementById("input-right");
    const resultadoSortear = document.getElementById("resultado");
    const resultado2 = document.getElementById("resultado-2");

    const min = Math.ceil(inputLeft.value);
    const max = Math.floor(inputRight.value);

    if (min >= max) {
        resultado2.textContent = "Digite um número MAIOR que o MENOR!";
        inputLeft.value = "";
        inputRight.value = "";
        inputLeft.focus();
        return;
    }

    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    resultadoSortear.textContent = numeroAleatorio;
    resultado2.textContent = "";
}