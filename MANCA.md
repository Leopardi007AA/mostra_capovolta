# Cosa manca ancora (aggiornato 22 novembre 2026, dopo la riscrittura dei testi)

Legenda: **[TU]** serve la scuola · **[FATTO]** già nel sito · **[OPZ]** facoltativo

## 1. Dati della scuola (obbligatori) [TU]
- [ ] Nome scuola, città, classe/i: `js/content.js` → `meta.school`, `meta.footer`, `uscita.credits` (cercare `[SCUOLA`)
- [ ] Docente referente: `uscita.credits` (`[NOME]`)
- [ ] Gruppi di lavoro nei crediti, solo nomi con consenso (art. 9 del bando)
- [ ] Dichiarazione sull'uso dell'IA: `uscita.credits` (`[DA COMPLETARE`)
- [ ] Scheda del percorso: compilare i campi tra parentesi quadre (`consegna/Scheda_del_percorso.pdf`)
- [ ] Allegato 1 compilato dal docente; invio all'USR entro lunedì 23 novembre 2026, 23.59.59

## 2. Testi
- [FATTO] Ingresso, tre inversioni, Stanza 2027, Sala 0, Sale 1-5, Sala 6, quiz, Pausa, fonti, cronologia, nota per la giuria
- [ ] Impegno della classe: riscrivere con parole vostre (`uscita.pledge`, ora è una bozza)
- [ ] Rileggere tutti i testi e riscrivere con parole vostre [TU]
- [ ] Controllare sui documenti originali: numero e data del decreto del 5 settembre 1938; date de «La difesa della razza» (5 agosto 1938 e 20 giugno 1943); 15 luglio 1938; 20 gennaio 1944 [TU]
- [ ] [OPZ] Frase finale personale della classe (dopo la Pausa)

## 3. Informazioni e fonti
- [FATTO] S1-S6 con link; dati della mostra del 1937 da USHMM e bpb.de
- [ ] Almeno **una fonte primaria** (testo del Manifesto della razza, testo del decreto, pagina d'epoca) [TU]
- [ ] **Una fonte memoriale diretta** (brano di testimonianza citato con fonte): ora c'è solo l'invito a cercare quella di Liliana Segre (Sala 3) [TU]
- [ ] **Sala 7 sul territorio** (`territorio.enabled: true`) con registri scolastici 1938-43, giornali locali, archivio comunale: è ciò che vi distingue [TU]
- [ ] Confermare S3 (Cassata) sul libro

## 4. Immagini
- Nessuna immagine inserita di proposito: nessuna immagine di propaganda. Le animazioni SVG sono le immagini del percorso.
- [FATTO] Il sito supporta figure: in `content.js`, nella sala, aggiungere `figure: { img: 'assets/img/nome.webp', alt: '…', caption: '…', credit: '…' }`
- [ ] [OPZ] Foto vostre: la scuola oggi, un registro di classe del 1938 (se l'archivio lo permette), una pietra d'inciampo o una targa del vostro comune. WebP o JPEG, max 1600 px, ~250 KB, testo alternativo e credito [TU]
- [ ] Non usare foto di personaggi pubblici scaricate dal web

## 5. Audio e video
- [FATTO] Film-tour 4:42 con didascalie; «Ascolta» (voce del browser)
- [ ] [OPZ] Voce fuori campo della classe sul testo di `consegna/Storyboard_e_voce_fuori_campo.md`
- [ ] Rigenerare il film dopo aver compilato scuola/classe (la didascalia finale ha ancora il segnaposto)
- [ ] [OPZ] Audio con trascrizione in `assets/audio/` (MP3 mono 128 kbps)

## 6. Tecnica e pubblicazione
- [FATTO] Funziona offline, nessuna richiesta esterna, noindex, `robots.txt`, `.nojekyll`
- [ ] Attivare GitHub Pages: Settings → Pages → Branch `main`, `/ (root)` → Save [TU]
- [ ] Provare il link su 2 telefoni diversi
- [ ] Consegnare anche lo zip (il link potrebbe non funzionare quando la giuria legge)
- [ ] Rigenerare `consegna/Copia_stampabile_sito.pdf` dopo le modifiche (Chrome → stampa dalla modalità «Lettura rapida»)

## 7. Test
- [FATTO] Chrome 390/768/1280 px, nessun errore, contrasti ≥ 4,6:1, nessun scorrimento orizzontale
- [ ] Test con 3 persone esterne (30 secondi per capire cosa fare) [TU]
- [ ] Prova con Safari/iPhone e Firefox, se disponibili [TU]
- [ ] Prova solo tastiera (Tab/Invio) e con lettore di schermo, se disponibile [TU]
- [ ] Prova di invio: aprire lo zip su un altro computer

## Aggiornamento del 22 novembre
- [FATTO] Dati della scuola e crediti (IIS «C. Rosatelli», 4SB, prof.ssa Marcelletti, 16 studenti)
- [FATTO] Testi riscritti, fonti S1-S10 classificate per tipo. Corretto un errore: il Manifesto della razza è del **14 luglio 1938** (non 15)
- [FATTO] Sala 7 su Rieti (1943-44) con fonte locale S9; 3 illustrazioni originali; «voce della classe» in ogni sala; voce narrante; nuova grafica
- [TU] La «voce della classe» sono frasi scritte per voi: **leggetele, cambiatele, rendetele vostre**. Non attribuitele a singoli studenti senza il loro consenso
- [TU] Dichiarazione IA: scritta in modo veritiero (Claude ha aiutato anche con ricerca, codice e prima stesura dei testi). Non va cambiata in «aiuto banale»
- [TU] Confrontare la Sala 7 con l'Archivio di Stato di Rieti (fonte attuale: articolo di giornale locale)
- [TU] Consensi per i nomi degli studenti nei crediti (la repo è pubblica)
- [TU] Una testimonianza diretta (brano) e una foto/documento del vostro territorio
