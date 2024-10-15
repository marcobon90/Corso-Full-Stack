import { AttaccaShadow, OttieniContentDaTemplate, OttieniTemplate } from "../function.mjs";
export const container = customElements.define('container', class Container extends HTMLDivElement {
    constructor() {
        super();
        const shadow = AttaccaShadow(this);
        const templateContent = OttieniContentDaTemplate(OttieniTemplate('container-template'));
        shadow.appendChild(templateContent);
    }
});
