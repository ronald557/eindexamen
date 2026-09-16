// Alle state leeft alleen in het geheugen van deze pagina: geen opslag,
// dus een refresh zet de app terug naar het vakkenoverzicht.
const app = document.getElementById("app");

let state = {
  scherm: "overzicht", // "overzicht" | "sessie" | "resultaat"
  vak: null,
  vraagIndex: 0,
  antwoorden: [], // { gegeven, correct }
};

function render() {
  if (state.scherm === "overzicht") renderOverzicht();
  else if (state.scherm === "sessie") renderSessie();
  else if (state.scherm === "resultaat") renderResultaat();
}

function startSessie(vak) {
  state = { scherm: "sessie", vak, vraagIndex: 0, antwoorden: [] };
  render();
}

function terugNaarOverzicht() {
  state = { scherm: "overzicht", vak: null, vraagIndex: 0, antwoorden: [] };
  render();
}

function volgendeVraag(gegeven, correct) {
  state.antwoorden.push({ gegeven, correct });
  const isLaatste = state.vraagIndex === state.vak.vragen.length - 1;
  if (isLaatste) {
    state.scherm = "resultaat";
  } else {
    state.vraagIndex += 1;
  }
  render();
}

function renderOverzicht() {
  app.innerHTML = "";

  const titel = document.createElement("h1");
  titel.textContent = "Kies een vak";
  const sub = document.createElement("p");
  sub.className = "subtitle";
  sub.textContent = "Oefen korte sessies met voorbeeldvragen per vak.";

  const grid = document.createElement("div");
  grid.className = "vak-grid";

  VAKKEN.forEach((vak) => {
    const kaart = document.createElement("button");
    kaart.className = "vak-card";
    kaart.style.setProperty("--vak-kleur", vak.kleur);
    kaart.innerHTML = `
      <span class="vak-icoon">${vak.icoon}</span>
      <p class="vak-naam">${vak.naam}</p>
      <p class="vak-omschrijving">${vak.omschrijving}</p>
    `;
    kaart.addEventListener("click", () => startSessie(vak));
    grid.appendChild(kaart);
  });

  app.append(titel, sub, grid);
}

function renderSessie() {
  app.innerHTML = "";

  const { vak, vraagIndex } = state;
  const vraag = vak.vragen[vraagIndex];
  const totaal = vak.vragen.length;

  const terugBtn = document.createElement("button");
  terugBtn.className = "terug-link";
  terugBtn.textContent = "← Terug naar vakkenoverzicht";
  terugBtn.addEventListener("click", terugNaarOverzicht);

  const label = document.createElement("p");
  label.className = "voortgang-label";
  label.textContent = `${vak.icoon} ${vak.naam} — vraag ${vraagIndex + 1} van ${totaal}`;

  const bar = document.createElement("div");
  bar.className = "voortgang-bar";
  const fill = document.createElement("div");
  fill.className = "voortgang-fill";
  fill.style.setProperty("--vak-kleur", vak.kleur);
  fill.style.width = `${((vraagIndex + 1) / totaal) * 100}%`;
  bar.appendChild(fill);

  const kaart = document.createElement("div");
  kaart.className = "vraag-kaart";

  const vraagTekst = document.createElement("p");
  vraagTekst.className = "vraag-tekst";
  vraagTekst.textContent = vraag.vraag;
  kaart.appendChild(vraagTekst);

  if (vraag.type === "meerkeuze") {
    const lijst = document.createElement("div");
    lijst.className = "opties-lijst";

    const knoppen = [];
    let beantwoord = false;

    vraag.opties.forEach((optie, i) => {
      const btn = document.createElement("button");
      btn.className = "optie-btn";
      btn.textContent = optie;
      btn.addEventListener("click", () => {
        if (beantwoord) return;
        beantwoord = true;
        const isCorrect = i === vraag.antwoord;
        knoppen.forEach((k, j) => {
          k.disabled = true;
          if (j === vraag.antwoord) k.classList.add("correct");
          else if (j === i) k.classList.add("incorrect");
        });
        toonVervolg(kaart, isCorrect, () => volgendeVraag(optie, isCorrect));
      });
      knoppen.push(btn);
      lijst.appendChild(btn);
    });

    kaart.appendChild(lijst);
  } else {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "open-antwoord";
    input.placeholder = "Typ je antwoord...";

    const nakijkBtn = document.createElement("button");
    nakijkBtn.className = "btn btn-primary";
    nakijkBtn.textContent = "Controleer antwoord";

    const rij = document.createElement("div");
    rij.className = "actie-rij";
    rij.appendChild(nakijkBtn);

    nakijkBtn.addEventListener("click", () => {
      const gegeven = input.value.trim();
      const isCorrect =
        gegeven.toLowerCase() === String(vraag.antwoord).toLowerCase();
      input.disabled = true;
      nakijkBtn.disabled = true;
      toonVervolg(kaart, isCorrect, () => volgendeVraag(gegeven, isCorrect), vraag.antwoord);
    });

    kaart.append(input, rij);
  }

  app.append(terugBtn, label, bar, kaart);
}

