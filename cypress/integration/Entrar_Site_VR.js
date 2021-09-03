describe('Entrar Site VR', () => {
    it('Consultar a seção Pra Você selecionar Onde usar meu cartão VR e ver mapa', () => {
        //visitando o site da VR
        cy.visit('https://www.vr.com.br/');
        
        //Aceitando a política
        cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click();

        //Seleção do Pra você
        cy.get(':nth-child(3) > .vr-quick-navigation__link').click();

        //Seleção do Onde usar meu cartão VR
        cy.get('.vr-button--negative').click();
    });
})