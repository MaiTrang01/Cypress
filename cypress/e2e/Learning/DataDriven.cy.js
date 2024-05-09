describe('DataDriven',()=>{
    
    it('DemoTest',()=>{
        cy.fixture('opencart2').then((data)=>{
            cy.visit("https://demo.opencart.com/admin/index.php")
            data.forEach((data)=>{
                cy.visit("https://demo.opencart.com/admin/index.php")
                cy.get("input[name='username']").type(data.username)
                cy.get("input[type='password']").type(data.password)
                cy.get("button[type='submit']").click()
                if(data.username=='demo'&&data.password=='demo')
                {
                    cy.get('h1').should("have.text",data.expected)
                    cy.get("button.btn-close").click()
                    cy.get('#header-logout > .nav-link').click()
                }
                else{
                    cy.get('.alert').contains(data.expected)
                }
        
                })
                
            })

        
    })

})