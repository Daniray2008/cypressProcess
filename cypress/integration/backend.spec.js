describe("Test of API rest", () => {
    before(() => {})

    beforeEach(() => {})

    it("login", () => {
       cy.request({
           method:'POST',
           url:'https://barrigarest.wcaquino.me/signin',
           body: {
               email:"daniray2008@hotmail.com",
               redirecionar: false,
               senha: "123456"
           }
       }).then(res => console.log(res))
    })
})