
# Návrhy na ďalšie vylepšenia stránky BSL Trade

Po preskúmaní celej stránky som identifikoval tieto konkrétne vylepšenia, ktoré by zvýšili profesionalitu, dôveryhodnosť a konverzie.

---

## 1. Floating WhatsApp / Messenger tlačidlo

Vľavo dole (oproti ROI kalkulačke) plávajúce tlačidlo pre okamžitý kontakt cez WhatsApp. Zákazník nemusí scrollovať na kontakt — kliknutie otvorí chat s prednastavenou správou. Toto výrazne zvyšuje konverzie pri B2B predaji drahých prístrojov.

## 2. Scroll-to-top tlačidlo

Stránka je dlhá (Hero, Categories, About, VIP, Reviews, FAQ, Contact). Po scrollovaní nadol sa zobrazí jemné tlačidlo na rýchly návrat hore.

## 3. Sekcia "Partneri / Značky" (Logo bar)

V sekcii "O nás" sa píše "zastupujeme významné európske značky", ale nikde ich neukazujete. Pridanie pásu s logami zastupovaných značiek = okamžitá dôveryhodnosť.

## 4. Scroll-reveal animácie

Sekcie sa aktuálne zobrazujú staticky. Jemné fade-in pri scrollovaní by dodalo stránke dynamiku a prémiový pocit (využijeme `animate-fade-in` ktorý už máte v Tailwind configu).

## 5. Vylepšený Footer

Aktuálny footer je veľmi minimalistický (logo + Instagram + email). Doplniť:
- Rýchle odkazy: Kategórie, VIP Program, FAQ, Kontakt
- Obchodné údaje: IČO, DIČ, adresa sídla
- Telefón a otváracie hodiny
- Stĺpcový layout pre profesionálnejší vzhľad

## 6. Cookie banner (GDPR)

Pre EU stránku je GDPR cookie consent povinný. Jednoduchý nenápadný banner dolu s tlačidlami "Súhlasím" / "Iba nutné".

## 7. SEO meta tagy a Open Graph

Pridanie kvalitných meta description, Open Graph obrázka a Twitter Card tagov do `index.html` — pre lepšie zdieľanie stránky na sociálnych sieťach a pozíciu v Google.

## 8. "Posledný blog / Aktuality" sekcia (voliteľné)

Krátka sekcia s 2-3 článkami / novinkami zo sveta estetickej medicíny. Buduje autoritu a SEO. (Vyžaduje viac obsahu od vás.)

## 9. Porovnanie prístrojov / Konfigurátor

Interaktívny nástroj kde si zákazník zaškrtne čo chce robiť (ošetrenie tváre, tela, depilácia...) a stránka mu odporučí konkrétny prístroj. Vysoká hodnota, ale väčšia práca.

## 10. Video sekcia

Embed YouTube videí ukazujúcich prístroje v akcii. Video predáva drahé B2B produkty oveľa lepšie ako fotky.

---

## Moje TOP 3 odporúčania (najväčší dopad / najmenej práce)

1. **Floating WhatsApp tlačidlo** — okamžite zvýši leady
2. **Scroll-to-top + scroll-reveal animácie** — lepší UX a prémiový pocit
3. **Vylepšený Footer + sekcia značiek** — dôveryhodnosť a profesionalita

---

## Technický prehľad

| Vylepšenie | Súbory | Náročnosť |
|---|---|---|
| WhatsApp tlačidlo | nový `WhatsAppButton.tsx` + `App.tsx` | Nízka |
| Scroll-to-top | nový `ScrollToTop.tsx` + `App.tsx` | Nízka |
| Logo bar značiek | nový `BrandsSection.tsx` + `Index.tsx` | Nízka |
| Scroll-reveal | nový hook `useScrollReveal` + úprava sekcií | Stredná |
| Vylepšený footer | `Footer.tsx` | Nízka |
| Cookie banner | nový `CookieBanner.tsx` + `App.tsx` | Stredná |
| SEO meta | `index.html` | Nízka |
| Video sekcia | nový `VideoSection.tsx` | Stredná |
| Konfigurátor | nový `ProductFinder.tsx` | Vysoká |

---

**Ktoré z týchto vylepšení chceš implementovať?** Môžem urobiť ľubovoľnú kombináciu — odporúčam začať s TOP 3.
