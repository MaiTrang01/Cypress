
describe('Handle Window',()=>{

    it.skip('Open new window',()=>{
    
        
        cy.visit("https://the-internet.herokuapp.com/windows")
        // test clicking on a link without opening new tab
        cy.xpath("//a[contains(text(),'Click Here')]").invoke('removeAttr','target')
        cy.xpath("//a[contains(text(),'Click Here')]").click()
        cy.xpath("//h3[text()='New Window']").should('have.text','New Window')

    })

    it('Open new window 2',()=>{
    
        
        cy.visit("https://the-internet.herokuapp.com/windows")
        // test clicking on a link without opening new tab
        cy.xpath("//a[contains(text(),'Click Here')]").then(   (e) =>{
           let url =  e.prop('href');
           cy.visit(url)

        })

        //cy.xpath("//a[contains(text(),'Click Here')]").click()
        cy.xpath("//h3[text()='New Window']").should('have.text','New Window')

    })

})