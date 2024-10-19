
    numero = prompt('Inserisci un numero')

    if (numero == 10) {
        alert('Il numero è uguale a 10')
    }

    if (numero == 10) {
        alert('Il numero è uguale a 10')
    } else {
        alert('Il numero è diverso da 10. Hai scritto ' + numero)
    }

    if (numero == 10) {
        alert('Il numero è uguale a 10')
    } else if (numero > 10) {
        alert('Il numero è maggiore di 10')
    }
    else {
        alert('Il numero è minore di 10')
    }

    switch (numero) {
        case 1:
            alert('Hai scritto 1')
            break;
        case 2:
            alert('Hai scritto 2')
        case 10:
            alert('Hai scritto 10')
        default:
            alert('Hai scritto un numero diverso da 10')
            break;
    }

    for (let index = numero; index < 10; index++) {
        console.log(index); //Guarda il browser inspector alla voce console
    }

    lista_auto =[
        Ford = 'Ford',
        Peugeot = 'Peugeot'
    ]


    lista_autoauto.forEach(auto => {
        console.log(auto);
    });

    while (numero < 60) {
        console.log(numero);
        numero++ 
        //Se non aumenti il numero il ciclo continua all'infinito.
    }

    do {
        //Questo codice viene sempre eseguito la prima volta
        console.log(numero); 
        numero++
    } while (numero < 70);