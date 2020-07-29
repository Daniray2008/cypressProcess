describe("Teste custumizado", ()=> {
    beforeEach(() => {
        cy.visit("https://bit.ly/2XSuwCW")
    });

    it("Aprendendo a trabalhar com outras funcoes do cypress",() => {
        const customer = {
            firstname: "Joao",
            lastName: "Silva",
            email: "joaosilva@mail.com"
        };

        //Posso criar funcoes com cypress EX: fillMandatoryFields
        cy.fillMandatoryFields(customer);

        cy.get("button[type='submit']")
        .as("submitButton")
        .should("not.be.disabled");

        cy.get("button[type='reset']").click();

        cy.get("@submitButton").should("be.disabled");
    })
})