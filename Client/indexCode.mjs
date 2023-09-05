document.addEventListener('DOMContentLoaded', () => {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    const somarB = document.getElementById("somar");
    const multB = document.getElementById("mult");
    const subB = document.getElementById("sub");
    const divB = document.getElementById("div")
    const opcoes = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({valor1, valor2})
    }
    somarB.addEventListener('click', async () =>{
        console.log('o botão esta indo')
        const response = await fetch('/adi', opcoes)
        responseData = await response.json();
        console.log('passamos pelo fetch')
        document.getElementById('resultado').textContent = `${responseData}`;

    })

    multB.addEventListener('click', async () =>{
        console.log('o botão esta indo')
        const response = await fetch('/mult', opcoes)
        responseData = await response.json();
        console.log('passamos pelo fetch')
        document.getElementById('resultado').textContent = `${responseData}`;

    })

    subB.addEventListener('click', async () =>{
        console.log('o botão esta indo')
        const response = await fetch('/sub', opcoes)
        responseData = await response.json();
        console.log('passamos pelo fetch')
        document.getElementById('resultado').textContent = `${responseData}`;

    })

    divB.addEventListener('click', async () =>{
        console.log('o botão esta indo')
        const response = await fetch('/divs', opcoes)
        responseData = await response.json();
        console.log('passamos pelo fetch')
        document.getElementById('resultado').textContent = `${responseData}`;
        
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
