describe('MyTestSuite_DataDriven',()=>{
    
    it.skip('FixtureDemoTest',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")

        cy.fixture('opencart').then((data)=>{

        cy.get("input[name='username']").type(data.username)
        cy.get("input[type='password']").type(data.password)
        cy.get("button[type='submit']").click()
        cy.get("button.btn-close").click()
        cy.get('h1').should("have.text",data.expected)

        })
        
    })
// Acess through Hooke
    let datatest
    before(()=>{
        cy.fixture('opencart').then((data)=>{
            datatest=data
        })
    })
    it('FixtureDemoTest2',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("input[name='username']").type(datatest.username)
        cy.get("input[type='password']").type(datatest.password)
        cy.get("button[type='submit']").click()
        cy.get("button.btn-close").click()
        cy.get('h1').should("have.text",datatest.expected)

    })
})