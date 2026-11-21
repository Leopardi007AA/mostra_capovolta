/* =====================================================================
   CONTENUTI DEL SITO  -  e' l'UNICO file da modificare per i testi.
   - Cercate "[SCUOLA]" e "[DA COMPLETARE]": sono gli unici segnaposto rimasti.
   - Nei messaggi, {{id|testo}} crea una frase cliccabile (decodificatore);
     ogni id deve avere una voce in "reveals".
   - Il gruppo "gli abitanti di Via del Molo" e' INVENTATO di proposito.
   - I fatti storici hanno una fonte (S1...). Riscriveteli con parole vostre
     e controllateli sulla fonte originale prima di consegnare.
   ===================================================================== */
window.CONTENT = {
  meta: {
    title: "La mostra capovolta",
    school: "[SCUOLA · CLASSE/I]",
    note: "Questo sito è progettato per essere capito, non diffuso: non ha pulsanti di condivisione, commenti né sistemi di tracciamento. Contiene esempi simulati di linguaggio ostile, sempre accompagnati da una spiegazione.",
    footer: "Progetto didattico di [SCUOLA · CLASSE/I] per il concorso «I giovani ricordano la Shoah» a.s. 2026/2027, traccia per la scuola secondaria di II grado. I messaggi della Stanza 2027 sono SIMULAZIONI DIDATTICHE su un gruppo inventato. Nessuna immagine di propaganda è riprodotta."
  },

  hero: {
    kick: "8 novembre 1937 · Monaco di Baviera",
    title: "La mostra capovolta",
    deck: "Una mostra insegnò a vedere un nemico. Questo percorso la smonta, pezzo per pezzo.",
    door: "USCITA",
    doorHint: "Si entra da qui. Dall'uscita.",
    intro: "Nel novembre 1937 si apre a Monaco una mostra di propaganda. Per più di due mesi la visitano ogni giorno migliaia di persone. Quasi novant'anni dopo, l'odio non ha più bisogno di una sala: arriva in tasca, in pochi secondi, spesso travestito da battuta. Per capirlo non copieremo la propaganda. Faremo il contrario: cercheremo il meccanismo, lo smonteremo e vedremo cosa è cambiato e cosa no."
  },

  /* Cosa fa questo sito (tre inversioni) */
  inversioni: [
    { n: "1", t: "Si entra dall'uscita", d: "Il percorso parte dal presente, scende nel 1937 e torna." },
    { n: "2", t: "Si smonta, non si espone", d: "Nessuna immagine di propaganda: solo ruolo, linguaggio, strumento e finalità." },
    { n: "3", t: "Non si condivide", d: "Niente pulsanti social, niente commenti, niente tracker." }
  ],

  sources: [
    { id: "S1", text: "United States Holocaust Memorial Museum, Enciclopedia dell'Olocausto, «Definire il nemico» (Defining the Enemy).", url: "https://encyclopedia.ushmm.org/content/it/article/defining-the-enemy" },
    { id: "S2", text: "Bundeszentrale für politische Bildung (bpb.de), «Vor 80 Jahren: Die NS-Propagandaausstellung \"Der ewige Jude\" wird eröffnet».", url: "https://www.bpb.de/politik/hintergrund-aktuell/258794/ns-propagandaausstellung" },
    { id: "S3", text: "Francesco Cassata, «La Difesa della razza». Politica, ideologia e immagine del razzismo fascista, Einaudi, 2008. [Date e numeri della rivista: da verificare sul libro]", url: "" },
    { id: "S4", text: "Il Post, «Leggi razziali fasciste», 5 settembre 2018 (da integrare con il testo del decreto).", url: "https://www.ilpost.it/2018/09/05/leggi-razziali-fasciste/" },
    { id: "S5", text: "Ministero dell'istruzione e del merito, Bando «I giovani ricordano la Shoah», XXV edizione, a.s. 2026/2027.", url: "" },
    { id: "S6", text: "Liliana Segre (voce «Liliana Segre», Wikipedia): nata nel 1930, nel 1938 espulsa dalla scuola elementare dopo le leggi razziali. Da integrare con una sua testimonianza diretta (Fondazione Memoriale della Shoah di Milano).", url: "https://en.wikipedia.org/wiki/Liliana_Segre" }
  ],

  /* Nota per la giuria: come leggere il percorso */
  giuria: {
    title: "Nota per la giuria",
    summary: "Come è fatto il percorso, come leggerlo e cosa abbiamo scelto di non fare",
    items: [
      { t: "Cos'è", d: "Un percorso web a scorrimento per la traccia della scuola secondaria di II grado: ruolo, linguaggi, strumenti e finalità della propaganda legata alla mostra «Der Ewige Jude» (1937) e al fascismo (1938), con analogie e differenze rispetto al linguaggio d'odio di oggi, tra social e intelligenza artificiale." },
      { t: "Come si legge", d: "Scorrendo dall'alto, in circa 12-15 minuti. «Indice» salta a ogni sala; «Lettura rapida» sblocca tutto e disattiva le animazioni; «Ascolta» legge la sala corrente con la voce del browser; Ctrl+P stampa tutto il percorso." },
      { t: "Cosa abbiamo scelto di non fare", d: "Non riproduciamo immagini o slogan di propaganda. Non scriviamo odio contro gruppi reali: i messaggi del 2027 riguardano un gruppo inventato e sono etichettati come simulazioni. Non ci sono pulsanti di condivisione, commenti o tracker." },
      { t: "Fonti", d: "Ogni dato storico rimanda a una fonte numerata (S1…). L'elenco con i link è in fondo alla pagina; le fonti secondarie sono segnalate come da verificare." },
      { t: "Età e sensibilità", d: "Gli esempi di linguaggio ostile compaiono sempre con una spiegazione accanto e mai come immagini. Il percorso è pensato per studentesse e studenti di scuola secondaria di II grado." }
    ]
  },

  /* Cronologia */
  timeline: {
    kick: "Cronologia",
    title: "Dal 1937 al 1944, in sette date",
    lead: "I fatti che tengono insieme le sale. Dove la fonte è secondaria, la data è da verificare.",
    items: [
      { d: "8 novembre 1937", t: "A Monaco si inaugura la mostra «Der Ewige Jude».", s: "S2" },
      { d: "Gennaio 1938", t: "La mostra chiude dopo 412.300 visitatori.", s: "S1" },
      { d: "15 luglio 1938", t: "Il «Giornale d'Italia» pubblica il Manifesto della razza.", s: "S4" },
      { d: "5 agosto 1938", t: "Esce il primo numero de «La difesa della razza».", s: "S3, da verificare" },
      { d: "5 settembre 1938", t: "Un decreto allontana dalle scuole studenti e docenti ebrei.", s: "S4" },
      { d: "1940", t: "Esce il film «Der Ewige Jude», derivato dalla mostra.", s: "S2" },
      { d: "20 giugno 1943", t: "Esce l'ultimo numero de «La difesa della razza».", s: "S3, da verificare" },
      { d: "20 gennaio 1944", t: "Primo decreto di abrogazione delle leggi razziali.", s: "S4" }
    ]
  },

  /* Stanza 2027 */
  stanza: {
    kick: "Stanza 2027",
    title: "Cinque messaggi chiusi a chiave",
    lead: "Sono simulazioni scritte da noi, su un gruppo che non esiste: gli abitanti di Via del Molo. Servono a vedere come è fatto l'odio, senza produrne di vero. Per leggerli devi capire come funzionano. La chiave è nel 1937.",
    badge: "Simulazione didattica · gruppo inventato"
  },

  /* Sala 0 */
  sala0: {
    kick: "Sala 0 · Contesto",
    title: "8 novembre 1937",
    lead: "A Monaco si apre «Der Ewige Jude». Non è un museo: è un'arma.",
    story: "La mostra viene inaugurata l'8 novembre 1937 e resta aperta fino a gennaio 1938. Presenta gli ebrei come un «corpo estraneo» dentro la nazione. Non è un caso isolato: è una delle mostre di propaganda con cui il regime educa lo sguardo di milioni di persone. Tre anni dopo la mostra diventerà anche un film.",
    counter: { value: 412300, label: "visitatori in poco più di due mesi", note: "Più di 5.000 al giorno (S1)" },
    facts: [
      { text: "Inaugurazione: 8 novembre 1937, a Monaco di Baviera.", src: "S2" },
      { text: "Apertura fino a gennaio 1938; 412.300 visitatori.", src: "S1" },
      { text: "Fa parte di una serie di mostre di propaganda dette «Schandausstellungen».", src: "S2" },
      { text: "Dalla mostra deriva un film con lo stesso titolo, uscito nel 1940.", src: "S2" }
    ],
    labels: {
      Ruolo: "Portare un messaggio politico d'odio in uno spazio pubblico, davanti a una folla.",
      Linguaggio: "Stereotipi, caricature e falsità; antico antigiudaismo religioso mescolato al razzismo biologico (S5).",
      Strumento: "Una mostra aperta a tutti, poi un film.",
      Finalità: "Secondo S1, la propaganda che demonizzava gli ebrei preparò la popolazione a misure sempre più dure, fino alle deportazioni e al genocidio."
    }
  },

  /* Sale 1-5 */
  rooms: [
    {
      key: 1, scene: "noi-loro", title: "Nominare il nemico",
      lead: "Prima si decide chi è «dentro» e chi è «fuori».",
      story: "Ogni propaganda parte da una linea. Da una parte «noi», dall'altra «loro». Non serve provare nulla: basta ripetere che chi sta dall'altra parte non appartiene. La propaganda nazista descrisse gli ebrei come un corpo estraneo che viveva a spese della nazione che li ospitava, ne avvelenava la cultura e ne prendeva l'economia.",
      caption: "Scorri: una linea compare e un gruppo viene spostato dall'altra parte.",
      facts: [
        { text: "Gli ebrei erano raffigurati come un «corpo estraneo» che viveva a spese della nazione (S1).", src: "S1" },
        { text: "Un gruppo si sente coeso anche definendo chi ne deve restare escluso (S1).", src: "S1" }
      ],
      labels: {
        Ruolo: "Tracciare un confine tra «noi» e «loro».",
        Linguaggio: "Accuse generiche rivolte a un intero gruppo.",
        Strumento: "Mostre, giornali, discorsi, cartelli.",
        Finalità: "Rendere pensabile l'esclusione."
      },
      message: "{{a|Quelli di Via del Molo non sono come noi.}} Abitano nel nostro quartiere, ma non sono del quartiere. {{b|Prendono tutto e non danno niente.}}",
      reveals: {
        a: "Separare «noi» da «loro»: dire chi è estraneo è il primo passo. Nel 1937: il «corpo estraneo» nella nazione (S1).",
        b: "Accusa economica: «vivono a nostre spese». Nel 1937: si diceva che gli ebrei vivessero a spese della nazione e ne prendessero l'economia (S1)."
      },
      then: "Nel 1937 il confine lo tracciava lo Stato, con la forza di una mostra e di un giornale.",
      diff: "Oggi chi traccia la linea? Spesso nessuno in particolare: la linea nasce dalla somma di tanti messaggi simili."
    },
    {
      key: 2, scene: "volti", title: "Togliere l'umano",
      lead: "Chi viene paragonato a un animale o a una malattia non ha più bisogno di essere ascoltato.",
      story: "Il secondo passo toglie i nomi e le facce. Le persone diventano un «tipo», poi una massa, poi un'infestazione. Nel film del 1940 una sequenza paragona gli ebrei ai ratti che portano malattie e invadono il continente. Nella Polonia occupata i ghetti furono presentati come una misura sanitaria. Quando una persona è un'epidemia, isolarla sembra igiene.",
      caption: "Scorri: persone diverse, con nome e tratti, diventano figure tutte uguali.",
      facts: [
        { text: "Nel film «Der Ewige Jude» (1940) gli ebrei sono paragonati a ratti portatori di malattie (S1).", src: "S1" },
        { text: "Nella Polonia occupata i ghetti furono presentati come quarantena sanitaria (S1).", src: "S1" },
        { text: "Per scelta del progetto qui non si riproduce nessuna immagine: la si descrive e la si commenta.", src: "" }
      ],
      labels: {
        Ruolo: "Rendere accettabile la violenza prima che avvenga.",
        Linguaggio: "Metafore di parassiti e di malattia.",
        Strumento: "Film, immagini, stampa.",
        Finalità: "Far passare le misure contro un gruppo per igiene o difesa necessaria."
      },
      message: "{{a|Stanno infestando le nostre strade.}} Dove arrivano, {{b|il quartiere si ammala.}} {{c|Qualcuno deve pur fare qualcosa.}}",
      reveals: {
        a: "Metafora del parassita: un gruppo di persone ridotto a infestazione. Nel 1937-40: i ratti nel film (S1).",
        b: "Metafora della malattia: il gruppo diventa un contagio. Nei ghetti: «minaccia sanitaria» da isolare (S1).",
        c: "Appello all'azione: dalla metafora alla «misura necessaria». Si passa dall'insulto alla decisione."
      },
      then: "Nel 1937 la metafora viaggiava su una pellicola. L'effetto era abbassare la soglia dell'empatia.",
      diff: "Oggi la stessa metafora può stare in una frase di cinque parole o in un meme che gira in pochi secondi."
    },
    {
      key: 3, scene: "linguaggi", title: "Mescolare i linguaggi",
      lead: "Vecchi pregiudizi e nuova «scienza»: due voci per un solo messaggio. In Italia, dal 1938.",
      story: "Il pregiudizio da solo si riconosce. Per questo ha bisogno di vestiti seri: la scienza, il giornale, la scuola. Il bando ricorda che la propaganda mescolava il nuovo antisemitismo razzista con le argomentazioni dell'antigiudaismo religioso. In Italia il 15 luglio 1938 il Manifesto della razza compare sul «Giornale d'Italia» come opera di studiosi. Pochi giorni dopo nasce una rivista che lo ripete con immagini e fotomontaggi.",
      caption: "Scorri: cinque linguaggi diversi si fondono in un solo messaggio.",
      facts: [
        { text: "15 luglio 1938: il «Giornale d'Italia» pubblica il Manifesto della razza, presentato come opera di studiosi (S4).", src: "S4" },
        { text: "5 agosto 1938: primo numero de «La difesa della razza», che contiene il Manifesto (S3, da verificare).", src: "S3" },
        { text: "La rivista esce fino al 20 giugno 1943 e usa grafica, fotografie, vignette e fotomontaggi (S3, da verificare).", src: "S3" },
        { text: "5 settembre 1938: un decreto allontana dalle scuole studenti e docenti ebrei (S4).", src: "S4" }
      ],
      memoria: {
        kick: "Una voce",
        text: "Liliana Segre è nata nel 1930. Nel 1938, dopo le leggi razziali, fu espulsa dalla scuola elementare. Dietro un decreto c'è una bambina che perde il posto in classe.",
        src: "S6",
        invito: "Per ascoltarla direttamente, cercate la sua testimonianza presso la Fondazione Memoriale della Shoah di Milano."
      },
      labels: {
        Ruolo: "Dare al pregiudizio una veste di serietà.",
        Linguaggio: "Termini pseudoscientifici, appello agli «esperti», discorsi su «sangue» e «carattere».",
        Strumento: "Manifesto, rivista, decreti, scuola.",
        Finalità: "Trasformare un'opinione in norma."
      },
      message: "{{a|Lo dicono gli esperti.}} {{b|È nel loro carattere, da sempre:}} basta leggere {{c|quello studio che gira in rete.}}",
      reveals: {
        a: "Falsa autorità: «gli esperti» senza un nome. Nel 1938: il Manifesto della razza firmato da «studiosi» (S4).",
        b: "Essenzialismo: una caratteristica attribuita a tutto un gruppo «per natura». Nel 1938: il razzismo biologico.",
        c: "Prova che nessuno può controllare: uno «studio» senza autore. Nel 1938: la rivista prometteva di mostrare che la scienza sosteneva il razzismo (S3)."
      },
      then: "Nel 1938 il linguaggio scientifico trasformò un pregiudizio in una legge scolastica.",
      diff: "Oggi un falso può avere l'aspetto di un articolo, di un video o di una voce clonata dall'intelligenza artificiale."
    },
    {
      key: 4, scene: "soglia", title: "Renderlo normale",
      lead: "Quello che si vede ogni giorno smette di scandalizzare.",
      story: "Un messaggio ripetuto cento volte non fa più rumore. Cartelli nelle strade, giornali nelle bacheche, libri per bambini: la discriminazione entra nella vita quotidiana e diventa paesaggio. I nazisti controllarono anche le istituzioni culturali, musei compresi, e crearono nuove occasioni di propaganda. Ciò che era inaccettabile diventa «così vanno le cose».",
      caption: "Scorri: più il messaggio si ripete, più la soglia dello scandalo scende.",
      facts: [
        { text: "I nazisti controllarono le istituzioni culturali, musei compresi, per diffondere propaganda antisemita (S1).", src: "S1" },
        { text: "Casa editrice Der Stürmer: libri antisemiti per bambini, come «Der Giftpilz» (S1).", src: "S1" },
        { text: "Cartelli «qui non vogliamo gli ebrei» nelle strade; il giornale «Der Stürmer» esposto in bacheche pubbliche (S1).", src: "S1" }
      ],
      labels: {
        Ruolo: "Far diventare ordinario ciò che era inaccettabile.",
        Linguaggio: "Ripetizione, battute, slogan, immagini semplici.",
        Strumento: "Musei, libri per bambini, cartelli, bacheche.",
        Finalità: "Normalizzare razzismo, persecuzioni e infine lo sterminio (S5)."
      },
      message: "{{a|Era solo una battuta.}} {{b|Lo fanno tutti,}} basta vedere cosa si scrive. {{c|Ridiamoci su.}}",
      reveals: {
        a: "Lo scherzo come scudo: se qualcuno protesta, «non sa stare allo scherzo».",
        b: "Norma sociale apparente: se lo fanno tutti, è normale. Nel 1937: cartelli, bacheche e libri ovunque (S1).",
        c: "Abitudine: la soglia dello scandalo scende a forza di ripetizione."
      },
      then: "Nel 1937 la ripetizione era organizzata: stessi temi su manifesti, giornali e libri.",
      diff: "Oggi la normalità si misura anche in visualizzazioni e condivisioni, ed è prodotta da molti utenti, non da un unico regista."
    },
    {
      key: 5, scene: "pubblici", title: "Parlare a ciascuno",
      lead: "Lo stesso messaggio, con toni diversi per pubblici diversi.",
      story: "La propaganda efficace non grida con tutti allo stesso modo. Dopo il 1933 i responsabili della propaganda crearono messaggi su misura per pubblici diversi, anche per i tanti tedeschi che non erano nazisti. Per i ceti medi istruiti, offesi dalle caricature più rozze, usarono un linguaggio ugualmente antisemita ma più sottile. Chi non si riconosce nel grido può essere raggiunto da un sussurro.",
      caption: "Scorri: un solo messaggio si divide in quattro toni per quattro pubblici.",
      facts: [
        { text: "Dopo il 1933 i messaggi furono adattati a pubblici diversi, compresi i tedeschi non nazisti (S1).", src: "S1" },
        { text: "Per i ceti medi istruiti si usò un linguaggio più sottile, ma sempre antisemita (S1).", src: "S1" }
      ],
      labels: {
        Ruolo: "Raggiungere anche chi rifiuta i toni più rozzi.",
        Linguaggio: "Più sottile, apparentemente ragionevole.",
        Strumento: "Stampa, discorsi, testi diversi per lettori diversi.",
        Finalità: "Allargare il consenso passivo."
      },
      message: "{{a|Non ho nulla contro di loro, ma}} {{b|io faccio solo domande:}} chi decide davvero nel nostro quartiere? {{c|Sono domande legittime, no?}}",
      reveals: {
        a: "Il «non ho nulla contro, ma» apre la porta al pregiudizio dopo averlo negato.",
        b: "L'insinuazione: non si afferma, si lascia concludere al pubblico.",
        c: "Legittimazione preventiva: chi risponde sembra voler zittire. Nel 1937: toni più sottili per i ceti istruiti (S1)."
      },
      then: "Nel 1937 c'era una regia: qualcuno decideva quale tono usare con chi.",
      diff: "Oggi spesso decide un sistema che personalizza ciò che vediamo, senza che nessuno scriva un messaggio diverso per ognuno."
    }
  ],

  /* Sala 6 */
  sala6: {
    kick: "Sala 6 · Confronto",
    title: "1937 ↔ 2027",
    lead: "Sposta il cursore: a sinistra il meccanismo nel 1937, a destra la sua eco simulata. Sotto: cosa NON è uguale.",
    story: "Riconoscere le analogie non basta: la traccia chiede anche le differenze. Ed è nelle differenze che oggi si decide come difendersi.",
    notEqual: [
      { t: "Chi produce", d: "Nel 1937 un regime con il monopolio dei mezzi. Oggi molti utenti, spesso anonimi, e sistemi che amplificano ciò che fa reagire." },
      { t: "Velocità", d: "Una mostra richiedeva mesi di preparazione. Un messaggio digitale si copia e si diffonde in pochi secondi." },
      { t: "Intelligenza artificiale", d: "Oggi immagini, voci e testi falsi si producono a costo quasi zero. Il falso credibile non è più un'eccezione." },
      { t: "Le risposte", d: "Nel 1937 le leggi sostenevano la discriminazione. Oggi esistono leggi, strategie nazionali ed europee e sistemi di segnalazione (citate dal bando: da consultare)." }
    ],
    fakesKick: "Il falso innocuo",
    fakesTitle: "Allenati su un tema innocuo",
    fakesLead: "Per capire come funziona un falso credibile, la classe ha costruito tre messaggi su temi innocui. Quale puoi verificare e quale no?",
    fakes: [
      { post: "LA MENSA CHIUDE DA LUNEDÌ! Me l'ha detto un amico di mio cugino che lavora in comune. CONDIVIDI PRIMA CHE LO CANCELLINO!", isFake: true, explain: "Non verificabile: fonte di terza mano, tono d'urgenza, invito a condividere subito. Sono i segnali di un messaggio fatto per correre, non per essere controllato." },
      { post: "Circolare n. 41 · Il 25 novembre uscita anticipata alle 12.00 per assemblea d'istituto. Pubblicata sul sito ufficiale della scuola.", isFake: false, explain: "Verificabile: ha un numero, una data, un canale ufficiale dove ritrovarla. Puoi controllare prima di credere." },
      { post: "STUDIO SEGRETO: il 9 studenti su 10 odia il lunedì. I media non vogliono dirtelo.", isFake: true, explain: "Non verificabile: nessun autore, nessun metodo, e un nemico vago («i media»). Un numero preciso senza fonte è una trappola." }
    ]
  },

  /* Uscita */
  uscita: {
    kick: "Uscita",
    title: "La Pausa",
    lead: "Prima di condividere qualsiasi cosa, fermati dieci secondi.",
    questions: [
      "Quando metti «mi piace» a qualcosa di forte, senza aver controllato la fonte, che cosa provi e di cosa ti senti responsabile?",
      "In che modo i feed che usi ti spingono a dividere il mondo in «noi» e «loro»?",
      "Quando una battuta o un meme riduce una persona a uno stereotipo, che effetto fa su di te che lo vedi?",
      "Oggi che immagini e voci si possono creare con l'intelligenza artificiale, quali strumenti usi per distinguere ciò che è vero?",
      "Cosa potresti fare tu per rispondere alla polarizzazione, invece di reagire?"
    ],
    pledge: "Noi ci impegniamo a controllare chi ha scritto una cosa prima di condividerla. A non ridere di una battuta che riduce una persona a un tipo. A ricordare che dietro ogni gruppo ci sono persone con un nome. A fermarci dieci secondi prima di rispondere. (Bozza: la classe la riscrive con parole sue.)",
    credits: "Progetto di [SCUOLA · CLASSE/I]. Docente referente: [NOME]. Gruppi di lavoro: [DA COMPLETARE, con soli nomi autorizzati]. Testi, schemi e animazioni realizzati dalla classe; i quesiti del «falso innocuo» sono inventati dalla classe. Dichiarazione sull'uso dell'IA: [DA COMPLETARE: strumento e scopo, oppure «non utilizzata»]."
  },

  /* Sala 7, facoltativa: attivatela solo se avete fonti locali vere */
  territorio: {
    enabled: false,
    kick: "Sala 7 · Nel nostro territorio",
    title: "Qui, nel 1938",
    lead: "[DA COMPLETARE] Cosa succedeva nella nostra città tra il 1938 e il 1943?",
    body: [
      "[DA COMPLETARE] Cosa raccontavano i giornali locali, la scuola, il comune. Esempio: registri scolastici 1938-43, archivio storico, biblioteca civica.",
      "Citate sempre titolo, data e collocazione archivistica."
    ]
  }
};
