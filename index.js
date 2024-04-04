
let participantes = [
  {
    nome: "Joao Vitor",
    email: "joao@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "Maria Silva",
    email: "maria.silva@example.com",
    dataInscricao: new Date(2024, 2, 21, 10, 30),
    dataCheckIn: new Date(2024, 2, 25, 21, 45)
  },
  {
    nome: "Carlos Oliveira",
    email: "carlos@example.com",
    dataInscricao: new Date(2024, 2, 20, 14, 15),
    dataCheckIn: null
  },
  {
    nome: "Ana Souza",
    email: "ana.souza@example.com",
    dataInscricao: new Date(2024, 2, 19, 17, 45),
    dataCheckIn: null
  },
  {
    nome: "Felipe Santos",
    email: "felipe@example.com",
    dataInscricao: new Date(2024, 2, 18, 20, 10),
    dataCheckIn: new Date(2024, 2, 27, 12, 00)
  },
  {
    nome: "Juliana Lima",
    email: "juliana.lima@example.com",
    dataInscricao: new Date(2024, 2, 17, 11, 25),
    dataCheckIn: new Date(2024, 2, 27, 11, 30)
  },
  {
    nome: "Pedro Vieira",
    email: "pedro.vieira@example.com",
    dataInscricao: new Date(2024, 2, 16, 8, 40),
    dataCheckIn: new Date(2024, 2, 28, 10, 20)
  },
  {
    nome: "Luciana Oliveira",
    email: "luciana@example.com",
    dataInscricao: new Date(2024, 2, 15, 13, 55),
    dataCheckIn: new Date(2024, 2, 28, 14, 45)
  },
  {
    nome: "Rafaela Costa",
    email: "rafaela.costa@example.com",
    dataInscricao: new Date(2024, 2, 14, 18, 30),
    dataCheckIn: new Date(2024, 2, 29, 16, 10)
  },
  {
    nome: "Gustavo Santos",
    email: "gustavo@example.com",
    dataInscricao: new Date(2024, 2, 13, 21, 20),
    dataCheckIn: new Date(2024, 2, 29, 18, 30)
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to (participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now()).to (participante.dataCheckIn)
  //condicional
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
    <button
      data-email="${participante.email}"
      onclick="fazerCheckIn(event)"
    >
      Confirmar check-in
    </button>`
  }
  
  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
let output = ""
for(let participante of participantes) {
output = output + criarNovoParticipante(participante)
}

document.querySelector('tbody').innerHTML = output 
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome:dadosDoFormulario.get('nome'),
    email:dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  const participanteExiste = participantes.find((p) => p.email == participante.email
  )

  if(participanteExiste) {
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  event.target.querySelector('[name=nome]').value = ""
  event.target.querySelector('[name=email]').value = ""
  
}

const fazerCheckIn = (event) => {

  const mensagemConfirmacao = 'tem certeza que deseja fazer o check-in?'

  if(confirm(mensagemConfirmacao) == false) {
    return
  }

  const participante = participantes.find((p) => p.email == event.target.dataset.email
  )

  participante.dataCheckIn = new Date()

  atualizarLista(participantes)
}