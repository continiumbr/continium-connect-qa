/// <reference types="cypress" />
let email = "admin@continium.com.br"
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


    it('Adiciona novo item', () => {
        cy.wait(5000)
        cy.get('[style="gap: 40px;"] > :nth-child(2) > .ant-space > .ant-space-item > .ant-row').should('contain.text', 'Usuários').click()
        cy.get('.ant-popover').should('be.visible').within(() => {
            cy.get(':nth-child(3) > .popup-menu-item').should('contain.text', 'Categoria de produtos').click()
        })
        cy.wait(1500)
        cy.get(':nth-child(1) > :nth-child(1) > .sc-bdnxRM').should('contain.text', 'Novo').click()
        cy.get('.ant-spin-container > .ant-card > .ant-card-body').within(() => {
            cy.get('.ant-form-item-control-input-content > #description').type('Categoria teste cypress')


        })
        cy.get(':nth-child(3) > .sc-bdnxRM').should('contain.text', 'Salvar').click()
        cy.get('.ant-message-notice-content').should('contain.text', 'Item adicionado com sucesso')
    })

    it('Exclui o item aberto', () => {
        cy.wait(5000)
        cy.get(':nth-child(7) > .sc-bdnxRM').click()
        cy.get('.ant-btn-primary > span').should('contain.text', 'Sim').click()
        cy.get('.ant-message-notice-content').should('contain.text', 'Item removido com sucesso')
        })

        
})
