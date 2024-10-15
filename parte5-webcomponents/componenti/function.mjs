var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 *
 * @param elemento Per i custom Elements usa this
 * @param aperto Predefinito = false
 * @returns
 */
export function AttaccaShadow(elemento, aperto = false) {
    if (!aperto) {
        return elemento.attachShadow({ mode: 'closed' });
    }
    else {
        return elemento.attachShadow({ mode: 'open' });
    }
}
export function OttieniTemplate(id) {
    return document.getElementById(id);
}
export function OttieniContentDaTemplate(template) {
    return template.content;
}
// export function OttieniTemplateDaHTML(percorso: string, id_template:string): Node {
//     fetch(percorso)
//         .then(risposta => risposta.text())
//         .then(html => {
//             document.body.insertAdjacentHTML('beforeend',html)
//             const template = document.getElementById(id_template) as HTMLTemplateElement
//             const clone = template.cloneNode(true) as Node
//             return clone
//         })
// }
export function InserisciTemplateNelloShadowDOM(shadowRoot, percorso, id_template) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const risposta = yield fetch(percorso);
            if (!risposta.ok) {
                throw new Error(`Errore durante il caricamento del template: ${risposta.statusText}`);
            }
            const html = yield risposta.text();
            // Verifica se il template è già presente nel DOM
            if (!document.getElementById(id_template)) {
                // Inserisci temporaneamente il template nel DOM per accedervi
                document.body.insertAdjacentHTML('beforeend', html);
            }
            // Ottieni il template dal DOM
            const template = document.getElementById(id_template);
            if (!template) {
                throw new Error(`Template con id "${id_template}" non trovato.`);
            }
            // Clona il contenuto del template
            const clone = template.content.cloneNode(true);
            // Appendi il clone allo shadowRoot
            shadowRoot.appendChild(clone);
            // Rimuovi il template temporaneamente inserito
            template.remove();
        }
        catch (errore) {
            console.error('Errore durante l\'inserimento del template nello shadow DOM:', errore);
        }
    });
}
