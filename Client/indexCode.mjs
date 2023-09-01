async function performOperation(operation) {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    const url = `/api/${operation}`;
    const opcoes = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({valor1, valor2}) 
    };

    try {
        const response = await fetch(url, opcoes);
        const responseData = await response.json();
        document.getElementById("resultado").textContent = `${responseData.result}`;
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }
}

async function getFunction() {
    try {
        const response = await fetch('/api', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
    }
}
    
    

function modoClaro() {
    document.getElementById("corpo").style.backgroundColor = "white";
    document.getElementById("corpo").style.color = "black";
}

function modoEscuro() {
    document.getElementById("corpo").style.backgroundColor = "black";
    document.getElementById("corpo").style.color = "white";
}
