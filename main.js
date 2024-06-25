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
let medicos = ["Douglas", "Tilia", "Alison", "Marcos", "Roberta"]

mensagem()
process.stdin.on("data", function(data){
    let entrada_usuario = data.toString().trim()

    if(!opcao){
        opcao = Number(entrada_usuario)
    if(opcao == 1){
        console.log("Digite o seu nome completo:")
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
                if(entrada_usuario.length > 3){
                    consulta.nome = entrada_usuario
                    console.log("Digite o médico que deseja! Em nossa clínica estão em plantão os médicos: ", medicos)
                }else
                    console.log("Digite um nome válido")
            }else if(!consulta.medico){
                for(let i = 0; i < medicos.length; i++){
                    if(entrada_usuario == medicos[i]){
                        consulta.medico = entrada_usuario
                        console.log("Digite o dia que deseja realizar a sua consulta!")
                    }else
                        console.log("Digite um médico que esteja de plantão no momento!")
                        break;
                }
            }else if(!consulta.dia){
                if(entrada_usuario >= 1 && entrada_usuario <= 31){
                    consulta.dia = entrada_usuario
                    console.log("Digite o horario desejado! (Lembrando que nosso horario de expediente é das 8:00 até as 18h!")
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
                if (!indice) {
                    indice = Number(entrada_usuario);
                    console.log("Consulta selecionada:");
                    console.log(consultas[indice]);
                    console.log("Qual atributo você deseja alterar?");
                } else if (!atributo) {
                    atributo = entrada_usuario;
                    console.log("Qual é o novo valor para " + atributo + "?");
                } else {
                    consultas[indice][atributo] = entrada_usuario;
                    console.log(atributo + " alterado para: " + entrada_usuario + "!\n");
                    indice = 0;
                    atributo = 0;
                    mensagem();
                }
                break;

            case 4:
                if (!indice) {
                    indice = Number(entrada_usuario);
                    consultas.splice(indice, 1);
                    console.log("Consulta removida com sucesso.\n");
                    indice = 0;
                    mensagem();
                }
                break;

            default:

            break;
    }


})
