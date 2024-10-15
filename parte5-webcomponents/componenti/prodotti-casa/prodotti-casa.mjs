import { InserisciTemplateNelloShadowDOM } from "../function.mjs"

customElements.define('prodotto-casa',
    class ProdottoCasa extends HTMLElement {
        constructor() {
            super()

            InserisciTemplateNelloShadowDOM(this.attachShadow({mode:'closed'}),'prodotti-casa.html','prodotto-casa-template')
        }
    }
)