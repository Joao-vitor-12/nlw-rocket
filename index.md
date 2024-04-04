const participante = {
  nome: "Joao Vitor",
  email: "joao@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

let participantes = [
  {
    nome: "Joao Vitor",
    email: "joao@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
]


const atualizarLista = (participantes) => {
let output = ""
for(let participante of participantes) {
output = output + criarNovoParticipante(participante)
}