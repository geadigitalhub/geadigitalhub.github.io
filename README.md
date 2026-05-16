# Gea Digital Hub — Site GitHub Pages

Site oficial cu paleta **Navy metalizat luminos + auriu #FFD700** (Paleta A).

## Structură fișiere

```
geadigitalhub/
├── index.html               ← Pagina principală (Home + Produse + Blog + Despre + Contact)
├── blog.html                ← Listare completă articole
├── README.md                ← Acest fișier
│
├── assets/
│   ├── css/style.css        ← Sistemul de design complet
│   ├── js/main.js           ← Logică carduri 3D, filtre, încărcare dinamică
│   └── images/              ← Imagini produse, blog, brand
│
├── data/
│   ├── produse.json         ← TOATE produsele (editezi aici, nu în HTML!)
│   └── articole.json        ← TOATE articolele de blog
│
├── pages/
│   ├── termeni.html         ← Termeni și Condiții
│   ├── confidentialitate.html ← GDPR
│   └── cookies.html         ← Politică cookies
│
└── posts/                   ← Conținutul articolelor individuale (HTML per articol)
```

## Cum adaugi un produs nou

Editezi **`data/produse.json`** și adaugi un obiect nou în array-ul `produse`:

```json
{
  "id": "id-unic-produs",
  "titlu": "Titlu Produs Complet",
  "tagline": "Descriere scurtă pentru fața cardului (max 2 rânduri).",
  "descriere": "Descrierea detaliată completă care apare pe verso când utilizatorul dă click pe card.",
  "categorii": ["Calculatoare", "PFA"],
  "icon": "📊",
  "linkuri": {
    "payhip": "https://payhip.com/b/link-real",
    "gumroad": null,
    "etsy": null
  },
  "nou": true,
  "vizibil": true,
  "puncteCheie": [
    "Punct 1",
    "Punct 2",
    "Punct 3",
    "Punct 4"
  ]
}
```

**Câmpuri:**
- `id` — identificator unic, fără spații
- `titlu` — afișat pe față și pe verso
- `tagline` — frază scurtă pe față
- `descriere` — text lung pe verso
- `categorii` — array, prima categorie e cea afișată ca badge (alfabetic)
- `icon` — emoji vizibil pe față
- `linkuri.payhip` — URL Payhip real
- `linkuri.gumroad` / `linkuri.etsy` — null acum, completezi ulterior
- `nou` — `true` afișează badge "NEW" auriu cu glow
- `vizibil` — `false` ascunde produsul fără să-l ștergi
- `puncteCheie` — 3-5 bullet-uri care apar pe verso

## Cum adaugi categorii noi

În `data/produse.json`, în array-ul `categorii` — păstrează ordinea alfabetică. Apoi folosești noua categorie în câmpul `categorii` al produsului.

**Important:** "Călătorii" e deja redenumit "Turism".

## Cum activezi Gumroad sau Etsy (în viitor)

Pas 1: În `data/produse.json`, schimbi `"activ": false` în `"activ": true`:
```json
"gumroad": {
  "nume": "Gumroad",
  "activ": true,
  "culoare": "#FF90E8"
}
```

Pas 2: Completezi link-urile per produs:
```json
"linkuri": {
  "payhip": "https://payhip.com/...",
  "gumroad": "https://gumroad.com/l/...",
  "etsy": null
}
```

Butoanele "în curând" devin automat butoane active.

## Cum adaugi articole pe blog

Editezi **`data/articole.json`**:

```json
{
  "slug": "url-friendly-nume-articol",
  "titlu": "Titlu Articol",
  "data": "16 Mai 2026",
  "extras": "Descriere scurtă afișată pe cardul de blog.",
  "imagine": "assets/images/blog/nume-imagine.jpg",
  "produsLegat": {
    "text": "Vezi Calculator PRO",
    "link": "https://payhip.com/b/calculator-link"
  }
}
```

**Câmpuri:**
- `slug` — URL articol, va fi `posts/{slug}.html`
- `imagine` — `null` afișează inițiala G stilizat, altfel calea către imagine reală
- `produsLegat` — `null` dacă nu vrei legătură, altfel CTA spre produs

Apoi creezi efectiv articolul ca fișier HTML în `posts/{slug}.html` (poți folosi unul din articolele demo ca șablon).

## Deploy pe GitHub Pages

1. Faci push la repo `geadigitalhub.github.io`
2. Settings → Pages → Branch: `main`, folder: `/ (root)`
3. Aștepți 1-2 minute, site-ul e live la `https://geadigitalhub.github.io`

## Personalizări vizuale rapide

Toate culorile sunt în `assets/css/style.css` la începutul fișierului în `:root`. Modifici acolo și se propagă peste tot.

## Note importante (regulile permanente Gea Digital Hub)

- **Fără prețuri** pe site sau lângă produse — pretul rămâne doar pe Payhip
- **"G" mare** ori de câte ori apare cuvântul Gea sau inițiala
- **"Turism"** (nu "Călătorii")
- **Categorii alfabetice** întotdeauna
- **Auriu #FFD700** (nu mustar, nu galbejit)
- **Carduri 3D flip** — click pe față arată verso cu descriere completă

---

**Gea Digital Hub** — Calitatea o livrăm noi. Valoarea o trăiești tu.
