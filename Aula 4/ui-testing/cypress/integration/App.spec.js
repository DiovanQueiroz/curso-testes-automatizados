import cypress from 'cypress';
import form from '../support/Pages/form/index'

describe('App Developers Skilss', () => {

    beforeEach(() => {
        form.acessarForm();
    });

    it('Must be possivel to send form', ()=>{
        form.preencherForm();
        form.submitForm();

        cy.get('mensagem de enviado').should('be.visible')
    })
});