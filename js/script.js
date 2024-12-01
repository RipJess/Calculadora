document.addEventListener("DOMContentLoaded", () => {
    const pantalla = document.querySelector(".pantalla");
    const botones = document.querySelectorAll("input[type='button']");
    let ans = 0;    
    let nuevaOperacion = false;
    let resultado = 0;

    if (sessionStorage.getItem("ans")) {
        ans = sessionStorage.getItem("ans");
    }

    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            let botonPresionado = boton.value;

            if (botonPresionado === "AC") {
                pantalla.textContent = "0";
                resultado = 0;
                return;
            }

            if (botonPresionado === "⟵") {
                if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
                    pantalla.textContent = "0";
                    resultado = 0;
                    return;
                }

                pantalla.textContent = pantalla.textContent.slice(0, -1);
                resultado = pantalla.textContent;
                return;
            }

            if (botonPresionado === "=") {
                try {
                    pantalla.textContent = eval(resultado);
                    ans = eval(resultado);
                    sessionStorage.setItem("ans", ans);

                } catch {
                    pantalla.textContent = "Error";
                }
                nuevaOperacion = true;
                return;
            }

            if (botonPresionado === "Ans") {
                if (pantalla.textContent === "0" || pantalla.textContent === "Error" || nuevaOperacion) {
                    pantalla.textContent = "ans";
                    resultado = ans;
                    nuevaOperacion = false;
                } else {
                    pantalla.textContent += "ans";
                    resultado += ans;
                }
                return;
            }

            if (botonPresionado === "π") {
                if (pantalla.textContent === "0" || pantalla.textContent === "Error" || nuevaOperacion) {
                    pantalla.textContent = "π";
                    resultado = Math.PI;
                    nuevaOperacion = false;
                } else {
                    pantalla.textContent += "π";
                    resultado += Math.PI;
                }
                return;
            }

            if (botonPresionado === "e") {
                if (pantalla.textContent === "0" || pantalla.textContent === "Error" || nuevaOperacion) {
                    pantalla.textContent = "e";
                    resultado = Math.E;
                    nuevaOperacion = false;
                } else {
                    pantalla.textContent += "e";
                    resultado += Math.E;
                }
                return;
            }

            if (botonPresionado === "√") {
                if (pantalla.textContent === "0" || pantalla.textContent === "Error" || nuevaOperacion) {
                    pantalla.textContent = "√";
                    resultado = "Math.sqrt";
                    nuevaOperacion = false;
                } else {
                    pantalla.textContent += "√";
                    resultado += "Math.sqrt";
                }
                return;
            }

            if (botonPresionado === "mc") {
                localStorage.setItem("ans", 0); 
                return;
            }

            if (botonPresionado === "m+") {
                localStorage.setItem("ans", parseFloat(localStorage.getItem("ans")) + eval(resultado));
                pantalla.textContent = "0";
                resultado = 0;
                return;
            }

            if (botonPresionado === "m-") {
                localStorage.setItem("ans", parseFloat(localStorage.getItem("ans")) - eval(resultado));
                pantalla.textContent = "0";
                resultado = 0;
                return;
            }

            if (botonPresionado === "mr") {
                if (pantalla.textContent === "0" || pantalla.textContent === "Error" || nuevaOperacion) {
                    pantalla.textContent = localStorage.getItem("ans");
                    resultado = localStorage.getItem("ans");
                    nuevaOperacion = false;
                } else {
                    pantalla.textContent += localStorage.getItem("ans");
                    resultado += localStorage.getItem("ans");
                }
                return;                
            }

            if (pantalla.textContent === "0" || pantalla.textContent === "Error" || nuevaOperacion) {
                if (botonPresionado === ".") {
                    pantalla.textContent = "0.";
                    resultado = "0.";
                } else if (botonPresionado == "+" || botonPresionado == "-" || botonPresionado == "*" || botonPresionado == "/") {
                    pantalla.textContent = ans + botonPresionado;
                    resultado = ans + botonPresionado;
                } else {
                    pantalla.textContent = botonPresionado;
                    resultado = botonPresionado;
                }
                nuevaOperacion = false;
            } else {
                pantalla.textContent += botonPresionado;
                resultado += botonPresionado;
            }
        });
    });
});




