function mensagem() {
    opcao = 0
    indice = 0
    atributo = 0
    console.log("Digite 1 para adicionar uma consulta");
    console.log("Digite 2 para listar todas as consultas");
    console.log("Digite 3 para atualizar uma consulta existente. ");
    console.log("Digite 4 para cancelar uma consulta.")
  }

let consulta = {}
let consultas = []
let indice
let atributo
let opcao
let médicos = [Douglas, Tilia, Alison, Marcos, Roberta]

mensagem()
process.stdin.on("data", function(data){
    let entrada_usuario = data.toString().trim()
    if(!opcao){
        opcao = Number(entrada_usuario)
    if(opcao == 1){
        console.log("Digite o seu nome:")
    }else if (opcao == 2){
        console.log("Pressione enter para continuar")
    }else if(opcao == 3){
        if(consultas.length == 0){
            console.log("Não há consultas em aberto \n")
            mensagem()
        }else
            for(let i = 0; i < consultas.length; i++){
                console.log("Qual consulta você deseja alterar? \n")
                console.log(i,consultas[i])
            }
                
    }else if(opcao == 4){
        if(consultas.length == 0){
            console.log("Não há consultas em aberto \n")
            mensagem()
        }else
            for(let i = 0; i < consultas.length; i++){
                console.log("Qual consulta você deseja remover? \n")
                console.log(i,consultas[i])
            }
    }

}else
    switch (opcao) {
        case 1:
            if(!consulta.nome){
                consulta.nome = entrada_usuario
                console.log("Digite o nome do médico que deseja:")
            }else if(!consulta.medico){
                consulta.medico = entrada_usuario
                console.log("Digite o dia que deseja realizar a sua consulta!")
            }else if(!consulta.dia){
                if(entrada_usuario >= 1 && entrada_usuario <= 31){
                    consulta.dia = entrada_usuario
                    console.log("Digite o horario desejado! (Lembrando que nosso horario de expediente é das 08:00 até as 18h!")
                }else
                    console.log("Digite um dia válido")
            }else if(!consulta.horario){
                if(entrada_usuario >= 8 && entrada_usuario <= 18){
                    consulta.horario = entrada_usuario
                    consultas.push(consulta)
                    consulta = {}
                    console.log("\nConsulta marcada com sucesso! \n")
                    mensagem()
                }else
                    console.log("Digite um horário válido")
            }
            break;

        case 2:
            if(consultas.length == 0){
                console.log("Não há consulta em aberto. \n")
            }else
                console.log(consultas)
                mensagem()
            break;
        
        case 3:
            if(!indice){
                indice = entrada_usuario
                console.log(consultas[indice])
                console.log("Existem todos esses atributos qual você deseja remover?")
            }else if(!atributo){
                atributo = entrada_usuario
                console.log("Qual é o valor?")
            }else{
                consultas[indice][atributo] = entrada_usuario
                console.log(atributo, "foi alterado para: ", entrada_usuario + "!\n")
                mensagem()
            }
 
    break;

        case 4: 
            if(!indice){
                indice = entrada_usuario
                consultas.splice(consultas[indice])
                console.log("Usuário removido com sucesso \n")
                mensagem()
            }
            
                
            break;


        default:
            break;
    }


})
