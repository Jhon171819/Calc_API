async function performOperation(operation){
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    
    /*const response2 = await fetch(`http://localhost:3000/teste`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        
    })*/

    const response = await fetch(`http://localhost:3000/${operation}`, {
        method: 'POST', 

        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({valor1, valor2})
    });
    console.log(response.body)
    const data = await response.json();
    document.getElementById("resultado").textContent = `${data.resultado}`;
}

/*function pegarValores() {
    let x = document.getElementById("valor1").value;
    x = parseInt(x);
    let y = document.getElementById("valor2").value;
    y = parseInt(y);
    return {x, y}
}*/

function modoClaro() {
    document.getElementById("corpo").style.backgroundColor = "white";
    document.getElementById("corpo").style.color = "black";
}

function modoEscuro() {
    document.getElementById("corpo").style.backgroundColor = "black";
    document.getElementById("corpo").style.color = "white";
}

function dividir() {
    const {x, y} = pegar()
    resultado = parseFloat(x / y).toFixed(2)
    document.getElementById("resultado").innerHTML = resultado;
}

function subtrair() {
    const {x, y} = pegar()
    document.getElementById("resultado").innerHTML = x - y;
}

function multiplicar() {
    const {x, y} = pegar()
    document.getElementById("resultado").innerHTML = x * y;
}

/*function somar() {
    const {x, y} = pegar()
    document.getElementById("resultado").innerHTML = x + y;
}
*/