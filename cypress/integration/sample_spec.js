describe('Successful attempt', () => {
    it('type and submit valid username, receive content', () => {
        cy.visit('http://localhost:3000/')

        cy.get('#username')
          .type('lgm527')
          .should('have.value', 'lgm527')

        cy.contains('Swing').click()

        cy.get('.Card')
    })
})

describe('Error attempt', () => {
    it('type and submit invalid username, receive error', () => {
        cy.visit('http://localhost:3000/')

        cy.get('#username')
          .type(' ')
          .should('have.value', ' ')

        cy.contains('Swing').click() 

        cy.get('.notification')
    })
})

describe('Clear input', () => {
    it('clears input', () => {
        cy.visit('http://localhost:3000/')

        cy.get('#username')
          .type('xyz')
          .should('have.value', 'xyz')

        cy.contains('clear').click()

        cy.get('#username')
          .should('have.value', '')

    })
})