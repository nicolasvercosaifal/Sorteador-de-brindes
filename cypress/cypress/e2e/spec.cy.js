/// <reference types= "cypress" />
describe('Testes', () => {
  it('Visitando app', () => {
    cy.visit('localhost:3000')
  })

  it('Entrando na tela de cadastro', () => {
    cy.get('.navigateRegisterButton').click()
  })

  describe('Testando campo de nome', () => {
    it('Campo vazio deve ser inválido ', () => {
      cy.get('.registerButton').click();
      cy.get(':nth-child(1) > .wrapLabel > .showIcon > svg').should('exist')
    })
    it('Campo com número deve ser inválido', () => {
      cy.get(':nth-child(1) > .wrapLabel > .inputError').type('123');
      cy.get(':nth-child(1) > .wrapLabel > .showIcon > svg').should('exist');
    })
    it('Campo com nome válido', () => {
      cy.get(':nth-child(1) > .wrapLabel > .inputError').clear();
      cy.get(':nth-child(1) > .wrapLabel > .inputError').type('Fulaninho');
      cy.get('.registerButton').click();
      cy.get(':nth-child(1) > .wrapLabel > .showIcon > svg').should('not.exist');
    })
  })

  describe('Testando campo de email', () => {
    it('Campo vazio inválido', () => {
      cy.get('.registerButton').click();
      cy.get(':nth-child(2) > .wrapLabel > .inputError').click();
      cy.get(':nth-child(2) > .wrapLabel > .showIcon > svg').should('exist');
    })

    it('Campo com email sem @ e domínio é inválido', () => {
      cy.get(':nth-child(2) > .wrapLabel > .inputError').type('example');
      cy.get(':nth-child(2) > .wrapLabel > .inputError').click();
      cy.get(':nth-child(2) > .wrapLabel > .showIcon > svg').should('exist');
    })

    it('Campo com email sem @ é inválido', () => {
      cy.get(':nth-child(2) > .wrapLabel > input').clear();
      cy.get(':nth-child(2) > .wrapLabel > input').type('example.something');
      cy.get(':nth-child(2) > .wrapLabel > input').click();
      cy.get(':nth-child(2) > .wrapLabel > .showIcon > svg').should('exist');
    })

    it('Campo com email sem domínio é inválido', () => {
      cy.get(':nth-child(2) > .wrapLabel > input').clear();
      cy.get(':nth-child(2) > .wrapLabel > .inputError').type('example@something');
      cy.get('.registerButton').click();
      cy.get(':nth-child(2) > .wrapLabel > .showIcon > svg').should('exist');
    })

    it('Campo com email válido', () => {
      cy.get(':nth-child(2) > .wrapLabel > .inputError').clear();
      cy.get(':nth-child(2) > .wrapLabel > .inputError').type('example@something.me');
      cy.get('.registerButton').click();
      cy.get(':nth-child(2) > .wrapLabel > .showIcon > svg').should('not.exist');
    })

  })


  describe('Testando data de aniversário', () => {
    it('Testando campo vazio', () => {
      cy.get('.registerButton').click();
      cy.get(':nth-child(3) > .wrapLabel > .showIcon > svg').should('exist');
    })

    it('Testando com data no futuro deve ser inválida', () => {
      cy.get(':nth-child(3) > .wrapLabel > input').type('2162-05-19')
      cy.get('.registerButton').click();
      cy.get(':nth-child(3) > .wrapLabel > .showIcon > svg').should('exist');
      cy.get(':nth-child(3) > .wrapLabel > input').clear();
    })

    it('Testando com data válida', () => {
      cy.get(':nth-child(3) > .wrapLabel > input').type('1999-05-19')
      cy.get('.registerButton').click();
      cy.get(':nth-child(3) > .wrapLabel > .showIcon > svg').should('not.exist');
     
    })

    it('Testando campo de número vazio, deve ser inválida', () => {
      // cy.get(':nth-child(4) > .wrapLabel > input').type('1999-05-19')
      cy.get('.registerButton').click();
      cy.get('.showIcon > svg').should('exist');
    })

    it('Testando campo de número com um número válido', () => {
      cy.get(':nth-child(4) > .wrapLabel > input').type('666')
      cy.get('.registerButton').click();
      cy.get('.showIcon > svg').should('not.exist');
    })

    it('Testando sorteio', () => {
      cy.get('.drawButton').click()
    })
  })



})
