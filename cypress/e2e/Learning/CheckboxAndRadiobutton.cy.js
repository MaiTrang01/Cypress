describe('Radio button', () => {
    it('check radio button', () => {
      cy.visit("https://demo.seleniumeasy.com/basic-radiobutton-demo.html")
      cy.xpath("(//input[@value='Female'])[1]").check().should('be.checked')
      cy.xpath("(//input[@value='Male'])[1]").should('not.be.checked')     
    })


    it('checking checkbox', () => {
        cy.visit("https://demo.seleniumeasy.com/basic-checkbox-demo.html")
  
   // Visibility of the element
        cy.xpath("//label[text()[normalize-space()='Click on this check box']]").should('be.visible')


        //select checkbox
        cy.get("#isAgeSelected").check().should('be.checked')

        cy.get("#txtAge").should('have.text', 'Success - Check box is checked')
        // unselect checkbox
        cy.get("#isAgeSelected").uncheck()


        //select all check box
        //cy.get("input[type='button']").click()

        //select the last checkbox
        cy.get('[type="checkbox"]').last().check()
        
    
      
    
      })
  })

