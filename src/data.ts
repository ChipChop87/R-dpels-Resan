export interface Stage {
  id: string;
  title: string;
  age: string;
  summary: string;
  behavior: string;
  ownerTips: string[];
  challenges: string[];
  childTips?: string;
}

export interface Warning {
  id: string;
  item: string;
  dangerLevel: 'Hög' | 'Medium' | 'Information';
  description: string;
  action: string;
}

export const STAGES: Stage[] = [
  {
    id: '8w',
    title: 'Välkommen Hem!',
    age: '8 Veckor',
    summary: 'Valpen har precis lämnat sin mamma och syskon. Allt är nytt och lite läskigt.',
    behavior: 'Valpen kan pipa på natten och vill vara nära dig hela tiden. Den utforskar världen med munnen.',
    ownerTips: [
      'Skapa en trygg sovplats nära din säng.',
      'Börja med rumsrenhet direkt – gå ut efter mat, lek och sömn.',
      'Ge massor av närhet och trygghet.'
    ],
    challenges: [
      'Gråt på natten: Valpen saknar sin familj. Det är normalt och går över!',
      'Olyckor inne: Ha tålamod, valpen kan inte kontrollera sin blåsa än.'
    ],
    childTips: 'Låt valpen sova ifred. Barn ska inte bära valpen då den är spröd och lätt kan tappas.'
  },
  {
    id: '12w',
    title: 'Den Nyfikna Upptäckaren',
    age: '12 Veckor',
    summary: 'Självförtroendet växer och valpen börjar bli modigare.',
    behavior: 'Här vaknar den finska spetsens naturliga vaksamhet. Den kan börja "varna" för saker den ser.',
    ownerTips: [
      'Socialisera! Låt valpen se bilar, cyklar och olika människor i lugn takt.',
      'Börja träna på att vara ensam korta stunder (minuter).',
      'Belöna tystnad för att hantera skällandet tidigt.'
    ],
    challenges: [
      'Skällande: Finnspetsen är en "trädskällare". Det är dess natur, så bli inte stressad. Avled varsamt om det blir för mycket.',
      'Bitande i händer: Valpen testar sina tänder. Säg "nej" eller "aj" och ge en leksak istället.'
    ],
    childTips: 'Lär barnen att "stå som ett träd" (stilla med händerna vid sidan) om valpen blir för busig och nafsar.'
  },
  {
    id: '4m',
    title: 'Tandfe-perioden',
    age: '4 Månader',
    summary: 'Mjölktänderna börjar lossna och de vuxna tänderna växer fram.',
    behavior: 'Det kliar enormt i munnen! Valpen kan bli extra tuggig och ibland lite irriterad p.g.a. smärtan.',
    ownerTips: [
      'Erbjud massor av tuggleksaker.',
      'Tips: Frys in en blöt handduk eller en Kong-leksak för att kyla ner tandköttet.',
      'Kolla i munnen så att inga tänder sitter dubbelt.'
    ],
    challenges: [
      'Tuggande på möbler: Detta är inte för att vara elak, det kliar bara! Skydda dina favoritsaker.',
      'Selektiv hörsel: Valpen börjar få egna idéer.'
    ]
  },
  {
    id: '7m',
    title: 'Slyngelåldern',
    age: '7-12 Månader',
    summary: 'Hundens motsvarighet till tonåren. Hormonerna sprutar!',
    behavior: 'Hunden kan plötsligt "glömma" allt den lärt sig. Jaktinstinkten blir mycket starkare.',
    ownerTips: [
      'Håll träningen enkel och rolig. Kräv inte för mycket just nu.',
      'Var konsekvent men mjuk. Finnspetsen är känslig för hårda tag.',
      'Använd långlina vid promenader om inkallningen brister.'
    ],
    challenges: [
      'Jaktlust: Din hund kan plötsligt vilja dra efter en fågel eller ekorre. Var beredd!',
      'Testar gränser: Hunden utmanar din auktoritet. Håll dig lugn, det är en fas.'
    ],
    childTips: 'Hunden kan vara lite mer oberäknelig nu. Övervaka alltid lek mellan hund och barn.'
  },
  {
    id: '2y',
    title: 'Den Mogna Finnspetsen',
    age: '2 År+',
    summary: 'Hunden är nu fysiskt och mentalt vuxen.',
    behavior: 'En lojal, vaksam och pigg kamrat. Den har hittat sin roll i familjen.',
    ownerTips: [
      'Fortsätt med mental stimulans – spårträning är perfekt för denna ras!',
      'Håll koll på vikten, finnspetsen blir lätt överviktig.',
      'Njut av din vackra "skogens guld".'
    ],
    challenges: [
      'Vaktbeteende: Den kommer alltid att vilja varna när någon kommer. Lär dig acceptera ett par skall och säg sedan "tack, jag har sett".'
    ]
  }
];

export const WARNINGS: Warning[] = [
  {
    id: 'xylitol',
    item: 'Xylitol (Björksocker)',
    dangerLevel: 'Hög',
    description: 'Finns i tuggummi, godis och vissa tandkrämer. Extremt giftigt även i små mängder.',
    action: 'Kontakta veterinär omedelbart om hunden fått i sig detta.'
  },
  {
    id: 'choklad',
    item: 'Choklad',
    dangerLevel: 'Hög',
    description: 'Innehåller teobromin som är giftigt för hundar. Ju mörkare choklad, desto farligare.',
    action: 'Åk till veterinär om hunden ätit mer än en liten bit.'
  },
  {
    id: 'moss',
    item: 'Möss & Sorkar',
    dangerLevel: 'Information',
    description: 'Finnspetsen älskar att jaga smådjur. Det är naturligt men de kan bära på parasiter eller ha fått i sig råttgift.',
    action: 'Håll koll på hundens allmäntillstånd. Om den ätit en mus och sedan blir hängig, kontakta veterinär.'
  },
  {
    id: 'vass',
    item: 'Vassa föremål/Leksaker',
    dangerLevel: 'Medium',
    description: 'Små plastbitar eller vassa ben kan skada tarmen.',
    action: 'Om hunden svalt något vasst, ge sparris (burksparris) som kan kapsla in föremålet och kontakta veterinär.'
  }
];
