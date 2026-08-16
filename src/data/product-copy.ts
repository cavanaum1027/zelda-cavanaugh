/** Unique original product copy, formatted to the shop description pattern. */

export const gicleeNote =
  "Giclée prints are considered one of the highest-quality fine art reproductions available today. Renowned for their exceptional clarity and longevity, they are frequently used for gallery and museum exhibitions, limited edition collections, private archives, and more. Our Giclée prints are provided as-is, focusing solely on the artwork itself. They do not include borders, framing, or additional add-ons, allowing you the freedom to customize the presentation to suit your style. In short, this is not a canvas — this is a print of the canvas as the original has been sold.";

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
  dolorifuge: {
    size: "20 × 20 in",
    diagnosis: "Borderline Personality Disorder",
    quote:
      "It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.",
    attribution: "Chuck Palahniuk, Diary",
    description: canvas("Borderline Personality Disorder"),
  },
  cyclical: {
    size: "12 × 12 in",
    diagnosis: "Bipolar Disorder (BD)",
    quote:
      "You expected to be sad in the fall. Part of you died each year when the leaves fell from the trees and their branches were bare against the wind and the cold, wintery light. But you knew there would always be the spring, as you knew the river would flow again after it was frozen. When the cold rains kept on and killed the spring, it was as though a young person died for no reason.",
    attribution: "Ernest Hemingway, A Moveable Feast",
    description: canvas("Bipolar Disorder (BD)", "silk embroidery"),
  },
  composure: {
    size: "12 × 12 in",
    diagnosis: "Generalized Anxiety Disorder",
    quote: "Don't Panic.",
    attribution: "Douglas Adams, The Hitchhiker’s Guide to the Galaxy",
    description: canvas("Generalized Anxiety Disorder"),
  },
  peregrination: {
    size: "16 × 20 in",
    diagnosis: "Bi-Polar II Disorder",
    quote:
      "There is a pleasure in the pathless woods, There is a rapture on the lonely shore, There is society, where none intrudes, By the deep sea, and music in its roar: I love not man the less, but Nature more.",
    attribution: "Lord Byron",
    description: canvas("Bi-Polar II Disorder"),
  },
  induratize: {
    size: "18 × 24 in",
    diagnosis: "Adjustment Disorders",
    quote:
      "Let everything happen to you. Beauty and terror. Just keep going. No feeling is final.",
    attribution: "Rainer Maria Rilke",
    description: canvas("Adjustment Disorders"),
  },
  ghoststories: {
    size: "20 × 20 in",
    diagnosis: "Ghost sickness (culture-bound syndrome)",
    quote:
      "When we die, these are the stories still on our lips. The stories we’ll only tell strangers, someplace private in the padded cell of midnight. These important stories, we rehearse them for years in our head but never tell. These stories are ghosts, bringing people back from the dead. Just for a moment. For a visit. Every story is a ghost.",
    attribution: "Chuck Palahniuk, Haunted",
    description:
      "Canvas with hand-generated gilding and embroidery. Imagery reflective of the DSM-5 diagnostic criteria for ghost sickness as described in the Outline for Cultural Formulation and Glossary of Culture-Bound Syndromes. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the diagnosis.",
  },
  sophrosyne: {
    size: "20 × 20 in",
    diagnosis: "Schizoid Personality Disorder",
    quote:
      "If you're going to try, go all the way. Otherwise, don't even start. This could mean losing girlfriends, wives, relatives and maybe even your mind. It could mean not eating for three or four days. It could mean freezing on a park bench. It could mean jail. It could mean derision. It could mean mockery--isolation. Isolation is the gift. All the others are a test of your endurance, of how much you really want to do it. And, you'll do it, despite rejection and the worst odds. And it will be better than anything else you can imagine. If you're going to try, go all the way. There is no other feeling like that. You will be alone with the gods, and the nights will flame with fire. You will ride life straight to perfect laughter. It's the only good fight there is.",
    attribution: "Charles Bukowski",
    description: canvas("Schizoid Personality Disorder"),
  },
  derailmentassociative: {
    size: "12 × 12 in",
    diagnosis: "Schizophrenia",
    quote: "Awake, chaos: we have napped.",
    attribution: "E.E. Cummings, Complete Poems, 1913-1962",
    description: canvas("Schizophrenia"),
  },
  "derailmentassociative-looseness": {
    size: "12 × 12 in",
    diagnosis: "Schizophrenia",
    quote: "Awake, chaos: we have napped.",
    attribution: "E.E. Cummings, Complete Poems, 1913-1962",
    description: canvas("Schizophrenia"),
  },
  thoughts: {
    size: "8 × 8 in",
    diagnosis: "Negative self-referential processing (NSRP)",
    quote: "Life begins on the other side of despair.",
    attribution: "Jean-Paul Sartre",
    description:
      "Giclée print with imagery reflective of the DSM-5 diagnostic criteria involving negative self-referential processing (NSRP). Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the diagnosis.",
    print: true,
  },
  amber: {
    size: "11 × 14 in",
    diagnosis: "Dysthymic Disorder",
    quote:
      "Take it moment by moment, and you will find that we are all, as I’ve said before, bugs in amber.",
    attribution: "Kurt Vonnegut Jr.",
    description: canvas("Dysthymic Disorder"),
  },
  resurrection: {
    size: "8 × 8 in",
    diagnosis: "Non-suicidal self-injury (NSSI)",
    quote:
      "If you care about yourself at all, come to your own aid while there’s still time.",
    attribution: "Marcus Aurelius, Meditations : A New Translation",
    description: giclee("Non-suicidal self-injury (NSSI)", true),
    print: true,
  },
  "forgive-us": {
    size: "8 × 8 in",
    diagnosis: "Uncomplicated bereavement",
    quote:
      "Of which the first is love. The sad, unrepeatable fact that the loves we shouldn’t foster burrow faster and linger longer than sanctioned kinds can. Loves that thrive on absence, on lack of return, or worse, on harm, are unkillable, Father. They do not die in us. And you know how we’ve tried.",
    attribution: "Sinéad Morrissey",
    description: canvas("uncomplicated bereavement"),
  },
  dissimulation: {
    size: "8 × 8 in",
    diagnosis: "Adjustment Disorders",
    quote: "15. In war, practice dissimulation, and you will succeed.",
    attribution: "Sun Tzu, The Art of War",
    description: giclee("Adjustment Disorders", true),
    print: true,
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
  duella: {
    size: "8 × 8 in",
    quote:
      "Have faith that in this love there is a strength and a blessing so large that you can travel as far as you wish without having to step outside it.",
    attribution: "Rainer Maria Rilke, Letters to a Young Poet",
    description:
      "Giclée prints. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the DSM diagnoses.",
    print: true,
  },
  rat: {
    size: "8 × 8 in",
    diagnosis: "Tourette’s Disorder",
    quote:
      "Love in action is a harsh and dreadful thing compared to love in dreams.",
    attribution: "Fyodor Dostoevsky",
    description:
      "Giclée prints with imagery reflective of the DSM-5 diagnostic criteria for Tourette’s Disorder.",
    print: true,
  },
  hyenas: {
    size: "8 × 8 in",
    diagnosis: "Hwa-byung (culture-bound syndrome)",
    quote:
      "They are committing the greatest indignity human beings can inflict on one another: telling people who have suffered excruciating pain and loss that their pain and loss were illusions. (v)",
    attribution: "Elie Wiesel, Night",
    description:
      "Giclée print with imagery reflective of the DSM-5 diagnostic criteria for hwa-byung as described in the Outline for Cultural Formulation and Glossary of Culture-Bound Syndromes.",
    print: true,
  },
  church: {
    size: "8 × 8 in",
    diagnosis: "Religious or spiritual problems (V62.89)",
    quote:
      "Much unhappiness has come into the world because of bewilderment and things left unsaid.",
    attribution: "Fyodor Dostoevsky",
    description:
      "Giclée prints with imagery reflective of the DSM-IV and DSM-IV-R include a V-code, V62.89, for “religious or spiritual problems.”",
    print: true,
  },
  flightofideas: {
    size: "8 × 8 in",
    diagnosis: "Manic Episode",
    quote:
      "The gilded butterfly pursues / O'er hedge and ditch, through gaps and mews, / And after many a vain essay / To captivate the tempting prey, / Gives him at length the lucky pat, / And has him safe beneath his hat:",
    attribution: "William Cowper",
    description:
      "Giclée print with gold imagery reflective of the DSM-5 diagnostic criteria for Manic Episode. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring the diagnosis.",
    print: true,
  },
  pendant: {
    size: "12 × 12 in",
    diagnosis: "Obsessive-Compulsive Personality Disorder (OCPD)",
    quote: "And now that you don't have to be perfect, you can be good.",
    attribution: "John Steinbeck, East of Eden",
    description: giclee("Obsessive-Compulsive Personality Disorder (OCPD)"),
    print: true,
  },
  "my-compass-is-broken": {
    size: "18 × 24 in",
    diagnosis: "Recovery",
    quote: "How nice—to feel nothing, and still get full credit for being alive.",
    attribution: "Kurt Vonnegut, Slaughterhouse-Five",
    description:
      "Canvas with hand-generated gilding and embroidery. Gold detailing follows the Circle of Fifths — a tonal architecture mirroring recovery.",
  },
  monsters: {
    size: "16 × 20 in",
    description: "Printed painted canvas, embroidery, gold leaf pen.",
  },
};
