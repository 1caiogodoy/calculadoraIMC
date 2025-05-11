function calcularIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let IMC = peso / (altura * altura);

    document.getElementById("resultado1").textContent = "IMC: " + IMC;
    if (IMC < 18.5){
        document.getElementById("resultado2").textContent = "Baixo peso";
    }
    else if (IMC >= 18.5 && IMC < 25){
        document.getElementById("resultado2").textContent = "Normal";
    }
    else if (IMC >= 25 && IMC < 30){
        document.getElementById("resultado2").textContent = "Sobrepeso";
    }
    else{
        document.getElementById("resultado2").textContent = "Obesidade";
    }
}