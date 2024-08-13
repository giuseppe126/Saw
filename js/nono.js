let films = [
    "Saw - L'enigmista(2004)",
    "Saw II - La soluzione dell'enigma(2005)",
    "Saw III - L'enigma senza fine(2006)",
    "Saw IV - Il gioco continua...(2007)",
    "Saw V - (2008)",
    "Saw VI - (2009)",
    "Saw 3D - Il capitolo finale(2010)",
    "Saw:Legacy - (2017)",
    "Spiral:L'eredità di Saw - (2021)",
    "Saw X - (2023)",
    "Saw XI - (2025)"
]
films.forEach(film =>{
    let elemento = document.createElement("li")
    elemento.innerHTML = film
    document.querySelector("#lista").appendChild(elemento)
})

class personaggio {
    constructor(nome, descrizione, immagine, apparizione) {
        this.nome= nome
        this.descrizione= descrizione
        this.immagine= immagine
        this.apparizione= apparizione
    }
    creahtml() {
        let section = document.createElement("section")
        let pNome= document.createElement("p")
        pNome.innerHTML= this.nome
        section.appendChild(pNome)
        let descrizione = document.createElement("p")
        descrizione.innerHTML= this.descrizione
        section.appendChild(descrizione)
        let immagine = document.createElement("img")
        immagine.setAttribute("src", this.immagine)
        section.appendChild(immagine)
        let apparizione = document.createElement("table")
        let riga1 = document.createElement("tr")
        let riga2 = document.createElement("tr")
        let riga3 = document.createElement("tr")
        let cella1 = document.createElement("td")
        let paragrafo = document.createElement("p")
        paragrafo.innerHTML = "Apparizioni di "+this.nome +"  nei Film" 
        cella1.setAttribute("colspan", films.length)
        cella1.setAttribute("style", "color:white; font-size:larger;")
        cella1.appendChild(paragrafo)
        riga1.appendChild(cella1)
        apparizione.appendChild(riga1)
        films.forEach(film =>{
            let elemento = document.createElement("td")
            elemento.innerHTML = film.split("-")[0]
            riga2.appendChild(elemento)
        })
        apparizione.appendChild(riga2)
        this.apparizione.forEach(elemento =>{
            let td = document.createElement("td")
            td.innerHTML = elemento
            riga3.appendChild(td)
        })
        apparizione.appendChild(riga3)
        section.appendChild(apparizione)
        return section
    }
}

