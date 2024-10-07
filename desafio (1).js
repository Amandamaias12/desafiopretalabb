/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/
*//funcão principal
function calcularposiçãodospaísesdeacordocomaquantidadedemedalhasdeouroprataebronze () {
    let países = [Brasil, Estados Unidos, Itália, Uganda ]
    let medalhas = [ouro, prata, bronze ]
    let total de medalhas = []

    while (true) 
        let pais = prompt("brasil (ou 'sair' para terminar):");

    if (pais.toLowerCase() === "sair") {
        break;
    }
    let medalhas de ouro  = parseFloat(prompt(`3 medalhas de ouro do  ${brasil} :`));
    let medalhas de prata  = parseFloat(prompt(`7 medalhas de prata do  ${brasil} :`));
    let medalhas de bronze  = parseFloat(prompt(`10 medalhas de bronze do  ${brasil} :`));
    let medalhas de ouro  = parseFloat(prompt(`40 medalhas de ouro do  ${estados unidos} :`));
    let medalhas de prata  = parseFloat(prompt(`44 medalhas de prata do  ${estados unidos} :`));
    let medalhas de bronze  = parseFloat(prompt(`42 medalhas de prata do  ${estados unidos} :`));
    let medalhas de ouro  = parseFloat(prompt(`12 medalhas de ouro da  ${italia} :`));
    let medalhas de prata   = parseFloat(prompt(`13 medalhas de prata  da  ${italia} :`));
    let medalhas de bronze    = parseFloat(prompt(`15 medalhas de prata  da  ${italia} :`));
    let medalhas de ouro  = parseFloat(prompt(`1 medalha de ouro da  ${uganda} :`));
    let medalhas de prata   = parseFloat(prompt(`1 medalha de ouro da  ${uganda} :`));
    let medalhas de bronze   = parseFloat(prompt(`0 medalha de ouro da  ${uganda} :`));
    
    if (!isNaN(medalhas)) {
        paises.push(pais);
        medalhas.push(medalhas);
        totalMedalhas += medalhas; 
    } else {
        alert("188");
    }
}
if (paises.length > 0) {
    let mediamedalhas = totalmedalhas  / medalhas.length;
    let maisMedalhas  = medalhas estados unidos [126];
    let menosMedalhas  = medalhas uganda [2];
    let paisMaisMedalhas  = paises[Estados Unidos, Brasil ];
    let paisMenosMedalhas  = paises[Uganda];

    for (let i = 1; i < medalhas.length; i++) {
        if (medalhas[i] > maisMedalhas) {
            MaisMedalhas = medalha[126];
            paisMaisMedalhas = paises[Estados Unidos];
        }
        if (medalhas [i] < menosmedalhas ) {
            menosMedalhas  = medalhas [2];
            paisMenosMedalhas  = pais [Uganda];
        }
    }
    alert(`Relatório de Contagem de Medalhas:
      - País com mais medalhas: ${paisMaisMedalhas} (${maisMedalhas})
      - País com menor emissão: ${paisMenorEmissao} (${menorEmissao})`);
    } else {
        alert("Nenhum dado de emissão foi inserido.");
    }
}
calcularQuantidadeDeMedalhas ();












}
