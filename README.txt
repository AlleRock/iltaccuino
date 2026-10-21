IL TACCUINO — WEB APP RISTORANTI
================================

CONTENUTO DEL PACCHETTO
- index.html          App vera e propria (grafica e funzioni)
- ristoranti.txt      UNICO file da aggiornare quando aggiungi ristoranti
- manifest.json       Impostazioni PWA per la schermata Home
- sw.js               Memorizzazione dei file per l'uso senza connessione
- icon-192.png        Icona PWA
- icon-512.png        Icona PWA grande
- apple-touch-icon.png  Icona per iPhone

CARICAMENTO SU GITHUB PAGES
1. Crea una repository pubblica GitHub (per esempio "il-taccuino").
2. Carica TUTTI i sette file elencati sopra, insieme a questo README, nella
   cartella principale della repository: non caricare la ZIP senza estrarla.
3. Vai in Settings → Pages → Build and deployment → Deploy from a branch.
4. Seleziona branch "main" e folder "/ (root)" e salva.
5. Quando GitHub avrà pubblicato il sito, apri l'indirizzo HTTPS indicato in
   Settings → Pages (di solito username.github.io/il-taccuino/).
6. Dall'iPhone: aprilo in Safari → Condividi → Aggiungi a schermata Home.
   Avrai un'icona dedicata e l'app si aprirà senza la barra di Safari.

COME AGGIUNGERE O MODIFICARE UN RISTORANTE
1. Apri ristoranti.txt nella repository.
2. Premi l'icona con la matita per modificare il file.
3. Cerca la sezione desiderata; per esempio:

     ## Liguria & dintorni | VALTREBBIA
     Taverna Dei Fieschi | Torriglia | 4.4 |

4. Sotto, aggiungi una riga così:

     Trattoria Inventata | Torriglia (GE) | 4.6 | Da provare

   Il formato è:
     Nome | Località | Voto | Nota

   I tre ultimi campi possono essere vuoti; mantenendo le barre verticali:
     Nome del locale | | |

   Se devi creare una nuova zona, scrivi una nuova intestazione:
     ## Altrove | FRIULI-VENEZIA GIULIA
   e poi i ristoranti di quella zona.

   Per creare un nuovo gruppo, usa:
     ## Nome del gruppo | Nome della zona
   Nota: i filtri principali dell'app sono predisposti per
   "Liguria & dintorni" e "Altrove": usa questi nomi per le tue aggiunte.

5. Salva con "Commit changes". Poi riapri l'app con connessione Internet
   e tocca "Aggiorna" per caricare la nuova versione.

NOTA SUI VOTI
I voti sono riportati dai documenti Word caricati e non vengono aggiornati
automaticamente. Non sono garantiti attuali. Nel file originale un unico
ristorante riportava la nota "Trip", e due il Parco Safari delle Langhe.

OFFLINE
Dopo che hai aperto il sito online almeno una volta, l'app salva i file
nel dispositivo e può mostrare l'ultima lista disponibile senza Internet.
Per vedere gli aggiornamenti di ristoranti.txt è necessaria la connessione.

La ricerca "Cerca su Google Maps" apre una ricerca del locale, non una
scheda Google Maps verificata. Controlla il risultato prima di partire.

NON SERVE
- un account nell'app;
- un database online;
- un token GitHub;
- una funzione per aggiungere ristoranti dall'app.
