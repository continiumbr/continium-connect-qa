let email = "admin@continium.com.br"
let firstname = "Cypress"
let lastname = "Teste1"
let mail = "cypress@mail.com"
// let password, confirmpassword = 123
let password = 123
let confirmpassword = password

/// <reference types="cypress" />
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
    cy.visit('/home/products')
    cy.get(':nth-child(1) > :nth-child(1) > .sc-bdnxRM').should('contain.text', 'Novo').click()
    cy.get('.ant-form-item-control-input-content > #name')
    cy.get('.ant-select-selector').type('Categoria teste cypress')
    cy.get(':nth-child(3) > .sc-bdnxRM').should('contain.text', 'Salvar').click()
    cy.get('.ant-message-notice-content').should('contain.text', 'Item adicionado com sucesso')
    cy.intercept('https://continium-erp-api-staging.herokuapp.com/product-categories/*').as('getProduct')
    cy.visit('/accounts/10')
    cy.wait('@getProduct').then((interception) => {
    // we can now access the low level request
    // that contains the request body,
    // response body, status, etc
    })
  })
})