/** Original Squarespace product copy, formatted to the Beloved pattern. */

export const gicleeNote =
  "This is a Giclée print of the original canvas, which has been sold. Prints are archival — pigment-based inks, made to last — and arrive as the image alone, without a border or frame, so you can present them as you like. They are not sold through the cart.";

export type ProductCopy = {
  size?: string;
  diagnosis?: string;
  quote?: string;
  attribution?: string;
  description: string;
  print?: boolean;
};

const fifths =
  "Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the diagnosis.";

const canvas = (diagnosis: string, extra = "embroidery") =>
  `Canvas with hand-generated gilding and ${extra}. Imagery reflective of the DSM-5 diagnostic criteria for ${diagnosis}. ${fifths}`;

const giclee = (diagnosis: string, plural = false) =>
  `Giclée print${plural ? "s" : ""} with imagery reflective of the DSM-5 diagnostic criteria for ${diagnosis}. ${fifths}`;

export const productCopy: Record<string, ProductCopy> = {
  beloved: {
    size: "20 × 20 in",
    diagnosis: "Obsessive-Compulsive and Related Disorders",
    quote:
      "If thinking is your fate, revere this fate with divine honour and sacrifice to it the best, the most beloved",
    attribution: "Friedrich Nietzsche",
    description: canvas("Obsessive-Compulsive and Related Disorders"),
  },
  nepenthe: {
    size: "16 × 20 in",
    diagnosis: "Schizophrenia",
    quote: "The question is not what you look at, but what you see.",
    attribution: "Henry David Thoreau",
    description: canvas("Schizophrenia"),
  },
  diffident: {
    size: "8 × 8 in",
    diagnosis: "Social Anxiety Disorder",
    quote:
      "…and, besides, what was left to say these days when the unspeakable was out there being spoken, exhausting all sympathy? Yet, feeling it, how difficult to keep the face's curtains closed..",
    attribution: "Stephen Dunn",
    description: canvas("Social Anxiety Disorder"),
  },
  toska: {
    size: "24 × 36 in",
    diagnosis: "Depersonalization Disorder",
    quote:
      "Much unhappiness has come into the world because of bewilderment and things left unsaid.",
    attribution: "Fyodor Dostoevsky (from The Brothers Karamazov)",
    description: canvas("Depersonalization Disorder"),
  },
  awen: {
    size: "16 × 20 in",
    diagnosis: "Bipolar Disorder",
    quote:
      "…at this moment a thousand valves have opened in my head, and I must let myself flow in a river of words, or I shall choke.",
    attribution: "Fyodor Dostoyevsky, White Nights",
    description: canvas("Bipolar Disorder"),
  },
  ichverlust: {
    size: "12 × 12 in",
    diagnosis: "Depersonalization Disorder",
    quote:
      "I am a series of small victories and large defeats and I am as amazed as any other that I have gotten from there to here.",
    attribution: "Charles Bukowski",
    description: giclee("Depersonalization Disorder"),
    print: true,
  },
  medicine: {
    size: "18 × 24 in",
    diagnosis: "Bipolar Disorder",
    quote:
      "You have lost all delight in life. Ahead is a large array of blind alleys. You are half-deliberately, half-desperately cutting off your grip on creative life. You are becoming a neuter machine. You cannot love, even if you knew how to begin to love. Every thought is a devil, a hell-if you could do a lot of things over again, ah, how differently you would do them! You want to go home, back to the womb. You watch the world bang door after door in your face, numbly, bitterly. You have forgotten the secret you knew, once, ah, once, of being joyous, of laughing, of opening doors.",
    attribution: "Sylvia Plath",
    description: canvas("Bipolar Disorder"),
  },
  immarcescible: {
    size: "11 × 14 in",
    diagnosis: "Bipolar 1",
    quote:
      "I did not care what it was all about. All I wanted to know was how to live in it. Maybe if you found out how to live in it you learned from that what is was all about.",
    attribution: "Ernest Hemingway, The Sun Also Rises",
    description: giclee("Bipolar 1"),
    print: true,
  },
  "blue-mnemosyne": {
    size: "8 × 8 in",
    diagnosis: "Post-Traumatic Stress Disorder",
    quote: "To be able to forget means sanity.",
    attribution: "Jack London, The Star Rover",
    description:
      "Canvas with hand-generated gilding and embroidery. Imagery reflective of symptoms associated with PTSD. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the diagnosis.",
  },
  "almost-steady": {
    size: "8 × 8 in",
    diagnosis: "Post-Traumatic Stress Disorder",
    quote:
      "Sitting on the floor, I'd replay the past in my head. Funny, that's all I did, day after day after day for half a year, and I never tired of it. What I'd been through seemed so vast, with so many facets. Vast, but real, very real, which was why the experience persisted in towering before me, like a monument lit up at night. And the thing was, it was a monument to me.",
    attribution: "Haruki Murakami, Dance Dance Dance",
    description:
      "Canvas with hand-generated gilding and embroidery. Imagery reflective of symptoms associated with PTSD. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the diagnosis.",
  },
  fairytalesandsong: {
    size: "8 × 8 in",
    diagnosis: "complicated grief",
    quote: "The good and the beautiful is not forgotten; it lives in legend and in song.",
    attribution: "Hans Christian Andersen, Classic Fairy Tales",
    description: canvas("complicated grief"),
  },
  who: {
    size: "8 × 8 in",
    diagnosis: "Borderline Personality Disorder",
    quote:
      "We experience ourselves our thoughts and feelings as something separate from the rest. A kind of optical delusion of consciousness. This delusion is a kind of prison for us, restricting us to our personal desires and to affection for a few persons nearest to us.",
    attribution: "Albert Einstein",
    description: canvas("Borderline Personality Disorder"),
  },
  vershnung: {
    size: "8 × 8 in",
    diagnosis: "conflict resolution",
    quote:
      "I tried to discover, in the rumor of forests and waves, words that other men could not hear, and I pricked up my ears to listen to the revelation of their harmony.",
    attribution: "Gustave Flaubert, November",
    description: canvas("conflict resolution"),
  },
  sophism: {
    diagnosis: "Post-Traumatic Stress Disorder",
    quote: "Illusion is the first of all pleasures",
    attribution: "Voltaire",
    description:
      "Canvas with hand-generated gilding and embroidery. Imagery reflective of symptoms associated with PTSD. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the diagnosis.",
  },
  tree: {
    diagnosis: "Depressive Personality Disorder",
    quote:
      "Some nights in the midst of this loneliness I swung among the scattered stars at the end of the thin thread of faith alone.",
    attribution: "Wendell Berry, Jayber Crow",
    description: canvas("Depressive Personality Disorder"),
  },
  happyesque: {
    diagnosis: "Bipolar Disorder",
    quote: "God is a circle whose center is everywhere and circumference nowhere.",
    attribution: "Voltaire",
    description: canvas("Bipolar Disorder"),
  },
  acedia: {
    size: "12 × 12 in",
    diagnosis: "Post-Traumatic Stress Disorder",
    quote: "If a victory is told in detail, one can no longer distinguish it from a defeat.",
    attribution: "Jean-Paul Sartre",
    description:
      "Canvas with hand-generated gilding and embroidery. Imagery reflective of symptoms associated with PTSD. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the diagnosis.",
  },
  moonbynight: {
    size: "12 × 12 in",
    quote:
      "No matter how much suffering you went through, you never wanted to let go of those memories.",
    attribution: "Haruki Murakami",
    description:
      "Canvas with hand-generated gilding and embroidery.",
  },
  "butterflies-3gkzc": {
    size: "8 × 8 in",
    diagnosis: "Post-Traumatic Stress Disorder",
    quote: "You are so brave and quiet I forget you are suffering.",
    attribution: "Ernest Hemingway",
    description:
      "Giclée print with imagery reflective of symptoms associated with PTSD. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the diagnosis.",
    print: true,
  },
  butterflies: {
    size: "8 × 8 in",
    diagnosis: "depression",
    quote:
      "Some of it is ugly, obscene and bestial, some of it is pure and holy and spiritual: all of it is myself.",
    attribution: "James Joyce, Selected Letters of James Joyce",
    description: canvas("depression"),
  },
  yellow: {
    size: "8 × 8 in",
    diagnosis: "Bipolar Disorder",
    quote: "I have scars on my hand from touching certain people.",
    attribution: "J.D. Salinger, Raise High the Roof Beam, Carpenters & Seymour: An Introduction",
    description: canvas("Bipolar Disorder"),
  },
  stumble: {
    size: "8 × 8 in",
    diagnosis: "Borderline Personality Disorder",
    quote: "I love you, with a touch of tragedy and quite madly.",
    attribution: "Simone de Beauvoir, Letters to Sartre",
    description: canvas("Borderline Personality Disorder"),
  },
  masked: {
    size: "8 × 8 in",
    diagnosis: "depression",
    quote:
      "If the moon smiled, she would resemble you. / You leave the same impression / Of something beautiful, but annihilating.",
    attribution: "Sylvia Plath, Ariel: The Restored Edition",
    description: canvas("depression"),
  },
  friction: {
    size: "8 × 8 in",
    diagnosis: "Major depressive episodes, blending photography and digital manipulation to express the emotional depth of the condition",
    quote:
      "Let everything that's been planned come true. Let them believe. And let them have a laugh at their passions. Because what they call passion actually is not some emotional energy, but just the friction between their souls and the outside world.",
    attribution: "Andrei Tarkovsky",
    description: canvas("Major depressive episodes, blending photography and digital manipulation to express the emotional depth of the condition"),
  },
  brooding: {
    size: "8 × 8 in",
    diagnosis: "rumination",
    quote:
      "And so we beat on, boats against the current, borne back ceaselessly into the past.",
    attribution: "F. Scott Fitzgerald, The Great Gatsby",
    description: canvas("rumination"),
  },
  bane: {
    size: "8 × 8 in",
    diagnosis: "Major depressive episode",
    quote:
      "My little beast, my eyes, my favorite stolen egg. Listen. To live is to be marked. To live is to change, to acquire the words of a story, and that is the only celebration we mortals really know. In perfect stillness, frankly, I’ve only found sorrow.",
    attribution: "Barbara Kingsolver, The Poisonwood Bible",
    description: canvas("Major depressive episode"),
  },
  feathers: {
    size: "8 × 8 in",
    diagnosis: "Phobias",
    quote: "Of all base passions, fear is most accursed.",
    attribution: "William Shakespeare, Henry VI, Part 1, 5.2.18",
    description: canvas("Phobias"),
  },
  reconcile: {
    size: "24 × 36 in",
    diagnosis: "Adjustment disorders",
    quote:
      "When a child first catches adults out ─ when it first walks into his grave little head that adults do not always have divine intelligence, that their judgments are not always wise, their thinking true, their sentences just ─ his world falls into panic desolation. The gods are fallen and all safety gone. And there is one sure thing about the fall of gods: they do not fall a little; they crash and shatter or sink deeply into green muck. It is a tedious job to build them up again; they never quite shine. And the child's world is never quite whole again.",
    attribution: "John Steinbeck, East of Eden",
    description: canvas("Adjustment disorders"),
  },
  pendant: {
    size: "12 × 12 in",
    diagnosis: "Obsessive-Compulsive Personality Disorder (OCPD)",
    quote: "And now that you don't have to be perfect, you can be good.",
    attribution: "John Steinbeck, East of Eden",
    description: giclee("Obsessive-Compulsive Personality Disorder (OCPD)"),
    print: true,
  },
  change: {
    size: "12 × 12 in",
    diagnosis: "Prolonged grief disorder (PGD) as a trauma and stressor-related disorder",
    quote: "Change is one thing. Acceptance is another.",
    attribution: "Arundhati Roy from The God of Small Things",
    description: canvas("Prolonged grief disorder (PGD) as a trauma and stressor-related disorder", "silk embroidery"),
  },
  engulf: {
    size: "24 × 36 in",
    diagnosis: "Eating disorders",
    quote:
      "A person who has good thoughts cannot ever be ugly. You can have a wonky nose and a crooked mouth and a double chin and stick-out teeth, but if you have good thoughts it will shine out of your face like sunbeams and you will always look lovely.",
    attribution: "Roald Dahl, The Twits",
    description: canvas("Eating disorders"),
  },
  cyclical: {
    size: "12 × 12 in",
    diagnosis: "Bipolar Disorder (BD)",
    quote:
      "You expected to be sad in the fall. Part of you died each year when the leaves fell from the trees and their branches were bare against the wind and the cold, wintery light. But you knew there would always be the spring, as you knew the river would flow again after it was frozen. When the cold rains kept on and killed the spring, it was as though a young person died for no reason.",
    attribution: "Ernest Hemingway, A Moveable Feast",
    description: giclee("Bipolar Disorder (BD)"),
    print: true,
  },
  scales: {
    size: "12 × 12 in",
    diagnosis: "Post-Traumatic Stress Disorder",
    quote: "But a mermaid has no tears, and therefore she suffers so much more.",
    attribution: "Hans Christian Andersen, The Little Mermaid",
    description:
      "Canvas with hand-generated gilding and embroidery. Imagery reflective of symptoms associated with PTSD. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the diagnosis.",
  },
  ketosis: {
    size: "12 × 12 in",
    diagnosis: "Post-Traumatic Stress Disorder",
    quote:
      "Years will pass, and you will have visitings of despair and yet be tortured by hope.",
    attribution: "Mary Shelley, Frankenstein",
    description:
      "Canvas with hand-generated gilding and embroidery. Imagery reflective of symptoms associated with PTSD. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the diagnosis.",
  },
  pique: {
    size: "12 × 12 in",
    diagnosis: "Post-Traumatic Stress Disorder",
    quote:
      "Ira furor brevis est; animum rege, qui, nisi paret, imperat; hunc frenis, hunc tu compesce catena.",
    attribution: "Horace",
    description:
      "Giclée print with imagery reflective of symptoms associated with PTSD. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the diagnosis.",
    print: true,
  },
  pendulum: {
    size: "16 × 20 in",
    diagnosis: "Bipolar 1",
    quote:
      "Opinion is like a pendulum and obeys the same law. If it goes past the centre of gravity on one side, it must go a like distance on the other; and it is only after a certain time that it finds the true point at which it can remain at rest.",
    attribution: "Arthur Schopenhauer",
    description: canvas("Bipolar 1", "silk embroidery"),
  },
  souvenir: {
    size: "18 × 24 in",
    diagnosis: "Dementia",
    quote:
      "The scene is memory and is therefore nonrealistic. Memory takes a lot of poetic license. It omits some details; others are exaggerated, according to the emotional value of the articles it touches, for memory is seated predominantly in the heart.",
    attribution: "Tennessee Williams, The Glass Menagerie",
    description:
      "Canvas with hand-generated gilding and embroidery. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring Dementia.",
  },
  "self-actualization": {
    size: "11 × 14 in",
    diagnosis: "Recovery",
    quote:
      "…I have been alone but seldom lonely. I have satisfied my thirst at the well of my self and that wine was good, the best I ever had, and tonight sitting staring into the dark I now finally understand the dark and the light and everything in between.",
    attribution: "Charles Bukowski, Mind and Heart",
    description:
      "Canvas with hand-generated gilding and embroidery. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring recovery.",
  },
  impression: {
    size: "12 × 12 in",
    diagnosis: "Recovery",
    quote: "All dreams continue in the beyond.",
    attribution: "Tom Robbins, Jitterbug Perfume",
    description:
      "Canvas with hand-generated gilding and embroidery. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring recovery.",
  },
  barely: {
    size: "11 × 14 in",
    diagnosis: "Recovery",
    quote: "We should meet in another life, we should meet in air, me and you.",
    attribution: "Sylvia Plath",
    description:
      "Canvas with hand-generated gilding and embroidery. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring recovery.",
  },
  "my-compass-is-broken": {
    size: "18 × 24 in",
    diagnosis: "Recovery",
    quote: "How nice—to feel nothing, and still get full credit for being alive.",
    attribution: "Kurt Vonnegut, Slaughterhouse-Five",
    description:
      "Canvas with hand-generated gilding and embroidery. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring recovery.",
  },
  trajectory: {
    size: "16 × 20 in",
    diagnosis: "Recovery",
    quote: "Don't feel sorry for yourself. Only assholes do that.",
    attribution: "Haruki Murakami, Norwegian Wood",
    description:
      "Canvas with hand-generated gilding and embroidery. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring recovery.",
  },
  anomia: {
    size: "12 × 12 in",
    diagnosis: "Recovery",
    quote: "Please remember: things are not what they seem.",
    attribution: "Haruki Murakami, 1Q84",
    description:
      "Canvas with hand-generated gilding and embroidery. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring recovery.",
  },
  hecate: {
    size: "12 × 12 in",
    diagnosis: "Recovery",
    quote:
      "Be you still, be you still, trembling heart; Remember the wisdom out of the old days: Him who trembles before the flame and the flood, And the winds that blow through the starry ways, Let the starry winds and the flame and the flood Cover over and hide, for he has no part With the lonely, majestical multitude.",
    attribution: "William Butler Yeats",
    description:
      "Giclée print. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring recovery.",
    print: true,
  },
  helen: {
    size: "8 × 8 in",
    diagnosis: "Borderline Personality Disorder",
    quote:
      "Why should I blame her that she filled my days With misery, or that she would of late Have taught to ignorant men most violent ways, Or hurled the little streets upon the great, Had they but courage equal to desire? What could have made her peaceful with a mind That nobleness made simple as a fire, With beauty like a tightened bow, a kind That is not natural in an age like this, Being high and solitary and most stern? Why, what could she have done, being what she is? Was there another Troy for her to burn?",
    attribution: "William Butler Yeats, No Second Troy",
    description: canvas("Borderline Personality Disorder"),
  },
  volatile: {
    size: "8 × 8 in",
    diagnosis: "Borderline Personlaity Disorder",
    quote:
      "You are neither here nor there, A hurry through which known and strange things pass As big soft buffetings come at the car sideways And catch the heart off guard and blow it open.",
    attribution: "Seamus Heaney, Postscript",
    description: canvas("Borderline Personlaity Disorder"),
  },
  flightofideas: {
    size: "8 × 8 in",
    diagnosis: "Manic Episode",
    quote:
      "The gilded butterfly pursues O'er hedge and ditch, through gaps and mews, And after many a vain essay To captivate the tempting prey, Gives him at length the lucky pat, And has him safe beneath his hat:",
    attribution: "William Cowper",
    description: giclee("Manic Episode"),
    print: true,
  },
  mercurial: {
    size: "8 × 8 in",
    diagnosis: "Bipolar Disorder",
    quote: "Nought may endure but mutability.",
    attribution: "Percy Bysshe Shelley",
    description: canvas("Bipolar Disorder"),
  },
  "forgive-us": {
    size: "8 × 8 in",
    diagnosis: "Uncomplicated bereavement",
    quote:
      "Of which the first is love. The sad, unrepeatable fact / that the loves we shouldn’t foster burrow faster and linger longer / than sanctioned kinds can. Loves that thrive on absence, on lack / of return, or worse, on harm, are unkillable, Father. / They do not die in us. And you know how we’ve tried.",
    attribution: "Sinéad Morrissey",
    description: canvas("Uncomplicated bereavement"),
  },
  thoughts: {
    size: "8 × 8 in",
    diagnosis: "negative self-referential processing (NSRP)",
    quote: "Life begins on the other side of despair.",
    attribution: "Jean-Paul Sartre",
    description: giclee("negative self-referential processing (NSRP)"),
    print: true,
  },
  "derailmentassociative-looseness": {
    size: "12 × 12 in",
    diagnosis: "Schizophrenia",
    quote: "Awake,chaos:we have napped.",
    attribution: "E.E. Cummings, E. E. Cummings: Complete Poems, 1913-1962",
    description: canvas("Schizophrenia"),
  },
  symphonyofneuralpathways: {
    size: "16 × 20 in",
    diagnosis: "neurology",
    quote:
      "The inexpressible depth of music, so easy to understand and yet so inexplicable, is due to the fact that it reproduces all the emotions of our innermost being, but entirely without reality and remote from its pain...Music expresses only the quintessence of life and of its events, never these themselves.",
    attribution: "Oliver Sacks, Musicophilia: Tales of Music and the Brain",
    description: canvas("neurology", "silk embroidery"),
  },
  avolition: {
    size: "16 × 20 in",
    diagnosis: "Schizophrenia",
    quote:
      "This much I knew and know: I was making myself hideously uncomfortable by not narrowing my attention to details of life which were immediately important, and by refusing to believe what my neighbors believed.",
    attribution: "Kurt Vonnegut, Breakfast of Champions",
    description: giclee("Schizophrenia"),
    print: true,
  },
  creation: {
    size: "16 × 20 in",
    diagnosis: "Schizophrenia",
    quote:
      "Every act of perception, is to some degree an act of creation, and every act of memory is to some degree an act of imagination.",
    attribution: "Oliver Sacks, Musicophilia",
    description: canvas("Schizophrenia"),
  },
  perception: {
    size: "12 × 12 in",
    diagnosis: "Schizophrenia",
    quote:
      "If the doors of perception were cleansed, everything would appear to man as it is - infinite.",
    attribution: "William Blake",
    description: giclee("Schizophrenia"),
    print: true,
  },
  tether: {
    size: "8 × 8 in",
    diagnosis: "Substance Use Disorders",
    quote:
      "Now all the truth is out, Be secret and take defeat From any brazen throat, For how can you compete, Being honor bred, with one Who were it proved he lies Were neither shamed in his own Nor in his neighbors' eyes; Bred to a harder thing Than Triumph, turn away And like a laughing string Whereon mad fingers play Amid a place of stone, Be secret and exult, Because of all things known That is most difficult.",
    attribution: "William Butler Yeats, To a Friend Whose Work Has Come to Nothing",
    description: canvas("Substance Use Disorders"),
  },
  dissociation: {
    size: "20 × 20 in",
    diagnosis: "Depersonalization/Derealization Disorder",
    quote:
      "The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents... some day the piecing together of dissociated knowledge will open up such terrifying vistas of reality, and of our frightful position therein, that we shall either go mad from the revelation or flee from the light into the peace and safety of a new Dark Age.",
    attribution: "H.P. Lovecraft",
    description: canvas("Depersonalization/Derealization Disorder"),
  },
  induratize: {
    size: "18 × 24 in",
    diagnosis: "Adjustment Disorders",
    quote:
      "Let everything happen to you / Beauty and terror / Just keep going / No feeling is final.",
    attribution: "Rainer Maria Rilke",
    description: canvas("Adjustment Disorders"),
  },
  paradox: {
    size: "8 × 8 in",
    diagnosis: "Narcissistic Personality Disorder",
    quote:
      "That's the paradox: the only time most people feel alive is when they're suffering, when something overwhelms their ordinary, careful armour, and the naked child is flung out onto the world. That's why the things that are worst to undergo are best to remember. But when that child gets buried away under their adaptive and protective shells—he becomes one of the walking dead, a monster.",
    attribution: "Ted Hughes",
    description: canvas("Narcissistic Personality Disorder"),
  },
  peregrination: {
    size: "16 × 20 in",
    diagnosis: "Bi-Polar II Disorder",
    quote:
      "There is a pleasure in the pathless woods, There is a rapture on the lonely shore, There is society, where none intrudes, By the deep sea, and music in its roar: I love not man the less, but Nature more.",
    attribution: "Lord Byron",
    description: canvas("Bi-Polar II Disorder"),
  },
  gatsby: {
    size: "18 × 24 in",
    quote: "I wasn’t actually in love, but I felt a sort of tender curiosity.",
    attribution: "F. Scott Fitzgerald",
    description:
      "Giclée print. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the DSM diagnoses.",
    print: true,
  },
  drowning: {
    size: "11 × 14 in",
    quote:
      "Don't ask for guarantees. And don't look to be saved in any one thing, person, machine, or library. Do your own bit of saving, and if you drown, at least die knowing you were heading for shore.",
    attribution: "Ray Bradbury, Fahrenheit 451",
    description:
      "Giclée print. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the DSM diagnoses.",
    print: true,
  },
  restored: {
    size: "12 × 12 in",
    diagnosis: "Recovery",
    quote:
      "once you’ve been to hell and back, you don’t look behind you when the floor creaks and the sun is always up at midnight and things like the eyes of mice or an abandoned tire in a vacant lot can make you smile once you’ve been to hell and back.",
    attribution: "Charles Bukowski, Burning in Water, Drowning in Flame",
    description:
      "Canvas with hand-generated gilding and embroidery. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring recovery.",
  },
  rumination: {
    size: "11 × 14 in",
    diagnosis: "Major Depressive Disorder",
    quote:
      "If only she could be so oblivious again, to feel such love without knowing it, mistaking it for laughter.",
    attribution: "Markus Zusak, The Book Thief",
    description: giclee("Major Depressive Disorder"),
    print: true,
  },
  merle: {
    size: "16 × 20 in",
    quote:
      "It was miraculous. It was almost no trick at all, he saw, to turn vice into virtue and slander into truth, impotence into abstinence, arrogance into humility, plunder into philanthropy, thievery into honor, blasphemy into wisdom, brutality into patriotism, and sadism into justice. Anybody could do it; it required no brains at all. It merely required no character.",
    attribution: "Joseph Heller, Catch-22",
    description:
      "Canvas with hand-generated gilding and embroidery.",
  },
  tootsie: {
    size: "11 × 14 in",
    quote:
      "When he shall die, Take him and cut him out in little stars, And he will make the face of heaven so fine That all the world will be in love with night And pay no worship to the garish sun.",
    attribution: "William Shakespeare, Romeo and Juliet",
    description:
      "Giclée print. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the DSM diagnoses.",
    print: true,
  },
  funeral: {
    size: "16 × 20 in",
    diagnosis: "Prolonged grief disorder (PGD), also known as complicated grief (CG), traumatic grief (TG), or persistent complex bereavement disorder (PCBD)",
    quote:
      "There are ways of dying that don't end in funerals. Types of death you can't smell.",
    attribution: "Haruki Murakami (Blind Willow, Sleeping Woman)",
    description: giclee("Prolonged grief disorder (PGD), also known as complicated grief (CG), traumatic grief (TG), or persistent complex bereavement disorder (PCBD)"),
    print: true,
  },
  distraction: {
    size: "10 × 20 in",
    diagnosis: "Narcissistic Personality Disorder",
    quote:
      "My mother said the cure for thinking too much about yourself was helping somebody who was worse off than you.",
    attribution: "Sylvia Plath (The Bell Jar)",
    description: giclee("Narcissistic Personality Disorder"),
    print: true,
  },
  suture: {
    size: "16 × 20 in",
    diagnosis: "Borderline Personality Disorder",
    quote: "To be alive at all is to have scars.",
    attribution: "John Steinbeck (The Winter of Our Discontent)",
    description: canvas("Borderline Personality Disorder"),
  },
  hyenas: {
    size: "8 × 8 in",
    diagnosis: "Hwa-byung as described in the Outline for Cultural Formulation and Glossary of Culture-Bound Syndromes",
    quote:
      "They are committing the greatest indignity human beings can inflict on one another: telling people who have suffered excruciating pain and loss that their pain and loss were illusions. (v)",
    attribution: "Elie Wiesel (Night (The Night Trilogy, #1))",
    description: giclee("Hwa-byung as described in the Outline for Cultural Formulation and Glossary of Culture-Bound Syndromes"),
    print: true,
  },
  brave: {
    size: "8 × 8 in",
    diagnosis: "Ghost sickness as described in the Outline for Cultural Formulation and Glossary of Culture-Bound Syndromes",
    quote:
      "Instead of possibilities, I have realities in my past, not only the reality of work done and of love loved, but of sufferings bravely suffered. These sufferings are even the things of which I am most proud, though these are things which cannot inspire envy.",
    attribution: "Viktor E. Frankl (Man's Search for Meaning)",
    description: giclee("Ghost sickness as described in the Outline for Cultural Formulation and Glossary of Culture-Bound Syndromes"),
    print: true,
  },
  harvesting: {
    size: "16 × 20 in",
    diagnosis: "Dementia Due to Multiple Etiologies",
    quote:
      "In the past, nothing is irretrievably lost, but rather, on the contrary, everything is irrevocably stored and treasured. To be sure, people tend to see only the stubble fields of transitoriness but overlook and forget the full granaries of the past into which they have brought the harvest of their lives: the deeds done, the loves loved, and last but not least, the sufferings they have gone through with courage and dignity.",
    attribution: "Viktor E. Frankl (Man's Search for Meaning)",
    description: canvas("Dementia Due to Multiple Etiologies"),
  },
  memory: {
    size: "11 × 14 in",
    diagnosis: "Dementia Due to Pick’s Disease",
    quote:
      "For in the end, it is all about memory, its sources and its magnitude, and, of course, its consequences.",
    attribution: "Elie Wiesel (Night (The Night Trilogy, #1))",
    description: giclee("Dementia Due to Pick’s Disease"),
    print: true,
  },
  rat: {
    size: "8 × 8 in",
    diagnosis: "Tourette’s Disorder",
    quote: "Love in action is a harsh and dreadful thing compared to love in dreams.",
    attribution: "Fyodor Dostoevsky",
    description: giclee("Tourette’s Disorder"),
    print: true,
  },
  church: {
    size: "8 × 8 in",
    diagnosis: "Religious or spiritual problems (V62.89)",
    quote:
      "Much unhappiness has come into the world because of bewilderment and things left unsaid.",
    attribution: "Fyodor Dostoevsky",
    description:
      "Giclée print with imagery reflective of the DSM-IV V-code V62.89 for religious or spiritual problems. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the diagnosis.",
    print: true,
  },
  salt: {
    size: "20 × 20 in",
    diagnosis: "Latah as described in the Outline for Cultural Formulation and Glossary of Culture-Bound Syndromes",
    quote:
      "It is not sufficient just to remain calm in the event of catastrophe or emergency. When challenged by adversity, charge onwards with courage and jubilation. This is rising to a higher level. It is like the saying, “The more water there is, the higher the boat rises.",
    attribution: "Yamamoto Tsunetomo",
    description: giclee("Latah as described in the Outline for Cultural Formulation and Glossary of Culture-Bound Syndromes"),
    print: true,
  },
  dreams: {
    size: "20 × 20 in",
    diagnosis: "Delusional Disorder, Persecutory Type",
    quote: "I used to build dreams about you.",
    attribution: "F. Scott Fitzgerald",
    description: canvas("Delusional Disorder, Persecutory Type"),
  },
  ghoststories: {
    size: "20 × 20 in",
    diagnosis: "Ghost sickness as described in the Outline for Cultural Formulation and Glossary of Culture-Bound Syndromes",
    quote:
      "When we die, these are the stories still on our lips. The stories we’ll only tell strangers, someplace private in the padded cell of midnight. These important stories, we rehearse them for years in our head but never tell. These stories are ghosts, bringing people back from the dead. Just for a moment. For a visit. Every story is a ghost.",
    attribution: "Chuck Palahniuk (Haunted)",
    description: canvas("Ghost sickness as described in the Outline for Cultural Formulation and Glossary of Culture-Bound Syndromes"),
  },
  distortion: {
    size: "20 × 20 in",
    diagnosis: "Narcissistic Personality Disorder",
    quote: "Lie to me by the moonlight. Do a fabulous story.",
    attribution: "F. Scott Fitzgerald, Flappers and Philosophers",
    description: canvas("Narcissistic Personality Disorder"),
  },
  oceanbynight: {
    size: "20 × 20 in",
    quote:
      "An old alchemist gave the following consolation to one of his disciples: “No matter how isolated you are and how lonely you feel, if you do your work truly and conscientiously, unknown friends will come and seek you.",
    attribution: "Carl Jung",
    description:
      "Giclée print. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the DSM diagnoses.",
    print: true,
  },
  paroxysm: {
    size: "11 × 14 in",
    diagnosis: "Post Traumatic Stress Disorder (PTSD)",
    quote: "Right or wrong, it's very pleasant to break something from time to time.",
    attribution: "Fyodor Dostoevsky",
    description: giclee("Post Traumatic Stress Disorder (PTSD)"),
    print: true,
  },
  avoid: {
    size: "11 × 14 in",
    diagnosis: "Avoidant Personality Disorder",
    quote: "If you have the ability to love, love yourself first.",
    attribution: "Charles Bukowski",
    description: canvas("Avoidant Personality Disorder"),
  },
  ophelia: {
    size: "16 × 20 in",
    diagnosis: "Narcissistic Personality Disorder",
    quote: "Be patient, Ophelia. Love, / Hamlet",
    attribution: "Kurt Vonnegut Jr.",
    description: canvas("Narcissistic Personality Disorder"),
  },
  rue: {
    size: "16 × 20 in",
    diagnosis: "Confabulation",
    quote: "Everything was beautiful and nothing hurt.",
    attribution: "Kurt Vonnegut Jr.",
    description:
      "Canvas with hand-generated gilding and embroidery. Imagery reflective of Confabulation, a neuropsychiatric disorder wherein a patient generates a false memory without the intention of deceit. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the diagnosis.",
  },
  dissimulation: {
    size: "8 × 8 in",
    diagnosis: "Adjustment Disorders",
    quote: "15. In war, practice dissimulation, and you will succeed.",
    attribution: "Sun Tzu, The Art of War",
    description: giclee("Adjustment Disorders"),
    print: true,
  },
  absence: {
    size: "8 × 8 in",
    diagnosis: "Separation Anxiety",
    quote:
      "A man, after he has brushed off the dust and chips of his life, will have left only the hard, clean questions: Was it good or was it evil? Have I done well — or ill?",
    attribution: "John Steinbeck, East of Eden",
    description: canvas("Separation Anxiety"),
  },
  amber: {
    size: "11 × 14 in",
    diagnosis: "Dysthymic Disorder",
    quote:
      "Take it moment by moment, and you will find that we are all, as I’ve said before, bugs in amber.",
    attribution: "Kurt Vonnegut Jr.",
    description: canvas("Dysthymic Disorder"),
  },
  dolorifuge: {
    size: "20 × 20 in",
    diagnosis: "Borderline Personality Disorder",
    quote:
      "It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.",
    attribution: "Chuck Palahniuk, Diary",
    description: canvas("Borderline Personality Disorder"),
  },
  sophrosyne: {
    size: "20 × 20 in",
    diagnosis: "Schizoid Personality Disorder",
    quote:
      "If you're going to try, go all the way. Otherwise, don't even start. This could mean losing girlfriends, wives, relatives and maybe even your mind. It could mean not eating for three or four days. It could mean freezing on a park bench. It could mean jail. It could mean derision. It could mean mockery--isolation. Isolation is the gift. All the others are a test of your endurance, of how much you really want to do it. And, you'll do it, despite rejection and the worst odds. And it will be better than anything else you can imagine. If you're going to try, go all the way. There is no other feeling like that. You will be alone with the gods, and the nights will flame with fire. You will ride life straight to perfect laughter. It's the only good fight there is.",
    attribution: "Charles Bukowski, What Matters Most is How Well You Walk Through the Fire",
    description: canvas("Schizoid Personality Disorder"),
  },
  slander: {
    size: "12 × 12 in",
    diagnosis: "Narcissistic Personality Disorder",
    quote:
      "Rumour is a pipe Blown by surmises, jealousies, conjectures And of so easy and so plain a stop That the blunt monster with uncounted heads, The still-discordant wavering multitude, Can play upon it.",
    attribution: "William Shakespeare, Henry IV, Part Two",
    description: giclee("Narcissistic Personality Disorder"),
    print: true,
  },
  lostboy: {
    size: "12 × 12 in",
    diagnosis: "Narcissistic Personality Disorder (Peter Pan Syndrome emphasis; not formally recognized by the Centers for Disease Control or the DSM - 5)",
    quote:
      "A generous heart is always open, always ready to receive our going and coming. In the midst of such love we need never fear abandonment. This is the most precious gift true love offers - the experience of knowing we always belong.",
    attribution: "Bell Hooks, All About Love: New Visions",
    description: canvas("Narcissistic Personality Disorder (Peter Pan Syndrome emphasis; not formally recognized by the Centers for Disease Control or the DSM - 5)"),
  },
  tomorrow: {
    size: "12 × 12 in",
    diagnosis: "Depressive Personality Disorder",
    quote:
      "The past could always be annihilated. Regret, denial, or forgetfulness could do that. But the future was inevitable.",
    attribution: "Oscar Wilde, The Picture of Dorian Gray",
    description: canvas("Depressive Personality Disorder"),
  },
  resurrection: {
    size: "8 × 8 in",
    diagnosis: "Non-suicidal self-injury (NSSI)",
    quote:
      "If you care about yourself at all, come to your own aid while there’s still time.",
    attribution: "Marcus Aurelius, Meditations : A New Translation",
    description: giclee("Non-suicidal self-injury (NSSI)"),
    print: true,
  },
  grief: {
    size: "16 × 20 in",
    diagnosis: "Prolonged Grief Disorder",
    quote: "The grief, too, passes.",
    attribution: "Rainer Maria Rilke, Letters to a Young Poet",
    description: giclee("Prolonged Grief Disorder"),
    print: true,
  },
  canidae: {
    size: "16 × 20 in",
    diagnosis: "Canine behavior",
    quote: "…I was born to hustle roses down the avenues of the dead.",
    attribution: "Charles Bukowski",
    description:
      "Giclée prints. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring canine behavior.",
    print: true,
  },
  eden: {
    size: "12 × 12 in",
    diagnosis: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
    quote: "She refused to be bored chiefly because she wasn't boring.",
    attribution: "Zelda Fitzgerald, The Collected Writings",
    description: canvas("Attention-Deficit/Hyperactivity Disorder (ADHD)"),
  },
  vulnerable: {
    size: "8 × 8 in",
    diagnosis: "Narcissistic Personality Disorder",
    quote:
      "No man, for any considerable period, can wear one face to himself and another to the multitude, without finally getting bewildered as to which may be the true.",
    attribution: "Nathaniel Hawthorne, The Scarlet Letter",
    description: giclee("Narcissistic Personality Disorder"),
    print: true,
  },
  complex: {
    size: "12 × 12 in",
    diagnosis: "Complex Post Traumatic Stress Disorder (PTSD)",
    quote: "Memory believes before knowing remembers.",
    attribution: "William Faulkner, Light in August",
    description: giclee("Complex Post Traumatic Stress Disorder (PTSD)"),
    print: true,
  },
  lithium: {
    size: "16 × 20 in",
    diagnosis: "Bipolar Disorder (BD)",
    quote:
      "She continued weeping until the heat of her tear water, the sheer velocity of its flow, finally obscured the already vague circumstances of its origins.",
    attribution: "Tom Robbins, Jitterbug Perfume",
    description: canvas("Bipolar Disorder (BD)", "silk embroidery"),
  },
  command: {
    size: "16 × 20 in",
    diagnosis: "Intermittent explosive disorder (IED)",
    quote:
      "To learn to see- to accustom the eye to calmness, to patience, and to allow things to come up to it; to defer judgment, and to acquire the habit of approaching and grasping an individual case from all sides. This is the first preparatory schooling of intellectuality. One must not respond immediately to a stimulus; one must acquire a command of the obstructing and isolating instincts.",
    attribution: "Friedrich Nietzsche, Twilight of the Idols",
    description: canvas("Intermittent explosive disorder (IED)", "silk embroidery"),
  },
  neuralorchestra: {
    size: "12 × 12 in",
    diagnosis: "Bipolar I Disorder",
    quote:
      "The power of music and the plasticity of the brain go together very strikingly, especially in young people.",
    attribution: "Oliver Sacks",
    description: canvas("Bipolar I Disorder"),
  },
  composure: {
    size: "12 × 12 in",
    diagnosis: "Generalized Anxiety Disorder",
    quote: "Don't Panic.",
    attribution: "Douglas Adams, The Hitchhiker’s Guide to the Galaxy",
    description: canvas("Generalized Anxiety Disorder"),
  },
  identity: {
    size: "16 × 20 in",
    diagnosis: "Depersonalization or Derealization Disorder",
    quote: "I am out with lanterns, looking for myself.",
    attribution: "Emily Dickinson",
    description: canvas("Depersonalization or Derealization Disorder", "silk embroidery"),
  },
  duella: {
    size: "8 × 8 in",
    quote:
      "Have faith that in this love there is a strength and a blessing so large that you can travel as far as you wish without having to step outside it.",
    attribution: "Rainer Maria Rilke, Letters to a Young Poet",
    description:
      "Giclée prints. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the DSM diagnoses.",
    print: true,
  },
  monsters: {
    size: "16 × 20 in",
    diagnosis: "Post-Traumatic Stress Disorder",
    quote:
      "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.",
    attribution: "Friedrich Nietzsche",
    description:
      "Canvas with hand-generated gilding and embroidery. Imagery reflective of symptoms associated with PTSD. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the diagnosis.",
  },
};
