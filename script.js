//Array de cursos disponíveis:
const cursos = [
    {
    curso:"HTML e CSS",
    descricao:"Estilize sua página Web de forma profissional e atraia mais clientes!",
    duracao:"1 mês",
    valor:500
    },
    {
    curso:"JavaScript",
    descricao:"Aprenda a principal linguagem de integração Front-end do mercado!",
    duracao:"2 meses",
    valor:900
    },
    {
    curso:"APIsRest",
    descricao:"Destaque-se com as APIs mais usadas atualmente!",
    duracao:"6 meses",
    valor:2000
    }
];


//Array de turmas disponíveis:
const turmas = [
    {
    turma:"Hipatia",
    curso:"JavaScript",
    inicio:"30/11/2022",
    termino:"30/01/2023",
    numeroDeAlunos: 150,
    periodo:"noturno",
    concluida:false
    },
    {
    turma:"Sibyla",
    curso:"JavaScript",
    inicio:"30/10/2022",
    termino:"30/12/2022",
    numeroDeAlunos:200,
    periodo:"integral",
    concluida:false
    }, 
    {
    turma:"Curie",
    curso:"HTML e CSS",
    inicio:"15/09/2022",
    termino:"15/10/2022",
    numeroDeAlunos:180,
    periodo:"noturno",
    concluida:true
    }, 
    {
    turma:"Zhenyi",
    curso:"HTML e CSS",
    inicio:"01/11/2022",
    termino:"01/01/2023",
    numeroDeAlunos:80,
    periodo:"integral",
    concluida:false
    },
    {
    turma:"Clarke",
    curso:"HTML e CSS",
    inicio:"04/07/2022",
    termino:"04/09/2022",
    numeroDeAlunos:200,
    periodo:"noturno",
    concluida:true
    },
    {
    turma:"Blackwell",
    curso:"APIsRest",
    inicio:"20/03/2022",
    termino:"20/06/2022",
    numeroDeAlunos:100,
    periodo:"integral",
    concluida:true
    }, 
    {
    turma:"Elion",
    curso:"APIsRest",
    inicio:"12/01/2022",
    termino:"12/06/2022",
    numeroDeAlunos:200,
    periodo:"noturno",
    concluida:true
    },
    {
    turma:"Burnell",
    curso:"APIsRest",
    inicio:"18/10/2022",
    termino:"18/04/2022",
    numeroDeAlunos:90,
    periodo:"integral",
    concluida:false
    } 
];

//Array de estudantes matriculados:
const estudantes = [
    {
    estudante:"Chris Evans",
    turma:"Hipátia",
    curso:"JavaScript",
    valor:"900",
    nParcelas:9,
    desconto:false,
    parcelas:100
    },
    {
    estudante:"Halle Berry",
    turma:"Burnell",
    curso:"APIsRest",
    valor:"2000",
    nParcelas:4,
    desconto:false,
    parcelas:500
    },
    {
    estudante:"Lashana Lynch",
    turma:"Zhenyi",
    curso:"HTML e CSS",
    valor:"500",
    nParcelas:1,
    desconto:true,
    parcelas:500
    },
    {
    estudante:"Gabriel Castro",
    turma:"Sibyla",
    curso:"JavaScript",
    valor:"900",
    nParcelas:1,
    desconto:true,
    parcelas:900
    },
    {
    estudante:"Vincent Rastelli",
    turma:"Curie",
    curso:"HTML e CSS",
    valor:"500",
    nParcelas:3,
    desconto:false,
    parcelas:166.66
    },
    {
    estudante:"Maiana Andrade",
    turma:"Clarke",
    curso:"HTML e CSS",
    valor:"500",
    nParcelas:2,
    desconto:true,
    parcelas:250
    },
    {
    estudante:"Chino Moreno",
    turma:"Blackwell",
    curso:"APIsRest",
    valor:"2000",
    nParcelas:2,
    desconto:true,
    parcelas:1000
    },
    {
    estudante:"Jonathan Davis",
    turma:"Elion",
    curso:"APIsRest",
    valor:"2000",
    nParcelas:1,
    desconto:true,
    parcelas:2000
    }
    
];


