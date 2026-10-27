function calcular() {
    let nome = document.getElementById("nome").value.trim()
    let pontos = document.getElementById("nump").value
    if (nome == "" || pontos == "") {
        document.getElementById("resultado").innerHTML = ""
        alert("Preencha todos os campos!")
        return
    } else if (pontos < 0 || !Number.isInteger(Number(pontos))) {
        document.getElementById("resultado").innerHTML = ""
        alert("Digite um valor válido!")
        return
    } 
    document.getElementById("resultado").innerHTML = `${nome} fez ${pontos} pontos.`
}