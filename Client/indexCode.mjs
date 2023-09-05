document.addEventListener('DOMContentLoaded', () => {
    const somarB = document.getElementById("somar");
    const multB = document.getElementById("mult");
    const subB = document.getElementById("sub");
    const divB = document.getElementById("div")
    function pegarValores() {
        const valor1 = parseFloat(document.getElementById("valor1").value);
        const valor2 = parseFloat(document.getElementById("valor2").value);
        return {valor1, valor2}
    }
    
    const opcoes = {
        
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(pegarValores().valor1, pegarValores().valor2)
    }
    
    somarB.addEventListener('click', async () =>{
        console.log(pegarValores(), pegarValores().valor1)
        console.log(opcoes)
        console.log('o botão esta indo')
        const response = await fetch('http://localhost:3000/adi', opcoes)
        responseData = await response.json();
        console.log('passamos pelo fetch')
        document.getElementById('resultado').textContent = `${responseData.resultado}`;

    })

    multB.addEventListener('click', async () =>{
        console.log('o botão esta indo')
        const response = await fetch('http://localhost:3000/mult', opcoes)
        responseData = await response.json();
        console.log('passamos pelo fetch')
        document.getElementById('resultado').textContent = `${responseData.resultado}`;

    })

    subB.addEventListener('click', async () =>{
        console.log('o botão esta indo')
        const response = await fetch('http://localhost:3000/sub', opcoes)
        responseData = await response.json();
        console.log('passamos pelo fetch')
        document.getElementById('resultado').textContent = `${responseData.resultado}`;

    })

    divB.addEventListener('click', async () =>{
        console.log('o botão esta indo')
        const response = await fetch('http://localhost:3000/divs', opcoes)
        responseData = await response.json();
        console.log('passamos pelo fetch')
        document.getElementById('resultado').textContent = `${responseData.resultado}`;
        
    })
})
    

function modoClaro() {
    document.getElementById("corpo").style.backgroundColor = "white";
    document.getElementById("corpo").style.color = "black";
}

function modoEscuro() {
    document.getElementById("corpo").style.backgroundColor = "black";
    document.getElementById("corpo").style.color = "white";
}
