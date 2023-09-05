document.addEventListener('DOMContentLoaded', () => {
    const somarB = document.getElementById("somar");
    const multB = document.getElementById("mult");
    const subB = document.getElementById("sub");
    const divB = document.getElementById("div")
    
    somarB.addEventListener('click', async () =>{
        const valores = pegarValores(); // Obtenha os valores dos campos aqui
        const opcoes = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(valores) // Use os valores obtidos aqui
        };

        console.log(valores);
        console.log(opcoes);
        
        const response = await fetch('https://calc-api.vercel.app/adi', opcoes)
        const responseData = await response.json();
        console.log('passamos pelo fetch')
        document.getElementById('resultado').textContent = `${responseData.resultado}`;
    });

    multB.addEventListener('click', async () =>{
        const valores = pegarValores();
        const opcoes = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(valores)
        };

        console.log(valores);
        console.log(opcoes);
        
        const response = await fetch('https://calc-api.vercel.app/mult', opcoes)
        const responseData = await response.json();
        console.log('passamos pelo fetch')
        document.getElementById('resultado').textContent = `${responseData.resultado}`;
    });

    subB.addEventListener('click', async () =>{
        const valores = pegarValores();
        const opcoes = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(valores)
        };

        console.log(valores);
        console.log(opcoes);
        
        const response = await fetch('https://calc-api.vercel.app/sub', opcoes)
        const responseData = await response.json();
        console.log('passamos pelo fetch')
        document.getElementById('resultado').textContent = `${responseData.resultado}`;
    });

    divB.addEventListener('click', async () =>{
        const valores = pegarValores();
        const opcoes = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(valores)
        };

        console.log(valores);
        console.log(opcoes);
        
        const response = await fetch('https://calc-api.vercel.app/divs', opcoes)
        const responseData = await response.json();
        console.log('passamos pelo fetch')
        document.getElementById('resultado').textContent = `${responseData.resultado}`;
    });
})

function pegarValores() {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    return { valor1, valor2 };
}

function modoClaro() {
    document.getElementById("corpo").style.backgroundColor = "white";
    document.getElementById("corpo").style.color = "black";
}

function modoEscuro() {
    document.getElementById("corpo").style.backgroundColor = "black";
    document.getElementById("corpo").style.color = "white";
}