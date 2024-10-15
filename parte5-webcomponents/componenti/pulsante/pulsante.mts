class ElementoPersonalizzato {
    selettori: NodeListOf<Element>;

    /**
     * 
     * @param nomeSelettore Dai un nome specifico per l'elemento
     * @param css Crea una cartella per ogni componente e usa come percorso il nome della cartella e il file CSS
     */
    constructor(
        nomeSelettore: string, css: string
    ) {
        this.selettori = OttientiSelettori(nomeSelettore)
        this.selettori.forEach(elemento => {
            AggiungiEvento(elemento, 'click', () => elemento.classList.add('giallo'))
        });
        OttieniCSS(css)
    }
}

const pulsante = new ElementoPersonalizzato('pulsante', 'pulsante/pulsante.css')

function OttientiSelettori(nome:string): NodeListOf<Element> {
    return document.querySelectorAll(nome)
}

function AggiungiEvento(element: Element, type: keyof HTMLElementEventMap, funzione: (this: HTMLElement, ev: Event) => any) {
    element.addEventListener(type, funzione);
}

function OttieniCSS(href: string) {
    let head = document.getElementsByTagName('HEAD')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './componenti/' + href;
    head.appendChild(link);
}

