// Fictieve demo-data voor fase 1 (klikbare mockup, geen echte examenstof).
const VAKKEN = [
  {
    id: "wiskunde",
    naam: "Wiskunde",
    icoon: "📐",
    kleur: "#4f46e5",
    omschrijving: "Algebra, meetkunde en functies oefenen.",
    vragen: [
      {
        type: "meerkeuze",
        vraag: "Wat is de uitkomst van 3x + 5 = 20?",
        opties: ["x = 3", "x = 5", "x = 15", "x = 25"],
        antwoord: 1,
      },
      {
        type: "meerkeuze",
        vraag: "Wat is de oppervlakte van een cirkel met straal 4?",
        opties: ["8π", "16π", "4π", "12π"],
        antwoord: 1,
      },
      {
        type: "open",
        vraag: "Wat is de afgeleide van f(x) = x²?",
        antwoord: "2x",
      },
      {
        type: "meerkeuze",
        vraag: "Welke vergelijking hoort bij een rechte lijn?",
        opties: ["y = x²", "y = ax + b", "y = 1/x", "y = √x"],
        antwoord: 1,
      },
      {
        type: "open",
        vraag: "Hoeveel graden heeft de som van de hoeken in een driehoek?",
        antwoord: "180",
      },
      {
        type: "meerkeuze",
        vraag: "Wat is √144?",
        opties: ["10", "11", "12", "14"],
        antwoord: 2,
      },
    ],
  },
  {
    id: "nederlands",
    naam: "Nederlands",
    icoon: "📖",
    kleur: "#dc2626",
    omschrijving: "Taal, grammatica en tekstbegrip oefenen.",
    vragen: [
      {
        type: "meerkeuze",
        vraag: "Welk woord is een bijvoeglijk naamwoord?",
        opties: ["lopen", "snel", "huis", "gisteren"],
        antwoord: 1,
      },
      {
        type: "open",
        vraag: "Noem één signaalwoord dat een tegenstelling aangeeft.",
        antwoord: "maar",
      },
      {
        type: "meerkeuze",
        vraag: "Wat is het onderwerp in de zin 'De leraar geeft een toets'?",
        opties: ["de leraar", "geeft", "een toets", "toets"],
        antwoord: 0,
      },
      {
        type: "meerkeuze",
        vraag: "Welke tekstsoort probeert de lezer te overtuigen?",
        opties: ["betogende tekst", "verhalende tekst", "informatieve tekst", "instructieve tekst"],
        antwoord: 0,
      },
      {
        type: "open",
        vraag: "Wat is het meervoud van 'museum'?",
        antwoord: "musea",
      },
      {
        type: "meerkeuze",
        vraag: "Welk verband leggen woorden als 'daarom' en 'dus' meestal?",
        opties: ["tijd", "reden-gevolg", "opsomming", "vergelijking"],
        antwoord: 1,
      },
    ],
  },
  {
    id: "geschiedenis",
    naam: "Geschiedenis",
    icoon: "🏛️",
    kleur: "#d97706",
    omschrijving: "Van de Tweede Wereldoorlog tot de Koude Oorlog.",
    vragen: [
      {
        type: "meerkeuze",
        vraag: "In welk jaar brak de Tweede Wereldoorlog uit?",
        opties: ["1914", "1939", "1945", "1918"],
        antwoord: 1,
      },
      {
        type: "open",
        vraag: "Hoe heette de muur die Berlijn van 1961 tot 1989 verdeelde?",
        antwoord: "de Berlijnse Muur",
      },
      {
        type: "meerkeuze",
        vraag: "Welke twee grootmachten stonden centraal in de Koude Oorlog?",
        opties: [
          "Frankrijk en Duitsland",
          "de Verenigde Staten en de Sovjet-Unie",
          "China en Japan",
          "Engeland en Spanje",
        ],
        antwoord: 1,
      },
      {
        type: "meerkeuze",
        vraag: "Wat was het doel van de Marshallhulp?",
        opties: [
          "Europa economisch herstellen na WOII",
          "een muur bouwen in Berlijn",
          "de Verenigde Naties oprichten",
          "een ruimterace starten",
        ],
        antwoord: 0,
      },
      {
        type: "open",
        vraag: "In welk jaar viel de Berlijnse Muur?",
        antwoord: "1989",
      },
      {
        type: "meerkeuze",
        vraag: "Welke organisatie werd in 1945 opgericht om internationale vrede te bevorderen?",
        opties: ["de NAVO", "de Verenigde Naties", "de Europese Unie", "het Warschaupact"],
        antwoord: 1,
      },
    ],
  },
  {
    id: "engels",
    naam: "Engels",
    icoon: "🇬🇧",
    kleur: "#059669",
    omschrijving: "Grammar, vocabulary en reading comprehension.",
    vragen: [
      {
        type: "meerkeuze",
        vraag: "Choose the correct form: 'She ___ to school every day.'",
        opties: ["go", "goes", "going", "gone"],
        antwoord: 1,
      },
      {
        type: "open",
        vraag: "What is the past tense of 'to write'?",
        antwoord: "wrote",
      },
      {
        type: "meerkeuze",
        vraag: "Which word is a synonym for 'happy'?",
        opties: ["joyful", "angry", "tired", "confused"],
        antwoord: 0,
      },
      {
        type: "meerkeuze",
        vraag: "Choose the correct sentence.",
        opties: [
          "He don't like coffee.",
          "He doesn't likes coffee.",
          "He doesn't like coffee.",
          "He not like coffee.",
        ],
        antwoord: 2,
      },
      {
        type: "open",
        vraag: "What is the opposite of 'increase'?",
        antwoord: "decrease",
      },
      {
        type: "meerkeuze",
        vraag: "Which sentence is in the passive voice?",
        opties: [
          "The dog chased the cat.",
          "The cat was chased by the dog.",
          "The cat chases the dog.",
          "The dog is chasing the cat.",
        ],
        antwoord: 1,
      },
    ],
  },
];
