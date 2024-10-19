

nome_utente = localStorage.getItem('nome_utente')
span_nome_utente = document.getElementById('nome_utente')

if (nome_utente == null) {
    //Chiediamo all'utente di inserire un nome
    //Conserviamo il nome in una variabile
    nome_utente = prompt('Inserisci il tuo nome: ')
    //Salviamo l'accesso dell'utente
    localStorage.setItem('nome_utente', nome_utente)
} 

// alert('Ciao ' + nome_utente)
console.log(nome_utente);

//Mandiamo un messaggio di testo quando si apre la pagina
span_nome_utente.innerHTML ='Ciao ' + nome_utente
    

function Disconnetti() {
    localStorage.removeItem('nome_utente')
    location.reload()
}

pulsante_disconnetti = document.getElementById('pulsante_disconnetti')
pulsante_disconnetti.onclick = Disconnetti
