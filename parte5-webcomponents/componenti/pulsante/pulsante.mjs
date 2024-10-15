"use strict";
class ElementoPersonalizzato {
    /**
     *
     * @param nomeSelettore Dai un nome specifico per l'elemento
     * @param css Crea una cartella per ogni componente e usa come percorso il nome della cartella e il file CSS
     */
    constructor(nomeSelettore, css) {
        this.selettori = OttientiSelettori(nomeSelettore);
        this.selettori.forEach(elemento => {
            AggiungiEvento(elemento, 'click', () => elemento.classList.add('giallo'));
        });
        OttieniCSS(css);
    }
}
const pulsante = new ElementoPersonalizzato('pulsante', 'pulsante/pulsante.css');
function OttientiSelettori(nome) {
    return document.querySelectorAll(nome);
}
function AggiungiEvento(element, type, funzione) {
    element.addEventListener(type, funzione);
}
function OttieniCSS(href) {
    let head = document.getElementsByTagName('HEAD')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './componenti/' + href;
    head.appendChild(link);
}
