describe('Handle the table',()=>{

    beforeEach('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("input[name='username']").type("demo")
        cy.get("input[type='password']").type("demo")
        cy.get("button[type='submit']").click()

        cy.get("button.btn-close").click()

        cy.get("#menu-customer>a").click()// main menu
        cy.get("#menu-customer>ul>li:first-child").click()// main menu

    
    })

    it.skip('check number of rows & columns in a table',()=>{
        cy.get("table.table.table-bordered.table-hover>tbody>tr").should("have.length",10)
        cy.get("table.table.table-bordered.table-hover>thead>tr>td").should("have.length",7)

    })
    it.skip('check data in the table',()=>{
        cy.get("table.table.table-bordered.table-hover>tbody>tr:nth-child(3)>td:nth-child(3)").contains("olaola@das.com")

    })
    it('Read Data from table',()=>{

        cy.get("table.table.table-bordered.table-hover>tbody>tr")
            .each(($row,index,$rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get("td").each(($col, index,$cols) =>{ //lay gia tri from column trong moi hang
                            cy.log($col.text())
                    })
                })
            })

    })
    it('Pagination',()=>{
        // cy.get("div.col-sm-6.text-end").then ((a)=>{
        //     let mytext=a.text()//Showing 1 to 10 of 19895 (1990 Pages)
        //     let totalPage=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1)
        //     cy.log(totalPage)
        // })



        let totalPage=5
        for(let i=1;i<=totalPage;i++ ){
            if(totalPage > 1){
                cy.log("page:"+i)
                cy.get("ul[class='pagination']>li:nth-child("+i+")").click()
                cy.wait(3000)

                cy.get("table.table.table-bordered.table-hover>tbody>tr")
                .each(($row,index,$rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get("td:nth-child(2)").then ((e)=>{ // lay gia tri cua column thu 2 , la column name
                            cy.log(e.text())
                        })
                        
                })
            })


            }
        }

 

    })
   
   

})



