# Strategy

## Visie
Een oefen-app die 6-vwo-leerlingen helpt zich snel en laagdrempelig voor te bereiden op hun centraal eindexamen. Geen zware leeromgeving, maar korte, toegankelijke oefensessies per vak die overal tussendoor passen.

## Doelgroep
Leerlingen in 6 vwo die zich voorbereiden op hun centraal eindexamen. Ze hebben weinig tijd en geduld voor ingewikkelde interfaces; ze willen snel starten, examenstof op hun eigen niveau oefenen en resultaat zien.

## Belangrijkste gebruikersflow en schermen
1. **Vakkenoverzicht** — startscherm met een lijst van vakken (bv. wiskunde, Nederlands, geschiedenis) om uit te kiezen.
2. **Oefensessie** — een reeks vragen (meerkeuze en/of open) binnen het gekozen vak, één vraag per keer met directe voortgangsindicatie.
3. **Resultaatscherm** — score, korte terugblik op goed/fout beantwoorde vragen, en een duidelijke actie om opnieuw te oefenen of terug te gaan naar het vakkenoverzicht.

De flow moet volledig doorklikbaar zijn voor meerdere vakken, zodat verschillende scenario's (vak, vraagtype, score) getoond kunnen worden.

## Visuele richting
Fris, rustig en schoolvriendelijk: een strak kaartenoverzicht voor vakken, veel witruimte, duidelijke typografie, en subtiele kleuraccenten per vak. Geen drukke gamification-elementen; de nadruk ligt op snelheid en overzicht, niet op competitie.

## Benodigde mock- en demo-data
- 3–4 vakken met naam, icoon/kleur en korte omschrijving.
- Per vak minimaal 5–8 voorbeeldvragen (mix van meerkeuze en open), met correct antwoord.
- Vaste demo-scores/resultaten om het resultaatscherm te vullen (geen echte berekening nodig, mag hardcoded of simpel client-side).

## Wat we vandaag bouwen
Een klikbaar front-end prototype (geen backend, geen opslag, geen accounts, geen betalingen, geen externe koppelingen) met de drie kernschermen, werkend voor meerdere vakken met mockdata, zodat de volledige oefenflow end-to-end te demonstreren is.
