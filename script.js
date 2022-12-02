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

const parcelarCurso=(parcela) =>{
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
parcelarCurso(2)

const buscarCurso = (nomeCurso) =>{
    for (cadaCurso of cursos){
        if(cadaCurso.curso == nomeCurso){
            return cadaCurso
        }

    }
}

const buscarTurma = (nomeTurma) =>{
    for (cadaTurma of turmas){
        if(cadaTurma.turma == nomeTurma){
            return cadaTurma
        }
    }
}

const buscarEstudante = (nomeEstudante) =>{
    for (cadaEstudante of estudantes){
        if(cadaEstudante.estudante == nomeEstudante){
            return cadaEstudante
        }
    }
}

console.log(buscarCurso("JavaScript"))

const matricular = (nome, curso, turma, numeroParcelas) => {
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
}

matricular(juliana, JavaScript, Hipatia, 5)