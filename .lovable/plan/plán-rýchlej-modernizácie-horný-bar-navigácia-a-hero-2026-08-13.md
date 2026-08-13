# Plán rýchlej modernizácie — horný bar, navigácia a hero

Cieľ: zvýšiť prémiový dojem a konverzie na prvej obrazovke, bez veľkých funkcií a backendu. Zameriame sa na rýchle vizuálne vylepšenia TopBaru, Navbaru a Hero sekcie.

---

## 1. TopBar — prepracovať na "command bar"

Súčasný stav: už má CTA "Potrebujete poradiť? 0903 400 896", ale vyzerá ako bežná kontaktná lišta.

### Zmeny

- Zjednodušiť na jednu riadkovú kompaktnú lištu na desktope, elegantne zabaliť na mobile.
- Pridať blikajúcu zelenú "online" bodku pri telefónnom CTA — signál, že ste dostupní.
- Pridať krátky sekundárny text "Konzultácia zdarma" pre zvýšenie dôvery.
- Upraviť typografiu: menšie, tučnejšie písmo, lepšie zarovnanie.
- Použiť iba existujúce farby a tokeny (`--accent`, `--navy-dark`, `--primary-foreground`).

### Súbory

- `src/components/TopBar.tsx`

---

## 2. Navbar — prémiovejšie menu s rýchlym CTA

Súčasný stav: "pill" menu so zaoblenými tlačidlami a mega dropdownmi. Vizualne dobré, ale chýba mu hlavný akčný prvok a mobilnému menu chýba hĺbka.

### Zmeny

- **Pravý CTA v navbare** (desktop): vedľa menu pill pridať tlačidlo "Kontaktovať nás" s akcentovou farbou. Zvýši to konverzie bez skrolovania
- **Aktívny stav**: pri hoveri/dropdowne pridať jemnú podčiarkovaciu animáciu (šírka 0 → 100 %).
- **Dropdown karty**: zjednotiť veľkosť obrázkov, pridať jemný vonkajší tieň a väčší vnútorný padding, aby pôsobili ako prémiový katalóg.
- **Mobilné menu**: pridať tmavý overlay pod menu, animáciu výsuvu zhora a lepšie oddelenie kategórií.

### Súbory

- `src/components/Navbar.tsx`

---

## 3. Hero sekcia — väčší vizuálny dopad

Súčasný stav: slider s produktom, textom vľavo, orbitálnymi kruhmi a efektmi. Dobrý základ, ale prvý dojem môže byť ešte silnejší.

### Zmeny

- **Veľký vodoznak za produktom**: obrovský, polopriehľadný názov aktuálneho prístroja (napr. "APOLO") ako pozadie — okamžitá dramatická vrstva.
- **Trust bar pod hero**: 4 ikony s krátkymi claimami — "20+ rokov na trhu", "500+ klientov", "Servis a školenia", Buduje dôveryhodnosť hneď pod prvým dojmom.
- **Lepšia čitateľnosť textu**: pridať jemný backdrop-blur panel za textový stĺpec, aby bol kontrast vždy dostatočný aj pri silnejších gradientoch.
  &nbsp;

### Súbory

- `src/components/HeroSection.tsx`

---

## 4. Mikro-interakcie a UX drobnosti

- **Smooth scroll** pre všetky kotvy (`#kontakt`, `#faq` atď.) — pridať do `index.css` alebo `App.tsx`.
- **Focus štáty**: zabezpečiť, aby tlačidlá a odkazy mali viditeľný focus ring.

### Súbory

- `src/index.css`
- `src/App.tsx` (prípadne)

---

## Čo NIE je v pláne

- Žiadny backend, databáza ani nové podstránky.
- Žiadne ťažké funkcie ako konfigurátor, vyhľadávanie, chatbot alebo cookie banner.
- Žiadna zmena farebnej identity — zostáva dark blue + accent.

---

## Poradie implementácie

1. TopBar
2. Navbar (vrátane CTA a mobilného overlaya)
3. Hero sekcia (vodoznak, trust bar, scroll indikátor)
4. Mikro-interakcie a smooth scroll

Po každom kroku overím preview, aby sme doladili proporcie a farby. 