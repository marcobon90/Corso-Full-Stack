class Pulsante extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'closed'})
        const template = document.getElementById('pulsante-template') as HTMLTemplateElement

        const templateClonato = template.content.cloneNode(true)
        shadow.appendChild(templateClonato)

        this.addEventListener('click', () => {
            this.classList.toggle('giallo')
        })
    }
}

customElements.define('pulsante', Pulsante)