function toonVervolg(kaart, isCorrect, onVerder, juisteAntwoord) {
  const feedback = document.createElement("p");
  feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  feedback.textContent = isCorrect
    ? "Goed gedaan! ✓"
    : juisteAntwoord
      ? `Helaas, het juiste antwoord is: ${juisteAntwoord}`
      : "Helaas, dat is niet juist.";

  const isLaatste = state.vraagIndex === state.vak.vragen.length - 1;
  const verderBtn = document.createElement("button");
  verderBtn.className = "btn btn-primary";
  verderBtn.textContent = isLaatste ? "Bekijk resultaat" : "Volgende vraag";

  const rij = document.createElement("div");
  rij.className = "actie-rij";
  rij.appendChild(verderBtn);

  verderBtn.addEventListener("click", onVerder);

  kaart.append(feedback, rij);
}

function renderResultaat() {
  app.innerHTML = "";

  const { vak, antwoorden } = state;
  const aantalGoed = antwoorden.filter((a) => a.correct).length;
  const totaal = antwoorden.length;

  const titel = document.createElement("h1");
  titel.textContent = "Resultaat";
  const sub = document.createElement("p");
  sub.className = "subtitle";
  sub.textContent = `${vak.icoon} ${vak.naam}`;

  const scoreKaart = document.createElement("div");
  scoreKaart.className = "score-kaart";
  scoreKaart.innerHTML = `
    <p class="score-label">Jouw score</p>
    <p class="score-getal">${aantalGoed} / ${totaal}</p>
    <p class="score-label">${Math.round((aantalGoed / totaal) * 100)}% goed beantwoord</p>
  `;

  const terugblikTitel = document.createElement("h2");
  terugblikTitel.textContent = "Terugblik";
  terugblikTitel.style.fontSize = "1.1rem";

  const terugblik = document.createElement("div");
  vak.vragen.forEach((vraag, i) => {
    const a = antwoorden[i];
    const item = document.createElement("div");
    item.className = "terugblik-item";
    const juistTekst =
      vraag.type === "meerkeuze" ? vraag.opties[vraag.antwoord] : vraag.antwoord;
    item.innerHTML = `
      <p class="terugblik-vraag"><span class="terugblik-status">${a.correct ? "✅" : "❌"}</span>${vraag.vraag}</p>
      <p class="terugblik-antwoord ${a.correct ? "goed" : "fout"}">Jouw antwoord: ${a.gegeven || "(geen antwoord)"}</p>
      ${a.correct ? "" : `<p class="terugblik-antwoord goed">Juiste antwoord: ${juistTekst}</p>`}
    `;
    terugblik.appendChild(item);
  });

  const acties = document.createElement("div");
  acties.className = "actie-rij";
  acties.style.justifyContent = "flex-start";
  acties.style.marginTop = "24px";

  const opnieuwBtn = document.createElement("button");
  opnieuwBtn.className = "btn btn-primary";
  opnieuwBtn.textContent = "Opnieuw oefenen";
  opnieuwBtn.addEventListener("click", () => startSessie(vak));

  const overzichtBtn = document.createElement("button");
  overzichtBtn.className = "btn btn-secondary";
  overzichtBtn.textContent = "Terug naar vakkenoverzicht";
  overzichtBtn.addEventListener("click", terugNaarOverzicht);

  acties.append(opnieuwBtn, overzichtBtn);

  app.append(titel, sub, scoreKaart, terugblikTitel, terugblik, acties);
}

render();
