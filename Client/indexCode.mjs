async function performOperation(operation) {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    const url = `https://jhon171819.github.io/Calc_API/${operation}`
    const opcoes =  {
        method: 'POST', 
        mode: 'no-cors',

        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({valor1, valor2})
    };

    const response = fetch(url,opcoes)
        .then(response => response.json())
        .then(data => {
            document.getElementById("resultado").textContent = `${data.result}`;
        })
        }
    
    

function modoClaro() {
    document.getElementById("corpo").style.backgroundColor = "white";
    document.getElementById("corpo").style.color = "black";
}

function modoEscuro() {
    document.getElementById("corpo").style.backgroundColor = "black"
    document.getElementById("corpo").style.color = "white"
}