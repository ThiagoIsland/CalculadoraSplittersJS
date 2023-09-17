function calcularResultado(splitter1, splitter2, splitter3) {
    try {
        let resultado = "";

        if (splitter1 !== "") {
            resultado = calcularUmParaDois(splitter1);
        } else if (splitter2 !== "") {
            resultado = calcularUmParaQuatro(splitter2);
        } else if (splitter3 !== "") {
            resultado = calcularUmParaOito(splitter3);
        } else {
            resultado = "Insira um valor válido para o splitter.";
        }

        return resultado;
    } catch (error) {
        return "Entrada inválida. Certifique-se de que você inseriu um valor válido para o splitter.";
    }
}

function calcularUmParaDois(splitter) {
    try {
        const splitterDecimal = eval(splitter);
        const splitterQuarto = splitterDecimal * 2;
        const splitterOitavo = splitterDecimal * 8;
        return `SP2-${splitter} 

                SP4-${splitterQuarto - 1} e SP4-${splitterQuarto} 

                SP4-${splitterQuarto - 1} = SP8-${splitterOitavo - 7}, SP8-${splitterOitavo - 6}, SP8-${splitterOitavo - 5} e SP8-${splitterOitavo - 4}

                SP4-${splitterQuarto} = SP8-${splitterOitavo - 3}, SP8-${splitterOitavo - 2}, SP8-${splitterOitavo - 1} e SP8-${splitterOitavo}`;
    } catch (error) {
        return "Entrada inválida. Por favor, insira um valor válido para o splitter, por exemplo, 1/2.";
    }
}

function calcularUmParaQuatro(splitter) {
    try {
        const splitterUmParaQuatro = eval(splitter);
        const splitterOito = splitterUmParaQuatro * 4;

        let splitterSp2Sp4;
        if (splitterUmParaQuatro % 2 === 0) {
            splitterSp2Sp4 = splitterUmParaQuatro / 2;
        } else {
            splitterSp2Sp4 = Math.floor(splitterUmParaQuatro / 2) + 1;
        }

        return `SP4-${splitter}

                SP2:${splitterSp2Sp4} 

                SP8-${splitterOito - 3}, SP8-${splitterOito - 2}, SP8-${splitterOito - 1} e SP8-${splitterOito}`;
    } catch (error) {
        return "Entrada inválida. Por favor, insira um valor válido para o splitter, por exemplo, 1/4.";
    }
}

function calcularUmParaOito(splitter) {
    try {
        const splitterUmParaOito = eval(splitter);
        let splitterSp2;
        if (splitterUmParaOito % 8 === 0) {
            splitterSp2 = splitterUmParaOito / 8;
        } else {
            splitterSp2 = Math.floor(splitterUmParaOito / 8) + 1;
        }

        let splitterSp4;
        if (splitterUmParaOito % 4 === 0) {
            splitterSp4 = splitterUmParaOito / 4;
        } else {
            splitterSp4 = Math.floor(splitterUmParaOito / 4) + 1;
        }

        return `SP8-${splitter}
        
                SP2-${splitterSp2} 

                SP4-${splitterSp4}`;
    } catch (error) {
        return "Entrada inválida. Por favor, insira um valor válido para o splitter, por exemplo, 1/8.";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const splitterInput1 = document.getElementById("splitterInput1");
    const splitterInput2 = document.getElementById("splitterInput2");
    const splitterInput3 = document.getElementById("splitterInput3");
    const resultadoDiv1 = document.getElementById("resultado1");
    const resultadoDiv2 = document.getElementById("resultado2");
    const resultadoDiv3 = document.getElementById("resultado3");

    splitterInput1.addEventListener("input", atualizarResultado);
    splitterInput2.addEventListener("input", atualizarResultado);
    splitterInput3.addEventListener("input", atualizarResultado);

    function atualizarResultado() {
        const splitter1 = splitterInput1.value;
        const splitter2 = splitterInput2.value;
        const splitter3 = splitterInput3.value;

        const resultado = calcularResultado(splitter1, splitter2, splitter3);

        resultadoDiv1.textContent = "";
        resultadoDiv2.textContent = "";
        resultadoDiv3.textContent = "";

        if (splitter1 !== "") {
            resultadoDiv1.textContent = resultado;
        } else if (splitter2 !== "") {
            resultadoDiv2.textContent = resultado;
        } else if (splitter3 !== "") {
            resultadoDiv3.textContent = resultado;
        }
    }
});

const toggleDarkModeButton = document.getElementById("toggleDarkMode");
    const body = document.body;

    toggleDarkModeButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        
        if (body.classList.contains("dark-mode")) {
            toggleDarkModeButton.textContent = "Tema Claro";
        } else {
            toggleDarkModeButton.textContent = "Tema Escuro";
        }
    });