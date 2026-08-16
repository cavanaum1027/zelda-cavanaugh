import { productCopy } from "./product-copy";
import { localWorkImages } from "./work-images";

export type Work = {
  slug: string;
  title: string;
  price: number;
  image: string;
  images: string[];
  soldOut?: boolean;
  featured?: boolean;
  size?: string;
  diagnosis?: string;
  quote?: string;
  attribution?: string;
  description?: string;
  print?: boolean;
  tags: string[];
};

const sq = (id: string, file: string) =>
  `https://images.squarespace-cdn.com/content/v1/64e7d9b4dff28018353dc5f7/${id}/${file}`;

const catalog: Omit<Work, "images" | "tags">[] = [
  {
    slug: "beloved",
    title: "Beloved",
    price: 500,
    image: sq("1713641213033-B7471MQMAO70ZDF8GHC3", "1.jpg"),
    featured: true,
    size: "20 × 20 in",
    diagnosis: "Obsessive-Compulsive and Related Disorders",
    quote:
      "If thinking is your fate, revere this fate with divine honour and sacrifice to it the best, the most beloved",
    attribution: "Friedrich Nietzsche",
  },
  {
    slug: "nepenthe",
    title: "Nepenthe",
    price: 500,
    image: sq("1709179723546-LMDTG3RSASQQJD6PJPB1", "1.jpg"),
    featured: true,
    size: "16 × 20 in",
    diagnosis: "Schizophrenia",
    quote: "The question is not what you look at, but what you see.",
    attribution: "Henry David Thoreau",
  },
  {
    slug: "diffident",
    title: "Diffident",
    price: 400,
    image: sq("1717816725486-BEWYM7SDE4IPGNXNN89V", "IMG_1777.jpeg"),
    featured: true,
    size: "8 × 8 in",
    diagnosis: "Social Anxiety Disorder",
    quote:
      "…and, besides, what was left to say these days when the unspeakable was out there being spoken, exhausting all sympathy? Yet, feeling it, how difficult to keep the face's curtains closed..",
    attribution: "Stephen Dunn",
  },
  {
    slug: "toska",
    title: "Toska",
    price: 700,
    image: sq("906b2ea0-a205-43af-a359-bb4d940141d9", "IMG_4765.jpg"),
    featured: true,
  },
  {
    slug: "awen",
    title: "Awen",
    price: 300,
    image: sq("28923e07-fed6-4047-9904-4f28ea05f508", "IMG_4800+2.jpg"),
  },
  {
    slug: "ichverlust",
    title: "Ichverlust",
    price: 300,
    image: sq("5b7f98ec-7a2b-42bb-9878-3d9a43548ce4", "IMG_4736.jpg"),
    soldOut: true,
  },
  {
    slug: "medicine",
    title: "Medicine",
    price: 600,
    image: sq("55075eeb-d474-456b-ba92-e260cb219b0d", "IMG_4710.jpeg"),
  },
  {
    slug: "immarcescible",
    title: "Immarcescible",
    price: 400,
    image: sq("92ad28dc-d8ae-4f78-8a15-d9f5d3334b6e", "IMG_4697.jpg"),
    soldOut: true,
  },
  {
    slug: "blue-mnemosyne",
    title: "Blue Mnemosyne",
    price: 400,
    image: sq("c9fd5781-fdce-4cb0-929d-8e5e8145c4dc", "7D06A93D-70D2-408C-A182-E07B66CD02EC.jpg"),
  },
  {
    slug: "almost-steady",
    title: "Almost Steady",
    price: 400,
    image: sq("fdfde988-55a9-4f2f-a345-65628559ac55", "IMG_4216.jpg"),
  },
  {
    slug: "fairytalesandsong",
    title: "Fairy Tales & Song",
    price: 400,
    image: sq("52cb1e70-f89e-4547-aff3-0912681bee35", "IMG_4168.jpeg"),
  },
  {
    slug: "who",
    title: "Who",
    price: 400,
    image: sq("eab54b82-9804-4c37-8a65-10a2ec5ceb9b", "IMG_4164.jpeg"),
  },
  {
    slug: "vershnung",
    title: "Versöhnung",
    price: 400,
    image: sq("30e02596-2c44-409c-9c1e-9506b2bd7222", "IMG_4158.jpeg"),
  },
  {
    slug: "sophism",
    title: "Camouflage",
    price: 400,
    image: sq("32b95aa4-db1e-4640-88cf-f053b3155f71", "IMG_3917.jpg"),
  },
  {
    slug: "tree",
    title: "Tree",
    price: 400,
    image: sq("8a3502c5-9d1d-45da-b831-a27e5e1d572b", "IMG_3923.jpg"),
  },
  {
    slug: "happyesque",
    title: "Happy-esque",
    price: 400,
    image: sq("f6c2550f-3e64-420a-8800-aa8079b1b6cb", "IMG_3888.jpg"),
  },
  {
    slug: "acedia",
    title: "Acedia",
    price: 400,
    image: sq("1e55d4a6-eedf-4207-b40b-6c1da3eb8ab2", "IMG_3890.jpg"),
  },
  {
    slug: "moonbynight",
    title: "Moon by Night",
    price: 400,
    image: sq("6b0d52d5-0c88-47ce-aa25-e5feab2af0e1", "IMG_3829.jpg"),
  },
  {
    slug: "butterflies-3gkzc",
    title: "Dear",
    price: 250,
    image: sq("e3194a6d-015f-4e54-9f98-2b66362dfa8d", "IMG_3895.jpeg"),
    soldOut: true,
  },
  {
    slug: "butterflies",
    title: "Butter Flies",
    price: 250,
    image: sq("bba4fba1-5be9-4d17-a5db-ae4036c5ce12", "IMG_3868.jpg"),
  },
  {
    slug: "yellow",
    title: "Yellow",
    price: 250,
    image: sq("2640def0-b44d-4b01-94e5-9422200bfee4", "IMG_3863.jpg"),
  },
  {
    slug: "stumble",
    title: "Stumble",
    price: 250,
    image: sq("6654a547-877f-42a6-a0ee-5d136f1c9296", "IMG_3874.jpeg"),
  },
  {
    slug: "masked",
    title: "Masked",
    price: 250,
    image: sq("a33b2dca-22c6-45f9-895b-4894a2ffa9a9", "IMG_3843+2.jpg"),
  },
  {
    slug: "friction",
    title: "Friction",
    price: 250,
    image: sq("6ed7de8f-0e66-4cbf-9f71-4b20459e7936", "IMG_3839.jpg"),
  },
  {
    slug: "brooding",
    title: "Brooding",
    price: 250,
    image: sq("b9e6feef-06df-4beb-9d47-e4d161b47328", "IMG_2998.jpeg"),
  },
  {
    slug: "bane",
    title: "Bane",
    price: 250,
    image: sq("9528d1e5-ad4e-44d9-9dc3-906a44b0745a", "IMG_2993.jpg"),
  },
  {
    slug: "feathers",
    title: "Feathers",
    price: 250,
    image: sq("10a20387-5f4a-4d7c-b590-72ef4e945463", "IMG_2987.jpg"),
  },
  {
    slug: "reconcile",
    title: "Reconcile",
    price: 600,
    image: sq("abbf52e6-23ca-4c05-a667-02e115aa4655", "IMG_2976+3.jpg"),
  },
  {
    slug: "pendant",
    title: "Pendant",
    price: 100,
    image: sq("df8ced53-cd0e-471c-aba5-db852d433f3b", "IMG_2755.jpg"),
    soldOut: true,
  },
  {
    slug: "change",
    title: "Change",
    price: 400,
    image: sq("d70cdc0c-e75c-43bf-826a-e0c1726a9948", "IMG_2743.jpg"),
  },
  {
    slug: "engulf",
    title: "Engulf",
    price: 600,
    image: sq("a109ba1b-dda3-4692-9458-13a57d407464", "IMG_2725.jpg"),
  },
  {
    slug: "cyclical",
    title: "Cyclical",
    price: 500,
    image: sq("826a9ad9-4415-4e38-b8ae-a80eea163312", "IMG_2714.jpg"),
    soldOut: true,
  },
  {
    slug: "scales",
    title: "Scales",
    price: 400,
    image: sq("a832cc77-99b7-4919-98fd-addf1c559e66", "IMG_2721.jpg"),
  },
  {
    slug: "ketosis",
    title: "Ketosis",
    price: 300,
    image: sq("04e64a34-6bf0-4b63-94d8-b244b63b2102", "IMG_2587.jpg"),
  },
  {
    slug: "pique",
    title: "Pique",
    price: 100,
    image: sq("9b92a0b3-9e4b-4158-94fe-789b5dad27b6", "IMG_2579.jpg"),
    soldOut: true,
  },
  {
    slug: "pendulum",
    title: "Pendulum",
    price: 400,
    image: sq("9173983d-cc6f-4f6e-9a1e-aebb8970fff8", "5.jpg"),
  },
  {
    slug: "souvenir",
    title: "Souvenir",
    price: 600,
    image: sq("fd05ddc0-a9a2-4ed3-b5f9-be84639a553a", "IMG_2288.jpg"),
  },
  {
    slug: "self-actualization",
    title: "Self Actualization",
    price: 375,
    image: sq("7c48f003-aa93-4867-a974-7f213e3f5956", "IMG_2235.jpg"),
  },
  {
    slug: "impression",
    title: "Impression",
    price: 300,
    image: sq("86227c18-5622-4ee0-a467-87a7d3ffc8a0", "IMG_2224.jpg"),
  },
  {
    slug: "barely",
    title: "Barely",
    price: 375,
    image: sq("eaf8a76d-b403-4a3d-b477-ae1f168bb99d", "IMG_2215.jpg"),
  },
  {
    slug: "my-compass-is-broken",
    title: "My Compass is Broken",
    price: 600,
    image: sq("eb7669c6-852e-47e8-b084-69467fc3ccff", "IMG_2199.jpg"),
  },
  {
    slug: "trajectory",
    title: "Trajectory",
    price: 450,
    image: sq("2705412f-831a-4660-9e1e-e3b2c79553c7", "IMG_2142.jpg"),
  },
  {
    slug: "anomia",
    title: "Anomia",
    price: 300,
    image: sq("ddbbe006-6d79-4eaa-a698-65a586df415b", "IMG_2122.jpg"),
  },
  {
    slug: "hecate",
    title: "Hecate",
    price: 100,
    image: sq("0bf65d48-59f0-4ab4-9043-b5f799dd7950", "IMG_2110.jpg"),
    soldOut: true,
  },
  {
    slug: "helen",
    title: "Helen",
    price: 500,
    image: sq("1720243284881-95YXOXOW9V7M0D4GJWCH", "IMG_1963.jpg"),
  },
  {
    slug: "volatile",
    title: "Volatile",
    price: 250,
    image: sq("1719776799979-1JQA7WODN3R04LZ9U98J", "IMG_1903.jpg"),
  },
  {
    slug: "flightofideas",
    title: "Flight of Ideas",
    price: 150,
    image: sq("1717834989873-HN8SWUCAWYY3OJYYH8DW", "IMG_1798.jpg"),
    soldOut: true,
  },
  {
    slug: "mercurial",
    title: "Mercurial",
    price: 250,
    image: sq("1717827212480-RS77FM3ZROEIKJJZ78TC", "IMG_1788.jpg"),
  },
  {
    slug: "forgive-us",
    title: "& Forgive Us",
    price: 250,
    image: sq("1717799238154-DZMTIDAUVHFG12742LUZ", "IMG_1768.jpeg"),
  },
  {
    slug: "thoughts",
    title: "Thoughts",
    price: 150,
    image: sq("1717722240945-GFFIBP6Z71NZJIXT648J", "IMG_1761.jpeg"),
    soldOut: true,
  },
  {
    slug: "derailmentassociative-looseness",
    title: "Derailment",
    price: 250,
    image: sq("1716097663870-GKS01N98EDCR2133TLNW", "9D9D40DB-8134-4040-AE1A-81CA77D72BD5.jpg"),
  },
  {
    slug: "symphonyofneuralpathways",
    title: "Symphony of Neural Pathways",
    price: 400,
    image: sq("1716161179124-5K631VR9SC082YJ7NC1Z", "1302EB18-D5F4-44E2-9DE7-DCBBEC9F425F_1_201_a.jpg"),
  },
  {
    slug: "avolition",
    title: "Avolition",
    price: 100,
    image: sq("1716085260336-76U5J7LF2JUEAWRRCJBE", "D39B4615-1DB6-42BB-BB9A-6A52A4C12DF9.jpg"),
    soldOut: true,
  },
  {
    slug: "creation",
    title: "Creation",
    price: 500,
    image: sq("1714529476185-R0BFK18JBC4S57YKJYMJ", "Full-pic.jpg"),
    featured: true,
  },
  {
    slug: "perception",
    title: "Perception",
    price: 100,
    image: sq("1713678417698-9Q8NKD2DKKOJ3SRSAMBW", "1.jpg"),
    soldOut: true,
  },
  {
    slug: "tether",
    title: "Tether",
    price: 250,
    image: sq("1719775484053-6PRUKYM7QNXJZUAHCRLA", "IMG_1912.jpg"),
  },
  {
    slug: "dissociation",
    title: "Dissociation",
    price: 550,
    image: sq("1712433345291-AMQEYNJCTCI1VRVVKCK4", "1.jpg"),
  },
  {
    slug: "induratize",
    title: "Induratize",
    price: 550,
    image: sq("1711332248393-VUEH9J6H7YGV4A8Y5V8E", "5.jpg"),
  },
  {
    slug: "paradox",
    title: "Paradox",
    price: 250,
    image: sq("1710090836866-S2BV0KFM24ORIPU9HHW0", "2.jpg"),
  },
  {
    slug: "peregrination",
    title: "Peregrination",
    price: 550,
    image: sq("1710038701531-UGOTNBM7YYJD6F0O1BG8", "1.jpg"),
  },
  {
    slug: "gatsby",
    title: "Gatsby",
    price: 150,
    image: sq("1694746684652-S773KRJTA88MGJBXHUE2", "IMG_7846.jpg"),
    soldOut: true,
  },
  {
    slug: "drowning",
    title: "Drowning",
    price: 150,
    image: sq("1694617377878-RRT2LASC4HS8DGG14A7P", "IMG_7851.jpg"),
    soldOut: true,
  },
  {
    slug: "restored",
    title: "Restored",
    price: 150,
    image: sq("1720413834599-HNPGN73HQRR8U41RPZ51", "IMG_1992.jpg"),
  },
  {
    slug: "rumination",
    title: "Rumination",
    price: 100,
    image: sq("1694742088778-W8GDPZT9YV02GGECTAIR", "IMG_7869.jpg"),
    soldOut: true,
  },
  {
    slug: "merle",
    title: "Merle",
    price: 500,
    image: sq("1694891540338-P30F0K1VSSACJ312VUG6", "IMG_7912.png"),
  },
  {
    slug: "tootsie",
    title: "Tootsie",
    price: 150,
    image: sq("1694982093254-VRF7E7DL5DUYETAAMPLH", "IMG_7918.png"),
    soldOut: true,
  },
  {
    slug: "funeral",
    title: "Funeral",
    price: 150,
    image: sq("1695268556212-89A8IQ0FTA5C6GQOEI3V", "Untitled-1.png"),
    soldOut: true,
  },
  {
    slug: "distraction",
    title: "Distraction",
    price: 150,
    image: sq("1695612302813-FAOA2IZ9DSV57VCEW22A", "IMG_8060.png"),
    soldOut: true,
  },
  {
    slug: "suture",
    title: "Suture",
    price: 300,
    image: sq("1696578956727-75771ZMOX775FRDOGUNH", "IMG_8194.png"),
  },
  {
    slug: "hyenas",
    title: "Hyenas",
    price: 150,
    image: sq("1696734494455-L8T9UDSD7ZZEDR2F47GJ", "IMG_8238.png"),
    soldOut: true,
  },
  {
    slug: "brave",
    title: "Brave",
    price: 150,
    image: sq("1696741538303-N7Q7T8VT6V5TQY56GSMM", "IMG_8248.png"),
    soldOut: true,
  },
  {
    slug: "harvesting",
    title: "Harvesting",
    price: 600,
    image: sq("1696803169017-QF0VZJPU1ZOYIWHGCTG9", "full+pic.png"),
  },
  {
    slug: "memory",
    title: "Memory",
    price: 150,
    image: sq("1696828953024-U9GXE8JYPTNJV6CLK990", "IMG_8274.png"),
    soldOut: true,
  },
  {
    slug: "rat",
    title: "Rat",
    price: 150,
    image: sq("1702425509287-8UR1IHHXLQZ147TWNO3F", "IMG_0072.png"),
    soldOut: true,
  },
  {
    slug: "church",
    title: "Church",
    price: 100,
    image: sq("1702425656807-LO46PZH62SCD51E21PZQ", "IMG_0069.png"),
    soldOut: true,
  },
  {
    slug: "salt",
    title: "Salt",
    price: 150,
    image: sq("1702538368323-D0IMI65KOQ56WI4RW0TC", "IMG_0114.png"),
    soldOut: true,
  },
  {
    slug: "dreams",
    title: "Dreams",
    price: 600,
    image: sq("1706320647240-SP75WF4M11U802P8O5TG", "dreams-1.jpg"),
  },
  {
    slug: "ghoststories",
    title: "Ghost Stories",
    price: 600,
    image: sq("1706320958532-PO5D5392KXCI4GZVY70I", "ghost-stories-1.jpg"),
  },
  {
    slug: "distortion",
    title: "Distortion",
    price: 600,
    image: sq("1706328408194-DJNSTDW74S8OAPWWO4ZK", "despair-1.jpg"),
  },
  {
    slug: "oceanbynight",
    title: "Ocean by Night",
    price: 100,
    image: sq("1707268372355-Z7RBBKZ0ZJ8G8RR98OU7", "Red.jpg"),
    soldOut: true,
  },
  {
    slug: "paroxysm",
    title: "Paroxysm",
    price: 100,
    image: sq("1707598995487-CCQ2P0TX6MMAX90B2IGV", "paroxysm-4.jpg"),
    soldOut: true,
  },
  {
    slug: "avoid",
    title: "Avoid",
    price: 300,
    image: sq("1707603981017-3WADAUG3AX61JZN63NLI", "1.jpg"),
  },
  {
    slug: "ophelia",
    title: "Ophelia",
    price: 550,
    image: sq("1707699644818-0YHGQB2M1SR74KFBKGV9", "Ophelia-full-image.jpg"),
    featured: true,
  },
  {
    slug: "rue",
    title: "Rue",
    price: 500,
    image: sq("1707799577702-VBMCGOIM3Y27C9QDH9HJ", "rue-8.jpg"),
  },
  {
    slug: "dissimulation",
    title: "Dissimulation",
    price: 100,
    image: sq("1708057045057-C5G35VVE7U5M86ZLVWTE", "dissimulation-1.jpg"),
    soldOut: true,
  },
  {
    slug: "absence",
    title: "Absence",
    price: 250,
    image: sq("1708196554130-UJF63G51IOYZADKDSQ3T", "absence-3.jpg"),
  },
  {
    slug: "amber",
    title: "Amber",
    price: 250,
    image: sq("1708199927340-OUEROOOKC6PR9NGOJRKD", "amber5.jpg"),
  },
  {
    slug: "dolorifuge",
    title: "Dolorifuge",
    price: 500,
    image: sq("1709263528928-Q5PE6RE7HIDXIX9LXGSC", "1.jpg"),
  },
  {
    slug: "sophrosyne",
    title: "Sophrosyne",
    price: 550,
    image: sq("1712432750845-5BDT9VV3LRGPHTHDP2VB", "Induratize.jpg"),
  },
  {
    slug: "slander",
    title: "Slander",
    price: 100,
    image: sq("1712375815110-H0DQNE1WY57MQ05GXIK9", "1.jpg"),
    soldOut: true,
  },
  {
    slug: "lostboy",
    title: "Lost Boy",
    price: 250,
    image: sq("1713035138382-952AFNRKL6WWC4OZU1QR", "4.jpg"),
  },
  {
    slug: "tomorrow",
    title: "Tomorrow",
    price: 250,
    image: sq("1713042633140-IP5C229CFSX4RC5UHUYO", "1.jpg"),
  },
  {
    slug: "resurrection",
    title: "Resurrection",
    price: 150,
    image: sq("1714244858673-7064R0V684FRHLWFQKTI", "1.jpg"),
    soldOut: true,
  },
  {
    slug: "grief",
    title: "Grief",
    price: 150,
    image: sq("1714350419035-HLWK7ESN3CP8GKHF1980", "1.jpg"),
    soldOut: true,
  },
  {
    slug: "canidae",
    title: "Canidae",
    price: 150,
    image: sq("1715830944574-1F2WQSDC9B7A87EK19RQ", "IMG_1539.png"),
    soldOut: true,
  },
  {
    slug: "eden",
    title: "Eden",
    price: 250,
    image: sq("1716014119955-E7W4GAA7SFVKI3LIVNTB", "IMG_1554.png"),
  },
  {
    slug: "vulnerable",
    title: "Vulnerable",
    price: 100,
    image: sq("1716086408016-W32S00EEU4L7NW3OOR0I", "3D6B52BE-F861-4D7C-BB1D-DE054717630D_1_201_a.jpg"),
    soldOut: true,
  },
  {
    slug: "complex",
    title: "Complex",
    price: 200,
    image: sq("1716144901078-HUAAMD2G44F4GI2YJYQZ", "886DF764-BE84-4EEF-92EF-FA7EED9E0AFC_1_201_a.jpg"),
    soldOut: true,
  },
  {
    slug: "lithium",
    title: "Lithium",
    price: 400,
    image: sq("1716502990838-4C6SC1B6E0R3JU41F0AK", "IMG_1642.jpeg"),
  },
  {
    slug: "command",
    title: "Command",
    price: 400,
    image: sq("1716776990911-EDK5WKGOCEBNQLU70MT7", "IMG_1685.jpeg"),
  },
  {
    slug: "neuralorchestra",
    title: "Neural Orchestra",
    price: 400,
    image: sq("1716164820025-433BSDTN02RK57L9SJI8", "IMG_1605.jpeg"),
  },
  {
    slug: "composure",
    title: "Composure",
    price: 250,
    image: sq("1713126208197-STE0OWFJMZ1D88YVXRS3", "1.jpg"),
  },
  {
    slug: "identity",
    title: "Identity",
    price: 400,
    image: sq("1716351776801-00WWL9EHDFA7F49T4S9W", "6A89E595-23DF-43FE-BA2A-CFC0C4311418_1_201_a.jpg"),
  },
  {
    slug: "duella",
    title: "Duella",
    price: 100,
    image: sq("1714348891038-SWVGU4MWP3RS4ZRLBHFP", "1.jpg"),
    soldOut: true,
  },
  {
    slug: "monsters",
    title: "Monsters",
    price: 250,
    image: sq("1697173556529-3126N4G3YEX96KGTKWMR", "IMG_8340.png"),
  },
];

