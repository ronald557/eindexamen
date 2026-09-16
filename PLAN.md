# Bouwfases

Gebaseerd op STRATEGY.md. Fase 1 is uitgewerkt; latere fases staan op hoofdlijnen.

## Fase 1 — Klikbare front-end mockup met fictieve data (vandaag)

### Resultaat
Eén werkende, klikbare app in de browser met fictieve (in de code ingebakken) data. Geen backend, geen database, geen accounts, geen opslag — ook geen localStorage. Ververs je de pagina, dan begint alles gewoon opnieuw.

### Belangrijkste onderdelen
1. **Vakkenoverzicht** — lijst met 3–4 fictieve vakken om te kiezen.
2. **Oefensessie** — vraag-voor-vraag (mix van meerkeuze en open vragen), met zichtbare voortgang zoals "vraag 3 van 6".
3. **Resultaatscherm** — score en een terugblik op goed/fout beantwoorde vragen, met een knop om opnieuw te oefenen of terug te gaan naar het vakkenoverzicht.
4. **Navigatie** — soepel klikken tussen de drie schermen, voor meerdere vakken na elkaar.
5. **Fictieve data** — per vak 5–8 voorbeeldvragen, vast in de code (niet opgeslagen, niet aanpasbaar door de gebruiker).

### Hoe we beoordelen of het werkt
- Je kunt door alle schermen klikken zonder dat de app vastloopt.
- Je kunt meerdere vakken kiezen en de vragen verschillen per vak.
- Je ziet zowel meerkeuze- als open vragen.
- De voortgang tijdens een sessie is duidelijk zichtbaar.
- Het resultaatscherm klopt met de gegeven antwoorden.
- Je kunt opnieuw starten of een ander vak kiezen.
- Na verversen van de pagina is alles terug bij het begin.
- De app werkt puur in de browser, zonder dat er een server nodig is.

## Latere fases (op hoofdlijnen)

**Fase 2 — Echte examenvragen/inhoud**
Fictieve vragen vervangen door echte examenstof, mogelijk gestructureerd per onderwerp. Nog steeds geen backend nodig.

**Fase 3 — Backend en blijvende opslag**
Vragen en voortgang echt opslaan, zodat niets verloren gaat bij verversen.

**Fase 4 — Echte accounts**
Inloggen, zodat elke leerling zijn eigen voortgang heeft.

**Fase 5 — Publicatie en eventuele koppelingen**
De app online zetten, eventueel gekoppeld aan externe bronnen.
