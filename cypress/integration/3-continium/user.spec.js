/// <reference types="cypress" />
import erpAdmin from "../../fixtures/users/erpAdmin.json"
const faker = require('faker')
const randomEmail = faker.internet.email();
//Range para retornar valores do Faker, afins de teste
//const users = Cypress._.range(1, 21).map((k) => {
//  return {
//    fEmail: faker.internet.email(),
//    fPassword: faker.internet.password(5),
//    name: faker.internet.userName()
//  }
//})
//console.table(users)

const fEmail = faker.internet.email()
const fPassword = faker.internet.password(5)
const fConfirmPassword = fPassword
const fName = faker.name.firstName()
const fLastName = faker.name.lastName()
let lista = [fName, fLastName, fEmail, fPassword, fConfirmPassword];

describe('Loga no sistema', () => {
  before(() => {
    cy.visit('/')
  })
  it('Entra com conta válida', () => {
    cy.get('#recovery-password').should('have.length', 1).within(() => {
      cy.get('#recovery-password_email').should('exist').type(erpAdmin.email,{delay:50})
      cy.get('#recovery-password_password').should('exist').type('123')
      cy.get('button').should('contain.text', 'Entrar').click()
    })
  })

  it('Adiciona um novo item', () => {
    cy.get('[style="display: flex; padding-left: 16px; padding-right: 16px; row-gap: 0px;"] > :nth-child(1)',).should('be.visible');
    cy.get(':nth-child(1) > :nth-child(1) > .sc-bdnxRM').should('contain.text', 'Novo').click( { timeout: 10000 })
    cy.get('form').within(() => {
      cy.get('.ant-form > .ant-row > .ant-form-item-control > .ant-form-item-explain > div').should('be.visible')
      cy.get('.ant-form-item-control-input-content > #first_name').should('not.contain.value').clear().type(fName,{delay:50})
      cy.get('.ant-form-item-control-input-content > #last_name').clear().type(fLastName,{delay:50})
      cy.get('.ant-form-item-control-input-content > #email').clear().type(fEmail,{delay:50})
      cy.get('.ant-input-affix-wrapper > #password').clear().type(fPassword)
      cy.get(' #confirmPassword').clear().type(fConfirmPassword)
    })
    cy.get(':nth-child(3) > .sc-bdnxRM').should('contain.text', 'Salvar').click()
    cy.get('.ant-message-notice-content').should('exist').should('contain.text', 'Item adicionado com sucesso')
  })

  it.skip('Exclui o item aberto', () => {
    cy.wait(1000)
    cy.get(':nth-child(7) > .sc-bdnxRM').click()
    cy.get('.ant-btn-primary > span').should('contain.text', 'Sim').click()
    cy.get('.ant-message-notice-content').should('contain.text', 'Item removido com sucesso')
  })
})