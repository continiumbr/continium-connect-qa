/// <reference types="cypress" />
let email = "admin@continium.com.br"
let firstname = "Cypress"
let lastname = "Teste1"
let mail = "cypress@mail.com"
// let password, confirmpassword = 123
let password = 123
let confirmpassword = password
describe('Loga no sistema', () => {
  before(() => {
    cy.visit('/')
  
  })
  it('Entra com conta válida', () => {
    cy.get('#recovery-password').should('have.length', 1).within(() => { 
      cy.get('#recovery-password_email').should('exist').type(email)
      cy.get('#recovery-password_password').should('exist').type('123')
      cy.get('button').should('contain.text', 'Entrar').click()
    })
  })


  it.skip('Exclui o item aberto', () => {
    cy.wait(5000)
    cy.get(':nth-child(7) > .sc-bdnxRM').click()
    cy.get('.ant-btn-primary > span').should('contain.text', 'Sim').click()
    cy.get('.ant-message-notice-content').should('contain.text', 'Item removido com sucesso')
    })


  it('Adiciona um novo item', () => {
      cy.wait(5000)
      cy.get(':nth-child(1) > :nth-child(1) > .sc-bdnxRM').should('contain.text', 'Novo').click()
      cy.wait(1000)
      cy.get('form').within(() => { 
      cy.get('.ant-form-item-control-input-content > #first_name').clear().type(firstname)
      cy.get('.ant-form-item-control-input-content > #last_name').clear().type(lastname)
      cy.get('.ant-form-item-control-input-content > #email').clear().type(mail)
      cy.get('.ant-input-affix-wrapper > #password').clear().type(password)
      cy.get('.row-home > :nth-child(2)').within(() => { })
      cy.get(' #confirmPassword').clear().type(confirmpassword)
  
    })
    cy.get(':nth-child(3) > .sc-bdnxRM').should('contain.text', 'Salvar').click()
    cy.get('.ant-message-notice-content').should('exist')
    })

    it('Exclui o item aberto', () => {
      cy.wait(1000)
      cy.get(':nth-child(7) > .sc-bdnxRM').click()
      cy.get('.ant-btn-primary > span').should('contain.text', 'Sim').click()
      cy.get('.ant-message-notice-content').should('contain.text', 'Item removido com sucesso')
      })
  })