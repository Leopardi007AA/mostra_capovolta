/* =====================================================================
   CONTENUTI DEL SITO - è l'UNICO file da modificare per i testi.
   - {{id|testo}} crea una frase cliccabile (decodificatore); ogni id deve avere
     una voce in "reveals".
   - Il gruppo «gli abitanti di Via del Molo» è INVENTATO di proposito.
   - Ogni fatto storico ha una fonte (S1...). Le fonti sono in fondo a questo file,
     con il tipo (primaria, istituzionale, enciclopedia, giornalistica).
   - Le frasi in prima persona plurale («Noi...») sono la voce della classe 4SB:
     vanno lette e, se serve, riscritte dagli studenti.
   ===================================================================== */
window.CONTENT = {
  meta: {
    title: "La mostra capovolta",
    school: "IIS «C. Rosatelli» · Rieti · classe 4SB",
    note: "Questo sito è progettato per essere capito, non diffuso: non ha pulsanti di condivisione, commenti né sistemi di tracciamento. Contiene esempi simulati di linguaggio ostile, sempre accompagnati da una spiegazione.",
    footer: "Progetto della classe 4SB dell'IIS «C. Rosatelli» di Rieti (docente: prof.ssa Angela Marcelletti) per il concorso «I giovani ricordano la Shoah», XXV edizione, a.s. 2026/2027, traccia per la scuola secondaria di II grado. I messaggi della Stanza 2027 sono SIMULAZIONI DIDATTICHE su un gruppo inventato. Nessuna immagine di propaganda è riprodotta."
  },

  hero: {
    kick: "8 novembre 1937 · Monaco di Baviera",
    title: "La mostra capovolta",
    deck: "Una mostra insegnò a vedere un nemico. Noi la smontiamo, pezzo per pezzo.",
    door: "USCITA",
    doorHint: "Si entra da qui. Dall'uscita.",
    intro: "L'8 novembre 1937 si apre a Monaco una mostra. Si chiama «Der Ewige Jude», resta aperta fino a gennaio 1938 e la attraversano 412.300 persone. Nessun segreto, nessun complotto nascosto: è aperta a tutti, con il biglietto in mano e il cappotto sul braccio. È questo che ci inquieta di più. Quasi novant'anni dopo l'odio non ha più bisogno di una sala: sta in tasca, si apre in tre secondi, si condivide con un dito. Noi siamo una quarta superiore e cresciamo dentro quella tasca. Per capire cosa ci fa non copieremo la propaganda: la smonteremo. Cercheremo il meccanismo, e poi vedremo cosa è cambiato e cosa, invece, non è cambiato affatto."
  },

  inversioni: [
    { n: "1", t: "Si entra dall'uscita", d: "Il percorso parte dal presente, scende nel 1937 e torna. Prima ti mostriamo ciò che conosci, poi ciò che lo ha preparato." },
    { n: "2", t: "Si smonta, non si espone", d: "Nessuna immagine di propaganda: la propaganda funziona anche quando la si guarda per criticarla. Descriviamo ruolo, linguaggio, strumento e finalità." },
    { n: "3", t: "Non si condivide", d: "Niente pulsanti social, niente commenti, niente tracker. Un sito sulla propaganda non deve diventare propaganda di sé stesso." }
  ],

  /* Fonti. "tipo" indica l'affidabilità; "da confrontare" cosa controllare ancora. */
  sources: [
    { id: "S1", tipo: "istituzionale (museo)", text: "United States Holocaust Memorial Museum, Enciclopedia dell'Olocausto, «Definire il nemico» (Defining the Enemy).", url: "https://encyclopedia.ushmm.org/content/it/article/defining-the-enemy" },
    { id: "S2", tipo: "istituzionale (Stato tedesco)", text: "Bundeszentrale für politische Bildung (bpb.de), «Vor 80 Jahren: Die NS-Propagandaausstellung \"Der ewige Jude\" wird eröffnet».", url: "https://www.bpb.de/politik/hintergrund-aktuell/258794/ns-propagandaausstellung" },
    { id: "S3", tipo: "enciclopedia online", text: "«La Difesa della Razza» (voce di Wikipedia): primo numero 5 agosto 1938, ultimo 20 giugno 1943, 118 numeri. Da confrontare con F. Cassata, «La Difesa della razza», Einaudi, 2008.", url: "https://en.wikipedia.org/wiki/La_Difesa_della_Razza" },
    { id: "S4", tipo: "università", text: "Università Ca' Foscari Venezia, progetto «Remembering the City»: «La difesa della razza», anno I, n. 1 (5 agosto 1938).", url: "https://rememberingthecity.unive.it/?p=4328" },
    { id: "S5", tipo: "enciclopedia online", text: "«Leggi razziali fasciste» (voce di Wikipedia): Manifesto della razza (14 luglio 1938), R.D.L. 5 settembre 1938 n. 1390, R.D.L. 17 novembre 1938 n. 1728, decreti del 20 gennaio 1944. Da confrontare con la Gazzetta Ufficiale.", url: "https://it.wikipedia.org/wiki/Leggi_razziali_fasciste" },
    { id: "S6", tipo: "primaria (testo di legge)", text: "R.D.L. 5 settembre 1938-XVI, n. 1390, «Provvedimenti per la difesa della razza nella scuola fascista» (testo riportato da ANPI Pianoro).", url: "https://www.anpipianoro.it/fascismo/provvedimenti-per-la-difesa-della-razza-nella-scuola-fascista.html" },
    { id: "S7", tipo: "istituzionale (Ministero)", text: "Scuola e memoria (Ministero dell'istruzione e del merito), «Le leggi razziali».", url: "https://www.scuolaememoria.it/site/it/2018/10/10/le-leggi-razziali/?rit=conoscere-la-shoah" },
    { id: "S8", tipo: "enciclopedia online", text: "«Liliana Segre» (voce di Wikipedia): nata nel 1930; nel 1938 espulsa dalla scuola elementare dopo le leggi razziali. Da integrare con una sua testimonianza diretta (Fondazione Memoriale della Shoah di Milano).", url: "https://en.wikipedia.org/wiki/Liliana_Segre" },
    { id: "S9", tipo: "giornalistica locale", text: "Rietinvetrina, «Giornata della Memoria, ricordare anche il contributo di Rieti alla Shoah». Da confrontare con l'Archivio di Stato di Rieti.", url: "https://www.rietinvetrina.it/giornata-della-memoria-ricordare-anche-il-contributo-di-rieti-alla-shoah/" },
    { id: "S10", tipo: "istituzionale (Ministero)", text: "Ministero dell'istruzione e del merito, Bando «I giovani ricordano la Shoah», XXV edizione, a.s. 2026/2027.", url: "" }
  ],

  /* Nota per la giuria */
  giuria: {
    title: "Nota per la giuria",
    summary: "Come è fatto il percorso, come leggerlo e cosa abbiamo scelto di non fare",
    items: [
      { t: "Cos'è", d: "Un percorso web a scorrimento per la traccia della scuola secondaria di II grado: ruolo, linguaggi, strumenti e finalità della propaganda legata alla mostra «Der Ewige Jude» (1937) e al fascismo (1938), con analogie e differenze rispetto al linguaggio d'odio di oggi, tra social e intelligenza artificiale. Lo ha realizzato la classe 4SB dell'IIS «C. Rosatelli» di Rieti." },
      { t: "Come si legge", d: "Scorrendo dall'alto, in circa 15 minuti. «Indice» salta a ogni sala. «Voce» attiva una voce che legge la sala in cui ti trovi. «Lettura rapida» sblocca tutto e ferma le animazioni. Ctrl+P stampa l'intero percorso." },
      { t: "Cosa abbiamo scelto di non fare", d: "Non riproduciamo immagini o slogan di propaganda. Non scriviamo odio contro gruppi reali: i messaggi del 2027 riguardano un gruppo inventato e sono etichettati come simulazioni. Non ci sono pulsanti di condivisione, commenti o tracker." },
      { t: "Fonti", d: "Ogni dato storico rimanda a una fonte numerata (S1…). In fondo alla pagina ogni fonte è classificata (primaria, istituzionale, enciclopedia, giornalistica) con l'indicazione di cosa resta da confrontare." },
      { t: "Età e sensibilità", d: "Gli esempi di linguaggio ostile compaiono sempre con una spiegazione accanto e mai come immagini. Le illustrazioni sono state disegnate da noi e non riproducono persone reali." }
    ]
  },

  /* Cronologia: ogni data ha la sua fonte */
  timeline: {
    kick: "Cronologia",
    title: "Dal 1937 al 1944, in dodici date",
    lead: "I fatti che tengono insieme le sale. Ogni data ha la sua fonte: dove è secondaria, lo diciamo.",
    items: [
      { d: "8 novembre 1937", t: "A Monaco si inaugura la mostra «Der Ewige Jude».", s: "S2" },
      { d: "Gennaio 1938", t: "La mostra chiude: 412.300 visitatori, più di 5.000 al giorno.", s: "S1" },
      { d: "14 luglio 1938", t: "Il «Giornale d'Italia» pubblica «Il fascismo e i problemi della razza», il Manifesto della razza.", s: "S5, S7" },
      { d: "5 agosto 1938", t: "Esce il primo numero de «La difesa della razza», che contiene il Manifesto.", s: "S3, S4" },
      { d: "5 settembre 1938", t: "Regio decreto-legge n. 1390: gli alunni «di razza ebraica» non possono essere iscritti alle scuole; gli insegnanti non possono più insegnare.", s: "S6" },
      { d: "16 ottobre 1938", t: "Gli insegnanti ebrei già in servizio sono sospesi.", s: "S6" },
      { d: "17 novembre 1938", t: "Regio decreto-legge n. 1728: gli ebrei esclusi dagli impieghi pubblici.", s: "S5" },
      { d: "1940", t: "Esce il film «Der Ewige Jude», derivato dalla mostra.", s: "S2" },
      { d: "20 giugno 1943", t: "Esce l'ultimo numero de «La difesa della razza», il 118°.", s: "S3" },
      { d: "30 novembre 1943", t: "Un ordine di polizia chiede di arrestare e concentrare gli ebrei: a Rieti scattano gli arresti.", s: "S9" },
      { d: "6 gennaio 1944", t: "Da Rieti 14 ebrei, tra cui 5 bambini, vengono deportati a Fossoli e poi ad Auschwitz.", s: "S9" },
      { d: "20 gennaio 1944", t: "Nel Regno del Sud due decreti abrogano le leggi razziali. Nella Repubblica sociale restano in vigore fino alla Liberazione, nell'aprile 1945.", s: "S5" }
    ]
  },

  stanza: {
    kick: "Stanza 2027",
    title: "Cinque messaggi chiusi a chiave",
    lead: "Questi messaggi li abbiamo scritti noi, su un gruppo che non esiste: gli abitanti di Via del Molo. Non è per gioco. È l'unico modo per mostrare com'è fatto l'odio senza produrne di vero. Per leggerli devi capire come funzionano, e la chiave è nel 1937.",
    badge: "Simulazione didattica · gruppo inventato",
    classe: "Scriverli ci è costato fatica. È sorprendente quanto sia facile: bastano tre frasi, e suonano già familiari. Questa familiarità è il dato più grave di tutta la ricerca.",
    figure: { img: "assets/img/porta.svg", alt: "Illustrazione di una porta socchiusa in una parete scura, da cui esce una striscia di luce sul pavimento.", caption: "Una porta socchiusa: la luce passa solo se qualcuno la apre." }
  },

  sala0: {
    kick: "Sala 0 · Contesto",
    title: "8 novembre 1937",
    lead: "A Monaco si apre «Der Ewige Jude». Non è un museo: è un'arma.",
    story: "La mostra viene inaugurata l'8 novembre 1937 e resta aperta fino a gennaio 1938. Presenta gli ebrei come un corpo estraneo che vive a spese della nazione, ne avvelena la cultura e ne sfrutta l'economia. Viene allestita con cartelli, vetrine e copie del giornale «Der Stürmer» esposte come in un museo. Fa parte di una serie di «Schandausstellungen», mostre della vergogna. Nel 1940 diventerà anche un film. Più di cinquemila persone al giorno ci entrano per «informarsi».",
    classe: "Ci colpisce il numero. Quattrocentomila persone non sono un'ideologia: sono gente comune che esce con un'idea in più in testa. Potevamo esserci anche noi, con la stessa curiosità con cui oggi apriamo un link.",
    counter: { value: 412300, label: "visitatori in poco più di due mesi", note: "Più di 5.000 al giorno (S1)" },
    facts: [
      { text: "Inaugurazione: 8 novembre 1937, a Monaco di Baviera.", src: "S2" },
      { text: "Apertura da novembre 1937 a gennaio 1938; 412.300 visitatori, più di 5.000 al giorno.", src: "S1" },
      { text: "La mostra fa parte di una serie di mostre di propaganda dette «Schandausstellungen».", src: "S2" },
      { text: "Dalla mostra deriva un film con lo stesso titolo, del 1940.", src: "S2" }
    ],
    labels: {
      Ruolo: "Portare il messaggio dello Stato in uno spazio pubblico, davanti a una folla.",
      Linguaggio: "Cartelli, caricature, accuse generiche: gli ebrei come «corpo estraneo».",
      Strumento: "Una mostra aperta a tutti, poi un film.",
      Finalità: "Secondo S1, la propaganda che demonizzava gli ebrei preparò la popolazione a misure sempre più dure, fino alle deportazioni e al genocidio."
    }
  },

  rooms: [
    {
      key: 1, scene: "noi-loro", title: "Nominare il nemico",
      lead: "Prima si decide chi è «dentro» e chi è «fuori».",
      story: "Ogni propaganda parte da una linea. Da una parte «noi», dall'altra «loro». Non serve dimostrare nulla: basta ripeterlo finché la linea sembra naturale. La propaganda nazista descrisse gli ebrei come un corpo estraneo che viveva a spese della nazione, ne avvelenava la cultura e ne prendeva l'economia. Una comunità si sente più unita quando può indicare chi non ne fa parte. Il nemico non è la causa della paura: è il suo indirizzo.",
      classe: "«Noi» è la parola più comoda che esista: non costa niente e scalda. Ma per scaldare qualcuno deve restare fuori al freddo. Lo vediamo nelle chat di classe, molto prima che nei libri di storia.",
      caption: "Scorri: una linea compare e un gruppo viene spostato dall'altra parte.",
      facts: [
        { text: "Gli ebrei erano raffigurati come un «corpo estraneo» che viveva a spese della nazione che li ospitava (S1).", src: "S1" },
        { text: "Si diceva che avvelenassero la cultura e prendessero l'economia (S1).", src: "S1" }
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
        b: "Accusa economica generica: «vivono a nostre spese». Nel 1937: si diceva che gli ebrei vivessero a spese della nazione e ne prendessero l'economia (S1)."
      },
      then: "Nel 1937 la linea la tracciava lo Stato, con la forza di una mostra e di un giornale.",
      diff: "Oggi chi la traccia? Spesso nessuno in particolare: nasce dalla somma di tanti messaggi simili."
    },
    {
      key: 2, scene: "volti", title: "Togliere l'umano",
      lead: "Chi viene paragonato a un animale o a una malattia non ha più bisogno di essere ascoltato.",
      story: "Il secondo passo cancella i nomi e le facce. Le persone diventano un «tipo», poi una massa, poi un'infestazione. Nel film del 1940, tratto dalla mostra, gli ebrei sono paragonati ai ratti che portano malattie. Nella Polonia occupata i ghetti furono presentati come una quarantena sanitaria. Quando una persona è un'epidemia, isolarla sembra igiene e non violenza. L'empatia si spegne senza che nessuno debba dare un ordine.",
      classe: "Chi ha un nome ci obbliga a rispondere. Chi è «un tipo» no. Per questo il primo gesto è cancellare il nome. Ci pensiamo ogni volta che un compagno viene chiamato con il nome del suo gruppo e non con il suo.",
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
        a: "Metafora del parassita: un gruppo di persone ridotto a infestazione. Nel 1940: i ratti nel film (S1).",
        b: "Metafora della malattia: il gruppo diventa un contagio. Nei ghetti: «minaccia sanitaria» da isolare (S1).",
        c: "Appello all'azione: dalla metafora alla «misura necessaria». Si passa dall'insulto alla decisione."
      },
      then: "Nel 1940 la metafora viaggiava su una pellicola e in una mostra. L'effetto era abbassare la soglia dell'empatia.",
      diff: "Oggi la stessa metafora può stare in una frase di cinque parole o in un meme che gira in pochi secondi."
    },
    {
      key: 3, scene: "linguaggi", title: "Mescolare i linguaggi",
      lead: "Un pregiudizio da solo si riconosce. Per questo si veste da scienza, da giornale, da legge. In Italia, dal 1938.",
      story: "Il 14 luglio 1938 il «Giornale d'Italia» pubblica «Il fascismo e i problemi della razza», il Manifesto della razza, presentato come opera di studiosi e voluto, scrive il Ministero, su indicazione diretta di Mussolini. Il 5 agosto esce il primo numero de «La difesa della razza», che lo contiene: resterà in edicola fino al 20 giugno 1943, per 118 numeri, con vignette, fotografie e fotomontaggi. Il 5 settembre un regio decreto-legge vieta l'iscrizione scolastica agli alunni «di razza ebraica» e allontana gli insegnanti. In meno di due mesi il pregiudizio passa dalla pagina del giornale ai registri di classe.",
      classe: "Questa è la sala che ci riguarda di più, perché si parla di scuola. Per un giorno ci siamo chiesti dove saremmo stati noi: in un banco, in cattedra, o seduti dietro a un compagno che non c'era più. Non abbiamo trovato una risposta comoda, ed è giusto così.",
      caption: "Scorri: cinque linguaggi diversi si fondono in un solo messaggio.",
      figure: { img: "assets/img/banco-vuoto.svg", alt: "Illustrazione: un banco di scuola con la sedia scostata, vuoti, davanti a una finestra da cui entra un fascio di luce.", caption: "Un banco vuoto. Dal settembre 1938 per molti bambini ebrei significò questo: il posto in classe, perso con un decreto." },
      facts: [
        { text: "14 luglio 1938: il «Giornale d'Italia» pubblica «Il fascismo e i problemi della razza» (Manifesto della razza), scritto su indicazione diretta di Mussolini.", src: "S5, S7" },
        { text: "5 agosto 1938: primo numero de «La difesa della razza», che contiene il Manifesto; ultimo numero 20 giugno 1943; 118 numeri in tutto.", src: "S3, S4" },
        { text: "5 settembre 1938, R.D.L. n. 1390: alle scuole di ogni ordine e grado «non potranno essere iscritti alunni di razza ebraica» (art. 2); gli insegnanti già in servizio sono sospesi dal 16 ottobre 1938 (art. 3).", src: "S6" },
        { text: "Tra settembre e novembre 1938 i decreti-legge espulsero dalle scuole pubbliche presidi, insegnanti e personale ebrei.", src: "S7" }
      ],
      memoria: {
        kick: "Una voce",
        text: "Liliana Segre è nata nel 1930. Nel 1938, dopo le leggi razziali, fu espulsa dalla scuola elementare. Dietro un decreto c'è una bambina che perde il posto in classe.",
        src: "S8",
        invito: "Per ascoltarla direttamente, cercate la sua testimonianza presso la Fondazione Memoriale della Shoah di Milano."
      },
      labels: {
        Ruolo: "Dare al pregiudizio una veste di serietà.",
        Linguaggio: "Termini pseudoscientifici, appello agli «studiosi», discorsi sulla «razza».",
        Strumento: "Manifesto, rivista, decreti, scuola.",
        Finalità: "Trasformare un'opinione in norma."
      },
      message: "{{a|Lo dicono gli esperti.}} {{b|È nel loro carattere, da sempre:}} basta leggere {{c|quello studio che gira in rete.}}",
      reveals: {
        a: "Falsa autorità: «gli esperti» senza un nome. Nel 1938: il Manifesto presentato come opera di studiosi (S5, S7).",
        b: "Essenzialismo: una caratteristica attribuita a tutto un gruppo «per natura». È la logica del discorso sulla «razza».",
        c: "Prova che nessuno può controllare: uno «studio» senza autore. Nel 1938: una rivista che mescolava scienza, immagini e polemica (S3, S4)."
      },
      then: "Nel 1938 il linguaggio scientifico trasformò un pregiudizio in un decreto scolastico.",
      diff: "Oggi un falso può avere l'aspetto di un articolo, di un video o di una voce clonata dall'intelligenza artificiale."
    },
    {
      key: 4, scene: "soglia", title: "Renderlo normale",
      lead: "Quello che si vede ogni giorno smette di scandalizzare.",
      story: "Un messaggio ripetuto cento volte non fa più rumore. Nelle strade compaiono cartelli «qui non vogliamo gli ebrei»; nelle bacheche pubbliche il giornale «Der Stürmer»; nelle librerie i libri antisemitici per bambini. I nazisti controllano anche le istituzioni culturali, musei compresi, e le usano. In Italia il decreto del 17 novembre 1938 (n. 1728) esclude gli ebrei dagli impieghi pubblici: la discriminazione diventa pratica d'ufficio, timbro, protocollo. Ciò che era inaccettabile diventa «così vanno le cose».",
      classe: "La parte che ci fa più paura è la noia. L'odio non arriva con la musica drammatica dei film: arriva come un compito da svolgere, un modulo da compilare. Mai nessuno lo ha fermato perché sembrava troppo ordinario per essere grave.",
      caption: "Scorri: più il messaggio si ripete, più la soglia dello scandalo scende.",
      facts: [
        { text: "I nazisti controllarono le istituzioni culturali, musei compresi, per diffondere propaganda antisemita (S1).", src: "S1" },
        { text: "Cartelli «qui non vogliamo gli ebrei» nelle strade; il giornale «Der Stürmer» in bacheche pubbliche; libri antisemitici per bambini della casa editrice Der Stürmer (S1).", src: "S1" },
        { text: "17 novembre 1938, R.D.L. n. 1728: con l'art. 13 gli ebrei sono esclusi dagli impieghi in enti pubblici e parastatali (S5).", src: "S5" }
      ],
      labels: {
        Ruolo: "Far diventare ordinario ciò che era inaccettabile.",
        Linguaggio: "Ripetizione, battute, slogan, moduli.",
        Strumento: "Musei, libri per bambini, cartelli, bacheche, decreti.",
        Finalità: "Normalizzare la discriminazione, che prepara la persecuzione (S1)."
      },
      message: "{{a|Era solo una battuta.}} {{b|Lo fanno tutti,}} basta vedere cosa si scrive. {{c|Ridiamoci su.}}",
      reveals: {
        a: "Lo scherzo come scudo: se qualcuno protesta, «non sa stare allo scherzo».",
        b: "Norma sociale apparente: se lo fanno tutti, è normale. Nel 1937: cartelli, bacheche e libri ovunque (S1).",
        c: "Abitudine: la soglia dello scandalo scende a forza di ripetizione."
      },
      then: "Nel 1937 la ripetizione era organizzata: stessi temi su cartelli, giornali e libri.",
      diff: "Oggi la normalità si misura anche in visualizzazioni e condivisioni, ed è prodotta da molti utenti, non da un unico regista."
    },
    {
      key: 5, scene: "pubblici", title: "Parlare a ciascuno",
      lead: "Lo stesso messaggio, con toni diversi per pubblici diversi.",
      story: "La propaganda efficace non grida con tutti allo stesso modo. Dopo il 1933 i responsabili della propaganda crearono messaggi su misura per pubblici diversi, anche per i tanti tedeschi che non erano nazisti. Per i ceti medi istruiti, infastiditi dalle caricature più rozze, usarono un linguaggio ugualmente antisemita ma più sottile. Chi non si riconosce nel grido può essere raggiunto da un sussurro. Il dubbio educato vale quanto lo slogan, e dura di più.",
      classe: "Oggi nessuno ci scrive un messaggio diverso: lo fa un feed, in silenzio. Ci siamo accorti che nelle nostre schermate di notizie non c'è mai l'altro punto di vista. Fino a quel momento pensavamo fosse un caso.",
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

  sala6: {
    kick: "Sala 6 · Confronto",
    title: "1937 ↔ 2027",
    lead: "Sposta il cursore: a sinistra il meccanismo nel 1937, a destra la sua eco simulata. Sotto: cosa NON è uguale.",
    story: "Riconoscere le analogie non basta: la traccia chiede anche le differenze, e noi pensiamo abbiano più valore. Dire che «oggi è come allora» è comodo ed è sbagliato. Allora c'era un regime, c'erano leggi, c'era un'unica regia. Oggi i meccanismi sono quasi gli stessi, ma non c'è nessuno che li diriga: li alimenta ciascuno di noi con un clic. È più difficile da combattere, perché non ha un indirizzo.",
    classe: "La differenza che ci fa più paura è questa: allora la colpa aveva un nome e un volto. Oggi la colpa è distribuita, e quindi nessuno si sente colpevole. Per questo l'unica difesa che possiamo davvero esercitare è quella personale, ogni giorno, nelle cose piccole.",
    notEqual: [
      { t: "Chi produce", d: "Nel 1937 un regime con il monopolio dei mezzi. Oggi molti utenti, spesso anonimi, e sistemi che amplificano ciò che fa reagire." },
      { t: "Velocità", d: "Una mostra richiedeva mesi di preparazione. Un messaggio digitale si copia e si diffonde in pochi secondi." },
      { t: "Intelligenza artificiale", d: "Oggi immagini, voci e testi falsi si producono a costo quasi zero. Il falso credibile non è più un'eccezione." },
      { t: "Le leggi e le risposte", d: "Nel 1938 le leggi sostenevano la discriminazione. Oggi la Costituzione, nata dopo la Liberazione, riconosce a tutti pari dignità, e le leggi puniscono la discriminazione. Il punto debole sono i comportamenti quotidiani." }
    ],
    fakesKick: "Il falso innocuo",
    fakesTitle: "Allenati su un tema innocuo",
    fakesLead: "Per capire come funziona un falso credibile, abbiamo costruito tre messaggi su temi innocui, inventati da noi. Quale puoi verificare e quale no?",
    fakes: [
      { post: "LA MENSA CHIUDE DA LUNEDÌ! Me l'ha detto un amico di mio cugino che lavora in comune. CONDIVIDI PRIMA CHE LO CANCELLINO!", isFake: true, explain: "Non verificabile: fonte di terza mano, tono d'urgenza, invito a condividere subito. Sono i segnali di un messaggio fatto per correre, non per essere controllato." },
      { post: "Circolare n. 41 · Il 25 novembre uscita anticipata alle 12.00 per assemblea d'istituto. Pubblicata sul sito ufficiale della scuola.", isFake: false, explain: "Verificabile: ha un numero, una data, un canale ufficiale dove ritrovarla. Puoi controllare prima di credere." },
      { post: "STUDIO SEGRETO: il 9 studenti su 10 odia il lunedì. I media non vogliono dirtelo.", isFake: true, explain: "Non verificabile: nessun autore, nessun metodo, e un nemico vago («i media»). Un numero preciso senza fonte è una trappola." }
    ]
  },

  uscita: {
    kick: "Uscita",
    title: "La Pausa",
    lead: "Prima di condividere qualsiasi cosa, fermati dieci secondi.",
    classe: "Dieci secondi sembrano pochi. Sono quelli che sono mancati a quattrocentomila persone nel 1937, e che mancano ogni giorno a ciascuno di noi.",
    figure: { img: "assets/img/clessidra.svg", alt: "Illustrazione di una clessidra con la sabbia quasi tutta caduta nella metà inferiore.", caption: "Dieci secondi: il tempo per chiedersi chi parla, a chi, e perché." },
    questions: [
      "Quando metti «mi piace» a qualcosa di forte, senza aver controllato la fonte, che cosa provi e di cosa ti senti responsabile?",
      "In che modo i feed che usi ti spingono a dividere il mondo in «noi» e «loro»?",
      "Quando una battuta o un meme riduce una persona a uno stereotipo, che effetto fa su di te che lo vedi?",
      "Oggi che immagini e voci si possono creare con l'intelligenza artificiale, quali strumenti usi per distinguere ciò che è vero?",
      "Cosa potresti fare tu per rispondere alla polarizzazione, invece di reagire?"
    ],
    pledge: "Noi, classe 4SB, ci impegniamo a controllare chi ha scritto una cosa prima di condividerla. A non ridere di una battuta che riduce una persona a un tipo, anche quando ridono tutti. A chiamare le persone per nome e non per gruppo. A ricordare che dietro ogni «loro» c'è qualcuno con una storia, una famiglia e un banco in classe. A fermarci dieci secondi prima di rispondere. E a raccontare questa storia a chi viene dopo di noi.",
    credits: "Progetto della classe 4SB dell'IIS «C. Rosatelli» di Rieti. Docente referente: prof.ssa Angela Marcelletti. Studenti: Ahsan Asrar, Lorenzo De Santis, Brando Nadir Esposito Acciarini Porazzini, Ting Jin Yu, Marta Matteocci, Jacopo Monaco, Pierlugi Nichilo, Sekou Ahmed Nimaga, Diego Paoletti, Anna Pastore, Alessandro Porazzini, Giulia Salvatore, Lorenzo Sebastiani, Francesco Silvestri, Giacomo Valeri, Leonardo Vallocchia. Illustrazioni, schemi e animazioni realizzati dalla classe; i messaggi del «falso innocuo» sono inventati. Uso dell'intelligenza artificiale: abbiamo usato Claude (Anthropic) come assistente per la ricerca e la verifica delle fonti, per la scrittura del codice del sito e per una prima stesura e riscrittura dei testi; ogni dato storico è stato indicato con la fonte e il contenuto è stato riletto dalla classe."
  },

  /* Sala 7: Rieti. Tutti i fatti vengono da una fonte giornalistica locale (S9):
     da confrontare con l'Archivio di Stato di Rieti prima della consegna. */
  territorio: {
    enabled: true,
    kick: "Sala 7 · Nel nostro territorio",
    title: "Rieti, 1943-1944",
    lead: "La storia non è successa solo altrove. È successa anche a pochi chilometri da dove studiamo.",
    body: [
      "Il 30 novembre 1943 un ordine di polizia chiede alle autorità provinciali di arrestare gli ebrei e di concentrarli. A Rieti vengono arrestate subito le famiglie di «ebrei stranieri» che si trovavano in residenza forzata a Rivodutri, Leonessa, Amatrice e Borgo Velino. Il campo di Granica non è pronto, così vengono tenute nel carcere (S9).",
      "Il 6 gennaio 1944 quattordici persone, tra cui cinque bambini, vengono portate da Rieti al campo di Fossoli e poi ad Auschwitz. Donne, bambini e anziani vengono mandati direttamente nelle camere a gas. Un uomo di trent'anni, Leone, è scelto per il lavoro forzato e riceve il numero 180042. Sopravvive e torna a Rieti a cercare la sua famiglia (S9).",
      "Il 6 gennaio 2024, a ottanta anni di distanza, l'associazione Sabina Radicale ha posto una targa all'ingresso dell'ex carcere di Santa Scolastica, in via Terenzio Varrone (S9)."
    ],
    classe: "Avevamo sempre pensato che la Shoah fosse una cosa da libri e da film, lontana. Scoprire che passava dalle nostre strade, vicino a posti che frequentiamo, ci ha tolto la possibilità di sentirci spettatori. Tra quei quattordici c'erano cinque bambini: più piccoli di noi, ma abbastanza grandi per andare a scuola.",
    invito: "Tutte le informazioni di questa sala vengono da un articolo di giornale locale (S9). Prima di citarle in altri contesti vanno confrontate con l'Archivio di Stato di Rieti e con le fonti dell'ANED e della Fondazione CDEC."
  }
};
