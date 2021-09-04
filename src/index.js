const express = require('express')
const { v4: uuidv4 } = require('uuid')

const app = express()

app.use(express.json())

const customers = []

/**
 * cpf - string
 * name - string
 * id - uuid
 * statement []
 */

app.post('/account', (request, response) => {
  const { cpf, name } = request.body
  const id = uuidv4()

  customers.push({
    cpf,
    name,
    id,
    statement: []
  })

  return response.status(201).send()

  const cpfExistente = accounts.findIndex(account => {
    return account.cpf === cpf
  })
  if (cpfExistente > 0) {
    return response.json({ message: 'CPF Já Existente' })
  }
})

app.listen(3333, () => console.log('App running'))
