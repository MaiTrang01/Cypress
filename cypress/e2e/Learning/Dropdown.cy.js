describe('Handle dropdown',()=>{

    it.skip('Dropdown with select',()=>{
    
        
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.get('#select-demo').select('Monday').should('have.value','Monday')
        cy.get('.selected-value').should('have.text','Day selected :- Monday')

    })

// skip will not execute

//2) DropDown without Select( Bootstrap)

    it.skip('Dropdown without select',()=>{
    
        
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-search__field').type("Italy").type('{enter}')
    cy.get('#select2-billing_country-container').should('have.text','Italy')
})

/// 3) Auto suggest DropDown
it('Dropdown without select',()=>{
    
        
    cy.visit("https://www.wikipedia.org/")
    cy.get('#searchInput').type("Viet")
    cy.get('.suggestion-title').contains("Vietnam War").click()
    


})
})

/// dynamic dropdown
cy.get('ul>li').each(($el, index, $list) => {
    // $el is a wrapped jQuery element
    if ($el.someMethod() === 'something') {
      // wrap this element so we can
      // use cypress commands on it
      cy.wrap($el).click()
    } else {
      // do something else
    }
  })