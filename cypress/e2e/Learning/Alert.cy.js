// const cypress =require("cypress")
// const { it } = require("mocha")
describe('Alert',()=>{

    // 1) JavaScript Alert: will have some text and an Ok button
    it('Js alert',()=>{
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
      cy.xpath("//button[text()='Click for JS Alert']").click()
      cy.on('window:alert',(t)=>{
        //assertions
        expect(t).to.contains('I am a JS Alert');
     })
     cy.get("#result").should('have.text','You successfully clicked an alert')
    })

    // 2) JavaScript Confirm Alert: it will have some text Ok and Cancel button
    it('Js confirm alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:alert',(t)=>{
          //assertions
          expect(t).to.contains('I am a JS Confirm');
      
       })
       cy.on('window:confirm',()=>false)
       // cypress auto close alert window by using Ok button by default
       cy.get("#result").should('have.text','You clicked: Cancel')
    })
    //3) JavaScript Prompt Alert: it will be alert with some text and an input field with Ok and Cancel button
    //4) Authenticated Alert
    it('Authenticated alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
                                                                    {
                                                                        username:"admin",
                                                                        password:"admin"}})
                                                                        
    cy.get("div[class='example'] p").contains('Congratulations!')
    })
   

})







// 2) JavaScript Confirm Alert
// 3) JavaScript Prompt Alert
// 4) Authenticated Alert



