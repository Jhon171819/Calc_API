async function performOperation(operation) {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);


    const response = await fetch(`http://localhost:3000/${operation}`, {
        method: 'POST', 

        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({valor1, valor2})
    });
    const data = await response.json();
    document.getElementById("resultado").textContent = `${data.result}`;
}