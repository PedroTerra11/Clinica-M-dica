function mensagem() {
    console.log("Digite 1 para adicionar uma consulta");
    console.log("Digite 2 para listar todas as consultas");
    console.log("Digite 3 para atualizar uma consulta existente. ");
    console.log("Digite 4 para cancelar uma consulta.")
  }

let consultas = {}
let opcao

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
        console.log("Qual o nome do Paciente?")
    }else if(opcao == 4){
        console.log("Qual o nome do paciente?")
    }

}else
    switch (opcao) {
        case 1:
            if(!consultas.nome){
                consultas.nome = entrada_usuario
                console.log("Digite o nome do médico que deseja:")
            }else if(!consultas.medico){
                consultas.medico = entrada_usuario
                console.log("Digite o dia desejado")
            }else if(!consultas.dia){
                if(entrada_usuario > 0){
                    consultas.dia = entrada_usuario
                    console.log("Digite o horario desejado")
                }else
                    console.log("Digite um dia válido")
            }else if(!consultas.horario){
                if(entrada_usuario > 0){
                    consultas.horario = entrada_usuario
                    console.log("\nConsulta marcada com sucesso! \n")
                    opcao = 0
                    mensagem()
                }else
                    console.log("Digite um horário válido")
            }
            break;

        case 2:
            if(!consultas){
                console.log("Não há consultas em aberto.")
            }else
                console.log(consultas)
            break;

        default:
            break;
    }


})