let personaggio1= new personaggio("Mark Hoffman", "Mark Hoffman(interpretato da <a href= \"https://it.wikipedia.org/wiki/Costas_Mandylor\">Costas Mandylor</a>) è un detective che lavora per la squadra omicidi e venne ingaggiato inizialmente per indagare sul caso Saw. A causa di una lite domestica Mark perde sua sorella(la sua unica famiglia) a causa dell'ex fidanzato Seth Baxter, fu così che Hoffman decise di mettere in ginocchio Seth uccidendolo simulando il metodo di Saw; dopo questo evento sarà John stesso a catturare Hoffman ed offrirgli una chance di redenzione. Da quel momento Hoffman diventerà complice di Saw e successivamente alla sua morte diventa il nuovo Saw killer.", "../img/mark1.webp",["Non presente", "Non presente", "Presente", "Presente", "Presente", "Presente", "Presente", "Non presente", "Non presente", "Presente"])
document.querySelector("main").appendChild(personaggio1.creahtml())
let personaggio2= new personaggio("Amanda Young", "Amanda Young(interpretata da Shawnee Smith) è tra i primi personaggi che vengono introdotti nella saga, la sua prima apparizione avviene nel primo film; appare subito come una testimone uscita viva da un gioco di Saw, la sua vita sprofondava nella droga e nell'autolesionismo, fino a quando John Kramer riesce a riabilitarla e ripulirla dai suoi mali interiori.", "AmandaSawIII.webp",["Presente", "Presente", "Presente", "Menzionato", "Menzionato", "Presente", "Non presente", "Non presente", "Non presente", "Presente"])
document.querySelector("main").appendChild(personaggio2.creahtml())
let personaggio3= new personaggio("Lawrence Gordon", "Lawrence Gordon(interpretato da <a href= \"https://it.wikipedia.org/wiki/Cary_Elwes\">Cary Elwes</a>) è il medico curante di John Kramer, fu proprio lui a diagnosticargli il cancro e gli fece notare che stava per morire, verrà successivamente preso e inserito in un gioco insieme a Adam Faulkner con l'obbiettivo di uccidere quest'ultimo entro un certo limite di tempo per rivedere la sua famiglia. Preso dall'esasperazione decide di tagliarsi il piede con un seghetto e liberarsi dalla catena che lo bloccava e dopo aver sparato alla spalla di Adam esce dal bagno per cercare aiuto ma sviene. Sarà lo stesso John a recuperare Lawrence e gli farà i complimenti per essere sopravvissuto e lo prenderà in custodia dandogli una protesi per il piede e facendolo diventare un suo braccio destro che lo aiuterà nei successivi giochi.", "../img/LawrenceGordon.webp",["Presente","Non presente", "Menzionato","Non presente", "Non presente", "Menzionato", "Presente", "Non presente", "Non presente", "Non presente"])
document.querySelector("main").appendChild(personaggio3.creahtml())
let personaggio4= new personaggio("Adam Fulkner", "Adam Fulkner(interpretato da <a href=\"https://it.wikipedia.org/wiki/Leigh_Whannell\">Leigh Whannel</a>) è il primo personaggio che appare nella saga, viene presentato come un semplice ragazzo rimasto vittima di Saw insieme al dottor Gordon, ma col passare del film si scoprirà esse un fotografo che viene pagato per spiare gli altri(motivo per il quale viene preso da Saw) e verrà pagato dal detective Tapp per spiare Lawrence Gordon. Alla fine del film fallisce il suo gioco e viene rinchiuso nel bagno per sempre.", "../img/Adam_Faulkner_2.webp", ["Presente", "Non presente", "Presente", "Non presente", "Non presente", "Non presente", "Non presente","Non presente","Non presente","Non presente"])
document.querySelector("main").appendChild(personaggio4.creahtml())
let personaggio5= new personaggio("Billy The Puppet", "Billy The Puppet è un losco pupazzo da ventriloquo utilizzato da John Kramer come trasmettitore di comunicazioni alle sue vittime, presenta un volto bianco, guance rosse sporgenti dipinte a forma di spirale, labbra rosse e occhi neri con l'iride rossa. Billy indossa sempre un abito nero, dei guanti e una camicia bianca accompahnati da un papillon rosso e un fazzoletto rosso e si muove sempre su di un triciclo rosso. Appare sin dal primo film e da allora è uno dei maggiori simboli della saga di Saw.", "../img/billythep.jpg", ["Presente", "Presente", "Presente", "Presente", "Presente", "Presente", "Presente", "Presente" , "Non presente", "Presente"])
document.querySelector("main").appendChild(personaggio5.creahtml())
let personaggio6= new personaggio("Jill Tuck", "Jill Tuck(interpretata da <a href=\"https://it.wikipedia.org/wiki/Betsy_Russell\">Betsy Russel è la ex moglie di John Kramer e proprietaria di un centro di recupero per tossicodipendenti. Una notte quando Jill aveva appena concluso il suo turno di lavoro, uno dei pazienti Cecil Addams con la scusa di aver lasciato la giacca dentro la clinica, minaccia Jill con un cacciavite ed entra nella clinica per prendere dei farmaci, ma uscendo Cecil sbattè la porta sul ventre di Jill(era al settimo mese di gravidanza) facendole perdere il bambino. Questo evento fu uno dei motivi della nascita di Saw.", "../img/jill.jpg", ["Non presente", "Non presente", "Non presente", "Presente", "Presente", "Presente", "Presente", "Menzionato", "Non presente", "Non presente"])
document.querySelector("main").appendChild(personaggio6.creahtml())