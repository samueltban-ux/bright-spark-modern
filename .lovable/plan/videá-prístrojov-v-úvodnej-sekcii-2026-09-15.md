# Videá prístrojov v úvodnej sekcii

Cieľ: na úvodnej obrazovke sa okrem textu a fotky bude dať prehrať aj video prístroja z YouTube.

## Čo od vás potrebujem

1. **YouTube link ku každému prístroju**, ktorý má mať video (stačí bežný odkaz na video).
2. Pri každom videu povedať, ktorý z dvoch režimov chcete:
   - **Zvislé video 9:16** na mieste fotky prístroja (text vľavo zostáva).
   - **Video na celú úvodnú plochu**, kde sa zobrazí iba názov prístroja.
3. Či má byť video bez zvuku a v slučke (odporúčam áno — prehliadače inak video samé nespustia).

## Ako to budem robiť

- Každá položka úvodného slidera dostane voliteľné video: odkaz + režim zobrazenia.
- Ak položka video nemá, zobrazí sa fotka presne ako dnes — nič sa nerozbije.
- **Režim 9:16:** na mieste fotky sa objaví zvislý rámček s videom, ktoré sa prehráva automaticky, bez zvuku, dokola. Okolité efekty (žiara, prstence) zostávajú.
- **Režim na celú plochu:** video vyplní pozadie úvodnej obrazovky, cez neho tmavý prechod pre čitateľnosť a iba veľký názov prístroja + tlačidlá.
- Na telefóne sa video prispôsobí výške obrazovky a nebude prekrývať tlačidlá.
- Ak sa video nenačíta alebo má návštevník zapnuté šetrenie dát, ukáže sa pôvodná fotka.
- Automatické prepínanie slidov sa pri videu predĺži, aby sa stihlo prehrať.

## Technické detaily

- Nový komponent pre YouTube prehrávanie cez `youtube-nocookie.com` embed s parametrami `autoplay=1&mute=1&loop=1&controls=0&playsinline=1&modestbranding=1`, lazy načítanie (iframe sa vytvorí až keď je slide aktívny).
- Typ slidu v `HeroSection.tsx` rozšírený o `video?: { id: string; mode: "portrait" | "fullscreen" }`.
- Rešpektovanie `prefers-reduced-motion` — pri zapnutom šetrení animácií sa zobrazí fotka.
- Žiadny backend, žiadne nové závislosti.

## Poznámka

Bez vlastného hostovaného súboru sa nedá úplne skryť YouTube branding pri pauze; ak by vám to prekážalo, riešením je poslať MP4 súbory a hostovať ich priamo na stránke.
