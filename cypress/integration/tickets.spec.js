describe("Tickets", () => {
    //VAI ACESSAR O SITE QUE EU QUERO
    beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));


    /*it.only vai rodar apenas o teste que tiver isso
    EX:
    it.only("has 'TICKETBOX' header's heading",() => {});
    */

    //ESCREVENDO EM TODOS OS CAMPOS DE TEXTO
    it("fills all the text input fields", () => {
        const firstName = "Danielli";
        const lastName = "Oliveira";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("daniray@gmail.com");
        cy.get("#requests").type("Vegetarian");
        cy.get("#signature").type(`${firstName} ${lastName}`);
    });

    //SELECIONAR UMA OPCAO
    it("select two tickets", () => {
        cy.get("#ticket-quantity").select("2");
    });

    //SELECIONAR UM RADIO BUTTON
    it("select a radio button", () => {
        cy.get("#vip").check();
    });

    //SELECIONAR CHECKBOX
    it("select checkbox", () => {
        cy.get("#social-media").check();
        cy.get("#friend").check();
    });

    //MARCAR E DESMARCAR UMA OPCAO
    it("select checkbox", () => {
        cy.get("#social-media").check();
        cy.get("#friend").check();
        cy.get("#social-media").uncheck();
    });

    //VAI VERIFICAR O TITULO DO HEADER DA PAGINA
    it("has 'TICKETBOX' header's heading", () => {
        cy.get("header h1").should("contain", "TICKETBOX");
    });

    //VERIFICANDO EMAIL INVALIDO
    it("alerts on invalid email", () => {
        cy.get("#email").type("daniray-gmail.com");
        cy.get("#email.invalid").should("exist");
    });

    //REAPROVENTANDO DADOS COM .as
    it("alerts on invalid email", () => {
        cy.get("#email")
            .as("email")
            .type("daniray-gmail.com");
        cy.get("#email.invalid").should("exist");
    });

    it("alerts on invalid email", () => {
        cy.get("#email")
            .as("email")
            .type("daniray-gmail.com");

        cy.get("#email.invalid")
            .as("invalidEmail")
            .should("exist");

        // o @ vai identificar o .as
        cy.get("@email")
            .clear()
            .type("daniray@gmail.com")

        cy.get("#email.invalid").should("not.exist");
    });

    it("fills and reset the form", () => {
        const firstName = "Danielli";
        const lastName = "Oliveira";
        const fullName = `${firstName} ${lastName}`;

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("daniray@gmail.com");

        cy.get("#ticket-quantity").select("2");

        cy.get("#vip").check();

        cy.get("#social-media").check();
        cy.get("#friend").check();

        cy.get("#requests").type("Vegetarian");

        cy.get(".agreement p").should(
            "contain",
            `I, ${fullName}, wish to buy 2 VIP tickets.`
        );
        
        //posso usar .click nos checkbox
        cy.get("#agree").check();

        cy.get("#signature").type(fullName);
        
        cy.get("button[type='submit']")
        .as("submitButton")
        .should("not.be.disabled");

        cy.get("button[type='reset']").click();

        cy.get("@submitButton").should("be.disabled");

    });

});