let carrinhoCursos = []

const adicionarCurso = () =>{
    carrinhoCursos.push(buscarCurso().valor)
}
const buscaCurso = () =>{
    let nomeCurso = document.getElementById('nome-curso').value
    let infoCurso = cursos.find(function(infoCurso){
        return infoCurso.curso.toLowerCase() === nomeCurso
    })
    console.log(infoCurso)
    
    
    return buscaCurso
}


const parcelarCurso = () =>{
    let parcelamento = document.getElementById('resultado-parcela-oculto')
    parcelamento.innerHTML = ''
    let numParcela = document.getElementById('numero-de-parcelas').value
    let totalCursos = 0
    let somaCursos = carrinhoCursos.reduce(function(total, numero){
        return total + numero
    }, 0)
    let valorParcela = somaCursos/numParcela
    if(numParcela > 0 && numParcela <= 2){
        totalCursos = somaCursos * 0.8
        valorParcela = totalCursos/numParcela
        switch (carrinhoCursos.length){
            case 1: 
                html =  `O valor do pagamento é de R$ ${totalCursos}, em ${numParcela}x de R$ ${valorParcela} com 20% de desconto`
                break;
            case 2:
                html = `O valor do pagamento é de R$ ${totalCursos * 0.9} com 20% + 10% de desconto, parcelado em ${numParcela}x de R$ ${valorParcela * 0.9}`
                break;
            default:
                html = `O valor do pagamento é de R$ ${totalCursos * 0.85} com 20% + 15% de desconto, parcelado em ${numParcela}x de R$ ${valorParcela * 0.85}`
                break;
        }
    }else{
        switch (carrinhoCursos.length) {
            case 1: 
                html = `O valor do pagamento é de R$ ${somaCursos}, em ${numParcela}x de R$ ${valorParcela}`   
                break;
            case 2:
                html = `O valor do pagamento é de R$ ${somaCursos * 0.9} com 10% de desconto, parcelado em ${numParcela}x de R$ ${valorParcela * 0.9}`
                break;
            default:
                html =  `O valor do pagamento é de R$ ${somaCursos * 0.85} com 15% de desconto, parcelado em ${numParcela}x de R$ ${valorParcela * 0.85}`
                break;
        }
    }
    if (carrinhoCursos.length == 0){
        alert("Adicione um curso no carrinho para calcular o valor")
    }else{
        parcelamento.innerHTML += `<h3>Valor</h3>${html}`
    }
    
}

//Função de simulação de parcelas e valores dos descontos:
/* const parcelarCurso=(parcela) =>{
    console.log('entrou')
    let valorTotal
    let valorParcela
    if(parcela <= 2){
        let valorTotal = cursos[0].valor - (cursos[0].valor*0.20)
        let valorParcela = valorTotal/parcela
        console.log(`O curso ${cursos[0].curso} ficou no valor total de R$:${valorTotal}. Em ${parcela}x de R$:${valorParcela}. Foi concedido desconto de 20%.`)
    } else {
        let valorTotal = cursos[0].valor
        let valorParcela = valorTotal/parcela
        console.log(`O curso ${cursos[0].curso} ficou no valor total de R$:${valorTotal}. Em ${parcela}x de R$:${valorParcela}.`)
    }
}

parcelarCurso(2) */



//Função para Procurar Curso dentre os disponíveis:
/* const buscarCurso = (nomeCurso) =>{
    for (cadaCurso of cursos){
        if(cadaCurso.curso.toLowerCase() == nomeCurso.toLowerCase()){
            return cadaCurso
        }
    }
} */

const buscarCurso = (nomeCurso) => {
    const mostrarCurso = cursos.find((cadaCurso) => {
        if (cadaCurso.curso.toLowerCase() === nomeCurso.toLowerCase()) {
            return cadaCurso
        }

    })
    return mostrarCurso
}