function parseDiagnosis(text?: string) {
  if (!text) return;
  const match = text.match(/diagnostic criteria (?:for|involving) ([^.]+)/i);
  return match?.[1]?.replace(/[.”"]+$/, "").trim();
}

function diagnosisTags(diagnosis?: string) {
  if (!diagnosis) return [];
  const tags = [diagnosis];
  const n = diagnosis.toLowerCase();
  if (/bipolar|bi-polar|manic episode/.test(n)) tags.push("Bipolar");
  if (/schizophren/.test(n)) tags.push("Schizophrenia");
  if (/anxiety/.test(n)) tags.push("Anxiety");
  if (/obsessive-compulsive|ocpd/.test(n)) tags.push("Obsessive-Compulsive");
  if (/adjustment/.test(n)) tags.push("Adjustment Disorders");
  if (/bereavement|grief|ghost sickness/.test(n)) tags.push("Grief");
  if (/dysthymic|depress/.test(n)) tags.push("Depression");
  if (/^recovery$/i.test(n)) return [];
  return [...new Set(tags)];
}

function enrich(work: Omit<Work, "images" | "tags">): Work {
  const copy = productCopy[work.slug];
  const local = localWorkImages[work.slug];
  const images = local?.length ? local : [work.image];
  const merged = { ...work, ...copy };
  const diagnosis = merged.diagnosis ?? parseDiagnosis(merged.description);
  return {
    ...merged,
    diagnosis,
    image: images[0] ?? work.image,
    images,
    tags: diagnosisTags(diagnosis),
  };
}

export const works: Work[] = catalog.map(enrich);

export const featuredWorks = works.filter((work) => work.featured);

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}

export function similarWorks(work: Work, limit = 4) {
  if (work.tags.length === 0) return [];
  return works
    .filter((item) => item.slug !== work.slug)
    .map((item) => {
      const overlap = item.tags.filter((tag) => work.tags.includes(tag));
      const exact = Boolean(work.diagnosis && item.diagnosis === work.diagnosis);
      return { item, overlap: overlap.length, exact };
    })
    .filter((entry) => entry.overlap > 0)
    .sort((a, b) => Number(b.exact) - Number(a.exact) || b.overlap - a.overlap)
    .slice(0, limit)
    .map((entry) => entry.item);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);
}
