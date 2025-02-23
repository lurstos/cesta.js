function alterarQtd(produto, acao){
    const qtd = document.getElementById('qtd' + produto)
    const valor = document.getElementById('valor' + produto)
    const total = document.getElementById('total' + produto)

    if(acao == '-' && qtd.innerHTML == 0){
        alert('A quantidade não pode ser inferior a "0" (zero)!')
    } else {
    acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
    const totalsimples = qtd.innerHTML * somenteNumeros(valor.innerHTML)
    total.innerHTML = formatarValor(totalsimples)

    somaTotal()
    }
}

function excluirItem(item) {
    let qtde = document.getElementById('qtd' + item);
    qtde.innerHTML = 0;//zera a quantidade do item

    let totalX = document.getElementById('total' + item);
    totalX.innerHTML = 0;//zera o total do item

    somaTotal()
}

function excluirTudo(){
qtd1.innerHTML = 0;
qtd2.innerHTML = 0;
qtd3.innerHTML = 0;

total1.innerHTML = 0;
total2.innerHTML = 0;
total3.innerHTML = 0;

somaTotal()
}

function somaTotal(){
    let soma = 0

    for(let i=1;i<4;i++){
        let parcelas = somenteNumeros(document.getElementById('total' + i).innerHTML)
        soma += Number(parcelas)
    }

    document.getElementById('valorTotal').innerHTML = formatarValor(soma)
}

function somenteNumeros(n){
    return n.replace(/\D/g,'')
}

function formatarValor(n){
    return 'R$ ' + n.toLocaleString('pt-BR')
}