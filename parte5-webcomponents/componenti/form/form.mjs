import { InserisciTemplateNelloShadowDOM } from "../function.mjs";
const formInfodit = customElements.define('form-infodit', class FormInfodit extends HTMLElement {
    constructor() {
        super();
        //Creazione dello shadow Dom
        const shadow = this.attachShadow({ mode: 'closed' });
        //Prendiamo il contenuto del template e lo copiamo su una variabile 
        //const template = OttieniTemplateDaHTML('form.html','form-template') as Promise<Node>
        //Attacchiamo la copia del template sullo shadow DOM
        InserisciTemplateNelloShadowDOM(shadow, 'form.html', 'form-template');
    }
});
