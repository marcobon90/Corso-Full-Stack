
/**
 * 
 * @param elemento Per i custom Elements usa this
 * @param aperto Predefinito = false
 * @returns 
 */
export function AttaccaShadow(elemento: Element, aperto = false) {
    if (!aperto) {
        return elemento.attachShadow({ mode: 'closed' })
    } else {
        return elemento.attachShadow({ mode: 'open' })
    }
}

export function OttieniTemplate(id:string): HTMLTemplateElement {
    return document.getElementById(id) as HTMLTemplateElement
}

export function OttieniContentDaTemplate(template: HTMLTemplateElement) {
    return template.content
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

export async function InserisciTemplateNelloShadowDOM(shadowRoot: ShadowRoot, percorso: string, id_template: string): Promise<void> {
    try {
        const risposta = await fetch(percorso);
        if (!risposta.ok) {
            throw new Error(`Errore durante il caricamento del template: ${risposta.statusText}`);
        }
        const html = await risposta.text();

        // Verifica se il template è già presente nel DOM
        if (!document.getElementById(id_template)) {
            // Inserisci temporaneamente il template nel DOM per accedervi
            document.body.insertAdjacentHTML('beforeend', html);
        }

        // Ottieni il template dal DOM
        const template = document.getElementById(id_template) as HTMLTemplateElement;
        if (!template) {
            throw new Error(`Template con id "${id_template}" non trovato.`);
        }

        // Clona il contenuto del template
        const clone = template.content.cloneNode(true);

        // Appendi il clone allo shadowRoot
        shadowRoot.appendChild(clone);

        // Rimuovi il template temporaneamente inserito
        template.remove();

    } catch (errore) {
        console.error('Errore durante l\'inserimento del template nello shadow DOM:', errore);
    }
}
