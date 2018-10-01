context('Secret Santa', () => {
  it('Title has "Secret Santa"', () => {
      cy.visit('https://secret-santa-73ddf.firebaseapp.com/')
      cy.get('title').contains('Secret Santa')
  })
  it('Check that page has a "button"', () => {
    cy.get('.random-group button').should('contain', 'Randomize')
  })
  it('Check that page has a "Family Members" section', () => {
    cy.get('.family-members h1').should('contain', 'Family Members')
  })
  it('Check that page has a "Random Group" section', () => {
    cy.get('.random-group h1').should('contain', 'Random Group')
  })
  it('Check that page has 8 list items in family members', () => {
    cy.get('.family-members li').should('have.length', 8)
  })
  it('Click the "Randomize" button', () => {
    cy.get('button').contains('Randomize').click(3)
    cy.get('.secret-santa', {timeout: 4000}).screenshot()
  })
  it('Make sure names populate after clicking on the "Randomize" button', () => {
    cy.get('#names li').should('have.length', 8)
  })
})