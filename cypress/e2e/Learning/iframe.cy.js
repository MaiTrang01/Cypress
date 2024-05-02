import 'cypress-iframe'

describe('Handling  iframes',()=>{

    it.skip('iframe1',()=>{
    
        
        cy.visit("https://the-internet.herokuapp.com/iframe")
       const iframe= cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible').then(cy.wrap)

        iframe.clear().type("welcome")

    })
    it('iframe2',()=>{ 
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe('#mce_0_ifr').clear().type("welcome")
    })

    it('iframe3',()=>{ 
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded('#mce_0_ifr')//load the frame
        cy.getIframe('#mce_0_ifr').clear().type("welcome")
    })




})