//Função para procurar turma dentre as disponíveis:
const buscarTurma = (nomeTurma) =>{
    for (cadaTurma of turmas){
        if(cadaTurma.turma.toLowerCase() === nomeTurma.toLowerCase()){
            return cadaTurma
        } else {
            alert('Turma não encontrada.')
        }
    } 
}





const procurarTurma = function (){
    const retornarTurma = document.getElementById("nome-da-turma").value.toLowerCase()
    document.getElementById("nome-da-turma").value = ''
    console.log(buscarTurma(retornarTurma))
    
}



//Essa função procurarTurma (pega o valor do input/apaga) vai se juntar a outra função pra pesquisar no array turma, provavelmente a função buscar turma. e com a função pra mostrar o resultado na tela (dom). pra mostrar esse resultado, provavelmente eu crie um novo array com filter



//Função para buscar estudantes dentre os matrículados:
/* const buscarEstudante = (nomeEstudante) =>{
    for (cadaEstudante of estudantes){
        if(cadaEstudante.estudante.toLowerCase() === nomeEstudante.toLowerCase()){
            return cadaEstudante
        }
     
    }
} */

buscarAluno = () =>{

    let nomeAluno = document.getElementById("nome-aluno").value
    
    const relatorioAlunoOculto = document.getElementById("relatorio-aluno-oculto")
    
    let resultado = estudantes.filter(elemento => elemento.estudante.toLowerCase().includes(nomeAluno.toLowerCase()))

    
    console.log(relatorioAlunoOculto)
    console.log(resultado)
    
    
        const html = `<div id="relatorio-aluno-oculto">
        <p>Aluno: ${resultado[0].estudante}</p>
        <p>Turma: ${resultado[0].turma}</p> 
        <p>Curso: ${resultado[0].curso}</p> 
        <p>Valor Total: ${resultado[0].valor}</p>
        <p>Valor Parcela: R$${resultado[0].parcelas}</p>   
        <p>Nº parcelas:${resultado[0].nParcelas}</p>   
        <div/>`
        
    
     
    
    relatorioAlunoOculto.innerHTML = ""
    relatorioAlunoOculto.innerHTML += html
    nomeAluno.value = ''
        
}



//Função para matricular um novo estudante:

/* const matricular = (nome, curso, turma, numeroParcelas) => {
    let valorCurso = buscarCurso(curso)
    let valorTotal = 0
    let valorPorParcela = 0
    desconto = false
    if(numeroParcelas >0 && numeroParcelas <=2){
        valorTotal = valorTotal - (valorCurso.valor *0.2)
        valorPorParcela = valorTotal/ numeroParcelas
        desconto = true 
    }else{
        valorTotal = valorCurso.valor
        valorPorParcela = valorTotal/numeroParcelas
    }
    let novoAluno = {
       estudante: nome,
       turma: turma ,
       curso: curso,
       valor: valorCurso.valor,
       nParcelas: numeroParcelas,
       desconto: desconto,
       valorParcelas: valorPorParcela 
    }

    estudantes.push(novoAluno)
    console.log(estudantes)
} */
/* matricular("jose","JavaScript","Hipatia",1) */





const matricularAluno = () =>{
    let novoAluno ={
        estudante: document.getElementById('nome-aluno').value,
        turma: document.getElementById('nome-turma').value,
        curso: document.getElementById('nome-curso').value
    }
    document.getElementById('nome-do-matriculado').innerHTML += document.getElementById('nome-aluno').value
    document.getElementById('turma-do-matriculado').innerHTML += document.getElementById('nome-turma').value
    document.getElementById('curso-do-matriculado').innerHTML += document.getElementById('nome-curso').value
    document.getElementById('nome-aluno').value = ''
    document.getElementById('nome-turma').value = ''
    document.getElementById('nome-curso').value = ''
    estudantes.push(novoAluno)
    console.log(estudantes)
    document.getElementById('aluno-matriculado-oculto').style.setProperty('display','flex')
    
}