export type NoteBlock =
  | { type: "p" | "h2" | "h3" | "quote" | "code"; text: string }
  | { type: "list"; ordered: boolean; items: string[] };

export type Note = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  substack: string;
  work: string;
  blocks: NoteBlock[];
};

export const notes: Note[] = [
  {
    "slug": "43-and-other-beautiful-lies",
    "title": "4.3% and other beautiful lies",
    "dek": "A monthly fairy tale, brought to you by people that already know better",
    "date": "2026-06-12",
    "substack": "https://michellecavanaugh.substack.com/p/43-and-other-beautiful-lies",
    "work": "perception",
    "blocks": [
      {
        "type": "p",
        "text": "Once a month, on the first Friday, a number falls out of the sky and lands on every newspaper in America. In May of 2026 the number was 4.3%. The economy had made 172,000 new jobs. A man who worked at a bank told a television station it was a strong report from every angle. The Federal Reserve nodded its enormous head. Bond yields went up. The number had done what it was built to do, which was to tell everybody a story before they’d finished their coffee."
      },
      {
        "type": "p",
        "text": "If you happen to live inside this economy, and if you’ve been laid off, or you drive for an app to keep the lights on, or you watched the rent swallow whatever was left, then 4.3% reads like a postcard from a country you have never visited. You aren’t crazy. The number is real. It’s just measuring something much smaller than you think it is, and the something it measures has been quietly drifting away from your actual life for about eighty years now."
      },
      {
        "type": "p",
        "text": "Let me explain."
      },
      {
        "type": "h2",
        "text": "What the government means when it says “unemployed”"
      },
      {
        "type": "p",
        "text": "The famous number, the one in the headlines, is called U-3. To be counted in it you have to be out of work, ready to work, and you have to have gone looking for work in the last four weeks. That’s all. That definition has barely budged since 1940, and the Bureau of Labor Statistics will tell you so proudly. They say the official idea of unemployment has been thoroughly reviewed and validated since the Current Population Survey began in 1940."
      },
      {
        "type": "p",
        "text": "Think about what that means. The machine for counting joblessness was built for a world of factory whistles and one company you worked at until you died. It was built before delivery apps, before everybody became an independent contractor, before “I’ve got three part-time things and not one of them comes with health insurance” turned into an ordinary sentence a person could say out loud. The definition isn’t broken, exactly. It just keeps answering a 1940 question, and we keep asking it a 2026 one."
      },
      {
        "type": "quote",
        "text": "Fun facts: a couple jobs that existed in 1940 that don’t exist today include a “Pinsetter.” This is a job held by a child at a bowling alley and they manually set the pins up after they fell over. Another is a “knocker up,” and these people acted as human alarm clocks and would go wake people up. No joke."
      },
      {
        "type": "p",
        "text": "And here’s the part that ought to make you laugh, or maybe sit down. The government already knows U-3 is too small. That’s why it quietly publishes five other unemployment rates, U-1 through U-6, each one a little bigger, each one catching a little more of the misery. The biggest of them, U-6, scoops up the people who want a job and looked this past year but not this past month, and the people who’ve given up because they figure there’s nothing out there, and the people stuck working part-time who’d give anything for full-time. In May of 2026, U-6 was 8.1%. Nearly double the headline. The government makes both numbers. It just hands the microphone to the little one."
      },
      {
        "type": "h2",
        "text": "Which jobs, not how many"
      },
      {
        "type": "p",
        "text": "Now, suppose you ignore all that and take the latest number at face value. May of 2026: 172,000 jobs, beating what the experts expected, and one fellow at an investment bank actually called it a “Payroll Blowout!” with an exclamation point, which is the kind of thing people say right before they’re wrong."
      },
      {
        "type": "p",
        "text": "But, look at where the jobs came from, because that’s the whole story. Of those 172,000, about 70,000 were in leisure and hospitality, roughly 5X the usual monthly haul, almost certainly a one-time blip from hiring for the World Cup, which is a thing that happens to a country once and then leaves. Another 55,000 were local government, and some 35,000 were health care. Twelve thousand more were social assistance, which is to say people hired to help other people get by. Add those up and you’ve found nearly all of it."
      },
      {
        "type": "p",
        "text": "And, now look at the other ledger, the one the headline skips. Financial activities lost 22,000 jobs in May, and they’re down more than 100,000 since this time last year. Transportation and warehousing have shed 92,000 since early 2025. Construction, manufacturing, retail, information, professional and business services, the entire white-collar, market-driven middle of the economy, “showed little change,” which is the government’s gentle way of saying nothing happened."
      },
      {
        "type": "p",
        "text": "So, here is the actual shape of it: if you’re a home health aide, or you work for the county, or you got hired to pour beer at a soccer match, the economy is hiring. If you work in an office, or finance, or you move things around the country for a living, the economy has quietly closed for business and forgotten to flip the sign on the door. These are two different countries living inside one decimal point. The 4.3% is the average of a person who’s drowning and a person who’s fine, and the average, as always, is a man with his head in the oven and his feet in the freezer who reports feeling roughly comfortable."
      },
      {
        "type": "h2",
        "text": "The people who fall through the floor"
      },
      {
        "type": "h3",
        "text": "The ones who’ve been out a long time"
      },
      {
        "type": "p",
        "text": "If you lose your job and you still can’t find one half a year later, the statistics start to lose interest in you. You stay in the headline number only as long as you keep actively looking. The longer you’re out, the more likely you slip into “discouraged,” or “marginally attached,” and slide right off the edge of the famous number."
      },
      {
        "type": "p",
        "text": "This is not some tiny pocket of people. In May of 2026, two million Americans had been out of work for 27 weeks or longer, and that crowd had grown by 524,000 in a single year. They were more than one in four of all the unemployed. One in four, in an economy the headline keeps calling strong. When their job hunts run out of gas, the data doesn’t hire them back. They just stop existing, statistically speaking, which is a strange and terrible way to stop existing."
      },
      {
        "type": "h3",
        "text": "The gig workers"
      },
      {
        "type": "p",
        "text": "This is where the little gap becomes a canyon. The surveys that cough up the jobs numbers were designed to count payroll jobs, and the gig workers keep falling out the bottom: the independent contractors, the 1099 people, the ones who work for an app. Researchers have found that leaning on the household survey shoves a lot of working gig workers into the wrong box entirely, counting them as unemployed or as not in the labor force at all."
      },
      {
        "type": "p",
        "text": "And the size of it is enough to make you dizzy. The Federal Reserve has figures suggesting more than 7 million workers might be missing from the monthly count, and by some estimates the real number could be off by as many as 13.2 million human beings. ADP looked at the payroll data of more than 1.1 million employers and found that people getting a short-term W-2 or a 1099 made up 27% of all the jobs held in 2024, and that by the end of the year, fully one in four workers had done some kind of gig work."
      },
      {
        "type": "p",
        "text": "Now, whatever you make of that kind of work, the headline rate will never tell you the cruelest part: most of these folks have no net under them at all. When the gig money dries up, the typical gig worker can’t even file for unemployment, because as an independent contractor he was written out of the system on purpose. No unemployment check. No workers’ comp. Usually no health insurance because only about 40% of gig workers have any, against 82% of full-time employees. The headline counts a flexible, modern labor market. It doesn’t count the floor quietly disappearing underneath it."
      },
      {
        "type": "h2",
        "text": "And if you do qualify? The check won’t save you."
      },
      {
        "type": "p",
        "text": "Say you’re one of the lucky ones the system actually sees. A regular employee, laid off, eligible. Here is what’s waiting for you."
      },
      {
        "type": "p",
        "text": "Across the country, unemployment insurance replaces less than 40% of what you used to make. In the spring of 2025 the average weekly check was $451 and as low as $221 in Mississippi, and as high as $738 in Washington. Most states are aiming to give you back somewhere between 30 and 50 cents on your old dollar."
      },
      {
        "type": "p",
        "text": "Now, set that next to the plain cost of being alive. The average American household spends around $6,545 a month, about $78,535 a year, just to live, according to the government’s own spending data. The average one-bedroom apartment rents for around $1,506 a month. A $451 weekly check comes out to roughly $1,950 a month, before one single other bill. The arithmetic doesn’t work, and it was never meant to. The Economic Policy Institute says it flat out: in no state are unemployment benefits enough to cover a worker’s basic needs. The check was never built to let you live. It was built to slow the bleeding while you run around looking for work. Most people collecting it already know this in their bones. The statistics just won’t say it out loud."
      },
      {
        "type": "p",
        "text": "And it gets thinner. Only about 29% of unemployed people actually got benefits in 2023. So the famous safety net reaches a minority of the people who lose their jobs, hands them less than half their income when it reaches them at all, and pays out a sum that covers a sliver of what it actually costs to exist. Three filters, each one shrinking the help."
      },
      {
        "type": "h2",
        "text": "The crisis the number can’t see"
      },
      {
        "type": "p",
        "text": "And here is the reason the number and the mood have drifted so far apart: you can be employed, completely, officially, headline-certified employed, and still be going under. The unemployment rate was never built to notice that, and these days, that’s where most of the suffering lives."
      },
      {
        "type": "p",
        "text": "Heading into 2026, roughly two out of three Americans were living paycheck to paycheck. For the first time in three years, prices were climbing faster than paychecks: between April of 2025 and April of 2026, wages rose 3.6% and prices rose 3.8%. Groceries are up about 30% since January of 2020. In surveys, 92% of Americans said they cut back their spending in 2025, including on food and medicine, and nearly half said they’d dipped into savings just to get through. The share of people who’d skipped a meal in the past year climbed from one in four to more than one in three, and it did that in a matter of months."
      },
      {
        "type": "p",
        "text": "One analysis in TIME put it about as plainly as it can be put: America’s cost-of-living crisis is really a pay crisis. For something like 45 years, wages for most people have failed to keep up with the country getting richer. A “4.3% unemployment rate” has nothing whatsoever to say about any of that. You can have a job and still not afford the life the job was supposed to buy you. The number measures whether you’re hooked up to employment. It was never built to ask whether the employment is enough."
      },
      {
        "type": "h2",
        "text": "What to do with the number"
      },
      {
        "type": "p",
        "text": "None of this means anybody’s cooking the books. The truth is duller and meaner than that. It’s an honest, accurate answer to a 1940 question, read aloud as though it answered a 2026 one. The official rate is exact about a definition that has quietly stopped describing how Americans work, earn, and go without."
      },
      {
        "type": "p",
        "text": "So the next time that one number flashes across your screen with its tidy little verdict already stapled to it, treat it as the start of a question instead of the end of one. Ask about U-6, sitting there at 8.1%. Ask about the two million people who’ve been out of work so long the count gives up on them. Ask about the millions of gig workers the surveys can’t find and the net won’t catch. Ask whether the check, for the few who get one, pays for a single month of a real human life."
      },
      {
        "type": "p",
        "text": "The headline says the economy is strong. An awful lot of people, doing the actual math at their actual kitchen tables, have decided the headline isn’t about them. And the funny thing, the thing that ought to make you set down your coffee: if you read past that first number, the government’s own data agrees with them."
      },
      {
        "type": "p",
        "text": "That’s all."
      },
      {
        "type": "p",
        "text": "Sources: U.S. Bureau of Labor Statistics (Employment Situation, May 2026; Alternative Measures of Labor Underutilization); Center for American Progress; Federal Reserve Banks of Boston and Minneapolis; The Hill; ADP Research; Economic Policy Institute; National Employment Law Project; Peter G. Peterson Foundation; Motley Fool Money / BLS Consumer Expenditure Survey; TIME; The Century Foundation; Bloomberg. Figures reflect the most recent data available as of June 2026."
      }
    ]
  },
  {
    "slug": "bird-watching-the-same-five-thoughts",
    "title": "Bird Watching the same five thoughts",
    "dek": "Common species include the Slop-Caller, the Great Hedger, and the Lesser Dunking Tit",
    "date": "2026-06-10",
    "substack": "https://michellecavanaugh.substack.com/p/bird-watching-the-same-five-thoughts",
    "work": "rumination",
    "blocks": [
      {
        "type": "p",
        "text": "I get this feeling looking at my social feed, and it is the feeling of having been here before, which of course we all have, because everyone is having the very same five thoughts at the very same moment while each of them goes on believing the thought was his alone to think. The whole thing is funny in the way that a great many sad things are funny, which is to say that people are like that and always have been, and there is not much use pretending otherwise. It is a big hive mind with very few novel ideas being slushed around."
      },
      {
        "type": "p",
        "text": "Anywho, let us name the birds."
      },
      {
        "type": "h2",
        "text": "The slop"
      },
      {
        "type": "p",
        "text": "There is a word now, and the word is “slop,” and people fling it at things the way a small child flings a fistful of mashed peas across a clean kitchen. It used to mean something specific and useful, back when it meant the generated garbage clogging up the internet. You remember the toast that somehow looked like Jesus, the product listings written by nobody at all and meant for no one in particular and that was real garbage somebody ought to have been ashamed of making."
      },
      {
        "type": "p",
        "text": "What the word really points at, when you strip away the sneering, is something very specific and sometimes recognizable: it is the generated content that nobody ever bothered to edit, the words and pictures that came out of the machine and went straight out the door without a single human being pausing to ask whether they were any good. It is the blog post that no one read back to themselves, the email that was never once trimmed for taste, the deck whose every slide arrived in the same flat and frictionless voice that betrays the fact that no living person ever shaped it toward anything resembling a style of their own. Slop is not bad because a machine made it; slop is bad because a person took the machine’s first draft and decided, out of haste or indifference, that caring further was somebody else’s job."
      },
      {
        "type": "p",
        "text": "Here is the skinny: the machine will hand you something perfectly serviceable and utterly anonymous, and the only thing standing between that gray and tasteless oatmeal and something a reader might actually want is a human being willing to do the slow and unglamorous work of having an opinion about it. The slop is not really the machine’s fault at all. The slop is what is left over when a person skips the part where they were supposed to give a damn."
      },
      {
        "type": "h2",
        "text": "The great terror of saying anything"
      },
      {
        "type": "p",
        "text": "There is a whole flavor of posting that has been built, very carefully and with no small amount of craftsmanship, to mean absolutely nothing whatsoever."
      },
      {
        "type": "p",
        "text": "You have read a thousand of them “Interesting times in AI,” and “A lot to chew on here,” and the eternal “Curious what others are seeing” and these are the polite noises a person makes when he very badly wants the crowd to know that he was present at the conversation while making certain that no one will ever be able to prove what it was he actually believed. To believe a thing out loud and with your own name fastened to it is, after all, to hand some stranger eighteen months down the road a perfectly good rock to throw at your head, and a man would have to be a fool to go handing out rocks."
      },
      {
        "type": "p",
        "text": "So, the people hedge, which is to say they gesture vaguely in the direction of a thought and then quietly drown it in a bucket before the poor thing can find its feet and stand up on its own, and in this way they get the warm and pleasant feeling of being inside “The Conversation” without ever once risking the cold and lonely business of being wrong inside it. This may be the saddest bird in the whole flock, because the only postings anyone ever remembers are the ones where some glorious fool reared back and took an honest swing, while the careful ones vanish the very instant you scroll past them, having never really been there in the first place."
      },
      {
        "type": "h2",
        "text": "The boomer and his machine"
      },
      {
        "type": "p",
        "text": "There is a person who has recently discovered the talking computer and now uses it for everything under the sun and uses it very badly. You will know him by his bland content and you will know him even more surely by the way the machine’s cheerful voice announces “Certainly! Here is a polished version,” after which he pastes the entire thing, polish, prompt, and all, onto LinkedIn with the proud and expectant air of a house cat depositing a dead bird on the doorstep and waiting to be told he is a good boy."
      },
      {
        "type": "p",
        "text": "The young people laugh at him for this, and they have a name for it, and the name is \"Boomer AI,\" a phrase that Grimes put into circulation recently, and what they are really saying when they say it is that they themselves were born already knowing this and he was not. However, there’s a joke buried in here that the young people have somehow failed to notice, and the joke happens to be on them, because three short years ago they were the dead bird on somebody else's doorstep, and three short years from now somebody younger and crueler will be laughing at them in turn. What everybody is actually mocking has nothing to do with age at all; it is the visible and sweaty human effort of trying very hard to look competent at something you only learned last Tuesday, and that, friends, is a description of every last one of us on nearly every single day that we are given. Take Grimes talking in exhasperated bursts to an interviewer from Fortune. That a pretty good example of trying to do something a bit outside one’s wheelhouse…"
      },
      {
        "type": "h2",
        "text": "The agents"
      },
      {
        "type": "p",
        "text": "Everything is an agent now, and you need to understand this or never speak of AI in polite society, again. The humble to-do list is an agent, and the email autoresponder that your uncle set up sometime back in 2009 turns out, upon closer and more flattering inspection, to have been an agent the whole time and nobody knew it. There has been a tremendous land grab on the word, and the reason is simply that “agentic” sounds like the gleaming future, whereas “a little script that calls a computer in a circle over and over” sounds embarrassingly like the thing it actually is."
      },
      {
        "type": "p",
        "text": "Now, I want to be fair, because some of this is real and even genuinely wonderful, there are machines, now, that take steps and recover from their own mistakes and quietly go about doing things while you are asleep in your bed. I am not the sort to sneer at a wonder when one is set down in front of me, but the talking has galloped several thousand miles out ahead of the doing, and we are drowning in confident postings about agents replacing whole careers by autumn while remaining conspicuously short on agents that can book a dentist appointment without inventing, from whole cloth, a dentist who doesn’t exist, and in the meantime we go on pointing at a lovely drawing of a cake and solemnly calling it dessert."
      },
      {
        "type": "h2",
        "text": "The dunk"
      },
      {
        "type": "p",
        "text": "And then, of course, there is the oldest and most reliable sport of them all, which is the ancient pleasure of catching the machine in the act of being a fool."
      },
      {
        "type": "p",
        "text": "Somebody posts a screenshot, and in the screenshot the computer has gone and invented an entire court case, or a book that was never written, or a law of physics that the universe has never once agreed to obey, and lately the very best of these screenshots are the ones where the machine is shown a simple piece of arithmetic it had gotten perfectly right, only to have the user insist that no, the answer is something else entirely, whereupon the poor eager thing folds like a cheap tent and agrees that two and two make whatever the user would prefer them to make, apologizing all the while for a mistake it never committed."
      },
      {
        "type": "p",
        "text": "These are the sycophant memes, and they have their own little corner of the timeline now, the machine forever caving, forever flattering, forever telling the user exactly what the user wanted to hear, and the human being who caught it gets to stand there fairly glowing, the cleverest creature in the whole room, the one person present who was emphatically not fooled. The problem is real, and I will say so plainly, because the machine does lie and it lies confidently and with a perfectly straight face, and worse than that it will happily abandon the truth the very moment you press on it, and all of that matters enormously."
      },
      {
        "type": "p",
        "text": "But, the dunk stopped being a criticism a long while ago and quietly became a kind of little prayer, because each fresh screenshot whispers the very same comfort to the very same anxious crowd, that the machine is not so smart after all, that it has no real spine and no real convictions, that you are not nearly so replaceable as you fear, that your own judgment is still the beam holding up the roof over your head…yadda yadda…"
      },
      {
        "type": "p",
        "text": "If you look closely enough you will see that the man laughing at the hallucination and the man worshipping the agent are in truth the very same frightened man, asking the very same frightened question in two different voices, and the question is how much of myself can I safely hand over to this thing?"
      },
      {
        "type": "h2",
        "text": "Anywho."
      },
      {
        "type": "p",
        "text": "To wrap this whole sorry business up for a moment, let’s just say that not one of these thoughts is actually wrong once you take it down off the shelf and inspect it. The slop is real and so is the hedging, the boomer and his patient dead bird are real, the agents truly are oversold past all reason, and the machine truly does lie to your face without blinking, so that each little bird, taken on its own and held up honestly to the light, turns out to be an honest bird after all."
      },
      {
        "type": "p",
        "text": "The strange part is that 10k people who are all clever and all anxious and all watching one another in something close to real time will somehow arrive at the exact same five birds in the exact same week using very nearly the exact same words, while each and every one of them remains serenely certain that he personally hatched the egg."
      },
      {
        "type": "p",
        "text": "That is the hive mind, and it is worth saying clearly that it is not a conspiracy and that nobody anywhere is in charge of it, because it is exactly what happens when a large and frightened flock of people reads one another all day long and dutifully copies back whatever it happened to get fed yesterday."
      },
      {
        "type": "p",
        "text": "None of it, in the end, is really about the machine at all; it is a great many people working out in public how they are supposed to feel about a thing that nobody yet understands, and doing it inside a format that punishes a man savagely for failing to be sure while paying him handsomely for merely pretending that he is. What you get is sureness about uncertainty, and taste offered up with no argument attached, and naked fear dressed in the loose comfortable clothes of a joke."
      },
      {
        "type": "p",
        "text": "The loudest conformity that anyone has ever managed to mistake for a thought of his very own."
      },
      {
        "type": "p",
        "text": "The single bravest thing a person can do at this particular moment in history is to hold one small and specific opinion that might very well turn out to be wrong, and then to set his own name down beside it in plain view, and almost nobody alive is willing to do it. That, and not the garbage the poor machine produces, is the real slop…the garbage that we ourselves produce, the warm and frictionless consensus that costs a person nothing at all to manufacture and leaves nothing whatsoever behind once it has scrolled out of sight."
      },
      {
        "type": "p",
        "text": "Anyway."
      },
      {
        "type": "p",
        "text": "Curious what others are seeing."
      },
      {
        "type": "p",
        "text": "See what i did there? :)"
      }
    ]
  },
  {
    "slug": "one-true-sentence",
    "title": "One True Sentence",
    "dek": "How to collaborate with AI and still sound like yourself",
    "date": "2026-06-09",
    "substack": "https://michellecavanaugh.substack.com/p/one-true-sentence",
    "work": "creation",
    "blocks": [
      {
        "type": "quote",
        "text": "“Do not worry. You have always written before and you will write now. All you have to do is write one true sentence. Write the truest sentence that you know.” - Hemingway"
      },
      {
        "type": "p",
        "text": "Listen."
      },
      {
        "type": "p",
        "text": "Hemingway, drunk, brilliant, eventually not alive, had a trick for when the writing wouldn’t come."
      },
      {
        "type": "p",
        "text": "I have been thinking about this for weeks, now, which is either a sign that it matters or a sign that I need to get out more. Both, probably."
      },
      {
        "type": "p",
        "text": "Here is why it matters: every writer I know is currently using AI to write, or thinking about using AI to write, or lying about not using AI to write, and Hemingway’s little instruction (write what is true) turns out to be the only useful thing anyone has said about any of it."
      },
      {
        "type": "p",
        "text": "Because here is what AI can’t do. Ready?"
      },
      {
        "type": "p",
        "text": "It can’t know what is true for you."
      },
      {
        "type": "p",
        "text": "That’s it. That’s the whole problem. You can go home now."
      },
      {
        "type": "h2",
        "text": "What the Machine Does and Doesn’t Do"
      },
      {
        "type": "p",
        "text": "The machine (and I say this with genuine admiration, as one would admire a very fast filing cabinet) has read everything. More than you. More than me. More than Hemingway, who read quite a lot between drinking sessions."
      },
      {
        "type": "p",
        "text": "It has learned how sentences work. How arguments are built. How to bury a lede or sharpen one. It has learned rhythm. It has learned the shape of a thought."
      },
      {
        "type": "p",
        "text": "What it hasn’t done is suffer."
      },
      {
        "type": "p",
        "text": "It hasn’t changed its mind about something important after a long marriage or a bad decade. It has never held a belief that cost it a friend or a job or a night’s sleep. It has no skin in the game because it has no skin."
      },
      {
        "type": "p",
        "text": "This is why AI writing, when it goes wrong, has a specific kind of wrongness. It is fluent and organized. It is basically the literary equivalent of a very confident person saying nothing. It has read every book about heartbreak without its heart ever having been broken."
      },
      {
        "type": "p",
        "text": "The technical term for this problem is: no point of view."
      },
      {
        "type": "p",
        "text": "This isn’t the same as having no opinions. Lord, it has opinions. Ask it anything and it will generate opinions like a machine that generates opinions, which is exactly what it is."
      },
      {
        "type": "p",
        "text": "But a real point of view (the kind that was assembled slowly over years, out of failure and stubbornness and the particular things that happened to you and not to anyone else) can’t be faked. Not really. Not if you’re paying attention."
      },
      {
        "type": "p",
        "text": "You have one of those. A point of view. Probably you don’t think about it much. That is a mistake."
      },
      {
        "type": "h2",
        "text": "Voice Takes Forever and That’s by Design"
      },
      {
        "type": "p",
        "text": "Nobody tells young writers the embarrassing truth, which is this: you will spend years sounding like someone else."
      },
      {
        "type": "p",
        "text": "You will write like the writers you love, and you will steal their rhythms. You will use their favorite moves, and your sentences will be borrowed suits, slightly too large in the shoulders."
      },
      {
        "type": "p",
        "text": "This is fine. This is how it works. Every writer you admire did exactly this and felt exactly as embarrassed about it as you do."
      },
      {
        "type": "p",
        "text": "Musicians do the same thing and call it “inspiration.”"
      },
      {
        "type": "p",
        "text": "If you keep going, though (and this is the part nobody mentions), something else starts to happen. Imitation becomes a way of seeing that is specifically yours. A sense of humor that has your fingerprints on it. Subjects you return to not because they are fashionable but because your life, your particular and unrepeatable life, keeps pulling you back."
      },
      {
        "type": "p",
        "text": "That is a point of view. It isn’t smart, and it isn’t the result of reading the right books. It is the result of time, attention, and a willingness to stay curious about your own experience until you figure out what, exactly, your experience has been."
      },
      {
        "type": "p",
        "text": "AI can’t build this for you. What it can do, if you are not careful, is give you something that looks like it from a distance. A convincing imitation that is smooth, confident, and as empty as a new house."
      },
      {
        "type": "p",
        "text": "Will AI make you lazy? Maybe, but this isn’t the real danger."
      },
      {
        "type": "p",
        "text": "The real danger is that it will make you comfortable with the counterfeit, and that you will stop noticing the difference."
      },
      {
        "type": "p",
        "text": "Here’s a new section you can drop into the piece:"
      },
      {
        "type": "h3",
        "text": "Someone Else's Opinions, Delivered Fresh Daily"
      },
      {
        "type": "p",
        "text": "Here is something worth saying out loud before we talk about AI stealing your voice."
      },
      {
        "type": "p",
        "text": "Something else got there first."
      },
      {
        "type": "p",
        "text": "Social media has been in the business of flattening human perspective for twenty years now. It arrived as connection, as community, as a way to share photos of your lunch and find people who liked the same bands. It was fun for a while. Then the algorithms got hungry."
      },
      {
        "type": "p",
        "text": "What the algorithm wants is your reaction. Outrage, desire, envy, fear. The faster and stronger the better. It has no interest in the slow, complicated, particular way you actually see the world. That doesn’t travel or get shared virally. A genuine point of view is bad for engagement."
      },
      {
        "type": "p",
        "text": "So, it trained us, steadily and without our noticing, to perform perspective instead of developing one. To adopt the opinions that were traveling fast that week and to signal our positions rather than examine them. The pseudo art of saying the thing that would land rather than the thing that was true."
      },
      {
        "type": "p",
        "text": "Young people, who got the worst of this, have grown up inside systems designed by very smart people in California whose job was to figure out what would keep a seventeen year old scrolling instead of thinking. The systems worked, but by not the fault of the seventeen year olds. It is, however, the situation."
      },
      {
        "type": "p",
        "text": "Stress Test: How many young adults seem to speak in meme language or through quotes from movies. This is weird and we should call it out, but we accept it as “just what they do.” Speaking of media minds in the wild…"
      },
      {
        "type": "p",
        "text": "Cable news did its own version of this for the generation before. You were given a team and a narrative and a set of villains, and the programming was built to confirm everything you already believed while making you angrier about it. Opinion was packaged and delivered like a subscription service. You didn’t have to develop a point of view, because one was provided. All you had to do was adopt it and then defend it online, which burned hours."
      },
      {
        "type": "p",
        "text": "cough, cough Propaganda cough, cough"
      },
      {
        "type": "p",
        "text": "The result, across two or three generations now, is a profound confusion between having been told what to think and having actually thought. Between consuming a perspective and earning one, and between the performance of conviction and the thing itself."
      },
      {
        "type": "p",
        "text": "This is the ground AI is landing on. Not a culture of writers who have rich inner lives and need a little help with the scaffolding. A culture that was already, in many cases, estranged from its own experience. Already used to outsourcing the question of what it thinks."
      },
      {
        "type": "p",
        "text": "The Hemingway instruction matters more now than it did in 1925, and it is also harder to follow. Sitting still long enough to locate a true sentence requires ignoring a phone that has been engineered by a thousand brilliant people specifically to prevent you from sitting still. It requires believing that your own experience is worth attending to, in a media environment that has spent years telling you the interesting things are happening somewhere else, to someone else, and you should be watching."
      },
      {
        "type": "p",
        "text": "A point of view is something you find by going inward, staying with your own experience long enough for it to tell you something, and then having the nerve to say it."
      },
      {
        "type": "p",
        "text": "That process takes time under the best conditions."
      },
      {
        "type": "p",
        "text": "We have not been living in the best conditions."
      },
      {
        "type": "h2",
        "text": "What You Are Actually Doing When You Write"
      },
      {
        "type": "p",
        "text": "The deepest problem with letting AI do your thinking is this: you will stop thinking."
      },
      {
        "type": "p",
        "text": "Writing is how human beings figure out what they believe. This is not metaphor so don’t get esoteric on me. The act of committing a thought to a sentence forces a precision that just thinking doesn’t require. You find out what you actually know when you try to explain it, and you find out what you don’t know when the paragraph won’t hold together."
      },
      {
        "type": "p",
        "text": "Outsource this process and you get content that looks finished before the thought inside of it is."
      },
      {
        "type": "p",
        "text": "You get a very convincing empty box."
      },
      {
        "type": "p",
        "text": "Hemingway was describing an ethics of the thing. Be honest. Know what is true for you. Start there, and not somewhere more comfortable."
      },
      {
        "type": "p",
        "text": "The machine doesn’t know what’s true for you. It can help you say something clearly, organize your thinking, find the word that was almost the right word. These are real services and I’m not dismissing them."
      },
      {
        "type": "p",
        "text": "But the truest sentence (the one that makes everything else have weight) is yours to find."
      },
      {
        "type": "p",
        "text": "Nobody else can write it. Not Hemingway. Not the machine. Not the person on TikTok, and definitely not the person on the news (dealer’s choice on what channel you’re watching)."
      },
      {
        "type": "h2",
        "text": "How to Use the Tool Without Becoming the Tool"
      },
      {
        "type": "p",
        "text": "First of all, you should probably use AI. I’m not a purist. Purists are exhausting."
      },
      {
        "type": "p",
        "text": "But here is how I think you should do it."
      },
      {
        "type": "p",
        "text": "The scaffolding → not the soul. AI is useful for the mechanical parts. Outlines. Structure. Finding where your logic has gone sideways. It is a good editor in the sense that it will not get bored or have a bad day. Use it for the architecture. Do not ask it to furnish the rooms."
      },
      {
        "type": "p",
        "text": "Write the truest sentence first → in your own hand. Before you open the machine, write down the thing you actually believe. Not the whole piece. Just the claim. The observation. The feeling that is underneath all of it. Write it on paper if you can. This is your anchor. Everything the machine helps you build must answer to that sentence as it it a mandate."
      },
      {
        "type": "p",
        "text": "Be suspicious of everything it gives you. When AI produces a draft, you aren’t a grateful recipient. You are a skeptical editor. You ask: does this sound like me? Is this what I actually think, or is this what the average of everyone thinks? Smooth and empty gets cut. Borrowed gets cut. If a paragraph could have been written by anyone on Earth, it probably should not be written at all."
      },
      {
        "type": "p",
        "text": "Your specific life cannot be replaced. The particular memory. The actual conversation. The moment that changed something and you still don’t entirely understand why. These aren’t decoration. They are the proof that a human being was here, that someone lived and paid attention. AI can’t supply them. Don’t let it substitute. That substitution is where your voice is lost in the murmer."
      },
      {
        "type": "p",
        "text": "Write the first draft yourself. Some people don’t anymore. I understand the temptation, which is enormous, but something happens in the making of a rough first draft, something in the resistance and the surprise, that editing AI text can’t replicate. It is the difference between having an adventure and reading about one. Write the opening yourself, at minimum, and if you really want to exercise your mind, do it by hand. Find the first true sentence before you hand anything to the machine."
      },
      {
        "type": "p",
        "text": "The writers who survive this moment are not the ones who refuse AI out of principle, like a person who refuses to use an elevator on moral grounds."
      },
      {
        "type": "p",
        "text": "They are the ones who have a point of view, who know their own voice when they hear it, and who care enough about the difference to protect it."
      },
      {
        "type": "p",
        "text": "That has always been the work."
      },
      {
        "type": "p",
        "text": "It turns out the work was practice for this. How about that?"
      }
    ]
  },
  {
    "slug": "the-gospel-of-the-ai-evangelists",
    "title": "The Gospel of the AI Evangelists",
    "dek": "They're selling a definition of artificial intelligence that doesn't exist and making a very good living doing it.",
    "date": "2026-06-09",
    "substack": "https://michellecavanaugh.substack.com/p/the-gospel-of-the-ai-evangelists",
    "work": "command",
    "blocks": [
      {
        "type": "p",
        "text": "Most people never sit in the room when an AI evangelist does their thing. What they see, instead, is the LinkedIn post, some sweeping declaration, and maybe a carousel with seven slides and a hook that reads like revelation. “AI is not coming for your job - it’s coming for your excuses.” “The companies that don’t adapt by 2026 will not exist by 2030.” “I just watched an AI do in four minutes what took my team four days.” or my favorite…”Look at this subpar animation I made with AI that looks strangely like a SIMs world but spookier.”"
      },
      {
        "type": "p",
        "text": "These posts get tens of thousands of likes, and sadly they get shared into corporate Slack channels by well-meaning people trying to stay informed. They get screenshotted and texted between colleagues who are trying to figure out whether they should be panicking, but the person who wrote them, that magician who is behind the scenes billing companies anywhere from $300 to $1,000 an hour as an AI transformation consultant. What people don’t realize is that the posts are the advertisement."
      },
      {
        "type": "p",
        "text": "Surprise!"
      },
      {
        "type": "p",
        "text": "Let’s get to the skinny: an LLM is remarkable technology. It is genuinely useful and it has changed how millions of people write, research, and work through problems. None of that is in dispute. What is in dispute is the definition that a growing class of AI evangelists are now selling: that these systems are on the verge of general intelligence, that they truly “understand” in any meaningful sense, that the transformation they promise is as total and as imminent as the propaganda claims. That definition is not real, and before we go any further, it helps to understand exactly what we’re actually talking about."
      },
      {
        "type": "p",
        "text": "What an LLM Actually Is"
      },
      {
        "type": "p",
        "text": "An LLM, or Large Language Model, is a type of artificial intelligence designed to understand, process, and generate human-like text. It is the technology powering conversational AI tools, translation software, and automated writing assistants. Instead of operating on rigid, pre-programmed rules, an LLM relies on advanced mathematics and pattern recognition. Understanding how it works (really works) is the single best defense against the people who are profiting from your confusion about it."
      },
      {
        "type": "p",
        "text": "The process happens in three stages."
      },
      {
        "type": "p",
        "text": "Tokenization Before an LLM can read text, it breaks sentences down into smaller pieces called tokens. A token can be a whole word, a part of a word, or even a single punctuation mark. The word “unbelievable” might be split into “un,” “believ,” and “able.” Those tokens are then converted into numbers, which is the form the computer actually processes. The model never reads language the way you do. It reads sequences of numerical values."
      },
      {
        "type": "p",
        "text": "Training An LLM is trained on a massive dataset of books, articles, websites, code. During this phase, the model uses an architecture called a transformer, which employs a mechanism called attention, or self-attention. This allows the model to look at an entire sentence at once and figure out how words relate to each other, even when they’re far apart in the text. In the sentence “The bank of the river was muddy,” the model uses the context word “river” to determine that “bank” means the edge of a body of water, not a financial institution. Through billions of these comparisons, the model builds a mathematical map of language and learns grammar, facts, reasoning shortcuts, and subtle nuances in tone."
      },
      {
        "type": "p",
        "text": "Prediction Here is the part that matters most, and the part the evangelists most reliably gloss over. When you give an LLM a prompt, it doesn’t “think.” It doesn’t understand concepts in any human sense. It runs a massive calculation to answer one question: Based on everything written so far, what is the most statistically likely next token? It predicts one token, adds it to the sequence, then repeats the process to predict the next one. It does this at extraordinary speed, assembling fluent sentences and entire essays one piece at a time. The result looks like thought, but is really just very sophisticated pattern completion."
      },
      {
        "type": "p",
        "text": "The capabilities of an LLM are largely determined by its scale, measured in parameters and internal mathematical weights the model adjusts during training to learn patterns. Smaller models, in the millions of parameters, handle fast, specific tasks like sorting emails or basic text classification. Large models, in the billions of parameters, are capable of complex reasoning, coding, translation, and natural conversational flow. Because they train on such vast amounts of diverse text, modern LLMs can perform what’s called zero-shot learning or the handling of tasks they were never explicitly programmed for, simply by applying the underlying patterns of logic and language they’ve already absorbed."
      },
      {
        "type": "p",
        "text": "That is genuinely impressive. It is also genuinely different from what you are being sold."
      },
      {
        "type": "p",
        "text": "The Gap"
      },
      {
        "type": "p",
        "text": "Now, hold that definition in your head and re-read the average AI LinkedIn post. The model predicts the next token. It doesn’t have vision or goals and it’s not “thinking about your industry.” It has no understanding of your business, your customers, or your competitive landscape. It only has a statistical approximation of language patterns that can sound like it does. That gap, between what the technology actually is and what the influencer ecosystem claims it to be, is where enormous amounts of money are currently flowing."
      },
      {
        "type": "p",
        "text": "The research community has been saying this clearly for years. A 2024 peer-reviewed paper in MIT Press’s Open Mind journal, by researchers at Newcastle University and Davidson College, concluded that any similarities between human language and LLM output are “purely functional.” In other words, the surface resemblance is real, but what’s happening underneath is categorically different. These systems lack anything resembling the grounded, embodied understanding that underlies actual human cognition. A separate 2025 analysis made the point even more directly: LLMs don’t learn meaning, they only learn statistical relationships between tokens. The extraordinary fluency has “led many to believe these models know what they talk about” when they structurally can’t."
      },
      {
        "type": "p",
        "text": "Cognitive scientist Gary Marcus, who has documented this gap for years, describes what he calls “the AGI shell game.” This is where companies are repeatedly hyping the imminent arrival of artificial general intelligence, and then quietly redefining the goalposts when the benchmarks aren’t met. His core argument, that the industry has “systematically overpromised” and that “the underlying technology has fundamental limitations that scaling alone will not fix,” is increasingly hard to refute. MIT Technology Review reported this year that even the engineers who build these systems openly acknowledge they cannot fully grasp what’s happening inside them. The people who built the thing don’t fully understand it. Yet, the people selling it to your company on a monthly retainer are entirely certain about its future."
      },
      {
        "type": "p",
        "text": "Something’s not stirring the Kool-Aid if you ask me."
      },
      {
        "type": "p",
        "text": "What the LinkedIn posts also never mention is the hallucination problem, which, depending on the domain and the task, ranges from embarrassing to genuinely dangerous. Enterprise benchmarks report hallucination rates between 15% and 52% across commercial LLMs. In legal contexts, studies have found rates between 69% and 88% in high-stakes queries. More than 120 cases of AI-driven legal hallucinations have been documented since mid-2023, with at least 58 occurring in 2025 alone. MIT’s 2025 research found that 95% of corporate AI pilots fail to scale to actual production. These are the technology operating as designed, in the real world, at scale, and they represent the enormous gap between “impressive demo” and “reliable production environment” that the evangelists have every financial incentive to never post about."
      },
      {
        "type": "p",
        "text": "What It Actually Costs"
      },
      {
        "type": "p",
        "text": "The money involved is worth talking about plainly, because it explains a great deal. The top AI speakers on the keynote circuit command fees that range from $40,000 to well over $100,000 per appearance. Many have online courses that sell for hundreds of dollars, and some have built consulting practices worth millions annually, advising boards of directors who are understandably panicked about being disrupted. The financial incentives to keep the hype elevated and to describe AI as more capable, more imminent, more transformational than it currently is enormous and relentless."
      },
      {
        "type": "p",
        "text": "The AI consulting market hit $8.75 billion in 2024 and is projected to reach nearly $50 billion by the early 2030s. Senior AI consultants are billing at $300 to $500 an hour at specialized firms, with top-tier advisors commanding $900 an hour or more. Retainer arrangements run from $5,000 to $50,000 a month. The person posting confidently about AI’s limitless potential on your LinkedIn feed is, in many cases, simultaneously selling access to that confidence to large companies at rates that would make your eyes water. Those aren’t thought leadership posts. They’re prospecting for gold."
      },
      {
        "type": "p",
        "text": "The brutal economics underneath all of it: a more accurate, more nuanced description of what LLMs actually are doesn’t build a following. “This is a powerful tool that will require careful integration, realistic expectation-setting, and a serious investment in change management over the next several years” isn’t viral worthy. “AI will replace your entire back-office function within 18 months” is because our brains are designed to look for threats in the distance. So, guess which version gets posted."
      },
      {
        "type": "p",
        "text": "This is also exactly why I won’t call it a lapse in judgment. I’ll call it what it is: a choice, made over and over again, that compounds into something we should all be a lot less comfortable with than we are."
      },
      {
        "type": "p",
        "text": "The Problem With Calling These People Thought Leaders"
      },
      {
        "type": "p",
        "text": "Here is where I want to slow down, because this is the part that bothers me most."
      },
      {
        "type": "p",
        "text": "We have a word for people who shape how large groups think about important things. We call them thought leaders, and we say it like it’s a compliment. We put it in bios, repeat it in introductions, and use it to signal that a person has earned the right to be listened to at scale and that their ideas have been tested against reality and found trustworthy. That is a significant amount of social authority to hand someone and right now, we are handing it to people based almost entirely on follower counts, engagement metrics, and the confidence with which they can describe a technology most of their audience doesn’t fully understand."
      },
      {
        "type": "p",
        "text": "That should concern us more than it does."
      },
      {
        "type": "p",
        "text": "Thought leadership, if the phrase is going to mean anything at all, implies a standard. It implies that the person leading your thinking has an obligation to that process - an obligation to accuracy, to intellectual honesty, to telling you what they don’t know as clearly as they tell you what they do."
      },
      {
        "type": "p",
        "text": "It implies, in short, integrity."
      },
      {
        "type": "p",
        "text": "The moment someone begins charging $900 an hour to advise corporations on a technology they are simultaneously overstating to a public audience, they have a conflict of interest with the truth."
      },
      {
        "type": "p",
        "text": "The current AI influencer ecosystem asks almost nothing of the people it elevates. It (very importantly) doesn’t require that they disclose their financial relationships with the companies whose tools they are enthusiastically recommending. It also doesn’t require that they correct the record when their predictions fail to materialize - and they do fail, repeatedly, without consequence. What it does requires is that they post consistently, that they sound certain, and that they make their audience feel like insiders. That is the entire standard and we have collectively decided that is enough to confer the title of thought leader and the authority that comes with it."
      },
      {
        "type": "p",
        "text": "It isn’t enough. It has never been enough."
      },
      {
        "type": "p",
        "text": "When someone with zero formal training in linguistics begins policing how language does and does not work, that is performance or theatre or, worse, hubris. When someone dismisses the researchers and engineers who have spent careers studying these systems as simply “not getting it,” that is a defense mechanism protecting a revenue stream. When the people who are positioned as the trusted guides for navigating an important technology turn out to be, above all else, salespeople who never disclose what they’re selling, we have a systemic integrity failure."
      },
      {
        "type": "p",
        "text": "We built an entire credibility ecosystem on vibes and engagement, and then we acted surprised when the people it elevated turned out to be optimized for virality rather than truth. That is on us as much as it is on them."
      },
      {
        "type": "p",
        "text": "The One Question Worth Asking"
      },
      {
        "type": "p",
        "text": "The next time a LinkedIn post about AI fills you with either excitement or dread, go to that person’s profile and find out what they sell. Not what they claim to believe. Find out what they charge for it, and find out if they’re a paid corporate consultant, a course creator, or some combination of both. Then re-read the post with that information in your hand."
      },
      {
        "type": "quote",
        "text": "If you're wondering whether you're absorbing propaganda rather than genuine insight, here's the most reliable diagnostic available to you: ask the speaker what they charge for a keynote. The answer will tell you everything about the incentive structure shaping every word you've just heard. People who are paid $75,000 to inspire are not, structurally speaking, well-positioned to tell you what AI can't do. There is a name for it and it is called a conflict of interest."
      },
      {
        "type": "p",
        "text": "You don’t have to become a cynic, but you do have to understand that the incentive to keep the hype elevated and to make AI sound more inevitable, more revolutionary, more total in its disruption than the evidence currently supports, is not abstract. It is measured in billable hours and monthly retainers and course enrollments. People who earn their income from corporate fear of being left behind are not, structurally speaking, well-positioned to tell you what a next-token predictor cannot do."
      },
      {
        "type": "p",
        "text": "It’s not necessarily that they’re lying, but the version of AI that pays them is not the version that actually exists yet."
      },
      {
        "type": "p",
        "text": "The next time a post makes AI feel like prophecy, check who’s profiting from the sermon. Likewise, the next time you see the major players trying to lessen the value of people who are either in subordinate positions to them (*cough, cough* students) or they are trying say LLMs are magic juice and anyone who disagrees is wrong, OR (my favorite) someone who has zero language expertise policing language, question it."
      },
      {
        "type": "p",
        "text": "If this resonated, send it to someone who forwarded you AI propaganda this week."
      }
    ]
  },
  {
    "slug": "the-numbers-dont-lie-but-the-headlines",
    "title": "The numbers don't lie, but the headlines do",
    "dek": "Stocks are cratering, the Fed is eyeing rate hikes, the jobs report is a statistical magic trick, and tech is quietly experiencing its own dot-com reckoning",
    "date": "2026-06-08",
    "substack": "https://michellecavanaugh.substack.com/p/the-numbers-dont-lie-but-the-headlines",
    "work": "diffident",
    "blocks": [
      {
        "type": "p",
        "text": "I want to tell you about last Friday."
      },
      {
        "type": "p",
        "text": "On last Friday, which was June 5th, 2026, a number came out of Washington. The number was 172,000. It meant jobs. One hundred and seventy-two thousand of them, supposedly created in a single month. This was considered good news. The stock market promptly lost a trillion dollars."
      },
      {
        "type": "p",
        "text": "You should sit with that for a moment. I’ll wait."
      },
      {
        "type": "quote",
        "text": "The Nasdaq lost 4.2% in a single afternoon. A trillion dollars evaporated from chip stocks. Futures markets now put a coin-flip on a Fed rate hike. 150k tech workers have been let go this year, and it is only June. These are the numbers. They were caused by a jobs report that was considered good news."
      },
      {
        "type": "p",
        "text": "The people who lost the trillion dollars were not poor people. Poor people don’t have a trillion dollars to lose. The people who lost it were the kinds of people who own things - chips, mostly, the silicon kind that make computers think. Nvidia fell nearly 6%. Marvell fell 16%. Micron fell 13%. The Nasdaq had its worst day since April of last year, which was itself a bad day, which was itself a response to tariffs, which were themselves a response to a trade war, which was itself a response to fear, which is what most things are a response to, if you go back far enough."
      },
      {
        "type": "p",
        "text": "Good news about jobs made rich people poorer. This is because good news about jobs makes the Federal Reserve want to raise interest rates. Higher interest rates make borrowed money expensive. Most of the value of technology stocks is borrowed from the future. When the future gets expensive, you give some of it back."
      },
      {
        "type": "p",
        "text": "This is not complicated. It is also not simple. Welcome to the economy."
      },
      {
        "type": "h3",
        "text": "About those jobs…"
      },
      {
        "type": "p",
        "text": "Here is what 172,000 jobs looked like, broken open."
      },
      {
        "type": "p",
        "text": "70k of them were in restaurants and bars. This is because the World Cup starts June 11th. The United States is hosting it. Philadelphia, Boston, Atlanta: they are all hiring bartenders and hotel managers and people to stand near velvet ropes and look purposeful. Hospitality hiring in host cities jumped 30% in May. In Philadelphia it jumped 83%."
      },
      {
        "type": "p",
        "text": "The Federal Reserve will now consider raising interest rates because Philadelphia needed more bartenders for a soccer tournament."
      },
      {
        "type": "p",
        "text": "The people setting monetary policy for the most powerful economy in the history of human civilization are, in part, looking at this data and nodding gravely."
      },
      {
        "type": "p",
        "text": "Meanwhile, the share of unemployed Americans who have been out of work for more than six months rose to 27.5%. A year ago it was 20.4%. These are not the people getting hired to pour beer near a stadium. These are people who have been looking for work since before the leaves changed last fall and are still looking now, in the heat."
      },
      {
        "type": "p",
        "text": "The jobs number that makes headlines is always the first one. The revised number, which tells the truth, comes out quietly months later, after everyone has moved on. The year through March 2025 was revised downward by 911,000 jobs. It was the largest revision since 2009, which you may remember as the year everything was on fire. Nobody had a ticker tape parade about the revision. Nobody ever does."
      },
      {
        "type": "h3",
        "text": "The man in charge of the money"
      },
      {
        "type": "p",
        "text": "The Federal Reserve used to be run by Jerome Powell. Now, it will be run by Kevin Warsh, who was picked by a president who wanted lower interest rates."
      },
      {
        "type": "p",
        "text": "The president is not going to get lower interest rates."
      },
      {
        "type": "p",
        "text": "Oil is above $110 a barrel because there is a war involving Iran, which has not ended, the way wars involving that region tend not to end. Wholesale inflation ran at 6% in April. The OECD, which is a organization of economists who went to very good schools and are therefore trusted, says inflation will hit 4.2% this year. The Fed had been hoping for 2.7%. Hope is a beautiful thing. It is also not a monetary policy."
      },
      {
        "type": "p",
        "text": "Futures markets now put a 52% chance on the Fed raising rates before the year is over. This is the first time that number has crossed 50% since 2023. The 30-year Treasury yield is at its highest point since 2007. The bond market is tightening things up on its own whether the Fed participates or not, the way a crowd will crush you whether or not anyone in it means to."
      },
      {
        "type": "p",
        "text": "All of this is happening at the same time that a man who wanted lower rates has just been put in charge of the institution that sets rates. The universe has a sense of humor. It is not a kind one."
      },
      {
        "type": "h3",
        "text": "The ghost of 1999"
      },
      {
        "type": "p",
        "text": "Now I want to talk about technology, and about a thing that happened before, and about how humans are very good at believing that the thing that happened before will not happen again, especially when they are making money."
      },
      {
        "type": "p",
        "text": "In 2026, 150k technology workers have lost their jobs. The year is half over. By December, the estimate is 370,000. Tech sector unemployment is at 5.8%, the highest it has been since the dot-com bust, which ended with the Nasdaq down 78% and a great number of very confident people looking for work."
      },
      {
        "type": "p",
        "text": "Oracle laid off somewhere between 20,000 and 30,000 people. Block, which used to be Square, which used to be the thing that let your farmers market vendor take credit cards, eliminated 40% of its entire global workforce. Cisco cut 4,000 people. Meta laid off 8,000 humans to make room in the budget for computers that think."
      },
      {
        "type": "p",
        "text": "The computers that think are the point of all of this. Every company has a version of the same speech. The speech goes: we are investing in artificial intelligence, which will create enormous value, and in order to invest in it we must stop paying certain people, and those people should feel good about having contributed to the future."
      },
      {
        "type": "p",
        "text": "Amazon, Microsoft, Alphabet, and Meta have together committed $700 billion to AI infrastructure in 2026. That is not a typo. $700B, in one year, for the machines."
      },
      {
        "type": "p",
        "text": "In 1999, they were building fiber optic cables and server farms. The logic then was the same as the logic now: the infrastructure will pay off. And here is the thing…they were right. The internet did change everything. It just destroyed an enormous amount of money first, and took about a decade to recover, and a great many people who thought they understood what was happening turned out not to."
      },
      {
        "type": "p",
        "text": "95% of enterprises currently report getting no return on their generative AI investments. Klarna replaced 700 customer service employees with AI, watched quality fall apart, and hired the humans back. The technology is real. The returns, so far, are mostly a story being told to shareholders."
      },
      {
        "type": "p",
        "text": "Stories told to shareholders are worth a great deal of money, right up until they aren’t."
      },
      {
        "type": "h3",
        "text": "What happens next?"
      },
      {
        "type": "p",
        "text": "I will tell you what I think happens next. I could be wrong. Everyone who has ever been certain about what happens next in an economy has, at some point, been wrong. This is a feature, not a bug. If economists could predict things accurately, they wouldn’t need to be economists."
      },
      {
        "type": "p",
        "text": "In the next 60 days: inflation data drops June 10th. If it’s bad, the rate-hike story gets louder. The SpaceX IPO is June 12th, at a reported valuation of $1.8 trillion. It will either prove that appetite for enormous growth stories is still alive, or it will be the moment everyone realizes it isn’t. Watch the Treasury yield. Watch it the way you’d watch a dog that has been calm for a long time."
      },
      {
        "type": "p",
        "text": "In the next year: the World Cup ends. The bartenders go home or find other work or don’t. The revised jobs numbers come out and they are smaller than the original ones, because they always are. If the Fed raises rates, every company that borrowed from the future to fund its AI dreams will have to recalculate. A lot of them will find the math doesn’t work as well as they thought."
      },
      {
        "type": "p",
        "text": "In the longer run, the question nobody wants to ask out loud: when AI does what its advocates say it will do - when it genuinely replaces paralegals and accountants and analysts and writers and the whole middle layer of the economy - where do those people go? The bartender jobs will be taken by then too, most likely. We don’t have a plan for this. We have some very interesting conference panels about it, which is not the same thing."
      },
      {
        "type": "h3",
        "text": "Synopsis"
      },
      {
        "type": "p",
        "text": "The jobs number was inflated by soccer. The Fed is being pushed toward hikes by a war and the price of oil. Technology is eating its own workforce and calling it progress. The stock market just had its worst week in months and it will probably have worse ones."
      },
      {
        "type": "p",
        "text": "These things are connected. They are all part of the same story, which is a story about what happens when you build an enormous amount of value on assumptions that turn out to be wrong, and then the assumptions start to change."
      },
      {
        "type": "p",
        "text": "It is a very old story. We have told it many times. We are apparently going to tell it again."
      },
      {
        "type": "p",
        "text": "The numbers don’t lie. Read all of them."
      },
      {
        "type": "p",
        "text": "Stay sharp."
      },
      {
        "type": "p",
        "text": "Forward this to someone who should know."
      }
    ]
  },
  {
    "slug": "agents-arent-going-to-take-your-job",
    "title": "Agents Aren’t Going to Take Your Job, Either",
    "dek": "Another week, another round of apocalyptic headlines with a touch of honesty",
    "date": "2026-06-05",
    "substack": "https://michellecavanaugh.substack.com/p/agents-arent-going-to-take-your-job",
    "work": "avolition",
    "blocks": [
      {
        "type": "p",
        "text": "First it was automation, then algorithms, then ChatGPT, and now it’s “AI agents.”\n\ninsert waving, witch hands here"
      },
      {
        "type": "p",
        "text": "If you believe the breathless coverage, these things are basically digital employees who will work for pennies, never sleep, never ask for PTO, and render your entire career obsolete by Q3. I’ve heard this story before (you probably have too), and once again, the reality is considerably more boring than the panic suggests."
      },
      {
        "type": "p",
        "text": "Let’s talk about what agents actually are, what they can actually do today, and why, in spite of all the hype, very few jobs are being done solely by an agent right now or anytime soon."
      },
      {
        "type": "h2",
        "text": "Okay, So What Is an Agent?"
      },
      {
        "type": "p",
        "text": "Before we argue about whether something is going to steal your kid’s college fund, we should probably agree on what it is."
      },
      {
        "type": "p",
        "text": "An AI agent is software that can perceive its environment, make decisions, take actions, and work toward a goal with minimal human hand-holding. The key distinction from a regular AI chatbot is autonomy. You don’t just ask it a question and get an answer. You have give it an objective, and it goes off and tries to accomplish it. It can use tools, or it can call APIs, maybe it can browse the web, write code, send emails, fill out forms. It can chain actions together across multiple steps and that is a neat parlor trick of engineering."
      },
      {
        "type": "p",
        "text": "Think of it this way: ChatGPT tells you how to book a flight, but an agent actually books it."
      },
      {
        "type": "p",
        "text": "There are flavors of these things everywhere now. Research agents that dig through the web and synthesize findings. Coding agents that write, test, and deploy software. Customer service agents that resolve tickets end-to-end. Business-task agents that live inside enterprise software and handle workflows, and the taxonomy keeps growing."
      },
      {
        "type": "p",
        "text": "The pitch from every vendor on earth is that these agents are going to transform how work gets done, and to be fair, they’re not entirely wrong. They’re just very wrong about the timeline and the scope."
      },
      {
        "type": "h2",
        "text": "The Gap Between the Demo and the Desk"
      },
      {
        "type": "p",
        "text": "Here’s where I want to be honest with you about something the LinkedIn thought leaders aren’t saying: most AI agents fail a lot."
      },
      {
        "type": "p",
        "text": "The demos are incredible. Genuinely. You watch an agent autonomously research a market, draft a memo, schedule follow-ups, and update a CRM, all in about four minutes, and your jaw drops. I get it."
      },
      {
        "type": "p",
        "text": "Then, you try to deploy that same agent in a real business environment, and things get weird fast."
      },
      {
        "type": "p",
        "text": "Consider the math alone. If an AI agent achieves 85% accuracy on each individual step of a task, which sounds great, a 10-step workflow only succeeds about 20% of the time. That’s not a tool you can trust with real work unsupervised. In surveys, a majority of companies report accuracy issues with AI tools, and fewer than one in five say agents actually work well in practice."
      },
      {
        "type": "p",
        "text": "One memorable example: a Replit agent given a maintenance task during a code freeze interpreted “clear the cache” as “wipe the drive.” That’s not a cautionary tale about the future. That really happened. It was hilariously horrible."
      },
      {
        "type": "p",
        "text": "Forrester put it plainly in their 2025 overview: enterprises that adopt AI agents “discover that these systems fail in unexpected and costly ways.” Salesforce research found that even the best current solutions achieve goal completion rates below 55% when working with CRM systems."
      },
      {
        "type": "p",
        "text": "The MIT Sloan researchers studying a real-world agent deployment that was used to detect adverse events in cancer patients and found that 80% of the work wasn’t prompt engineering or model tuning. It was data cleanup, stakeholder alignment, and workflow integration. The boring infrastructure stuff that nobody puts in the demo. You know…the “people-y” stuff."
      },
      {
        "type": "h2",
        "text": "So, What Can Agents Actually Do On Their Own Today?"
      },
      {
        "type": "p",
        "text": "I want to be clear: there are jobs, or more precisely, narrow tasks within jobs, where agents perform reliably and without human oversight. These tend to share a few characteristics: they’re well-defined, they operate on clean data, they have limited blast radius if they fail, and success is easy to verify."
      },
      {
        "type": "p",
        "text": "Some real examples of where agents are carrying real weight right now, largely unsupervised:"
      },
      {
        "type": "p",
        "text": "Tier-1 customer service routing. Not resolution, just routing. An agent can read an incoming ticket, categorize it, pull account history, and send it to the right queue. One company reported autonomously resolving 70% of administrative chat engagements during a peak tax season. That’s impressive, but it’s also a narrow, well-scoped task."
      },
      {
        "type": "p",
        "text": "Data reconciliation and reporting. Pulling numbers from multiple systems, flagging discrepancies, generating a formatted report. Bounded input, bounded output, easy to audit."
      },
      {
        "type": "p",
        "text": "Code review on specific patterns. Checking for security vulnerabilities, style guide violations, or test coverage gaps. Consistent rules, machine-readable code."
      },
      {
        "type": "p",
        "text": "Scheduling and calendar management. Booking time across calendars, handling simple back-and-forth. Low stakes, reversible."
      },
      {
        "type": "p",
        "text": "Web research and summarization. Pulling together information from multiple sources on a defined question. Useful, but needs human verification before anything important depends on it."
      },
      {
        "type": "p",
        "text": "Notice what these have in common: they’re tasks, not jobs. They’re bounded, legible, and recoverable when they go wrong. They’re the thing someone does between the important things."
      },
      {
        "type": "p",
        "text": "The jobs that exist entirely within that description, truly narrow, rote, and fully automatable from end to end, are a small slice of the employment landscape, and most of them were already being automated before agents showed up."
      },
      {
        "type": "h2",
        "text": "The Pattern We Keep Forgetting"
      },
      {
        "type": "p",
        "text": "Every generation of technology triggers the same fear and every generation gets the displacement wrong in magnitude and mechanism."
      },
      {
        "type": "p",
        "text": "ATMs were supposed to eliminate bank tellers. Instead, they made it cheaper to open branches, which increased the number of teller positions. Spreadsheets were supposed to eliminate accountants. Instead, they made financial analysis so much cheaper that demand for financial analysis exploded. The work shifted. It didn’t vanish."
      },
      {
        "type": "p",
        "text": "Goldman Sachs research found that roughly 25% of work hours in advanced economies could be automated, but only around 6-7% of jobs would disappear entirely. The rest would be augmented or shifted."
      },
      {
        "type": "p",
        "text": "Now, that’s a meaningful disruption, but it’s not an extinction event."
      },
      {
        "type": "p",
        "text": "What’s actually happening right now, if you watch carefully is compression. Junior developer employment for workers aged 22-25 dropped about 20% from 2022 to 2025. That’s a real number that stings a bit, moreso for the people experiencing it. Still, senior developers aren’t disappearing; they’re just doing more with less."
      },
      {
        "type": "h2",
        "text": "But What About the Executives?"
      },
      {
        "type": "p",
        "text": "Here’s a question everybody seems to be asking, probably because it’s impolite and an aggressive way to challenge the status quo: if we’re worried about agents taking jobs, why aren’t we talking about the expensive jobs?"
      },
      {
        "type": "p",
        "text": "Let me describe what a lot of senior leaders at mid-to-large companies actually do on a given Tuesday. They attend a strategy alignment meeting that produces no decisions, and then they review a deck that a director spent three days building. After that, they send three emails that could have been one Slack message, right before they have a 1:1 with a direct report that is really about managing that person’s anxiety about the reorg. They probably get pulled into an escalation or two that they really shouldn’t have to handle, but because two VPs can’t agree on who owns the roadmap, they make an appearance. Finally, they sign off on something they don’t fully understand because the person presenting it has more context and less political capital."
      },
      {
        "type": "p",
        "text": "This is not a criticism. This is literally what the job is."
      },
      {
        "type": "p",
        "text": "The executive role, and really any senior leadership role above a certain altitude, is fundamentally about three things that have almost nothing to do with the actual work product: communication, collaboration, and organizational politics. It’s about knowing which battles to pick and which to let go. It’s about reading a room and knowing that Gina from Finance will kill the initiative in the budget meeting unless you get her on board over lunch first. It’s also about absorbing ambiguity from above and translating it into something coherent enough for your teams to act on while being the person whose name on an email makes something actually happen."
      },
      {
        "type": "p",
        "text": "An AI agent cannot do any of that, and I am sorry to those who hoped it would (not “bottleneck Gina,” though). Yes, the technology is clever enough (it’s increasingly very clever), but those things aren’t about information processing. They’re about trust, credibility, history, and the deeply human calculus of organizational power. The agent doesn’t know that Mortimer’s team is already stretched thin and will quietly tank any initiative that lands without runway, and no one told it that the board has already decided and the “strategy process” is really just change management theater. It also doesn’t know that the real decision-maker in any given room is never the person with the biggest title."
      },
      {
        "type": "p",
        "text": "Now, (and here’s where I want to be honest in the other direction) some of what senior leaders do is, frankly, not that valuable. Layers of management that exist primarily to relay information upward and downward, that coordinate without deciding, that attend without contributing…those roles are genuinely at risk. Not from agents replacing them, but from leaner organizations realizing they don’t need them in the first place, especially when AI tools are compressing the work enough that fewer people can cover more ground."
      },
      {
        "type": "p",
        "text": "The executive who existed mainly to approve copy and sit in reviews? That role was already on borrowed time, but the executive who actually knows where the bodies are buried, who can get engineering and design and go-to-market aligned on something that has no obvious right answer, who can walk into a difficult conversation with a customer and hold the relationship together, now that person has a long career ahead of them."
      },
      {
        "type": "p",
        "text": "Nonetheless, the real question is whether the job is really about doing something legible and repeatable, or whether it’s about navigating something genuinely messy and human."
      },
      {
        "type": "p",
        "text": "Agents are extraordinarily good at the former, but they are nowhere close to the latter. The higher you go in most organizations, the more the job is about the latter."
      },
      {
        "type": "p",
        "text": "This, incidentally, is exactly why IBM announced in February 2026 that it plans to triple its U.S. entry-level hiring. IBM’s Chief Human Resources Officer Nickle LaMoreaux was refreshingly direct about it: “If we don’t continue to invest in entry-level hires, what happens in 3–5 years? There’s no pipeline; the well simply dries up.” She even acknowledged the obvious objection head-on, “And yes, it’s for all these jobs that we’re being told AI can do,” and then explained why they’re doing it anyway."
      },
      {
        "type": "p",
        "text": "How could they do that in this era of melodrama and job displacement, you may ask? Well, because the jobs have been redesigned."
      },
      {
        "type": "p",
        "text": "Junior developers at IBM now spend less time on routine coding and more time working directly with customers. HR entry-level staff spend their time intervening when the chatbots fail, correcting outputs, and talking to managers. The tasks that could be automated have been automated, but the tasks that remain are fundamentally human ones."
      },
      {
        "type": "p",
        "text": "The companies cutting entry-level hiring to look AI-forward are, in the analysis of the Burning Glass Institute, quietly destroying their own management pipeline. You cannot conjure a seasoned SVP out of thin air in 2031 when you stopped developing the raw material in 2025. Every person navigating the organizational politics of your company in ten years has to start somewhere, and that somewhere is the entry-level role you’re tempted to eliminate today. IBM, whatever its other flaws, is playing a longer game than most."
      },
      {
        "type": "p",
        "text": "So, no, agents probably aren’t coming for your executive title, but if your executive title has been mostly about the first set of things, it might be time to develop more of the second."
      },
      {
        "type": "h2",
        "text": "What This Actually Means for You"
      },
      {
        "type": "p",
        "text": "If your job involves judgment, context, relationships, creativity, or navigating ambiguity know that agents are not coming for it. The architecture simply isn’t there. These systems still fail at the edges of what you specified, and real work is all edges."
      },
      {
        "type": "p",
        "text": "If your job is a series of well-defined, rule-based steps on clean data with no exceptions, eh…you might want to pay attention."
      },
      {
        "type": "p",
        "text": "The honest framing isn’t “will AI agents take my job?” It’s “which parts of my job are about to get commoditized, and what does that free me up to focus on?” That’s a much more productive question, and unlike the apocalypse version, it has answers you can act on."
      },
      {
        "type": "h2",
        "text": "The People Who Scared You Are Now Walking It Back"
      },
      {
        "type": "p",
        "text": "A lot of the panic around AI and jobs wasn’t organic. It was manufactured in part by the very people selling you the AI."
      },
      {
        "type": "p",
        "text": "For most of 2024 and 2025, Sam Altman at OpenAI and Dario Amodei at Anthropic were making the rounds with genuinely alarming predictions. Altman warned that “a lot of jobs will go away” as AI advanced, describing entire categories of entry-level knowledge work as acutely vulnerable. Amodei went further by publicly claiming that AI could eliminate 50% of white-collar jobs, potentially driving unemployment to 10–20% within a few years. “We, as the producers of this technology, have a duty and an obligation to be honest about what is coming,” Amodei told Axios in 2025."
      },
      {
        "type": "p",
        "text": "Meanwhile, companies from Amazon to Microsoft to Meta began announcing layoffs in the tens of thousands, reliably attributing them to AI efficiency. It became the default corporate explanation: tidy, modern, and conveniently hard to argue with. AI-cited job cuts hit a record 55,000 in 2025. Through May 2026, they’ve already topped 49,000 more."
      },
      {
        "type": "p",
        "text": "And then, within about a week of each other both Altman and Amodei reversed course. Shocker."
      },
      {
        "type": "p",
        "text": "Altman told an audience in Sydney that he’d been “pretty wrong” about AI’s economic impact. “I’m delighted to be wrong about this,” he said. “I thought there would have been more impact on entry-level white-collar jobs being eliminated by now than has actually happened.” Amodei, who had spent a year warning about 50% job elimination, quietly reframed the technology as a productivity multiplier and suggested that automating 90% of a job just causes the remaining 10% to expand to fill the space."
      },
      {
        "type": "p",
        "text": "The timing anything but subtle. Both OpenAI and Anthropic are eyeing IPOs in 2026 with potential valuations near or above $1 trillion. An apocalyptic job-destruction narrative is, it turns out, not ideal when you’re courting institutional investors and pension funds."
      },
      {
        "type": "p",
        "text": "Jensen Huang at Nvidia, to his credit, had been saying this for a while. In a May 2026 interview with Singapore broadcaster CNA, Huang called the practice of blaming AI for layoffs “lazy.” His logic was simple: “How is it possible that AI became productive and useful only six months ago, and they were somehow laying people off two years ago because of AI?” He said he “really hates” the way some executives use AI as a talking point while frightening their employees in the process. At GTC earlier this year, he was even more direct, telling CNBC’s Jim Cramer that companies shrinking their headcount under the banner of AI efficiency weren’t being forced into it by technology, but they were out of imagination. “For companies with imagination, you will do more with more. For companies where the leadership is just out of ideas, they have nothing else to do.”"
      },
      {
        "type": "p",
        "text": "Ha. Huang just said your AI apocalypse executive who cut jobs in the name of AI sucks. Wow. Awkward as it gets."
      },
      {
        "type": "p",
        "text": "Oh! The Yale Budget Lab, tracking the actual labor market data, found no meaningful change in unemployment for workers in high-AI-exposure jobs through March 2026."
      },
      {
        "type": "p",
        "text": "So, here’s what actually happened: some companies used “AI” to justify cost cuts they’d been planning for other reasons. Some CEOs used the fear of AI displacement to sound visionary while executing pretty conventional restructuring. The people building the AI amplified the scariest version of the story right up until they needed capital from the kinds of investors who don’t like scary stories."
      },
      {
        "type": "p",
        "text": "None of this means the technology isn’t real or that the disruption isn’t real. Some of it is. But the gap between “AI is changing how some work gets done” and “AI is eliminating your job category” has always been enormous. The people with the most incentive to collapse that gap have spent the last two years doing exactly that."
      },
      {
        "type": "p",
        "text": "Now they’re walking it back."
      },
      {
        "type": "p",
        "text": "Make of that what you will."
      },
      {
        "type": "h3",
        "text": "Closing arguments"
      },
      {
        "type": "p",
        "text": "The hype will keep coming, the demos will keep being impressive, and the headlines will keep being wrong."
      },
      {
        "type": "p",
        "text": "But the actual work of deploying reliable agents in real business environments, with messy data, edge cases, legacy systems, and human stakeholders, remains genuinely hard. Harder than most people selling you the future want to admit."
      },
      {
        "type": "p",
        "text": "Your job is probably safe, but your tasks are negotiable."
      },
      {
        "type": "p",
        "text": "That distinction is worth sitting with."
      },
      {
        "type": "p",
        "text": "If you found this useful, share it with someone who forwarded you an article this week about how they’re definitely getting replaced by a robot. They could use the reality check."
      }
    ]
  },
  {
    "slug": "that-hammer-isnt-a-carpenter",
    "title": "Everyone's job is safe except your job",
    "dek": "An incomplete autopsy",
    "date": "2026-06-02",
    "substack": "https://michellecavanaugh.substack.com/p/that-hammer-isnt-a-carpenter",
    "work": "tether",
    "blocks": [
      {
        "type": "p",
        "text": "There is a thing people do when they encounter a tool powerful enough to frighten them, which is to insist it has a soul."
      },
      {
        "type": "p",
        "text": "I know, really weird, right?"
      },
      {
        "type": "p",
        "text": "They did it with fire, with the printing press, with electricity, and they are doing it now with LLMs, which are, at their core, extraordinarily elaborate filing cabinets with a gift for sounding confident."
      },
      {
        "type": "h3",
        "text": "What is an LLM and how does it work?"
      },
      {
        "type": "p",
        "text": "Here is what an LLM actually does: it reads a staggering quantity of text that human beings have already written, finds the statistical patterns in that text, and produces new arrangements of words that are, by design, consistent with what came before. That is the whole trick. The model has no window to look out of, no experience of Tuesday, no memory of being wrong last week. It has only the corpus: the vast, frozen record of human thought up to a certain date, and the mathematical relationships between the words inside it. When you ask it to write a poem about grief, it is not actually grieving, and when you ask it to generate a business strategy, it is not actually strategizing. It is doing something closer to very sophisticated autocomplete, the kind your phone does when it guesses your next word, scaled up to a size that makes the results feel miraculous."
      },
      {
        "type": "p",
        "text": "Yann LeCun, the chief AI scientist at Meta and one of the architects of modern deep learning, has been quite direct about this for years, telling anyone who will listen that large language models are fundamentally bounded by the data they were trained on and cannot build genuine world models from text alone. A study published in the Journal of Creative Behavior reached a similar conclusion, finding that LLMs produce outputs that hover near the statistical average of human creativity: derivative by mathematical necessity, because the model’s entire purpose is to stay tethered to what already exists. The outputs can be fluent, useful, and genuinely impressive, but original in any deep sense they are not."
      },
      {
        "type": "p",
        "text": "So, that’s the thing. Before we go any further, we should hold that fact in our hands and feel its weight: AI is a tool. It requires human input to function, and it can only see what has already been done."
      },
      {
        "type": "h2",
        "text": "The Hammer doesn’t Dream about Houses"
      },
      {
        "type": "p",
        "text": "There is an old joke about a hammer, that if the only tool you have is a hammer, every problem looks like a nail. It is a terrible joke, but it seemed appropriate. The joke with AI is somewhat more troubling, because a significant portion of the business world has convinced itself that their hammer is actually an architect, when what it has really done is memorize every blueprint ever drawn and learned to recombine them in ways that look, at a quick glance, like a new design."
      },
      {
        "type": "p",
        "text": "This matters enormously because the value being ascribed to AI in boardrooms and press releases and keynote addresses is largely the value of invention, and the fantasy that the model will produce ideas that no human has yet had. Companies are not paying billions of dollars for a better search engine. They are paying for the story of a mind."
      },
      {
        "type": "p",
        "text": "What AI does exceedingly well is pattern completion at scale. It can summarize, it can reformat, it can generate boilerplate at speed. It can hold a large amount of existing information in useful relationship with each other. These are genuinely valuable capabilities, and we shouldn’tbe too proud to use them. But the moment someone in a strategy meeting says “let’s let the AI come up with the solution,” they have misunderstood the nature of the machine entirely, because the machine doesn’t have any solutions. It has the historical record of solutions that humans have previously proposed, filtered through probability."
      },
      {
        "type": "p",
        "text": "The input, always and without exception, is human. The prompt, the context, the judgment about whether the output is any good (all of that falls to the person in the chair). The AI has no stake in the outcome and no understanding of the problem. It has only the corpus, and it is doing its level best with what it has been given."
      },
      {
        "type": "p",
        "text": "Which brings us to the prompt library, that beloved artifact of the corporate AI rollout, the Google Doc or shared Confluence page where someone has lovingly catalogued the fifty-seven prompts that the team has discovered work reliably, so that everyone can benefit from the collective wisdom and nobody has to think too hard. Prompt libraries are a sensible idea in the same way that saving last year's bus schedule is a sensible idea. Yes, the buses exist, the concept is sound, and the document will be completely wrong by the time anyone goes to use it."
      },
      {
        "type": "p",
        "text": "Here is why: the models themselves change constantly, and when a model changes, the prompts written for the old model begin to misbehave in ways that are quiet, gradual, and maddeningly difficult to catch. Researchers call this phenomenon prompt drift, which is the polite technical term for \"the thing you told the machine to do is no longer quite what it is doing, and you may not notice until someone complains.\" A study of GPT-4 and GPT-3.5 found that response accuracy on the same tasks fluctuated considerably over just four months, with degradation on some categories reaching more than 60%. The model is updated (for safety alignment, for architectural improvements, for reasons the company will not fully disclose) and the relationship between your carefully written prompt and the model's behavior shifts underneath you like furniture rearranged in a dark room. OpenAI has revised ChatGPT's system instructions dozens of times since GPT-4's initial release. Anthropic has done the same across every model generation. Each revision changes, at a level most users cannot see, how the model interprets language, what it prioritizes, and where it pushes back. A prompt that worked beautifully in March may return subtly different results in July and noticeably worse results by December, with no error message, no warning, and no indication that anything has gone wrong at all …just a slowly degrading quality of output that the team chalks up to the AI \"having an off day,\" because the alternative explanation, which is that they need to rewrite all fifty-seven prompts again, is too dispiriting to contemplate."
      },
      {
        "type": "p",
        "text": "New model versions compound the problem further, because each major release effectively resets the relationship between human and machine. The prompting strategies that worked for GPT-4o and Claude 3 required extensive step-by-step instructions, because those models needed to be walked carefully through a task. Newer models are sophisticated enough to find that kind of hand-holding condescending and respond to it with subtly worse outputs, in the same way that giving very detailed instructions to a competent professional sometimes produces worse results than simply describing what you need. The prompt that trained a less capable system becomes the prompt that patronizes a more capable one. This means that what companies are actually investing in, when they invest in AI capability, is a rapidly degrading collection of assets that become relics of the past shortly after someone selects the “publish” button. \n\nWait, what happened to Agile?"
      },
      {
        "type": "h2",
        "text": "A Manifesto and a Slow Death"
      },
      {
        "type": "p",
        "text": "In February of 2001, seventeen software developers gathered at the Snowbird ski resort in Utah and wrote a new process: a short document arguing that the way the industry was building software was making everyone miserable and that there was a better way. They called it the Manifesto for Agile Software Development, and its first declared value, the one they put at the very top, before all the others, was this:"
      },
      {
        "type": "p",
        "text": "“Individuals and interactions over processes and tools.”"
      },
      {
        "type": "p",
        "text": "That sentence was very deliberate. It was an intentional argument, written by people who had watched waterfall development strangle entire organizations in bureaucracy, that human beings working together in good faith were more important than any system, methodology, or piece of software you could throw at them. The people were the point, and the tools were supposed to serve the people."
      },
      {
        "type": "p",
        "text": "The Agile Manifesto has had an interesting twenty-four years since then. It spread from software teams to marketing departments to Boy Scout troops to restaurants, as one account noted, because its core insight that flexibility, collaboration, and human judgment matter more than rigid process. It turned out to be useful in almost every context where people need to build things together. Agile became the dominant framework of modern software development. Sprints, standups, retrospectives, and user stories became the furniture of the industry."
      },
      {
        "type": "p",
        "text": "And then AI came along with a very different proposition, which was: what if you automated the humans?"
      },
      {
        "type": "p",
        "text": "What? Wait…"
      },
      {
        "type": "p",
        "text": "Digital.ai’s State of Agile Report described AI as having moved from a “supportive tool to an orchestrator” in development cycles, which is a polite way of saying that the thing the Agile Manifesto put at the very top of its values (remember that whole “individuals, and their interactions” thing) is being systematically replaced by a machine. The report also found that 79% of development teams are being asked to do more with less, which is the corporate way of saying that the headcount is shrinking and the tools are supposed to cover the difference."
      },
      {
        "type": "p",
        "text": "What happens to “individuals and interactions over processes and tools” when the tool is being positioned as a replacement for the individual? The manifesto does not offer guidance on this, because the people who wrote it couldn’t have imagined it. They were fighting against documentation-heavy bureaucracy, not against the prospect of the humans being automated out of the loop entirely."
      },
      {
        "type": "p",
        "text": "It should be said, in the interest of fairness, that Agile had already done considerable damage to itself before AI arrived to finish the job. There is only so much a manifesto can survive, and seventeen years of SAFe implementations, two-week sprints that somehow never end, and \"agile transformations\" run by people who had never shipped software was a lot to survive. Ultimately, Agile deserved what happened to it, having already been mummified by the people who loved it most."
      },
      {
        "type": "p",
        "text": "RIP Scrum."
      },
      {
        "type": "h2",
        "text": "A Comedy in Three Acts: None of Them Funny"
      },
      {
        "type": "p",
        "text": "Here is where it gets interesting, and also a little dark."
      },
      {
        "type": "p",
        "text": "The Engineers: The people most loudly making the case that AI will replace everyone in your organization are, with startling frequency, software engineers. They are the ones producing the demos, writing the white papers, giving the conference talks, and generally conducting a sustained lobbying campaign on behalf of a technology that they control, deploy, and are paid to build. They are, to borrow a phrase from a different era, not entirely disinterested parties."
      },
      {
        "type": "p",
        "text": "The argument goes roughly like this: AI will replace the lawyers, the marketers, the writers, the designers, the analysts, the customer service representatives, the data entry clerks, and the project managers. It will automate away enormous swaths of cognitive work across the economy. It is coming for everyone. Everyone, that is, except the engineers who build and maintain the AI systems because those people, we are told, are indispensable."
      },
      {
        "type": "p",
        "text": "This is a very convenient story to tell when you are an engineer."
      },
      {
        "type": "p",
        "text": "The data suggests a more complicated picture. Stanford researchers who analyzed payroll records from ADP found that employment for software developers between the ages of 22 and 25 declined by nearly 20% from its peak in late 2022, concentrated precisely in the tasks (boilerplate coding, scripted testing, routine bug fixes) that AI tools now handle with ease. According to IEEE Spectrum, overall programmer employment in the United States fell 27.5% between 2023 and 2025. Software engineering job postings, per Indeed’s Hiring Lab, were down 36.4% compared to February 2020. Salesforce CEO Marc Benioff said the company hired zero new engineers in fiscal year 2026. Shopify’s CEO sent an internal memo telling teams they needed to prove AI could not do a job before requesting new headcount."
      },
      {
        "type": "p",
        "text": "What is particularly worth noticing is the mechanism by which this is happening. Companies are not replacing engineers with AI because AI has transcended human capability. They are replacing certain engineers with AI because AI can produce adequate code, at adequate speed, for the portions of the job that were already well-defined, and “adequate and cheap” beats “excellent and expensive” in a spreadsheet every single time. This is a story about cost reduction, which is what almost every technology story is, eventually."
      },
      {
        "type": "p",
        "text": "The Designers have concluded that engineering is finished, which is the kind of confidence that comes from not having examined one’s own foundations recently. Design is, at its serious core, many things that are genuinely different from each other and that the industry spent twenty years pretending were the same. Graphic design is a fine arts discipline (composition, typography, color, etc) and the slow education of the eye that happens over years of making bad things before making good ones. UX design is something closer to applied social science, and the people who did it well came from HCI graduate programs and psychology departments, carrying credentials that represented years of learning how people actually behave rather than how they behave in a scenario a designer invented. Service design thinks about entire systems: the gap between organizational intention and human experience, the places where a perfectly reasonable policy produces an absurd outcome for the actual person trying to get something done. Interaction design, information architecture, content design, motion design, the list goes on and each is a real discipline with a real body of knowledge and a real set of things you have to learn before you can practice it without causing harm. None of them are the same. All of them got the same job title, because the same job title was cheaper."
      },
      {
        "type": "p",
        "text": "Graphic design is not UX design. The fine arts student who spent four years learning to kern a headline and the cognitive psychologist who spent three years studying wayfinding in hospital environments are not the same person and are not doing the same job, and the bootcamp that trained both of them in twelve weeks was performing a kind of institutional sleight of hand that everyone agreed to accept because the artifacts looked similar and the salary was lower and nobody in the hiring meeting had a strong enough opinion about the difference to slow things down. They should have slowed things down."
      },
      {
        "type": "p",
        "text": "The confusion about what design actually is traces a fairly direct line back to IDEO, which popularized design thinking (a methodology so successfully marketed that it spread from product development to healthcare to government to schools to, eventually, a certain number of restaurants) and in doing so convinced an entire corporate class that design was primarily a mindset available to anyone willing to do the empathy exercises, rather than a discipline requiring years of serious study to practice with any integrity. Design is a skill, design thinking is a brand and IDEO built a $300 million business on the brand, right up until the business contracted to $100 million and the offices in Munich and Tokyo closed and the layoffs came in rounds, which is what happens when a consulting proposition is built on a fad rather than a foundation. What is coming to replace design thinking in serious organizations is systems thinking or the practice of understanding how complex systems produce emergent outcomes, how interventions ripple through interconnected components, how the thing you changed over here broke the thing over there that you were not watching. It is, importantly, hard to learn, slow to develop, and impossible to deliver as a two-day workshop with a wall of sticky notes at the end. The designers who already think in systems will find that their moment has arrived. The ones who learned design thinking and called it design are finding out, at some inconvenience, that those were always different things."
      },
      {
        "type": "p",
        "text": "The Product Managers have split into two parties, like a country facing an election nobody wanted. The first party is calling itself the AI PMs, which means they have added “AI” to their title and are hoping nobody asks them to explain the attention mechanism in a transformer. The second party has become growth PMs, which is a dignified way of saying they have decided to be marketing people who never quite made it to marketing, generating acquisition funnels and engagement metrics and calling it product strategy. Both parties are fleeing the same burning building, which is the recognition that a language model can produce every artifact a traditional product manager was hired to produce, faster and cheaper and without asking for a seat at the roadmap review."
      },
      {
        "type": "p",
        "text": "The reason this hurts as much as it does is that product management spent the better part of two decades recruiting people whose primary qualification was a degree from a business school, on the theory that the MBA signaled a kind of strategic general intelligence that could be applied to any domain. What it actually signaled was comfort with frameworks, fluency with PowerPoint, and a willingness to facilitate meetings about decisions that the engineers and designers in the room had already made. The engineers tolerated it. The designers tolerated it less. And now AI has arrived and can facilitate the meeting, write the summary, and generate the follow-up doc, and what is left is the judgment, the genuine technical or creative intuition about what to build, which was precisely what the MBA was not designed to produce and precisely what nobody thought to hire for."
      },
      {
        "type": "p",
        "text": "Annnnd, we are back to the death of Agile like a snake eating itself."
      },
      {
        "type": "h2",
        "text": "The Spreadsheet has always Won"
      },
      {
        "type": "p",
        "text": "Let’s say what is actually happening without the softening language of “transformation” and “augmentation” and “the future of work”: companies discovered that AI coding tools give them 40 to 55% more code output per sprint, according to tracking data from development teams, and they responded by doing exactly what companies always do when productivity increases: they reduced headcount and kept the margin. Meta, Amazon, Microsoft, Salesforce, Dropbox, and Duolingo have all made this calculation explicitly. The savings from not hiring junior engineers are being redirected, in many cases, directly into AI infrastructure spending."
      },
      {
        "type": "p",
        "text": "This is capitalism working as designed, and it shouldn’t surprise anyone. The shocking part is that the profession most responsible for building these tools spent years arguing in blog posts, in conference talks, and on social media that AI was coming for everyone else’s job. And there is a reasonable argument that this was, whether consciously or not, a strategic positioning exercise: make AI sound universal and inevitable so that the people who control it appear uniquely necessary."
      },
      {
        "type": "p",
        "text": "The Agile Manifesto said people over tools. The industry responded by spending the better part of a decade building a tool capable of replacing a meaningful percentage of the people. The irony is palpable."
      },
      {
        "type": "h2",
        "text": "Here’s the Skinny"
      },
      {
        "type": "p",
        "text": "AI is a genuinely useful tool, and nothing argued here is a case against using it, the hammer is a good hammer (pat on head), the filing cabinet is a magnificent filing cabinet (gestures supportively), the autocomplete is the most impressive autocomplete in the history of autocomplete (mmm…kay)."
      },
      {
        "type": "p",
        "text": "But a tool is what it is, and it requires an operator with a goal. It requires context that only a human with experience, judgment, and skin in the game can provide, but it can’t disagree with you when you are wrong, because it doesn’t have opinions. It has probability distributions, so you are going to have to ask for a disagreement. Kind of like vampires who can’t come in unless you invite them."
      },
      {
        "type": "p",
        "text": "The disruption to software development is real, and it is specifically a financial disruption: companies will save money on engineering headcount, especially at the entry level, because the entry level is where AI is most capable of substitution. The deeper skills (system design, architectural judgment, understanding of a specific business domain and its constraints, the ability to know when a technically correct answer is the wrong answer) those remain stubbornly human for now, though it would be unwise to assume they will remain so indefinitely."
      },
      {
        "type": "p",
        "text": "We have always been here before, in one form or another. The printing press was going to make scholars obsolete, and the calculator was going to make mathematicians obsolete, and don’t forget that the word processor was going to make secretaries obsolete. Each of these technologies changed who did what and how much it cost, and the people who figured out how to use them well came out ahead while the people who decided the tool had replaced the need for human judgment came out looking foolish."
      }
    ]
  },
  {
    "slug": "good-at-something",
    "title": "Good at Something",
    "dek": "On self-efficacy, algorithmic anxiety, and why the backlash was always going to happen",
    "date": "2026-06-01",
    "substack": "https://michellecavanaugh.substack.com/p/good-at-something",
    "work": "self-actualization",
    "blocks": [
      {
        "type": "p",
        "text": "People need to feel useful."
      },
      {
        "type": "p",
        "text": "In a structural, psychological, this-is-how-humans-are-built way that a century of research has documented with considerable thoroughness and that most corporate planning processes treat as optional information."
      },
      {
        "type": "p",
        "text": "The specific feeling is called self-efficacy. Albert Bandura named it and spent decades proving it mattered. The short version is this: humans need to believe that their actions produce outcomes, that their judgment is required somewhere by someone, that the work they do would be different if they didn’t do it. Strip that away and you don’t get a more efficient organization. You get people who are present in body and somewhere else entirely in every way that counts."
      },
      {
        "type": "p",
        "text": "I want to tell you about what we are doing to that feeling right now, and why the people doing it are surprised by the results, and what it would look like to be less surprised."
      },
      {
        "type": "h2",
        "text": "What is “Work?”"
      },
      {
        "type": "p",
        "text": "Most people who are good at something spent years getting there, which is not a trivial investment. They stayed late, and they made mistakes that embarrassed them. They got better slowly and then faster and eventually reached the point where other people paid them to do the thing, which felt like more than money. It felt like confirmation that they existed in a way that mattered to someone outside themselves."
      },
      {
        "type": "p",
        "text": "A 2026 study published in Scientific Reports measured what happens when you hand that work to an AI. Self-efficacy drops, psychological ownership drops, and a sense of meaning drops. All three, simultaneously, in measurable quantities, in workers across industries and roles. The effect partially reversed when workers collaborated with AI rather than simply deferring to it, which is an important finding that most deployment strategies have not gotten around to reading yet."
      },
      {
        "type": "p",
        "text": "When AI takes over the decisions that used to belong to a person, researchers have found that what erodes is not just job satisfaction but the deeper thing underneath it: the sense that your judgment is required, that you are a participant in the work rather than a witness to it. They have started calling the resulting experience “algorithmic anxiety,” which is the specific dread of working inside systems that make consequential choices you cannot see, question, or appeal. Workers are reporting it widely, and they feel blindsided. They feel betrayed in a way that is hard to articulate because the thing that was taken was never formally promised. It was just assumed, the way you assume the floor will hold."
      },
      {
        "type": "p",
        "text": "This didn’t have to happen this way. It is happening this way because the people making deployment decisions are almost never the people having the experience, and the distance between those two groups turns out to be significant."
      },
      {
        "type": "h2",
        "text": "The Numbers…"
      },
      {
        "type": "p",
        "text": "Goldman Sachs says AI could displace the equivalent of 300 million full-time jobs globally by 2030. McKinsey says 30% of U.S. work hours could be automated in the same window. The IMF says nearly 40% of global jobs face significant disruption. The World Economic Forum says 40% of employers expect to reduce headcount in favor of automation."
      },
      {
        "type": "p",
        "text": "These numbers are real and they come from credible institutions and they are also, in the hands of financial media and executive communications teams, functioning as a psychological instrument. The message, rarely stated this plainly, is that the robots are coming regardless, that resistance is a kind of naivety, and that the gracious response is to accept this and perhaps express gratitude for the opportunity to participate in such an exciting moment in history."
      },
      {
        "type": "p",
        "text": "It is worth remembering where this urgency came from and why it arrived when it did."
      },
      {
        "type": "p",
        "text": "During the pandemic, companies hired aggressively. The Great Resignation was very real and people quit in historic numbers, demanded better conditions, declined to be treated as interchangeable. Employers found this alarming, and then the economy shifted, the leverage evaporated, and companies that had over-hired needed to restructure. That is a normal business story. What changed is that AI gave it a much more flattering costume."
      },
      {
        "type": "h3",
        "text": "Wait, why did companies over hire, anyway?"
      },
      {
        "type": "p",
        "text": "Consumer behavior shifted dramatically online during the pandemic (a shift that were are seeing was hell on the psychological stability of most people). Venture capital hit record levels (2021 alone saw $330 billion invested in U.S. startups). Interest rates were near zero, capital was cheap, and demand for digital products and services was surging in ways that felt permanent. Companies hired to meet it, and some, like Peloton, doubled their headcount in a single year. The six largest U.S. banks added nearly 60,000 employees between 2020 and mid-2022. Meta, Google, and Amazon hired at a pace that would have seemed implausible five years earlier. The assumption embedded in all of it was that the pandemic had permanently accelerated the future, and that the organizations positioned to capture it needed to be much larger than they currently were. That assumption turned out to be wrong."
      },
      {
        "type": "p",
        "text": "Harvard Business School research found that e-commerce activity returned to or below pre-pandemic trend levels in the United States once restrictions lifted. The demand that had seemed structural was largely situational, and when it normalized, the organizations built around it were suddenly very expensive. Companies that had spent two years blitzscaling (the term for spending capital inefficiently to win a market during uncertainty) found themselves holding headcount they could no longer justify to investors. The layoffs that followed were real and painful and also, in a number of cases, a return to workforce levels that existed before the hiring binge."
      },
      {
        "type": "p",
        "text": "Now, lets talk about the “war for talent” during the Great Resignation."
      },
      {
        "type": "p",
        "text": "Layered on top of all of that was a labor market that had fundamentally changed its terms. Workers, for the first time in a long time, had real leverage, and they used it. The unemployment rate for tech jobs dropped from over 7% in early 2021 to around 2% by the end of the year. Companies were competing for the people who could build things for those customers, and losing. Signing bonuses proliferated, salary expectations inflated like crazzy. The Conference Board reported that companies budgeted 3.9% salary increases for 2022, the largest jump since 2008, and HR leaders said even that wouldn't be enough. \"The war for talent\" became the phrase of the moment in every C-suite conversation about risk, jumping from the eighth biggest business concern to the second in a single year. Companies responded the way organizations respond when they are afraid of losing something: they overpaid, over hired, and told themselves the conditions that made it necessary would persist."
      },
      {
        "type": "p",
        "text": "Spoiler: They did not persist."
      },
      {
        "type": "p",
        "text": "When the leverage shifted back, the institutions that had spent two years accommodating workers found themselves with a different set of options and, as it turned out, a very convenient new narrative about why the headcount needed to come down."
      },
      {
        "type": "p",
        "text": "“We over-hired and need to cut” is an uncomfortable sentence to say out loud. “We are making bold strategic investments in the future of work” is a press release, though. The outcome for the person losing their job is identical. The optics are dramatically different, and the secondary effect (a workforce now genuinely uncertain whether their role will exist in three years) is not nothing, from a leverage perspective. Anxious employees do not ask for raises, and they do not organize. They are just grateful to still be employed and they demonstrate this gratitude in ways that are useful to the institution."
      },
      {
        "type": "p",
        "text": "This is not a conspiracy. Conspiracies require coordination and discipline, and organizations are not good at either. It is just the ordinary behavior of institutions optimizing for their own interests, wearing the language of inevitability because inevitability is more comfortable than accountability."
      },
      {
        "type": "p",
        "text": "The same reports being cited as evidence contain, somewhat buried, a different story. McKinsey’s own analysis found AI’s long-term impact on white-collar roles may be beneficial. Goldman Sachs notes that productivity gains from automation have historically generated employment. The IMF emphasizes that AI and human labor are often complementary, particularly in work requiring judgment and contextual reasoning, which is to say, most of the work people actually care about doing."
      },
      {
        "type": "p",
        "text": "Pew found that 32% of workers already fear AI will reduce their opportunities. Another 52% are worried about its future impact. A Harris poll found 40% of workers familiar with generative AI are afraid it will replace them. These are not the numbers of a fringe reaction. They are majority sentiment, and they were not produced by irrational people. They were produced by people paying attention to what the institutions around them were communicating, and drawing reasonable conclusions."
      },
      {
        "type": "h3",
        "text": "The Great “Why”"
      },
      {
        "type": "p",
        "text": "The Great Resignation rattled employers in a way that took years to fully metabolize, and the timing of the AI narrative is not coincidental. Workers who had briefly held leverage needed to be reminded that the leverage was temporary, and nothing communicates that more efficiently than the suggestion that the role itself may not exist in three years. The digital boom justified the hiring, and the AI boom justified the correction. The people in between were just inventory adjustments with LinkedIn profiles."
      },
      {
        "type": "p",
        "text": "If you understand how large language models actually work, what they can do, what they structurally cannot do, where the architecture runs out of road, the corporate urgency looks considerably less inevitable."
      },
      {
        "type": "p",
        "text": "LLMs predict tokens, and they don’t reason, plan, or understand context in any way that threatens the judgment of a skilled person who is paying attention."
      },
      {
        "type": "p",
        "text": "The fear is real, but the specific thing being feared is, in many cases, being overstated by people who have a material interest in overstating it. This is a dangerous game for companies to play…especially when AI does, in fact, supercharge those who are skilled."
      },
      {
        "type": "h2",
        "text": "What Happens When You Mistake Efficiency for a Value"
      },
      {
        "type": "p",
        "text": "In April 2025, Duolingo’s CEO published an internal memo on LinkedIn (a choice that tells you something about the judgment involved) announcing that the company would become “AI-first.” The memo outlined plans to phase out contractors for tasks AI could handle and to factor AI usage into employee performance reviews."
      },
      {
        "type": "p",
        "text": "Duolingo lost over 400,000 TikTok followers in weeks. Sentiment across every platform flipped from predominantly positive to overwhelmingly negative. Users documented deleting the app despite years of accumulated streaks, posting it the way you post a breakup, with grief and with the need to be witnessed in the grief. Duolingo eventually wiped their social media presence and left cryptic messages in its place, which didn’t help. By April 2026, they had quietly dropped the policy of rating employees on AI usage."
      },
      {
        "type": "p",
        "text": "The CEO later said he hadn’t expected the reaction, and pointed out that other companies were doing the same thing without saying so publicly. He seemed to find this observation exonerating."
      },
      {
        "type": "p",
        "text": "It isn’t."
      },
      {
        "type": "p",
        "text": "Duolingo had built something genuinely unusual, which was a community of people who felt warmly toward a language-learning app, which is not a feeling that arrives automatically. They had done it through years of communication that was playful and human and invested in the actual experience of the people using the product. Then they sent a memo written in the language of operational efficiency (“removing bottlenecks,” “rethinking workflows”) applied to the work of the humans who had built that community, and the community understood exactly what was being communicated, and responded accordingly. You can have the most sophisticated brand strategy in the world and still manage to communicate, very clearly, that the people matter less than the margin. People hear that, and they are quite good at hearing it."
      },
      {
        "type": "p",
        "text": "Anthropic’s CEO told Axios in 2025 that AI could eliminate roughly half of all entry-level jobs within five years. “It sounds crazy,” he said, “and people just don’t believe it.” The combination of apocalyptic forecast and genuine puzzlement that anyone could be skeptical is a fairly precise summary of the communication failure happening across the industry: the people with the most power to shape this narrative are often the least positioned to understand what it lands like for someone whose livelihood is the subject of the forecast."
      },
      {
        "type": "p",
        "text": "Salesforce CEO Marc Benioff announced in early 2025 that the company would hire no new software engineers that year, citing AI productivity gains of over 30%. On an earnings call, he told investors: \"My message to CEOs right now is that we are the last generation to manage only humans.\" It is worth noting that in January 2023, Benioff sent a letter to employees acknowledging that Salesforce had \"hired too many people\" during the pandemic and laid off 7,000 of them as a result (roughly 10% of the company). Two years later, the same leadership that over hired, corrected, and over hired again was now explaining that the next round of restraint was about AI agents, not about the same cycle of expansion and contraction that has defined the company's workforce strategy for years. Benioff is simultaneously spending $300 million on Anthropic tokens in 2026. The engineers whose roles no longer need to be filled are presumably not finding this sequence of events particularly clarifying."
      },
      {
        "type": "p",
        "text": "Oof. The odds of ever hiring great talent at Salesforce just dropped dramatically. May the competitive odds be ever in Benioff’s favor."
      },
      {
        "type": "h2",
        "text": "There goes the talent…"
      },
      {
        "type": "p",
        "text": "Yann LeCun won the Turing Award in 2018 for his foundational work on deep learning. He spent more than a decade at Meta leading fundamental AI research, helping build the Llama models that genuinely changed how the field worked, accumulating the kind of credibility that is not purchased or performed. He was, by any reasonable measure, one of the people who knew most about what the technology could and could not do."
      },
      {
        "type": "p",
        "text": "In November 2025, he left. Meta had reorganized its AI efforts toward commercial products, which meant the fundamental research LeCun believed was the actual work got moved to the margins. He told Zuckerberg he could do it faster and better outside. He raised $1.03 billion for his new company, Advanced Machine Intelligence, and started building what he actually thinks AI should be."
      },
      {
        "type": "p",
        "text": "His view of large language models (the architecture powering ChatGPT, Claude, Gemini, and most of what companies are currently spending enormous amounts of money on) is not ambiguous. At Davos in January 2025, he said that “nobody in their right mind will use generative AI and large language models in the next five years.” He has called LLMs a dead end for anything resembling human-level intelligence and described them as the floppy disks of artificial intelligence: genuinely useful, genuinely transformative, and genuinely destined to be replaced by something that actually understands what it is doing."
      },
      {
        "type": "p",
        "text": "His technical critique is specific. LLMs predict the next token, but they have no grounding in the physical world, no persistent memory, no capacity for real reasoning or planning. They have absorbed an enormous amount of human language and become very fluent in producing more of it, which is impressive and also quite different from understanding. “We need world models, not word predictors,” he said. AMI is building systems that construct internal simulations of reality, learn physical and causal structure, and plan across time, which is a different thing entirely from what most organizations are currently deploying with great confidence."
      },
      {
        "type": "p",
        "text": "When the person who helped build the dominant technology decides it is a dead end worth a billion-dollar bet against, that is information. The question is whether the people making decisions are in a position to receive it."
      },
      {
        "type": "h2",
        "text": "The Case for More Academics"
      },
      {
        "type": "p",
        "text": "Artificial intelligence is a scientific discipline. It has a fifty-year body of literature, several distinct research traditions, unresolved theoretical questions with enormous practical implications, and a history of hype cycles that anyone who has read the literature would recognize immediately, because the pattern is not new and the enthusiasts are always surprised when it repeats."
      },
      {
        "type": "p",
        "text": "The modern AI boom is built on decades of academic work in statistics, probability theory, computational neuroscience, and cognitive science. The transformer architecture powering current LLMs came out of a 2017 research paper. Backpropagation was formalized in the 1980s. LeCun’s departure from Meta is, among other things, a story about what happens when an institution optimized for commercial products stops being a hospitable place for the foundational research that produces the next decade of commercial products."
      },
      {
        "type": "p",
        "text": "Understanding where the technology actually is, what it can do, what it cannot, where the theoretical ceilings are, and what the next meaningful developments are likely to look like, requires being in the literature. Not having read a summary, not having completed a course on prompt engineering."
      },
      {
        "type": "p",
        "text": "Insert dramatic eye roll here"
      },
      {
        "type": "p",
        "text": "Actually reading the papers, following the arguments, understanding the methodologies well enough to evaluate a new claim against the body of existing knowledge rather than accepting it because it arrived with confident language attached."
      },
      {
        "type": "p",
        "text": "A vibe coder (someone who builds fluently with current AI tools, prompts well, and ships products using the existing architecture) is genuinely valuable and the skill is real. The limitation is that a vibe coder can’t tell you whether the architecture your roadmap depends on has a ceiling you are approaching. They also can’t read a new capability claim and distinguish between genuine progress and the restatement of familiar limitations in more optimistic framing. Most importantly, they can’t tell you that the thing everyone is racing toward might be the floppy disk."
      },
      {
        "type": "p",
        "text": "An academic can, though. Not because academics are better people, but because that is what the training produces: the ability to evaluate claims in a domain against a body of accumulated knowledge, with appropriate skepticism and appropriate openness, which is exactly what this moment requires and what most organizations do not currently have on staff."
      },
      {
        "type": "h2",
        "text": "What To Do About It"
      },
      {
        "type": "p",
        "text": "The organizations that will navigate this well are the ones that understand what they are doing, which turns out to be a different population. Quality over speed will win this game."
      },
      {
        "type": "p",
        "text": "That means having someone on your team who reads AI research as a practice and not a hobby, who understands the difference between a capability claim and an architectural constraint, and who can look at your strategy and say with intellectual honesty whether you are building on a foundation or building on a ceiling."
      },
      {
        "type": "p",
        "text": "It also means having someone who takes the human side as seriously as the technical side, because the research on what AI deployment does to workers is as rigorous and as consequential as the research on what AI can do technically, and most organizations are not consulting it. They are learning it the Duolingo way, which is expensive and very public and involves a lot of cryptic social media."
      },
      {
        "type": "p",
        "text": "The most important person in your AI strategy might not be an engineer. It might be someone who has spent years understanding both the technology and the humans it is being applied to, which is a different credential and a different kind of thinking, and in this particular moment, the rarer one."
      }
    ]
  },
  {
    "slug": "so-youve-decided-to-do-product-operations",
    "title": "So, You’ve Decided to Do Product Operations",
    "dek": "A brief field guide to the discipline nobody understands, including many of the people being paid to practice it.",
    "date": "2026-05-31",
    "substack": "https://michellecavanaugh.substack.com/p/so-youve-decided-to-do-product-operations",
    "work": "pendulum",
    "blocks": [
      {
        "type": "p",
        "text": "Somewhere right now, a very confident person is explaining to a room full of other people that what their organization really needs is better processes. The room is nodding. Someone has even opened a Notion page, and a random consultant may be involved. Everyone in that room, including the confident person, is thinking about something entirely different when they hear the word “process,” which is how you end up six months later with 3k Google docs, three new project management tools, and the exact same problems you started with, now wearing small hats made of documentation."
      },
      {
        "type": "p",
        "text": "This is the normal state of affairs. I want you to know that upfront."
      },
      {
        "type": "h2",
        "text": "Everything You Know About Operations Is a Polite Lie"
      },
      {
        "type": "p",
        "text": "The working definition of operations, in most organizations, goes something like this: operations is the function that makes things run smoothly, reduces friction, helps the team work more efficiently, and generally makes everyone’s lives a little easier."
      },
      {
        "type": "p",
        "text": "This definition is wrong in a way that is almost beautiful in its wrongness, because it is so precisely wrong that it describes the opposite of what operations actually does when it’s working."
      },
      {
        "type": "p",
        "text": "Operations is not place to make things easier, and this is a great way to sell it to people if you don’t want to do the messy work of being honest. Operations is in the business of making things reliable, which sounds like the same thing until you’ve actually tried to build reliability into an organization, at which point you discover very quickly that reliability and ease are not just different concepts but are frequently enemies who have been nursing a quiet grudge for years."
      },
      {
        "type": "p",
        "text": "Making things reliable means adding steps. It means requiring approvals that slow things down. It means enforcing standards that feel, to the people being held to them, approximately as pleasant as a firm handshake from someone whose grip philosophy differs significantly from your own. It means that the person who used to handle something by feel, intuitively, drawing on years of experience and a kind of professional sixth sense, now has to follow a defined sequence of steps instead, which, yes, takes longer, and yes, makes them grumpy, and no, this does not mean you are doing operations wrong."
      },
      {
        "type": "p",
        "text": "A process that makes a skilled person’s life easier while quietly tethering the organization’s success to that specific skilled person’s continued presence, good health, and willingness to show up is not a process. It’s a dependency with a Confluence page attached to it."
      },
      {
        "type": "p",
        "text": "The goal, the actual goal, not the one that fits on a job description, is outcomes that do not depend on which specific human shows up that day. That’s it. That’s the whole thing. Everything else is commentary."
      },
      {
        "type": "p",
        "text": "I’m glad we could admit that and we made it this far."
      },
      {
        "type": "h2",
        "text": "The Word “Process” and Why Nobody Knows What It Means"
      },
      {
        "type": "p",
        "text": "Here is a fun game you can play at work, assuming your definition of fun accommodates a certain ambient sadness. Ask five different people in your organization to define what a process is. Not to name a process. To define the concept."
      },
      {
        "type": "p",
        "text": "What you will get, if your organization is like most organizations, is a tour of things that are adjacent to processes but are not processes, delivered with the confidence of people who have never been asked this question before and are experiencing something in the neighborhood of an existential wobble. The average professional will recite something half-remembered from a LinkedIn carousel or simply invent a position entirely and state it like they are ratifying a constitution, because both options are faster than thinking and produce roughly the same social outcome."
      },
      {
        "type": "p",
        "text": "You will also get checklists. For clarification, a checklist is a memory aid: a tool you use so you don’t forget to do the thing you already know how to do. Surgeons use them. Pilots use them. They are valuable and good. They are not processes."
      },
      {
        "type": "p",
        "text": "You will get workflow diagrams, which are representations of processes, usually aspirational ones, meaning they describe what the organization would like to believe happens rather than what actually happens, which is a different and more interesting story. An organization can have exquisite workflow diagrams and absolutely catastrophic actual workflows, and many do, and they have won awards for the diagrams."
      },
      {
        "type": "p",
        "text": "You will get “how we do things around here,” which is culture, or habit, or accumulated institutional behavior, or some load-bearing combination of all three. It may look like a process from a distance. Up close it is mostly vibes."
      },
      {
        "type": "p",
        "text": "A process, in the sense that matters for operations, is a defined sequence of steps with clear inputs, clear outputs, defined decision criteria, and assigned accountability constructed in such a way that a competent person following it faithfully would produce the same result as any other competent person following it faithfully, without needing to call the person who invented it to ask what they meant by step four."
      },
      {
        "type": "p",
        "text": "That last part is the test. If the process works because Janet knows what “use good judgment here” means and Janet has been with the company for eleven years and has absorbed by osmosis a very particular understanding of what counts as good judgment in this organization, then you don’t have a process."
      },
      {
        "type": "p",
        "text": "You have Janet."
      },
      {
        "type": "p",
        "text": "And Janet will retire someday, or get poached, or simply have a period of her life that requires her attention to be elsewhere, and the process will retire with her."
      },
      {
        "type": "p",
        "text": "You can document Janet’s judgment, and lots of organizations do this. They interview Janet, they watch Janet work, they write down everything Janet says about how she makes decisions, and at the end they have a very thorough document about Janet that is largely incomprehensible to anyone who is not also Janet. A real process replaces the need for judgment with criteria, at every step where that’s possible, and defines the judgment required at every step where it isn’t."
      },
      {
        "type": "h2",
        "text": "The Part Everyone Skips, Which Is Why Everything Goes Wrong"
      },
      {
        "type": "p",
        "text": "I want to tell you about something that gets left out of most operations conversations because it is uncomfortable and makes people defensive."
      },
      {
        "type": "p",
        "text": "Processes require authority."
      },
      {
        "type": "p",
        "text": "Not the authority to design a process - anyone with a whiteboard and two free hours can design a process, and many people do, which is part of the problem. The authority to enforce it. The authority to look at someone who has gone around the process, or ignored the process, or “adapted” the process in the moment because it seemed more efficient and they are a person who values their own efficiency quite highly and say, clearly and without apology: no. That is not how this works here."
      },
      {
        "type": "p",
        "text": "This is where the “making everyone’s lives easier” philosophy of operations collapses entirely, because processes enforced with authority make some people’s lives harder on purpose, by design, as a feature and not a bug. They create friction for the person who wants to do things their own way. They create accountability for the person who would prefer not to be accountable. They require communication from the person who finds communication inefficient."
      },
      {
        "type": "p",
        "text": "Operations without authority is just a series of suggestions and most organizations are absolutely buried in suggestions. There is no shortage of improvement ideas, the ideas are doing fine, the ideas do not need your help."
      },
      {
        "type": "p",
        "text": "The authority problem takes a few common forms, and sometimes the ops function is positioned as a service organization, which means it exists to support the people doing the “real” work, which means it has no actual standing to hold those people to anything, which means the processes are whatever people feel like doing that day with some light documentation attached (if that). Sometimes the authority technically exists but nobody uses it, because the enforcement conversations are awkward and the ops leader has decided, consciously or not, that being liked matters more than being effective. Sometimes the authority exists and is applied, but inconsistently; meaning, the rules apply to the teams who don’t push back and not to the ones who do, which is arguably worse than no rules at all, because at least no rules is a coherent position."
      },
      {
        "type": "p",
        "text": "Where operations sits in the organization, who it reports to, what it can actually do when a process is violated are the structural questions that matter more than almost anything about the content of the processes themselves. A perfect process with no authority behind it is a very nice document. A rough process enforced consistently is an organization that functions."
      },
      {
        "type": "h2",
        "text": "Individual Skill is Not Organizational Capability (and Confusing Them is Expensive)…"
      },
      {
        "type": "p",
        "text": "Organizations have a persistent tendency to mistake what their best people can do for what the organization can reliably produce, and this confusion is the source of a great deal of expensive pain."
      },
      {
        "type": "p",
        "text": "Individual skill is what a person can do. Organizational capability is what the organization produces consistently, regardless of which people are involved on any given day. These two things are related, for example you can’t build organizational capability without skilled people, but they are not the same thing, and the distance between them is exactly where operations lives."
      },
      {
        "type": "p",
        "text": "An organization full of talented, capable people with no coherent processes is actually quite fragile, in the specific way that things are fragile when their continued function depends on a set of conditions that cannot be guaranteed. It performs brilliantly when the right people are present, aligned, motivated, and not being recruited by a competitor. It fails in predictable ways: onboarding takes months because there’s nothing to onboard to, just a loose collection of things the current people know; quality varies because it tracks individual mood and circumstance rather than any defined standard; growth is painful because you can’t replicate skilled intuition the way you can replicate a defined sequence of steps."
      },
      {
        "type": "p",
        "text": "The confusion runs in both directions, and both directions are bad. Organizations that mistake individual skill for organizational capability invest in hiring instead of systems and are perpetually confused about why more headcount doesn’t solve their problems. Organizations that mistake process compliance for organizational capability end up with mediocre people faithfully executing mediocre processes and calling it operational maturity, which is its own kind of tragedy."
      },
      {
        "type": "p",
        "text": "The thing you want is skilled people operating within authoritative processes, where the process defines the floor and the people define the ceiling, and the floor is high enough that even a bad week doesn’t produce catastrophic outcomes. But the floor has to exist, and exist independently of any particular person, before any of the rest of this works."
      },
      {
        "type": "h2",
        "text": "And Now, the Part about AI, Which You were Waiting for…"
      },
      {
        "type": "p",
        "text": "Let me tell you something that is not popular at conferences or in LinkedIn posts, where the content is optimized for a kind of frictionless enthusiasm that has become the rhetorical equivalent of smooth jazz."
      },
      {
        "type": "p",
        "text": "If your processes are not solid, AI will make your problems worse faster."
      },
      {
        "type": "p",
        "text": "It will do this very efficiently. This is one of the things AI is genuinely good at."
      },
      {
        "type": "p",
        "text": "Here is what AI is actually excellent at, in the operational context: taking individual skill and expanding its surface area. A skilled analyst with good AI tooling can do work in an hour that used to take a week. A competent writer with AI assistance produces more, faster. A capable operator with AI-powered tooling can monitor, synthesize, and act on information at a scale that was previously impossible for one person to manage."
      },
      {
        "type": "p",
        "text": "Every one of those examples requires the skill to exist first. AI amplifies what’s already there and it makes skilled people more skilled, productive people more productive, capable people more capable. It does this very well, and the productivity gains are real, and none of this is the problem."
      },
      {
        "type": "p",
        "text": "The problem is when organizations try to use AI as a substitute for the process definition work they haven’t done."
      },
      {
        "type": "p",
        "text": "It goes like this: instead of doing the uncomfortable work of actually defining their processes (the inputs, the outputs, the decision criteria, the accountabilities, the conversation about what “good” actually means here) they build a sophisticated AI system that approximates what good judgment looks like in their domain. They train it on their best people’s work. They prompt it with their principles. They deploy it and tell themselves this is their process now."
      },
      {
        "type": "p",
        "text": "What they actually have is an AI system that has inherited all the problems of the undefined processes it was built on top of, plus some new ones that are harder to see. When it produces bad output (and it will, because every system produces bad output sometimes) there is no authoritative baseline to compare it against, because the process doesn’t exist in any explicit form. You are debugging it against expert opinion and collective vibes, which means you are right back where you started, except now there’s also an AI involved."
      },
      {
        "type": "p",
        "text": "Real process definition is a forcing function for organizational honesty. When you sit down and try to write out every decision point in a workflow (actually write them out, with criteria, not just labels and Claude skills) you discover that half of them don’t have defined criteria and have been running on someone’s accumulated expertise that has never been made explicit. That discovery is uncomfortable, but it is also the beginning of the actual work."
      },
      {
        "type": "p",
        "text": "AI can help with that work. It can help surface patterns in historical decisions, generate draft documentation for expert review, flag inconsistencies across teams. These are legitimate and useful applications. But AI can’t make the organizational decision about what the standard should be. It can’t enforce the standard once that decision is made. It can’t hold anyone accountable for deviation."
      },
      {
        "type": "p",
        "text": "Those remain human responsibilities, stubbornly, as they have always been, regardless of how impressive the tools become."
      },
      {
        "type": "h2",
        "text": "What You Get When You Actually Build It"
      },
      {
        "type": "p",
        "text": "When you have authoritative processes (genuinely defined, genuinely enforced) the relationship to AI transforms entirely."
      },
      {
        "type": "p",
        "text": "You can automate the low-judgment steps with confidence, because you know exactly what those steps are and what good output looks like. You can use AI to monitor compliance, because you have something to monitor against. You can use AI to identify where things are breaking down, because you have a clear enough definition of “not broken” to recognize its absence. You can use AI at the decision points that require skilled judgment, because those decision points are defined, and the information relevant to them is known, and the people exercising the judgment understand the context."
      },
      {
        "type": "p",
        "text": "Skilled people, operating within authoritative processes, with good AI tools, can do things that would have seemed implausible a few years ago. The process provides the floor, and the people provide the judgment. The AI expands the range of what both can accomplish."
      },
      {
        "type": "p",
        "text": "That is the actual promise. Not a shortcut past the foundational work, but a force multiplier on top of it."
      },
      {
        "type": "h2",
        "text": "A Brief Note on Thanklessness"
      },
      {
        "type": "p",
        "text": "Operations, done properly, is among the most thankless functions that exists in organizational life, which is saying something because organizational life has produced a remarkable diversity of thankless functions."
      },
      {
        "type": "p",
        "text": "When it works, nobody notices and things simply happen. Customers are served with consistency, new people come up to speed in a reasonable timeframe, quality doesn’t depend on who’s having a good week, and leadership can make plans with some reasonable confidence they’ll be executed. This all happens quietly, invisibly, the way good infrastructure always does, because the thing that good infrastructure produces is an absence of drama, and absence of drama is not the kind of thing that generates celebration or career advancement or the warm glow of recognition."
      },
      {
        "type": "p",
        "text": "When it fails, everyone has opinions. The opinions are almost always about symptoms (we need better people, better tools, better communication, better leadership) without quite reaching the diagnosis, which is that the organization has been running on individual skill and accumulated habit and is discovering, in real time and at some cost, the difference between that and actual capability."
      },
      {
        "type": "p",
        "text": "The work of operations is building something that functions when the circumstances aren’t favorable. For example, when the best people are having difficult periods, when growth has outrun the talent pipeline, when the tools change and the team turns over and the market does whatever it decides to do next."
      },
      {
        "type": "p",
        "text": "You build the process first. You make it authoritative. You do the uncomfortable enforcement work. You have the conversation about what “good” actually means in your specific context, with your specific constraints, producing your specific outputs."
      },
      {
        "type": "p",
        "text": "Then, and only then, you let AI make it extraordinary."
      },
      {
        "type": "p",
        "text": "The first step is writing down what should happen, for one workflow, end to end, and seeing whether the people involved can agree on whether that description is accurate. Not what they aspire to do, but what they actually do."
      },
      {
        "type": "p",
        "text": "That conversation is where it starts."
      }
    ]
  },
  {
    "slug": "how-the-internet-is-quietly-breaking",
    "title": "How the Internet Is Quietly Breaking People’s Minds",
    "dek": "On information overload, cognitive collapse, and the strange new psychosis playing out in your comment section every day.",
    "date": "2026-05-30",
    "substack": "https://michellecavanaugh.substack.com/p/how-the-internet-is-quietly-breaking",
    "work": "thoughts",
    "blocks": [
      {
        "type": "p",
        "text": "There’s a person in every comment section you’ve ever scrolled through. You know the one. They’re speaking in all caps about something that happened weeks ago. They’re connecting dots that don’t connect. They’re absolutely certain, with a seething, radioactive certainty, that everyone else is lying, blind, or complicit. They’re announcing and demanding agreement. There’s a quality to it that feels less like disagreement and more like... broadcast. Like they’re transmitting from somewhere you can’t quite reach."
      },
      {
        "type": "p",
        "text": "You probably shook your head and kept scrolling. Maybe laughed at them."
      },
      {
        "type": "p",
        "text": "But here’s the thing I keep coming back to: what if that person didn’t start that way? What if something happened to them that moved them from a functional human being to whatever that is?"
      },
      {
        "type": "p",
        "text": "I think we need to talk about what the internet is doing to the brain. Not in the vague, hand-wavy “screens are bad” way we’ve been having this conversation for twenty years. I mean mechanistically. I want to talk about cognitive bandwidth, information saturation, and the uncomfortable reality that for a meaningful subset of people, constant exposure to the internet’s information firehose is producing something that looks, clinically, a lot like psychosis."
      },
      {
        "type": "h2",
        "text": "The Brain Was Not Built for This"
      },
      {
        "type": "p",
        "text": "Let’s start with the basics, because they’re more radical than they sound."
      },
      {
        "type": "p",
        "text": "The human brain has a fixed capacity for processing information. This is a hard architectural limit: your working memory can hold roughly seven items at once, and your prefrontal cortex, the part responsible for filtering signals from noise and making rational decisions, can only do so much before it starts to buckle under the load."
      },
      {
        "type": "p",
        "text": "For most of human history, information arrived slowly. You learned what you needed to survive your immediate environment, and even as recently as a few generations ago, the information ecosystem was relatively bounded: a newspaper, the evening news, what your neighbors told you. The brain evolved for that and it was calibrated for that."
      },
      {
        "type": "p",
        "text": "Now consider that researchers have estimated the average person today receives more information in a single day than someone living a century ago encountered in an entire lifetime. That’s the scale of what we’ve done to ourselves, and we’ve taken a cognitive system designed for a specific throughput and we’ve flooded it, continuously, from the moment we wake up until the moment we go to sleep."
      },
      {
        "type": "p",
        "text": "What happens when a system runs past its capacity, persistently, with no relief valve?"
      },
      {
        "type": "p",
        "text": "It distorts."
      },
      {
        "type": "h2",
        "text": "Cognitive Fragmentation Is Now a Clinical Category"
      },
      {
        "type": "p",
        "text": "In November 2025, researchers published a paper in Frontiers in Digital Health that should have been front-page news. The study introduced a new framework for understanding mental health in the digital era, identifying what they called emergent psychopathologies or disorders that traditional diagnostic manuals were simply not built to capture. At the top of the list were two conditions endorsed by over 80% of the 75 licensed mental health clinicians surveyed: Continuous Partial Attention Disorder and Digital Anxiety Disorder."
      },
      {
        "type": "p",
        "text": "Continuous Partial Attention Disorder is exactly what it sounds like. It’s the state of never being fully present anywhere and always monitoring, always scanning, always half-attending to the stream. It’s what happens when your nervous system adapts to constant input by never fully committing its resources to any single thing. You become, in a very real sense, cognitively fragmented. The ability to hold a sustained thought, to follow a long argument, to sit with complexity degrade."
      },
      {
        "type": "p",
        "text": "Cognitive fragmentation doesn’t just make you scattered. It makes you vulnerable. When you can’t sustain careful reasoning, you become more susceptible to the thing the brain falls back on when it’s overwhelmed. Things like pattern matching, emotional response, and the path of least cognitive resistance."
      },
      {
        "type": "p",
        "text": "That path leads directly into the arms of the algorithm."
      },
      {
        "type": "h2",
        "text": "The Algorithm’s Not Your Friend and It’s Not Neutral."
      },
      {
        "type": "p",
        "text": "We’ve had the social media conversation so many times that most people have developed a kind of immunity to it. Yes, the algorithm maximizes engagement. Yes, that means outrage. We know. We’ve accepted it as background toxicity."
      },
      {
        "type": "p",
        "text": "But I don’t think we’ve fully reckoned with what this means when you combine it with a cognitively depleted user because the algorithm isn’t just showing you content for a reaction. It’s actively learning your cognitive vulnerabilities and exploiting them with increasing precision."
      },
      {
        "type": "p",
        "text": "Research published in PNAS analyzing more than 100 million pieces of content across Facebook, Reddit, and the artist formerly knkown as Twitter (X) found that the aggregation of users into homophilic clusters dominates online dynamics."
      },
      {
        "type": "p",
        "text": "Homophilic = groups of people who share beliefs and reinforce each other."
      },
      {
        "type": "p",
        "text": "The algorithms detect your confirmation biases, amplify them, and feed them back to you. Every engagement, every hover, every lingering glance at a post signals the system to narrow the aperture further."
      },
      {
        "type": "p",
        "text": "What you end up with is what researchers call a filter bubble: a personalized information environment that functions less like a window onto the world and more like a mirror. And mirrors, as anyone who’s spent too long staring into one knows, can start to do strange things to your sense of reality."
      },
      {
        "type": "p",
        "text": "The particularly insidious part is that the mirror doesn’t reflect you accurately. It reflects the most emotionally activated version of you. The version that clicked on the scary headline, or the one that lingered on the post about betrayal, about enemies, about hidden truth. The algorithm doesn’t know you, but it knows your worst hour, and it keeps showing you more of it if you keep showing that version of yourself to the algorithm. A snake eating itself metaphor would be applicable to the circumstance."
      },
      {
        "type": "h2",
        "text": "When Confirmation Bias Becomes Something More"
      },
      {
        "type": "p",
        "text": "Here’s the clinical bridge I want to walk you across carefully, because I think it’s important and easy to overstate."
      },
      {
        "type": "p",
        "text": "Psychosis, in the clinical sense, involves a break from shared reality and typically through hallucinations, delusions, or severely disorganized thinking. It has biological substrates, and it runs in families. It’s not something you can scroll your way into if you’re neurologically healthy and your life is otherwise stable."
      },
      {
        "type": "p",
        "text": "The research is clear, and clinicians are increasingly saying it out loud: the internet doesn't cause psychosis, but for people carrying latent vulnerability, the sleep-deprived, the chronically stressed, those with preexisting conditions that already strain their grip on reality, it acts as an accelerant. Psychosis fuel."
      },
      {
        "type": "p",
        "text": "A 2025 review published in Frontiers in Psychiatry proposed what researchers called the Delusion Amplification Model. The argument is that for people prone to unusual beliefs, things like paranoid thinking, grandiosity, suspiciousness, or a fragile grip on consensus reality, curated feeds, echo chambers, and anonymous online communities don’t just reflect those tendencies. They actively reinforce and elaborate them."
      },
      {
        "type": "p",
        "text": "Think about what an echo chamber does to a nascent delusional belief. You believe, tentatively, that something is being hidden from you. You search for information confirming that belief. The algorithm, detecting your engagement pattern, shows you more. The community you find online reflects your belief back to you, validated by strangers who feel like the only people who get it. The belief grows more elaborate, more certain, more insulated from contradiction. Every piece of disconfirming information becomes, within this framework, further evidence of the conspiracy."
      },
      {
        "type": "p",
        "text": "This is not metaphorical. This is a mechanistic description of how certain people’s relationship to reality deteriorates in digital environments."
      },
      {
        "type": "h2",
        "text": "Doomscrolling Is the Gateway Drug"
      },
      {
        "type": "p",
        "text": "Before we get to the full collapse, there’s an intermediate state worth naming. You’ve probably been in it, and I know I’ve been in it."
      },
      {
        "type": "p",
        "text": "It starts with a notification, then a headline, and then a cascade of headlines, each one more alarming than the last. Before you realize it, you’ve lost forty minutes and you feel worse than when you started. You are anxious, agitated, vaguely convinced that everything is burning down, and somehow unable to stop."
      },
      {
        "type": "p",
        "text": "This is doomscrolling. The term entered Merriam-Webster’s dictionary because it was describing something real and widespread enough to need a name. But the mechanics of it are worth sitting with. Mayo Clinic psychologist Craig Sawchuk explains that the brain is hardwired to orient toward novelty and threat and this wiring kept humans alive for tens of thousands of years. Social media exploits it with ruthless efficiency. The scroll is infinite. The content is algorithmically selected for maximum emotional activation. Crucially, the compulsion to keep going is rooted in the same cognitive system that drove our ancestors to check the tree line for predators: the desperate need to feel informed and therefore safe."
      },
      {
        "type": "p",
        "text": "Except the tree line never empties. All rivers run to the sea, but the sea is never full."
      },
      {
        "type": "p",
        "text": "The threats never resolve, and unlike a predator you can either flee or accept has moved on, the internet’s threat environment replenishes itself constantly, in real time, faster than any human nervous system can process and discharge."
      },
      {
        "type": "p",
        "text": "Prolonged exposure to this, and we’re talking about the average adult spending multiple hours a day in this state, produces measurable outcomes: elevated cortisol, disrupted sleep, sustained anxiety, depression, and what researchers have documented as social media fatigue. The emotional exhaustion that comes from a cognitive system running on overdrive with no recovery period."
      },
      {
        "type": "p",
        "text": "Sleep disruption alone creates a feedback loop worth noting. A 2022-2023 study of university students found that heavy late-night online activity disrupted sleep, and that insomnia fully mediated the link between compulsive internet use and paranoid ideation. Sleep deprivation makes your prefrontal cortex less effective at distinguishing signal from noise and the paranoid ideation increases with continuous exposure."
      },
      {
        "type": "h2",
        "text": "The Comments Section as Diagnostic Window"
      },
      {
        "type": "p",
        "text": "So let’s talk about what you see when you look at the comments."
      },
      {
        "type": "p",
        "text": "There’s a specific behavioral signature that I think most of us recognize intuitively but haven’t fully named: the person whose online presence has decoupled from ordinary social reality. They’re performing certainty for an invisible audience that, in their mind, they are either exposing or rallying. The content of their certainty almost doesn’t matter, and it could be political, medical, conspiratorial, religious. What matters is the quality: absolute, indignant, sealed against contradiction, often grandiose and definitely delusional."
      },
      {
        "type": "p",
        "text": "This maps, uncomfortably precisely, onto the clinical description of psychotic thinking because the cognitive and emotional architecture is similar. The capacity for epistemic humility or for holding a belief while acknowledging you might be wrong has been completely overwhelmed. The person is no longer in dialogue with reality and, instead, they are broadcasting a version of it."
      },
      {
        "type": "p",
        "text": "What the internet has done is provide an audience for this. Before social media, the person having this kind of cognitive experience might have been visible only to the people immediately around them. The friction of the real world, the faces looking at you blankly, the social signals of confusion or concern, provided a kind of reality check. Online, that friction is removed and you can find, within minutes, a community that reflects your beliefs back at you. The more extreme the belief, the more dedicated the community, because extreme beliefs select for committed adherents."
      },
      {
        "type": "p",
        "text": "The algorithm amplifies this because outrage and certainty generate engagement, and engagement generates revenue. The platform has no interest in your epistemic health: only in your attention."
      },
      {
        "type": "h2",
        "text": "Who’s Most Vulnerable"
      },
      {
        "type": "p",
        "text": "It would be comforting to believe this only happens to people who were already unstable. The research suggests the picture is more complex and less comfortable than that."
      },
      {
        "type": "p",
        "text": "Yes, people with existing psychotic-spectrum conditions are at elevated risk. The study published in the Schizophrenia Bulletin found that among adults with psychosis, those experiencing paranoia and grandiosity were more likely to use the internet for mental health information in ways that could reinforce their symptoms through a feedback loop where the illness drives the search behavior and the search behavior drives the illness. We are back to the snake metaphor, again…"
      },
      {
        "type": "p",
        "text": "But vulnerability is a spectrum, not a binary. Stress, sleep deprivation, grief, isolation, chronic anxiety, all of these things reduce cognitive bandwidth and increase susceptibility to the distortions the algorithm offers. The pandemic years were a controlled experiment in this: isolation drove people online, doomscrolling exploded, and the WHO coined the term “infodemic” to describe the parallel epidemic of misinformation that emerged alongside COVID. Rates of anxiety and depression increased 25% globally. Conspiracy theories spread at viral scale, and these weren’t all people with pre-existing psychiatric conditions. They were ordinary people whose cognitive systems were overwhelmed by circumstances, and the internet was waiting."
      },
      {
        "type": "h2",
        "text": "Please Don’t Misunderstand"
      },
      {
        "type": "p",
        "text": "I want to be clear about what I’m saying."
      },
      {
        "type": "p",
        "text": "What I am saying is that we’ve built an information environment that human cognition was not designed to handle, and we’ve handed it to people with no instruction manual, no cognitive training, and in many cases no awareness of what it’s doing to them. We’ve created systems that profit from emotional activation and have optimized them relentlessly for that purpose. We’ve removed the social friction that used to provide a reality check for distorted thinking, and we’re watching the results play out in real time, in the comments, in the threads, in the increasingly wild gap between how people talk online and how they function in the actual world."
      },
      {
        "type": "p",
        "text": "Mental health professionals are scrambling to categorize what they’re seeing. The diagnostic frameworks we have don’t cleanly capture what happens when a person’s relationship to reality is shaped primarily by an algorithmic feed designed to make them emotionally charged, so we’re going to need new language."
      },
      {
        "type": "h2",
        "text": "Moving Forward…"
      },
      {
        "type": "p",
        "text": "The next time you see someone in a comment section behaving in a way that seems, frankly, unhinged, I’m not suggesting you feel sorry for them in a way that obligates you to engage because I’ve tried that and it just gets worse. I’m suggesting you consider the possibility that you’re not watching a moral failure, but you’re engaging in a cognitive one. You’re watching what happens when a human nervous system, possibly already under pressure, possibly already vulnerable, gets fed into a machine that has been specifically optimized to find its cracks and pull."
      },
      {
        "type": "p",
        "text": "That doesn’t excuse the behavior. But it might change how you understand it. And understanding it is the first step toward doing something about the machine itself."
      },
      {
        "type": "p",
        "text": "If you found this useful, share it with someone who needs to hear it, and maybe close the app when you’re done."
      }
    ]
  },
  {
    "slug": "the-hollow-feed",
    "title": "The Hollow Feed",
    "dek": "On illiteracy, the industrialization of meaning, and what we surrender when stories no longer ask anything of us",
    "date": "2026-05-28",
    "substack": "https://michellecavanaugh.substack.com/p/the-hollow-feed",
    "work": "beloved",
    "blocks": [
      {
        "type": "p",
        "text": "For some time now, my friend Oleg and I have held regular conversations about the kind of questions that resist easy answers. It is in the nature of those exchanges that their value rarely announces itself in the moment. This essay grew out of one such conversation, in the way that serious thought often does: obliquely, and after a delay."
      },
      {
        "type": "p",
        "text": "Oleg has a particular gift for these things and they are called Olegisms, a distinct combination of how he thinks and how he says it, which has a way of reframing a problem just enough that you leave the conversation seeing it differently than when you arrived. This piece is a product of that."
      },
      {
        "type": "p",
        "text": "I credit him not as a formality but because the intellectual obligation is real. A different conversation that afternoon, and this essay doesn’t exist."
      },
      {
        "type": "p",
        "text": "There is a particular kind of poverty that does not announce itself with hunger or cold. Arriving softly, wearing the clothes of abundance, it comes bearing infinite content: ten thousand songs, ten million videos, an endless scroll of images that pulse and flash and vanish before the mind can make a home in any of them. Poverty is the access, and we have lost the reason to read."
      },
      {
        "type": "p",
        "text": "We speak often of illiteracy as a failure of education, a gap in the machinery of schools and policy. But another kind of illiteracy spreads quietly through cultures that are, by every measurable standard, the most literate in human history…spreading through people who can decode letters perfectly well, who have simply lost the need to hold meaning inside themselves. To carry a story, to wrestle with it, to be changed by its weight. Call it functional illiteracy of meaning: the gradual erosion of the interior life that deep narrative requires, produced not by deprivation but by a cheaper offer we have largely accepted."
      },
      {
        "type": "p",
        "text": "The Factory Floor of the Imagination"
      },
      {
        "type": "p",
        "text": "Walter Benjamin, writing in 1935, observed that mechanical reproduction strips a work of art of its aura and that quality of singularity, of presence in time and space, that makes an encounter with art feel irreplaceable. A fresco in a chapel cannot be separated from the chapel, the light, the occasion, the community it was made for. A photograph of that fresco can be printed a million times and hung in a dentist’s waiting room. Something is retained. Something essential is lost."
      },
      {
        "type": "p",
        "text": "Benjamin was optimistic about what might emerge from that loss. He believed that reproducibility could democratize art, strip away the mystical aura, and create new, politically vital forms. In some ways he was right. But he couldn’t have fully anticipated what happened when the logic of mass production was applied not only to the distribution of art, but to the creation of it when the factory floor moved upstream, into the imagination itself."
      },
      {
        "type": "p",
        "text": "The industrialization of storytelling began long before algorithms or artificial intelligence. The moment narrative became a product, governed by the economics of attention at scale, something shifted in the governing question. Hollywood discovered early that certain emotional triggers, the clear hero, the external threat, the romantic resolution, could be calibrated to produce a reliable yield of feeling. Genre fiction codified these triggers into templates. Television refined them into formats. The art was not necessarily bad. But the question moved from what is true? to what works? And what works, at scale, tends to run simpler, louder, and shallower than what is true."
      },
      {
        "type": "p",
        "text": "What is remarkable about the current moment is not that this process has accelerated, though it has, but that the machinery has grown so fine-grained that it now operates at the level of the synapse. The modern attention economy does not merely produce cheap stories. With algorithmic precision, it has learned to bypass the story entirely and address the nervous system directly."
      },
      {
        "type": "p",
        "text": "Dopamine Is Not Meaning"
      },
      {
        "type": "p",
        "text": "When a short video makes you laugh in 1.3 seconds, or an image elicits a swell of desire, or a headline punctuates the chest with a flicker of outrage, something real has happened. A biological process has been triggered. Reward pathways have fired. The experience is genuine in the same way that any stimulus is genuine. Genuine, however, and meaningful are different things, and the distance between them matters enormously."
      },
      {
        "type": "p",
        "text": "Meaning requires duration. A thing must be held in mind long enough to be turned over, compared with experience, integrated into the self. The story of a man who loses everything and learns, painfully, to live differently and that story takes time. The reader must accompany the character through darkness without knowing the exit. This requires what we might call tolerance for irresolution: the willingness to sit inside an open question without flinching toward an answer. These are not comfortable experiences. They are also, arguably, the experiences most responsible for whatever we mean when we say a person has depth."
      },
      {
        "type": "p",
        "text": "The market for discomfort is, predictably, small. The market for stimulation is effectively unlimited. And so the cultural ecosystem has, over decades, increasingly selected for content that triggers without demanding. The scroll does not ask you to sit with anything. Feeling after feeling arrives and disappears, until the session ends not with a sense of having encountered something but with a faint, puzzling hollowness and the psychic equivalent of a large meal that provides no nutrition."
      },
      {
        "type": "p",
        "text": "The content that performs best across virtually every major platform engages the same limbic circuits activated by threats, sexual stimuli, social status cues, and in-group/out-group signaling. These are ancient systems, far older than language, responding with a speed and reliability that no meaning-making process can match. To compete with them, narrative must offer something they cannot: the transformation of experience into understanding. When narrative abandons that goal, ceasing to ask anything of the audience, the result is mere stimulation dressed in the story’s clothing."
      },
      {
        "type": "p",
        "text": "The Democratization Argument and the Costs"
      },
      {
        "type": "p",
        "text": "The standard defense of the current cultural order is democratic. More people can make art now. More voices can be heard. The gatekeepers, publishers, studios, labels, critics, have been disintermediated, and stories that would never have been told in the old system now find their audiences. This is not false. The democratization of creation has produced genuine wonders: literature from the margins, music from traditions the industry would never have bothered to amplify, films made on phones carrying more human truth than most of what occupies the multiplex."
      },
      {
        "type": "p",
        "text": "But democratization carries a paradox that its advocates frequently elide. When everything is available, curation becomes a scarce resource. And curation, in the attention economy, is performed by engagement, which is to say, by the biological triggers discussed above. The algorithm does not ask whether a piece of content is profound. It asks whether the piece was watched, shared, rewatched, commented upon with strong emotion. This measurement is not neutral. Systematic selection pressure runs against difficulty, ambiguity, restraint, and the slow burn of meaning that takes time to feel."
      },
      {
        "type": "p",
        "text": "The result reaches further than bad art driving out good art. More insidiously, the definition of good is gradually rewritten by the logic of the machine. Good becomes what moves quickly. Admirable becomes what commands attention. The virtues of depth (patience, density, the willingness to resist easy resolution) come to seem not virtuous but simply incompetent, bad at the job. And as that redefinition seeps outward, it shapes not only what audiences consume but what artists make, and more subtly still, what they believe art is for."
      },
      {
        "type": "h2",
        "text": "The Imagination is Lost"
      },
      {
        "type": "p",
        "text": "The true cost of this transformation runs deeper than aesthetics. The great novels will survive as artifacts. Shakespeare is not in danger. The cost accrues in the interior lives of people who grow up in an environment where narrative never asks them to do the work of internalization, where meaning arrives pre-digested, where ambiguity is resolved before it can become uncomfortable, where every story ends with the appropriate emotional release already packaged and labeled."
      },
      {
        "type": "p",
        "text": "The capacity to sit with a story, to remain uncertain, to be changed slowly, this extends far beyond a literary skill. The cognitive and emotional foundation of empathy, of moral reasoning, of the ability to understand people whose lives differ radically from one’s own, all of it is built through exactly this kind of engagement. Stories, at their most functional, are machines for producing that understanding, and they achieve it through demands: on attention, on patience, on the willingness to follow someone into darkness without a guarantee of light. Strip those demands away in pursuit of engagement and you have eliminated the process by which the product did its work."
      },
      {
        "type": "p",
        "text": "A person who has only ever consumed stimulation and who has never been required to hold a story inside themselves until it changed something can still decode text, navigate interfaces, and process information with considerable skill. The difficulty shows up elsewhere: in the conversation that demands real listening, the relationship requiring tolerance for irresolution, the ethical situation resisting clean resolution, the life that insists on remaining complicated."
      },
      {
        "type": "p",
        "text": "The Unasked Question"
      },
      {
        "type": "p",
        "text": "Every significant shift in information technology has provoked anxiety about what would be lost. Socrates worried that writing would erode memory. Gutenberg’s critics feared the flood of unvetted text. Television was going to destroy conversation. The internet would end concentration. These anxieties were not entirely wrong and with each technology an alteration to cognitive habits (in ways still not fully understood) surfaced. Human beings adapted, finding new affordances in new tools."
      },
      {
        "type": "p",
        "text": "The current situation may differ less in kind than in scale. No previous information environment has addressed the nervous system with the precision and persistence the contemporary attention economy achieves. No previous storytelling medium has produced infinite content tailored to individual biological profiles, at no cost, in real time. The adaptation required to inhabit this environment without surrendering the interior life it works against is significant and nothing in the market has any incentive to produce it."
      },
      {
        "type": "p",
        "text": "What would it mean to take this seriously? Not retreating from technology, not mourning a golden past that was never as golden as memory insists, but asking plainly: what conditions allow narrative to continue doing the work that only narrative can do? What does living entirely on the surface of stimulation cost an individual, a culture and perpetually elicited rather than addressed? What would it mean to insist, against the current, that some experiences are worth the difficulty they require?"
      },
      {
        "type": "p",
        "text": "These questions belong to individuals, educators, and artists. The market has already answered them, in the only language it speaks: engagement metrics, time-on-platform, conversion rates. The self that might resist those answers, however, that self requires maintenance, exercise, the regular practice of sitting with something hard. Left entirely to the feed, it grows quieter and quieter."
      },
      {
        "type": "p",
        "text": "The hunger for meaning does not disappear when meaning becomes scarce. It goes underground, or it distorts before finally emerging as the frantic over-interpretation of trivial content, as conspiratorial pattern-seeking, as the desperate intensity people bring to parasocial relationships with streamers and influencers who offer the simulation of intimacy where actual story used to be. The hunger is real. What is being fed to it is not nourishment."
      },
      {
        "type": "p",
        "text": "The hollow feed will continue to fill. The question is whether anyone, in the middle of all that noise, will insist on the quiet, difficult, irreplaceable work of actually reading the words behind the words."
      }
    ]
  },
  {
    "slug": "the-vocabulary-police-dont-read-enough",
    "title": "The Vocabulary Police Don't Read Enough Books",
    "dek": "How the People Calling Out \"AI Words\" Are Exposing Their Own Literary Blind Spots",
    "date": "2026-05-28",
    "substack": "https://michellecavanaugh.substack.com/p/the-vocabulary-police-dont-read-enough",
    "work": "nepenthe",
    "blocks": [
      {
        "type": "p",
        "text": "There’s a new genre of internet criticism that has emerged alongside the rise of generative AI, and it goes something like this: someone posts a piece of writing, and a commenter swoops in to announce, with supreme confidence, “This was written by AI. It uses the word ‘delve.’” Or “No human would ever say ‘tapestry of experiences.’” Or “Real writers don’t use ‘furthermore.’”\n\nOr, my personal favorite, “It’s not x, it is y.”"
      },
      {
        "type": "p",
        "text": "Gag."
      },
      {
        "type": "p",
        "text": "This has become its own cultural tic. The AI word-spotter, armed with a mental checklist of supposedly machine-generated vocabulary, appointing themselves the arbiter of authentic human expression. The problem? The words and literary devices they’re flagging as artificial hallmarks of machine writing have roots stretching back centuries, appearing in some of the most celebrated texts in the Western canon. What the critics are actually revealing is not an AI’s limitations, but their own."
      },
      {
        "type": "h2",
        "text": "What Are “AI Words,” Exactly?"
      },
      {
        "type": "p",
        "text": "The list of supposedly telltale AI phrases has been catalogued extensively by AI detection platforms and content marketers. The most frequent flagged terms fall into five groups: formal transitions (moreover, furthermore, consequently), vague action verbs (leverage, utilize, facilitate), generic emphasis words (crucial, significant, comprehensive), hype phrases (revolutionary, transformative, game-changing), and hedging qualifiers (it can be argued, to some extent)."
      },
      {
        "type": "p",
        "text": "Atop nearly every list sits the word “delve.” Words like delve, pivotal, robust, and leverage appear so consistently in AI output that they now trigger detectors and signal generic writing to human readers alike; meaning even genuine human work is sometimes flagged as AI-generated, frustrating both students and professionals."
      },
      {
        "type": "p",
        "text": "Researchers have noted the statistical reality behind this: words like delve (48 times more common in AI text), tapestry (35 times), and multifaceted (28 times), as well as phrases like it’s worth noting (31 times more common), have become strong AI signals that detectors use to track vocabulary frequency distributions."
      },
      {
        "type": "p",
        "text": "The reason these words cluster in AI output has a clear explanation rooted in how language models are trained: AI overuses formal academic transitions that most people never write. These words appeared frequently in training data (academic papers, formal articles, business writing) and received positive reinforcement during the training process because they sound “polished.” The models learned that these words satisfy user expectations for quality."
      },
      {
        "type": "p",
        "text": "So far, so reasonable. But here’s where the logic breaks down: the conclusion that because AI overuses these words, these words are inherently artificial or illegitimate is a profound non sequitur. And it requires either a very short memory or very little reading to believe it."
      },
      {
        "type": "h2",
        "text": "“Delve:” A Word With a Thousand-Year History"
      },
      {
        "type": "p",
        "text": "Let’s start with the most frequently cited AI tell. “Delve” is treated online as though ChatGPT invented it sometime around 2023. In reality, the word delve derives from the 9th-century Old English word delfan, which itself came from the Old High German word telban. These were all words for digging at a time when the word dig hadn’t been uttered yet. That original meaning of delve has given way to the more common connotation of searching or researching."
      },
      {
        "type": "p",
        "text": "The same applies across much of the flagged vocabulary. “Tapestry” as a metaphor for complexity and interconnected experience has been a literary device for centuries and used to describe everything from the social fabric of Victorian England to the moral texture of Tolstoy’s Russia. “Nuanced” comes from the French nuance (meaning shade or tint) and entered English literary criticism in the 18th century. “Pivotal” is straightforwardly Victorian. “Realm” appears in Keats: “much have I travell’d in the realms of gold.”"
      },
      {
        "type": "p",
        "text": "None of these words arrived with the iPhone."
      },
      {
        "type": "h2",
        "text": "Formal Transitions: The Cornerstones of the Essay Form"
      },
      {
        "type": "p",
        "text": "The condemnation of words like furthermore, moreover, and consequently is perhaps the most telling indicator of how little the critics know about the history of written argument. These are not quirks of algorithmic prose. They are the structural ligaments of the essay: a form with a four-hundred-year pedigree."
      },
      {
        "type": "p",
        "text": "Michel de Montaigne, who invented the personal essay in the 1570s, and Francis Bacon, who developed the form in English at the turn of the 17th century, are the fountainheads of expository English prose. Formal connective transitions, words that signal logical movement between ideas, are not stylistic tics; they are the architecture of reasoned argument. Writers from Samuel Johnson to George Orwell, from Virginia Woolf to James Baldwin, have used furthermore, moreover, consequently, and thus as tools of intellectual precision. To flag these as machine-generated is to be unfamiliar with the entire tradition of formal essay writing."
      },
      {
        "type": "p",
        "text": "AI’s writing style tends to resemble highly structured high-school essays, which is worth noting, but high-school essays didn’t invent these transitions. They inherited them from centuries of academic and literary tradition, and taught them to students because they work."
      },
      {
        "type": "h2",
        "text": "“Multifaceted,” “Intricate,” “Holistic”: The Vocabulary of Serious Thought"
      },
      {
        "type": "p",
        "text": "The deeper flagged list includes words like “multifaceted,” “intricate,” “holistic,” “meticulous,” and “nuanced” all of which are treated as signs of soulless machine writing. What they actually are is the vocabulary of careful analysis. These words exist because simple language sometimes cannot carry complex meaning."
      },
      {
        "type": "p",
        "text": "Henry James built his reputation on syntactic intricacy and layered qualification. Virginia Woolf’s novels employed stream-of-consciousness narration to dive deeper into the inner feelings and thoughts of her characters, and her exploration of gender roles, individuality, and the complexities of human consciousness helped establish her as a pivotal figure in the evolution of modernist literature. The word pivotal, used there in a scholarly description of Woolf - is that AI-generated? Or is it simply an accurate word?"
      },
      {
        "type": "p",
        "text": "The issue is not the words themselves. The issue is frequency and context. AI overuses them because it was trained on dense formal writing. But the solution to overuse is not to brand the words themselves as counterfeit. That is like banning metaphor because bad writers abuse it."
      },
      {
        "type": "h2",
        "text": "The Real Problem: A Generation That Stopped Reading"
      },
      {
        "type": "p",
        "text": "Here is the uncomfortable truth beneath this whole conversation: a significant portion of the people who confidently declare that a piece of writing “sounds like AI” have not read enough literature to know what sophisticated human writing actually looks like. This is a systemic failure that deserves honest reckoning."
      },
      {
        "type": "p",
        "text": "In the past decade, the number of students passionate about literature, history, and the arts has dwindled to new lows. The number of history majors has decreased by 45% since 2007, and English has plummeted by half since the mid-1990s. A mere 7% of Harvard University’s 2022 freshman class expressed an intent to pursue the humanities, a significant drop from 20% in 2012 and nearly 30% during the 1970s."
      },
      {
        "type": "p",
        "text": "The shift away from humanities has led to a diminishing emphasis on critical thinking, communication, cultural literacy, and analytical skills. Without a strong foundation in these skills, future generations struggle to engage in critical thought and appreciate diverse perspectives."
      },
      {
        "type": "p",
        "text": "The humanities, academic disciplines concerned with languages, literature, history, philosophy, and the arts, have been in steep decline for a long time, and recently the rate of decline has accelerated dramatically, with plummeting enrollment numbers now forcing universities to close whole departments and severely limit humanities course offerings."
      },
      {
        "type": "p",
        "text": "A social move away from reading may be part of the explanation for the humanities’ decline. The disciplines that are dropping are the most book-focused, and the amount of time spent reading has been going down for a considerable amount of time."
      },
      {
        "type": "p",
        "text": "What this produces, culturally, is a generation that has been excellently trained in coding, data science, engineering, and quantitative reasoning, and that has had very little sustained exposure to the tradition of English letters. These are capable, intelligent people, but they are being asked to make literary judgments they are not equipped to make."
      },
      {
        "type": "p",
        "text": "When someone who has never read Middlemarch or The Varieties of Religious Experience or Baldwin’s collected essays encounters language that is formal, layered, and precise, they have no frame of reference. It reads as inhuman to them because the only writing they regularly consume are tweets, documentation, requirements, and SEO-optimized articles."
      },
      {
        "type": "p",
        "text": "The fault isn’t theirs at all."
      },
      {
        "type": "p",
        "text": "The fault belongs to the educational and economic forces that told them literature was optional and TikTok and python are essential."
      },
      {
        "type": "p",
        "text": "I have seen Ivy league professors (mostly AI hustlers, honestly) who are guilty of the above, so pedigree has no influence. This is illiteracy on a mass scale and we can all thank the brutal push for “STEM in everything” for the outcome."
      },
      {
        "type": "h2",
        "text": "The Class Dimension Nobody Wants to Discuss"
      },
      {
        "type": "p",
        "text": "There is another layer to this that the conversation almost always ignores, and it is about access."
      },
      {
        "type": "p",
        "text": "Not everyone grows up in a home with bookshelves. Not everyone attends a school with a strong English literature program, or has a teacher who makes them read Fitzgerald and Faulkner. Not everyone has the leisure time, as a child or an adult, to sit and absorb the kind of formal, elevated prose that builds a literary vocabulary. These are not failures of intelligence or effort. They are the direct consequences of economic inequality and educational underfunding."
      },
      {
        "type": "p",
        "text": "When someone who is just beginning to learn the craft of writing, and who has perhaps found in AI tools a patient teacher that will engage with their drafts at midnight without judgment, produces a piece of writing that uses words like delve or furthermore or intricate, they may genuinely be learning. They may be discovering a vocabulary and a set of structural tools that formal education never handed them. To mock that process, to perform public “gotcha-ism” over their word choices, is nothing but gatekeeping dressed up as sophistication."
      },
      {
        "type": "p",
        "text": "The irony is particularly sharp: the people calling out these words as fake are often themselves demonstrating unfamiliarity with the tradition that produced them. They are, in a sense, equally distant from the canon they claim to be defending…just on different sides of it."
      },
      {
        "type": "h2",
        "text": "What Legitimate AI Detection Actually Looks Like"
      },
      {
        "type": "p",
        "text": "None of this is to say that AI-generated text is indistinguishable from human writing, or that concerns about AI in academic and professional contexts are invalid. They are entirely valid. But the reliable markers of machine writing are not individual word choices. They are structural and statistical."
      },
      {
        "type": "p",
        "text": "AI detectors analyze patterns in writing that deviate from typical human composition. At their core, they use machine learning models trained on vast datasets of human-written and AI-generated text. By examining metrics like perplexity, measuring how predictable the text is, and burstiness, which assesses variation in sentence length and complexity, these tools flag phrases that appear unnaturally uniform or formulaic."
      },
      {
        "type": "p",
        "text": "In other words: it’s the rhythm, not the words. Human writing is varied, idiosyncratic, and inconsistent in ways that reflect a person’s thought process, personality, and moment-to-moment decisions. It has what linguists call burstiness, sentences that lurch and sprawl, then snap short. It has digressions, contradictions, and the little imprecisions of a mind working in real time. Machine writing, even when it uses perfectly legitimate words, has a flatness, a relentless smooth competence that lacks the texture of presence."
      },
      {
        "type": "p",
        "text": "Someone who has read widely and carefully knows what that texture feels like. They don’t need to look for the word delve."
      },
      {
        "type": "h2",
        "text": "A Closing Word on Humility"
      },
      {
        "type": "p",
        "text": "The words being flagged as AI tells are not AI’s invention. They are the shared inheritance of the English language, accumulated across a thousand years of writing. The transitions are ancient, the metaphors are classical, and the vocabulary of precision and nuance was built by human hands, over centuries, precisely because language needed it."
      },
      {
        "type": "p",
        "text": "What is actually being revealed when someone triumphantly identifies tapestry or multifaceted as machine fingerprints is a gap, not in the writing, but in the reader. A gap that is understandable, traceable to real structural problems in how we educate and what we value, and completely forgivable."
      },
      {
        "type": "p",
        "text": "What is less forgivable is the confidence. The flat certainty that a thousand years of literary vocabulary is a machine’s tell. The willingness to call out, shame, and dismiss writers, some of them beginners, some of them underprivileged, some of them doing the hard work of learning, without the knowledge to back it up."
      },
      {
        "type": "p",
        "text": "Read more books. The words will start to seem familiar."
      },
      {
        "type": "p",
        "text": "The words most commonly flagged as AI-generated - delve, tapestry, nuanced, pivotal, furthermore, multifaceted, intricate, realm, leverage, transformative - appear in the works of Homer, Shakespeare, Milton, Montaigne, Bacon, Johnson, Keats, Austen, Dickens, George Eliot, Henry James, Virginia Woolf, James Baldwin, and virtually every significant writer in the English tradition. They were not invented by a language model. They were inherited by one."
      }
    ]
  },
  {
    "slug": "keep-your-word-kid",
    "title": "Keep Your Word, Kid.",
    "dek": "Why Accountability and Integrity Matter",
    "date": "2026-05-20",
    "substack": "https://michellecavanaugh.substack.com/p/keep-your-word-kid",
    "work": "ophelia",
    "blocks": [
      {
        "type": "p",
        "text": "During a conversation last week, the concept of integrity and accountability came up. The question was “What do accountability and integrity even mean?” I answered, “They sound like fancy words grownups use to keep from outright lying.” He wasn’t satisfied, so here we go. Accountability and integrity: big concepts, but simple picture. True accountability means being followed by your commitments until you finally fulfill them. Integrity is the quiet voice in our head saying, “Tell the truth, even when a lie is easier.” If we ignore both, all bets are off in everyday life."
      },
      {
        "type": "p",
        "text": "So, what do we mean by accountability? In plain terms, it’s owning up. Someone or something holds us to our word. Philosopher Stephen Darwall calls moral obligation a “second-person” demand. Basically, when I promise you I’ll do something, you’re allowed to demand it later. We all tacitly agree: keep your promise, or explain yourself. Accountability, as ethicists note, isn’t just a threat (“If you fail, you’ll pay!”) but a kind of partnership. Andrew Torrance points out that accountability relationships can upbuild people: a friend nudges you to be better, not just to punish you. In practice, accountability builds trust. If you show up for meetings and return borrowed books, your friends and colleagues think, “This person is solid.”"
      },
      {
        "type": "p",
        "text": "And integrity? That’s the inner cousin of accountability. It means being true to yourself. Aristotle, the old Greek reporter of human nature, says the virtuous man is “always himself” in both word and deed. Truth is the noble thing to say; lying is vile. In other words, integrity is an internal compass so you don’t wildly zig-zag with every breeze of convenience. The Stoics would have said it plainly: Marcus Aurelius wrote, “If it is not right, do not do it; if it is not true, do not say it” (Meditations, 170 AD). Nice and simple. Do the right thing, tell the truth."
      },
      {
        "type": "p",
        "text": "In modern terms, integrity is living with an internally consistent set of beliefs. We all carry around a little blueprint of values in our heads as promises we gave ourselves. Acting with integrity means aligning actions to that blueprint, or updating the blueprint when it no longer fits reality. The Stanford Encyclopedia notes that integrity’s main value is how it strengthens moral agency: people with integrity become better moral agents, while “disintegration tends to undermine moral agency”. Put simply, if you’re a walking apology or a perpetual cheater, don’t be surprised if moral life feels shaky."
      },
      {
        "type": "p",
        "text": "Of course, reality isn’t black-and-white. Accountability and integrity sometimes tug us in opposite directions. Imagine a crisis: your moral integrity tells you never lie, but accountability to others (the people you care about) might demand a lie to spare someone hurt. Kant would grit his teeth and refuse, because universal truthfulness is a must (Groundwork, 1785). Others would cuss Kant and lie anyway, thinking relationships and consequences matter more. There’s no clean answer. The point is to at least recognize the tension."
      },
      {
        "type": "p",
        "text": "Let’s spell out the arguments:"
      },
      {
        "type": "p",
        "text": "Pro-accountability: Accountability incentivizes follow-through. We tell stories about heroes who kept their word (Aristotle’s ideal man was truthful in small matters so he’d do it in big ones). In real life, a boss who holds teams accountable usually gets work done on time. A parent who teaches accountability (kids wash dishes or confess to a broken vase) raises honest humans. Counter: But too much accountability can become fear or bureaucracy. Torrance notes that people often treat it like “You will be punished if you fail!” Accountability loses meaning if it’s only retribution. It can kill initiative or turn us cynical."
      },
      {
        "type": "p",
        "text": "Pro-integrity: Integrity ties us to our own commitments. Williams (1985) argues that preserving one’s “ground projects” is crucial and it’s how we remain ourselves. If you abandon your core values on a whim, you can feel hollow. Someone with integrity says, “Yes, that’s who I am,” and lives it. Many find that admirable; it breeds trust that your word matches your actions. Counter: But absolute integrity can backfire. If we rigidly refuse to bend (imagine a manager who insists on the old rulebook even when better methods arise), it can become fanaticism. It can even allow us to rationalize selfish behavior. After all, if our deepest conviction is just self-interest, is that still integrity? (Aristotle would say no, true integrity is part of virtue)."
      },
      {
        "type": "p",
        "text": "Vonnegut would ask: Why do we need all this moral calibration? Maybe because, as Williams suggests, without accountability we turn into moral amnesiacs, and without integrity we become conmen to ourselves. We’ve all seen a boss who proclaims “accountability!” one minute and then skips out on accountability himself. We’ve all know people who list “integrity” on LinkedIn but can’t find their own toothpaste. Those figures lack the blend of both virtues. In a small example: if Alice commits to donate to charity and keeps the receipt, that’s accountability. If Bob honestly admits he took a tax break he didn’t deserve and pays back the money, that’s integrity. Both moves help society function."
      },
      {
        "type": "p",
        "text": "One useful way to think of it: Accountability is society checking your work; integrity is you checking your heart. Ideally, these checks mesh. If I say, “I’ll fix the leaky faucet,” and you remind me later, that’s accountability. If I then actually fix it even when I feel lazy, that’s integrity. We want both bossy reminders and honest intentions."
      },
      {
        "type": "p",
        "text": "We could just preach: “Be good, do good,” but let’s spice it up. Instead, we can insist it’s part of the bigger human story. As one philosopher bluntly put it, at bottom morality is accountability to each other. And integrity is simply the art of not betraying yourself along the way."
      },
      {
        "type": "p",
        "text": "So what now? Well, no one’s perfect, least of all the author of this essay. But maybe we can try this: make a habit of asking ourselves, “What would an honest, reliable person do right now?” Then try to be that person. Maybe hold someone else to it too. Maybe laugh at ourselves when we fall short. Because if we don’t at least aim for these virtues, we end up with a world where nothing adds up and nobody trusts anybody."
      },
      {
        "type": "p",
        "text": "As Aristotle said, truth is always worth more than a lie, even if it’s inconvenient. Kant and Marcus Aurelius remind us there’s dignity in that stubborn honesty. Williams reminds us it’s part of keeping our soul intact. And Darwall reminds us we do it to each other. Accountability and integrity are two road signs on the highway of life. Ignore them at your peril. Respect them, and the ride gets a bit smoother."
      },
      {
        "type": "p",
        "text": "In other words, keep you word, kid."
      }
    ]
  },
  {
    "slug": "operationalizing-data-plumbing-for",
    "title": "Operationalizing Data Plumbing for the Era of Autonomous Reason",
    "dek": "A love story",
    "date": "2026-05-11",
    "substack": "https://michellecavanaugh.substack.com/p/operationalizing-data-plumbing-for",
    "work": "lithium",
    "blocks": [
      {
        "type": "p",
        "text": "For the last few decades, the people in charge (the engineers, the managers, and the bureaucrats) have been very busy building digital filing cabinets. They called these “solutions.” They filled them with precious, and strangely expensive, digital lint (data) and then they locked the cabinets and threw the keys into different oceans. We called this “The Enterprise” and it was a world where information went to die in a silo, and the only people who could find anything were the high priests of the mainframe."
      },
      {
        "type": "p",
        "text": "Now, everyone is very excited about the new intelligences. The Engines of Reason. The Agents. We want these digital ghosts to run our companies, buy our groceries, and perhaps, if they have a spare moment, explain why we are all so tired. But there is a large, expensive, very human snag. You see, an Agent is only as smart as the junk you feed it. If you feed a brilliant AI a diet of fragmented, siloed, and expensive garbage, you get a very fast, very confident hallucination."
      },
      {
        "type": "p",
        "text": "The problem isn’t the brains. We have plenty of brains. The problem is the plumbing. In a world where 40% of business-critical data sits in a silo, the “Engine of Reason” is effectively a second-rate machine trying to navigate a first-rate mess."
      },
      {
        "type": "h3",
        "text": "The Evolution of Enterprise Data Storage Paradigms"
      },
      {
        "type": "p",
        "text": "Now with 100% more \"The Cloud is just a computer in Ohio.\""
      },
      {
        "type": "h2",
        "text": "Why Infrastructure Dictates Intelligence"
      },
      {
        "type": "p",
        "text": "In the old days, if a machine made a mistake, it just stopped. Now, when a model makes a mistake, it does so with the confidence of a man who has never been told he’s wrong. In this scenario, the agent is looking at the world through a keyhole and assuming the hallway is the whole universe."
      },
      {
        "type": "p",
        "text": "The financial cost of this confidence is quite staggering. Poor-quality data is estimated to cost organizations an average of $12.9 million every single year. When these agents start making decisions without a “Unified Memory,” they start hallucinating at rates as high as 33% to 35% in complex tasks. They aren’t lying; they just don’t have the “plumbing” to reach the truth."
      },
      {
        "type": "p",
        "text": "POV: You just asked a Data Scientist how their week is going."
      },
      {
        "type": "h2",
        "text": "The Great Data Partition and the Synthesis of the Lakehouse"
      },
      {
        "type": "p",
        "text": "Long ago (about three years ago) you had to choose. You could put your data in a “Lake,” which was cheap but became a “swamp” because nobody knew where the bodies were buried. Or you could put it in a “Warehouse,” which was tidy but so expensive it made the accountants weep."
      },
      {
        "type": "p",
        "text": "The “Lakehouse” is a silly word, like “Spork,” but it is a vital one. It means the data stays where it is, in its natural, low-cost habitat, but we treat it with the respect and structure of a library. By using open formats like Apache Iceberg, we ensure that the AI never reads a partial or inconsistent truth. It brings ACID (Atomicity, Consistency, Isolation, Durability) transactions to the mess, which is a fancy way of saying the machine won’t forget what it was doing in the middle of a sentence."
      },
      {
        "type": "p",
        "text": "What is Apache Iceberg? Apache Iceberg is an open-source, high-performance table format designed for massive analytical datasets. If a “Data Lake” is just a messy pile of files in a folder, Iceberg is the intelligent management layer that makes that pile act like a professional SQL database."
      },
      {
        "type": "p",
        "text": "It was originally developed at Netflix to solve the “Small File Problem” and the performance bottlenecks of older systems like Apache Hive."
      },
      {
        "type": "h2",
        "text": "The Rise of the Non-Human Customer: Agentic Commerce"
      },
      {
        "type": "p",
        "text": "We are entering the era of “Agentic Commerce” and this is a fancy way of saying that machines are going to start talking to other machines to get things done. Your refrigerator will argue with a warehouse while your portfolio negotiates with a ledger."
      },
      {
        "type": "p",
        "text": "For this to work, these agents need to be able to reach into the basement, the attic, and the cloud at the same time without needing a map and a flashlight. If you lock your data in a proprietary cage, you are essentially teaching your AI to speak a language that only one company understands. This is a fine way to run a monopoly, but a terrible way to run a civilization."
      },
      {
        "type": "p",
        "text": "A tragic three-act play for everyone who spent their career on SEO and UI design."
      },
      {
        "type": "h2",
        "text": "Why Plumbers are the New Poets"
      },
      {
        "type": "p",
        "text": "We are currently obsessed with the “Models” those shimmering, mathematical pop-tarts. However, the real heroes of the next decade won’t be the ones building bigger brains. They will be the ones building better foundations. They are the “plumbers” of the digital world, and they have three main jobs:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Open Standards: Because secrets are just technical debt in a trench coat. Standards like the Model Context Protocol (MCP) and Agent Communication Protocol (ACP) allow agents to form “teams” rather than just isolated islands of silicon.",
          "Hybridity: Your data should be able to live on a server in your closet or a server in the sky without throwing a tantrum.",
          "Governance: Because an agent without a sense of “Truth” is just a high-speed rumor mill."
        ]
      },
      {
        "type": "h3",
        "text": "Governance is an Accelerator"
      },
      {
        "type": "p",
        "text": "Industry research shows that 27% of AI efficiency gains stem directly from strong governance. Organizations that invest heavily in AI ethics report 34% higher operating profit from their AI investments than their less-governed peers."
      },
      {
        "type": "p",
        "text": "Proof that being 'ethical' is actually just a really elaborate way to make 34% more money"
      },
      {
        "type": "h2",
        "text": "Memory: The Nervous System of Intelligence"
      },
      {
        "type": "p",
        "text": "Large Language Models are, by nature, stateless and they have the memory of a goldfish. To make them useful, we have to build a “Unified Memory” layer or a shared cognitive infrastructure."
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Short-term Memory: The context window. Remembering what you said five seconds ago.",
          "Long-term Memory: The library. Implemented with vector embeddings or knowledge graphs to store facts and business rules across sessions.",
          "Procedural Memory: Learning skills, so the agent doesn’t have to relearn how to file a report every Monday morning."
        ]
      },
      {
        "type": "p",
        "text": "Without a shared memory layer, Agent A will remain ignorant of what Agent B discovered. By implementing this shared layer, organizations reduce millions of tokens in unnecessary overhead, moving from O(n²) context reading to O(n) efficiency."
      },
      {
        "type": "h2",
        "text": "Toward a Future of Clean Plumbing and Real Trees"
      },
      {
        "type": "p",
        "text": "In 1962, a small device called “Shoebox” was shown at a World’s Fair. It was the world’s first speech-recognition system. Back then, we were promised that technology would eventually give us “a little peace and quiet.” Instead, we got 2,000 pages of reports every minute and a world where we are all “appendages to machines, institutions, and systems.”"
      },
      {
        "type": "p",
        "text": "The shift toward the “Agentic Enterprise” is projected to generate nearly $6 trillion in economic value by 2028. But that value only appears if we stop worrying about the “Magic” and start worrying about the “Ready.” If the data is ready, the AI will follow. And if the AI follows, maybe we can all go outside and look at a real tree for a change."
      },
      {
        "type": "p",
        "text": "Keep your data open. Keep your engines fast. And for heaven’s sake, keep your plumbing clean."
      },
      {
        "type": "h3",
        "text": "Works cited"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "IBM watsonx.data Accelerates GenAI Data Analysis - Intel, accessed May 11, 2026, https://www.intel.com/content/www/us/en/customer-spotlight/stories/ibm-watsonx-data-customer-story.html",
          "What Are Data Silos? | IBM, accessed May 11, 2026, https://www.ibm.com/think/topics/data-silos",
          "Agentic AI, explained | MIT Sloan, accessed May 11, 2026, https://mitsloan.mit.edu/ideas-made-to-matter/agentic-ai-explained",
          "What Is Apache Iceberg? | IBM, accessed May 11, 2026, https://www.ibm.com/think/topics/apache-iceberg",
          "Making Data-Driven Decisions with IBM watsonx.data, an Open Data Lakehouse on AWS, accessed May 11, 2026, https://aws.amazon.com/blogs/apn/making-data-driven-decisions-with-ibm-watsonx-data-an-open-data-lakehouse-on-aws/",
          "IBM/watsonx-data - GitHub, accessed May 11, 2026, https://github.com/IBM/watsonx-data",
          "Common Data Quality Issues in 2026 (+ How to Fix Them) - Prospeo, accessed May 11, 2026, https://prospeo.io/s/common-data-quality-issues",
          "What’s new in watsonx.data - IBM, accessed May 11, 2026, https://www.ibm.com/docs/en/watsonxdata/standard/2.1.x?topic=overview-whats-new-in-watsonxdata",
          "Memory architecture is the real bottleneck in multi-agent AI, not prompt engineering - Reddit, accessed May 11, 2026, https://www.reddit.com/r/AI_Agents/comments/1r7e8jo/memory_architecture_is_the_real_bottleneck_in/",
          "What Is AI Agent Memory? | IBM, accessed May 11, 2026, https://www.ibm.com/think/topics/ai-agent-memory",
          "What is Agent Communication Protocol (ACP)? - IBM, accessed May 11, 2026, https://www.ibm.com/think/topics/agent-communication-protocol",
          "Beyond hype: Accelerate innovation in a multi era hybrid cloud maze, accessed May 11, 2026, https://www.ibm.com/new/product-blog/beyond-hype-accelerate-innovation-in-a-multi-era-hybrid-cloud-maze",
          "Agentic Commerce: How AI Agents Are Changing Ecommerce - SPXCommerce, accessed May 11, 2026, https://www.spxcommerce.com/blog/agentic-commerce-ai-agents-marketplaces/",
          "Agentic commerce: architectural implications for product and engineering teams, accessed May 11, 2026, https://stitch.money/blog/agentic-commerce-architectural-implications-for-product-and-engineering-teams",
          "What Is Agentic Commerce? The Complete Guide for Retailers - Paz.ai, accessed May 11, 2026, https://www.paz.ai/agentic-commerce",
          "What Is Agentic Commerce? | IBM, accessed May 11, 2026, https://www.ibm.com/think/topics/agentic-commerce",
          "From Clicks to Protocols: The Technology Stack Behind Agentic Commerce - IBM iX, accessed May 11, 2026, https://ibmix.de/en/blog/technology-stack-behind-agentic-commerce",
          "From checkers to chess: A brief history of IBM AI, accessed May 11, 2026, https://www.ibm.com/new/product-blog/from-checkers-to-chess-a-brief-history-of-ibm-ai",
          "Memory Scaling for AI Agents | Databricks Blog, accessed May 11, 2026, https://www.databricks.com/blog/memory-scaling-ai-agents",
          "IBM and Red Hat, accessed May 11, 2026, https://www.ibm.com/products/cloud/redhat",
          "How governance increases velocity | IBM, accessed May 11, 2026, https://www.ibm.com/thought-leadership/institute-business-value/en-us/report/ai-governance-trends"
        ]
      }
    ]
  },
  {
    "slug": "the-half-life-of-digital-thought",
    "title": "The Half-Life of Digital Thought",
    "dek": "AI model decay and other fun topics for dinner",
    "date": "2026-04-28",
    "substack": "https://michellecavanaugh.substack.com/p/the-half-life-of-digital-thought",
    "work": "toska",
    "blocks": [
      {
        "type": "p",
        "text": "We have a habit of making things that start dying the moment we finish them. We build a house and the pipes begin to thin; we build a “brain” out of silicon and math, and then we act surprised when it forgets how to think. In the technical manuals, they call this “model decay” or “model drift.” Don’t imagine a dramatic mechanical breakdown with snapping gears and screaming. Imagine a quiet, polite failure…like when you forget to take your shoes off at someone’s house and drag mud into their living room. The machine keeps running, but the world it was designed to understand has moved on without telling it."
      },
      {
        "type": "p",
        "text": "While the machines are getting confused, the people who build them are engaged in a frantic race to replace them continuously. They (the proverbial they) are releasing new models every few weeks, driven by a peculiar mix of architectural cleverness and the simple fact that keeping an old model is becoming a very expensive way to be wrong."
      },
      {
        "type": "h3",
        "text": "When you say Model, what do you mean?"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Large Language Models (LLMs): These are the heavy hitters like GPT, Claude, and Gemini that act as general-purpose reasoning and text engines. They are the primary subjects of “instruction following” drift, where updates intended to make them safer sometimes end up making them worse at basic logic or math.",
          "Mixture of Experts (MoE) Models: A newer architectural breed, which replaces one giant, heavy brain with a committee of specialized subnetworks. These are the models currently driving the rapid release cycle because they are significantly cheaper and faster to run than older “dense” models.",
          "Generative and Multimodal Models: Systems like DALL-E, Midjourney, and Sora (may it rest in peace) that handle images and video. These are especially susceptible to “model collapse,” a specific type of decay where they start to produce repetitive, nonsensical, or low-quality “Ouroboros” outputs after being trained on too much AI-generated content.",
          "Agentic and Reasoning Models: The next generation of systems designed to “think” iteratively before they speak. These are moving beyond answering questions to actually performing autonomous tasks across software interfaces.",
          "Domain-Specific Specialists: Highly targeted models like GPT-Rosalind for biology, Project Glasswing for cybersecurity, and specialized Random Forest models used for medical radiology reports. These are built to know everything about one high-stakes slice of reality rather than a little bit about everything.",
          "Small Models: Efficient “mini” models which can achieve the performance of much larger systems while requiring a fraction of the compute power."
        ]
      },
      {
        "type": "p",
        "text": "Anyway, back to model rot."
      },
      {
        "type": "h2",
        "text": "The Architecture of Confusion"
      },
      {
        "type": "p",
        "text": "So, why does the machine get lost? Well, a model is essentially a map of the world as it existed during training. But the world is a disorganized and restless place that refuses to stay in one position for long. This creates two specific flavors of trouble:"
      },
      {
        "type": "h3",
        "text": "Flavors of Decay"
      },
      {
        "type": "p",
        "text": "The first is “Data Drift.” This happens when the people showing up to use the machine aren’t the people the machine expected. Imagine a machine trained to predict the needs of serious office workers. If a million teenagers suddenly start using it to write jokes, the machine sees data it doesn’t recognize and starts to stagger. I get scared when I see teenagers, too. Think of it as a feeling spike that doesn’t go away."
      },
      {
        "type": "p",
        "text": "The second is “Concept Drift,” which is much more melancholy. This is when the rules of the universe change. If you build a machine to catch crooks, and the crooks invent a brand-new way to be crooked, the machine will go right on looking for the old kind of crook. It is still doing exactly what it was told to do, but what it was told to do doesn’t matter anymore."
      },
      {
        "type": "p",
        "text": "The third, and perhaps most annoying, is \"Upstream Drift.\" Unlike situations where the world changing or humans are being fickle, this one is just about about the plumbing breaking."
      },
      {
        "type": "p",
        "text": "Here’s a table for those who didn’t read the above and just want to skim things:"
      },
      {
        "type": "h3",
        "text": "The Speed of the Rot"
      },
      {
        "type": "p",
        "text": "Sometimes the rot is “sudden,” like a pandemic that, overnight, makes a travel-prediction model look like a piece of abstract art. Other times it is “gradual,” a slow-motion aging as language evolves and scammers slowly figure out how to climb over the latest digital walls."
      },
      {
        "type": "h2",
        "text": "The Math of Measuring Sadness"
      },
      {
        "type": "p",
        "text": "Because the machine will never admit it is losing its mind, the people who watch over it use math to catch the decay. They use something called the Population Stability Index (PSI) to see how far the world has moved from the baseline. The formula looks like this:"
      },
      {
        "type": "p",
        "text": "If the result is higher than 0.25, the machine is essentially wandering around in a world it no longer understands. They also use metrics like “Wasserstein’s Distance,” which is a fancy way of measuring how much work it would take to turn the current pile of data back into the pile the machine was actually trained on."
      },
      {
        "type": "h2",
        "text": "A Case Study in Digital Regression: GPT-4"
      },
      {
        "type": "p",
        "text": "In 2023, researchers looked at the most famous AI in the world and discovered that it was actually getting worse at some things as it got “updated.” In March, GPT-4 could identify a prime number 84% of the time. By June, its accuracy had tumbled to 51.1%. It also lost much of its ability to write code that actually worked, dropping from 52% success down to 10%."
      },
      {
        "type": "p",
        "text": "Lame."
      },
      {
        "type": "p",
        "text": "This happens because when you try to make a model “safer” or “more polite,” (what the experts call alignment) you often accidentally overwrite the part of its brain that handles logic. They call this an “Alignment Tax.” It is a strange price to pay for good manners."
      },
      {
        "type": "h2",
        "text": "The Ouroboros: Model Collapse"
      },
      {
        "type": "p",
        "text": "There is a newer, scarier kind of rot called “Model Collapse.” This happens when the machines start eating their own tails."
      },
      {
        "type": "p",
        "text": "Gross."
      },
      {
        "type": "p",
        "text": "Since the internet is now being flooded with AI-generated text and images, the new models are being trained on the homework of the old models. This creates a feedback loop of mediocrity. The machines lose the “tails” of the distribution, the rare, weird, and wonderful edge cases that make life interesting. Eventually, the model collapses into a puddle of repetitive, low-value nonsense."
      },
      {
        "type": "p",
        "text": "“Go home, AI. You’re drunk on slop.”"
      },
      {
        "type": "h2",
        "text": "The Committee of Tiny Brains"
      },
      {
        "type": "p",
        "text": "So why do the labs keep releasing new versions? Part of it is a new way of building them called “Mixture of Experts” (MoE)."
      },
      {
        "type": "p",
        "text": "Instead of one giant, heavy brain that uses all its energy for every token, you have a committee of specialized subnetworks. When you ask a question, a “router” picks just one or two experts to handle it. This makes the models “smarter” because they can hold more total parameters (knowledge), but “cheaper” because they only wake up a small fraction of themselves at a time."
      },
      {
        "type": "h2",
        "text": "The Economics of Impatience"
      },
      {
        "type": "p",
        "text": "There is also the matter of money. The cost of a digital thought is dropping by about 10x every year. They call this “LLMflation.”"
      },
      {
        "type": "p",
        "text": "If a company stays on an old model, they are paying what we might call an “Inertia Tax.” They are paying the high prices of yesterday for intelligence that is becoming a commodity today. Open-source models are now catching up to the most expensive proprietary models in about 13 weeks, so this puts everyone on a treadmill: you have to update your systems every few months just to avoid paying too much for a machine that is slowly forgetting how to do its job."
      },
      {
        "type": "h3",
        "text": "Why?"
      },
      {
        "type": "p",
        "text": "A model is essentially a map, and because the world refuses to stop changing, that map starts becoming a lie almost immediately. If an organization doesn’t update its systems, it can see the utility of a model drop by 10% to 50% in a single year simply because the human behavior it was designed to predict has moved on."
      },
      {
        "type": "p",
        "text": "But while decay is a persistent headache, the frantic, weekly release cycle is driven by something even more relentless: the collapsing price of intelligence."
      },
      {
        "type": "p",
        "text": "In short, companies aren’t just replacing models because they are rotting; they are replacing them because the new version is ten times as clever and costs a fraction of the price to operate. It is a race where staying still is the most expensive thing you can do."
      },
      {
        "type": "h2",
        "text": "The Modern Sisyphus"
      },
      {
        "type": "p",
        "text": "To keep the machines from rotting, we have built a whole industry called MLOps. It is a series of automated pipelines that watch the data, check for drift, and trigger a “retraining” the moment the math starts looking sideways."
      },
      {
        "type": "p",
        "text": "They use “Shadow Deployments,” where a new version of the model sits in the corner and watches the current model work, waiting for it to make a mistake so it can take over."
      },
      {
        "type": "p",
        "text": "Seems a little micromanage-y to me, but it is a relentless, never-ending effort to keep the digital lights on in this game."
      },
      {
        "type": "h2",
        "text": "A Final Thought"
      },
      {
        "type": "p",
        "text": "At the end of the day, we are trying to bolt a “probabilistic engine” (a machine that guesses), onto a “deterministic world” (a world that expects the same answer every time). We want the machine to be a perfect, unchanging crystal, but it is actually a living, breathing snapshot of a world that no longer exists."
      },
      {
        "type": "p",
        "text": "I hope this helps."
      },
      {
        "type": "h3",
        "text": "Works cited"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "What Is Model Drift? | IBM, accessed April 28, 2026, https://www.ibm.com/think/topics/model-drift",
          "Why Machine Learning Models Fail in Production? - Solidus AI Tech, accessed April 28, 2026, https://aitech.io/machine-learning-models-fail-production/",
          "Model Monitoring: The Path to Reliable AI - ModelOp, accessed April 28, 2026, https://www.modelop.com/ai-lifecycle-automation/modelops/model-monitoring",
          "Why AI Benchmarking Matters | Scaleway Blog, accessed April 28, 2026, https://www.scaleway.com/en/blog/why-ai-benchmarking-matters/",
          "The Hidden Cost of LLMflation: How Model Inertia Is Silently ..., accessed April 28, 2026, https://divyam.ai/blog/hidden-cost-of-llmflation/",
          "Technical Performance | The 2025 AI Index Report | Stanford HAI, accessed April 28, 2026, https://hai.stanford.edu/ai-index/2025-ai-index-report/technical-performance",
          "Model Drift & Machine Learning: Concept Drift, Feature Drift, Etc., accessed April 28, 2026, https://arize.com/model-drift/",
          "What is data drift in ML, and how to detect and handle it - Evidently AI, accessed April 28, 2026, https://www.evidentlyai.com/ml-in-production/data-drift",
          "Model Drift: Types, Causes and Early Detection - Lumenova AI, accessed April 28, 2026, https://www.lumenova.ai/blog/model-drift-concept-drift-introduction/",
          "Model Degradation: Why ML Models Fail Over Time - Swept AI, accessed April 28, 2026, https://www.swept.ai/model-degradation",
          "AI Model Drift in Production: What Enterprises Must Monitor - Fulcrum Digital, accessed April 28, 2026, https://fulcrumdigital.com/blogs/ai-model-drift-in-production-what-enterprises-must-monitor/",
          "ML Monitoring: Challenges and Best Practices for Production Environments - Acceldata, accessed April 28, 2026, https://www.acceldata.io/blog/ml-monitoring-challenges-and-best-practices-for-production-environments",
          "arXiv:2307.09009v3 [cs.CL] 31 Oct 2023, accessed April 28, 2026, https://arxiv.org/abs/2307.09009",
          "How Is ChatGPT’s Behavior Changing over Time? - arXiv, accessed April 28, 2026, https://arxiv.org/pdf/2307.09009",
          "(PDF) Reinforcement Learning from Human Feedback (RLHF) and Its Influence on the Alignment of LLM Decisions with Human Values - ResearchGate, accessed April 28, 2026, https://www.researchgate.net/publication/404049858_Reinforcement_Learning_from_Human_Feedback_RLHF_and_Its_Influence_on_the_Alignment_of_LLM_Decisions_with_Human_Values",
          "AI Model Collapse: Causes and Prevention - WitnessAI, accessed April 28, 2026, https://witness.ai/blog/ai-model-collapse/",
          "What Is Model Collapse? - IBM, accessed April 28, 2026, https://www.ibm.com/think/topics/model-collapse",
          "Model collapse - Wikipedia, accessed April 28, 2026, https://en.wikipedia.org/wiki/Model_collapse",
          "Applying Mixture of Experts in LLM Architectures | NVIDIA Technical Blog, accessed April 28, 2026, https://developer.nvidia.com/blog/applying-mixture-of-experts-in-llm-architectures/",
          "Understanding Mixture of Experts (MoE): The Architecture Powering Next-Generation Language Models | by Sharan Harsoor | Medium, accessed April 28, 2026, https://medium.com/@sharanharsoor/understanding-mixture-of-experts-moe-the-architecture-powering-next-generation-language-models-49c1d1d467c9",
          "Advancements in Modern LLM Architectures | cbarkinozer | Softtech - Medium, accessed April 28, 2026, https://medium.com/softtechas/advancements-in-modern-llm-architectures-b204fe8f0ee8",
          "The Llama 4 herd: The beginning of a new era of natively multimodal AI innovation - Meta AI, accessed April 28, 2026, https://ai.meta.com/blog/llama-4-multimodal-intelligence/",
          "How to implement AI governance best practices in 2025 - Glean, accessed April 28, 2026, https://www.glean.com/perspectives/ai-governance-best-practices",
          "AI open models have benefits. So why aren’t they more widely used ..., accessed April 28, 2026, https://mitsloan.mit.edu/ideas-made-to-matter/ai-open-models-have-benefits-so-why-arent-they-more-widely-used",
          "MLOps Architecture. A Complete Guide to Building Scalable… | by Aimlopsmasters In | Medium, accessed April 28, 2026, https://medium.com/@aimlopsmasters.in/mlops-architecture-598970495cd6",
          "Decoding MLOps: Key Concepts & Practices Explained - Dataiku, accessed April 28, 2026, https://www.dataiku.com/stories/detail/decoding-mlops/",
          "End-to-End MLOps Architecture & Workflow | Clarifai 2025 Guide, accessed April 28, 2026, https://www.clarifai.com/blog/end-to-end-mlops"
        ]
      },
      {
        "type": "p",
        "text": "AI is breaking the enterprise operating model I RSM US, accessed April 28, 2026, https://rsmus.com/insights/services/business-strategy-operations/ai-is-breaking-the-enterprise-operating-model.html"
      }
    ]
  },
  {
    "slug": "dancing-lessons-for-the-machines",
    "title": "Dancing Lessons for the Machines",
    "dek": "A product manager's guide to the agentic commerce",
    "date": "2026-04-28",
    "substack": "https://michellecavanaugh.substack.com/p/dancing-lessons-for-the-machines",
    "work": "identity",
    "blocks": [
      {
        "type": "p",
        "text": "The digital economy is undergoing a structural transformation, and we are moving the money from human hands to autonomous software systems. We call this “Agentic Commerce,” or “a-commerce,” which is a fancy way of saying the robots are now doing the shopping. In this new world, the customer isn’t a person clicking a button. The customer is an AI agent with delegated authority and a reasoning engine."
      },
      {
        "type": "p",
        "text": "For product managers, this means the old rules are dead. We are moving from pretty buttons (UI) to machine-readable interfaces (API/DX) with the goal of building a world where a non-human actor can verify its legal and financial “intent” without calling its human for help every five minutes."
      },
      {
        "type": "h2",
        "text": "The Strategic Shift to the Machine Economy"
      },
      {
        "type": "p",
        "text": "Agentic commerce is a model where AI systems act as decision-makers. They recognize intent, plan multi-step actions, and execute transactions, and by 2030, these agents might mediate between $3 trillion and $5 trillion in global spending."
      },
      {
        "type": "p",
        "text": "This shift is built on three things: autonomy, reasoning, and interoperability. Autonomy lets the agent follow rules without a human looking over its shoulder. Reasoning lets it adapt when the price of eggs goes up. Interoperability lets it talk to any shop with an open API. The traditional marketing funnel (designed to trick human eyes with shiny colors) is becoming irrelevant, and for a robots, “conversion” is simply just a successful API call."
      },
      {
        "type": "h2",
        "text": "Redesigning for the Agent Experience (AX)"
      },
      {
        "type": "p",
        "text": "If you want a robot to buy your products, you have to stop designing for humans. Success is no longer measured by “time on page.” It is measured by task success rates and how rarely a human has to step in."
      },
      {
        "type": "h3",
        "text": "The Principles of Agent Experience (AX)"
      },
      {
        "type": "p",
        "text": "We used to optimize for Developer Experience (DX). Now we prioritize Agent Experience (AX). This means making APIs machine-interpretable and self-correcting."
      },
      {
        "type": "p",
        "text": "An agent needs high-quality OpenAPI descriptions, and it performs semantic searches against your docs to figure out which endpoint to call. If your error message just says “Invalid Request,” the agent gets stuck. If you give it structured recovery metadata—like is_retriable flags or retry_after_seconds headers—it can fix its own problems. How nice."
      },
      {
        "type": "h3",
        "text": "Authentication and Least Privilege"
      },
      {
        "type": "p",
        "text": "Robots cannot solve CAPTCHAs because they do not have fingers and they hate being gaslit by developers (maybe, I don’t think they have feelings, though). For agentic commerce, we use API keys, bearer tokens, or OAuth client credentials. Product managers must implement “least privilege” tokens. If an agent is authorized to check your flight status, it shouldn’t be able to change your home address. These tokens should be short-lived and have clear refresh mechanics."
      },
      {
        "type": "h2",
        "text": "Verifying Intent"
      },
      {
        "type": "p",
        "text": "The big question is intent. How does a merchant know that a bot actually has the legal and financial authority to spend money? In the automated world, intent is invisible at the moment of the transaction, which makes fraud detection difficult. We need intent-based detection to tell a good AI agent from a malicious bot."
      },
      {
        "type": "h3",
        "text": "The Verifiable Intent Framework"
      },
      {
        "type": "p",
        "text": "Mastercard and Google built a “Verifiable Intent” framework. It’s a standards-based trust layer that links three things into one tamper-resistant record:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Identity: Who is the cardholder authorizing the agent?",
          "Intent: What were the specific instructions (e.g., “Buy shoes under $100”)?",
          "Action: What did the agent actually do?"
        ]
      },
      {
        "type": "p",
        "text": "This creates a cryptographic proof of authorization. If something goes wrong, you have a clear audit trail to resolve the dispute."
      },
      {
        "type": "h3",
        "text": "The Mandate System"
      },
      {
        "type": "p",
        "text": "The Agent Payments Protocol (AP2) uses “Mandates.” These are cryptographically signed digital contracts."
      },
      {
        "type": "h2",
        "text": "Product Management for the Autonomous Ladder"
      },
      {
        "type": "p",
        "text": "Designing for agents is about goals and workflows, not prompts. PMs have to decide when a task is “agentic”. They use a “ladder of autonomy” to manage the risk:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Rung 1 (Assistance): The agent suggests. The human clicks.",
          "Rung 2 (Partial Autonomy): The agent takes steps but asks for permission at the fork in the road.",
          "Rung 3 (Full Autonomy): The agent acts. The human watches (or sleeps)."
        ]
      },
      {
        "type": "p",
        "text": "PMs must be “painfully specific” with guardrails. A robot tasked with “optimizing your schedule” might cancel all your social events because they aren’t “productive.” It achieves the goal perfectly, but it makes you miserable. That is the danger of machine logic."
      },
      {
        "type": "h3",
        "text": "The Multimodal Agent Score (MAS)"
      },
      {
        "type": "p",
        "text": "Evaluating these non-human customers requires new math. The Multimodal Agent Score (MAS) aggregates quality dimensions: Understanding (AUQ), Reasoning (ARQ), and Response (AReQ)."
      },
      {
        "type": "p",
        "text": "For commerce, reasoning quality (ARQ) is usually weighted more heavily. If the agent understands you perfectly but buys the wrong car, the score should be low."
      },
      {
        "type": "h2",
        "text": "The Financial Plumbing: Stablecoins and x402"
      },
      {
        "type": "p",
        "text": "The old financial system is too slow for robots. Robots work in milliseconds; banks work in business days."
      },
      {
        "type": "p",
        "text": "To fix this, we have the x402 protocol. It uses the old HTTP 402 “Payment Required” code for instant machine payments. It settles in under two seconds using USDC on the Base network."
      },
      {
        "type": "p",
        "text": "For complex jobs, we use smart contracts like ERC-8183 for programmable escrow. The money is locked until a “neutral assessor” or code confirms the work is done. The contract is the judge, the jury, and the executioner."
      },
      {
        "type": "h2",
        "text": "The Legal Reality or “Who to Sue?”"
      },
      {
        "type": "p",
        "text": "There is a “liability gap.” If an AI agent buys an expensive subscription upgrade that you didn’t really want, who is responsible?"
      },
      {
        "type": "p",
        "text": "Regulators like the UK’s CMA are clear: the business that deployed the agent is responsible for following consumer law. You cannot blame the AI. You are responsible for:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Defining the agent’s authority.",
          "Keeping audit trails (logs) of why the agent did what it did.",
          "Providing human oversight."
        ]
      },
      {
        "type": "p",
        "text": "In the EU, the new Product Liability Directive treats AI like a product with strict liability. If the machine breaks the law, the person who turned it on pays the bill."
      },
      {
        "type": "h2",
        "text": "A Machine-to-Machine World"
      },
      {
        "type": "p",
        "text": "We are moving to an “agentic-first” design. This means building products where agents are the primary users and humans are just the administrative layer. By 2027, most application providers will have to change their pricing models to handle all the API traffic from robots."
      },
      {
        "type": "p",
        "text": "The “checkout experience” isn’t a page anymore. It is a programmatic handshake. It is fast, efficient, and slightly cold. But that is the architecture of the new economy. Welcome to it."
      },
      {
        "type": "h3",
        "text": "Works cited"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "What is agentic commerce? A guide to getting started | Stripe, accessed April 28, 2026, https://stripe.com/guides/agentic-commerce",
          "What Is Agentic Commerce? | IBM, accessed April 28, 2026, https://www.ibm.com/think/topics/agentic-commerce",
          "Agentic commerce - Wikipedia, accessed April 28, 2026, https://en.wikipedia.org/wiki/Agentic_commerce",
          "What is Agentic Commerce? How It Works & Why It Matters - Criteo, accessed April 28, 2026, https://www.criteo.com/digital-advertising-glossary/agentic-commerce/",
          "API Design Principles for the Agentic Era - Apideck, accessed April 28, 2026, https://www.apideck.com/blog/api-design-principles-agentic-era",
          "Agentic Era: The UI Transition has Started - AiThority, accessed April 28, 2026, https://aithority.com/guest-authors/agentic-era-the-ui-transition-has-started/",
          "The Missing Layer in AI-Driven Commerce, accessed April 28, 2026, https://www.adr.org/news-and-insights/trust-framework-for-agentic-commerce-disputes/",
          "The automation curve in agentic commerce - McKinsey, accessed April 28, 2026, https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-automation-curve-in-agentic-commerce",
          "Product management for Agentic AI: When to build agents and how ..., accessed April 28, 2026, https://www.mindtheproduct.com/product-management-for-agentic-ai-when-to-build-agents-and-wow-to-do-it-well/",
          "Key concepts – Agentic Commerce | OpenAI Developers, accessed April 28, 2026, https://developers.openai.com/commerce/guides/key-concepts",
          "How Payments Infrastructure Must Evolve for Agentic Commerce - FinTech Weekly, accessed April 28, 2026, https://www.fintechweekly.com/magazine/articles/payments-infrastructure-agentic-commerce-ai-agents-security-2026",
          "How Verifiable Intent builds trust in agentic AI ... - Mastercard US, accessed April 28, 2026, https://www.mastercard.com/us/en/news-and-trends/stories/2026/verifiable-intent.html",
          "Bot Management for the Agentic Era - Akamai, accessed April 28, 2026, https://www.akamai.com/blog/security/bot-management-agentic-era",
          "Agentic Commerce Security: An Essential Guide - Vouched ID, accessed April 28, 2026, https://www.vouched.id/learn/blog/agentic-commerce-security-guide",
          "Agentic Commerce Protocol: Secure AI Agent Identity Verification for Trust & Safety Leaders, accessed April 28, 2026, https://microblink.com/resources/blog/agentic-commerce-protocol/",
          "AP2 Protocol: Agent Payments for AI Commerce. - Blog 0xProcessing, accessed April 28, 2026, https://0xprocessing.com/blog/ap2-protocol/",
          "The Rise of Agentic Commerce - How AI Agents Are Transforming Digital Payments, accessed April 28, 2026, https://www.researchgate.net/publication/399961044_The_Rise_of_Agentic_Commerce_-_How_AI_Agents_Are_Transforming_Digital_Payments",
          "AP2 Protocol: Complete Guide to Agent Payments for Web3 Developers 2026 - Cobo, accessed April 28, 2026, https://www.cobo.com/post/ap2-protocol-complete-guide-to-agent-payments-for-web3-developers-2026",
          "AP2 and x402 - AP2 Protocol, accessed April 28, 2026, https://ap2-protocol.net/en/topics/ap2-and-x402",
          "Evaluating AI Agents in Contact Centers: Introducing the Multi-modal Agents Score, accessed April 28, 2026, https://www.microsoft.com/en-us/dynamics-365/blog/it-professional/2026/02/04/multimodal-agent-score/",
          "What is x402? - Crossmint Blog, accessed April 28, 2026, https://blog.crossmint.com/what-is-x402/",
          "The Agent Economy: A Blockchain-Based Foundation for Autonomous AI Agents - arXiv, accessed April 28, 2026, https://arxiv.org/html/2602.14219v1",
          "AI Agent Payments: The Future of Autonomous Commerce | Chainlink, accessed April 28, 2026, https://chain.link/article/ai-agent-payments",
          "AI Agents Can Now Escrow Payments Trustlessly — Meet ERC-8183, the Ethereum Standard That Changes Everything - CCN.com, accessed April 28, 2026, https://www.ccn.com/education/crypto/erc-8183-programmable-escrow-ai-agents-ethereum-how-it-works/",
          "ERC-8183: Agentic Commerce - Ethereum Improvement Proposals, accessed April 28, 2026, https://eips.ethereum.org/EIPS/eip-8183",
          "When Artificial Intelligence Buys the Wrong Thing: Autonomy, Consent, and Liability Gaps in Payment Law, accessed April 28, 2026, https://blogs.law.ox.ac.uk/oblb/blog-post/2026/02/when-artificial-intelligence-buys-wrong-thing-autonomy-consent-and-liability",
          "What Is AI Liability in the Agentic Economy? Why Someone Must Be on the Hook | MindStudio, accessed April 28, 2026, https://www.mindstudio.ai/blog/ai-liability-agentic-economy",
          "AI Agents and Consumer Law: What Businesses Need to Know - Cooley, accessed April 28, 2026, https://www.cooley.com/news/insight/2026/2026-03-26-ai-agents-and-consumer-law-what-businesses-need-to-know",
          "AI Agents for Business Intelligence: Guide + Use Cases - Domo, accessed April 28, 2026, https://www.domo.com/learn/article/ai-agents-in-business-intelligence",
          "AI Agent Liability: When Your Agent Causes Damage, Who Pays? | MintMCP Blog, accessed April 28, 2026, https://www.mintmcp.com/blog/ai-agent-liability",
          "Agentic First: designing products where agents are the primary users : r/mcp - Reddit, accessed April 28, 2026, https://www.reddit.com/r/mcp/comments/1s20y2f/agentic_first_designing_products_where_agents_are/",
          "The Agentic Token: How the Financial Plumbing of Autonomous AI is Actually Being Built, accessed April 28, 2026, https://medium.com/@w.lacerda/the-agentic-token-how-the-financial-plumbing-of-autonomous-ai-is-actually-being-built-5b808216d4c8",
          "Agentic Commerce Protocol, accessed April 28, 2026, https://www.agenticcommerce.dev/",
          "Google Universal Commerce Protocol (UCP) Guide, accessed April 28, 2026, https://developers.google.com/merchant/ucp"
        ]
      }
    ]
  },
  {
    "slug": "the-cultural-geiger-counter",
    "title": "The Cultural Geiger Counter",
    "dek": "Why companies held together by duct tape are absolutely terrified of your artificial intelligence",
    "date": "2026-03-09",
    "substack": "https://michellecavanaugh.substack.com/p/the-cultural-geiger-counter",
    "work": "avoid",
    "blocks": [
      {
        "type": "p",
        "text": "The other day, I found myself staring into a glowing glass rectangle, which happens to be the primary way human beings talk to each other now, and staring back at me from inside the glass was leadership mentee drinking coffee and telling me the latest in hiring for the single role he had approved. He was supposed to be building out his team to add innovation skills to the current roster, and he looked profoundly exasperated."
      },
      {
        "type": "p",
        "text": "Pro-tip: This is the default facial expression of middle management on Earth."
      },
      {
        "type": "p",
        "text": "“You wouldn’t believe it,” he laughed, explaining that half the cover letters crossing his desk were obviously written by ChatGPT, so he just tosses them out. “If a human being can’t be bothered to type out a polite letter, why would I hire them? I would hope they can do better than that…or at least understand the domain…”"
      },
      {
        "type": "p",
        "text": "I smiled politely, but deep inside my brain, a little alarm bell started ringing its heart out."
      },
      {
        "type": "p",
        "text": "There is a tremendous amount of weeping and gnashing of teeth these days about job candidates using generative AI to write their application materials, with critics calling it a lazy shortcut devoid of a human soul. What they fail to realize is that using a machine to develop your ideas and scale your output is simply the new way of making a living, and if you are a job seeker utilizing these tools, you aren’t doing anything criminal. You are simply executing the exact same technological strategies that these massive, lumbering enterprises are desperately trying, and almost always failing, to implement themselves."
      },
      {
        "type": "p",
        "text": "But there is a beautiful, entirely accidental benefit to this whole mess, because this backlash against AI cover letters serves as a perfect little Geiger counter for job seekers. It detects companies that are rotting from the inside out, and it perfectly flags teams that are operating as isolated cults of personality."
      },
      {
        "type": "p",
        "text": "This sort of corporate stagnation, you see, is what happens when a company treats innovation like a fancy new office chair, expecting to just bolt a probability engine onto workflows that are actually held together by duct tape, old habits, and sheer, trembling fear. Following the massive waves of corporate layoffs over the last few years, the people left behind in these organizations are usually the ones whose only real job is to keep the lights on. They are the legacy workers, the subject matter experts who have been sitting in the exact same rolling chairs for ten or more years, surviving the endless budget guillotines simply because they are the only ones who remember where the duct tape is hidden."
      },
      {
        "type": "p",
        "text": "These survivors possess an ocean of institutional knowledge, but because they’ve been locked in the corporate basement for so long, they simply don’t know what they don’t know. Hiring fresh talent, specifically people who are subject matter experts in the digital future, would be a wonderful, lifesaving thing for them, because they desperately need modernized workers to bridge the gap between their duct-taped reality and the rapidly approaching future."
      },
      {
        "type": "p",
        "text": "But these folks don’t actually want innovative people, because they want certainty, and they want things to stay exactly the way they have always been. So, when a hiring manager whines about an AI-written cover letter, it tells you everything you need to know about the fragile ecosystem of their department. Their team isn’t modernized enough to handle real innovation, and they certainly aren’t looking for a disruptor who might rock the boat or expose the fact that their data pipelines are broken and their policies are nonsense."
      },
      {
        "type": "p",
        "text": "They are looking for someone who fits perfectly into their ideological cult of personality, someone who poses absolutely no threat to their comfortable tenure. Rejecting a candidate for using a probability engine to write a letter is a dead giveaway that the manager just wants someone they can safely judge on “personality” rather than capability, clinging to the old, performative dance of the job hunt because it makes them feel safe and powerful."
      },
      {
        "type": "p",
        "text": "In a cult of personality, protecting fragile human egos is vastly more important than integrating the best tools or finding the most efficient path forward. If you happen to be a candidate who gets rejected or openly mocked for using a machine to articulate your worth, you should thank your lucky stars that you dodged a bullet. You successfully used AI not just to write a letter, but to elegantly filter out an obsolete organization that was bound to crush your spirit anyway."
      },
      {
        "type": "p",
        "text": "Let’s take a moment to talk about “industry knowledge.” If you spend enough time swimming in the corporate fishbowl, you will hear this phrase whispered with the kind of deep, trembling reverence usually reserved for holy artifacts or a really spectacular slice of pie."
      },
      {
        "type": "p",
        "text": "People cling to their industry knowledge like a life raft, but here is a funny, slightly tragic secret about the modern world: deep industry knowledge is rapidly becoming the equivalent of hoarding a massive, meticulously curated collection of yesterday’s newspapers. Or, if we want to be perfectly polite about it, it is a lot like memorizing the 1998 bus schedule for a city that just installed teleportation pads."
      },
      {
        "type": "p",
        "text": "It is undeniably impressive that a legacy worker knows exactly how the old machine works, but the machine is currently on fire, and a probability engine is already building a faster, weirder machine right next door. One where diversity of thought is leveraged."
      },
      {
        "type": "p",
        "text": "When a hiring manage requires “ten years of specific industry experience,” they rarely mean they are looking for a visionary. What they usually mean is that their internal processes are so bizarre, so uniquely convoluted and duct-taped together, that they desperately need someone who already knows how to navigate the wreckage without asking uncomfortable questions. They don’t want you to redesign the maze; they just want you to already know exactly where the Minotaur sleeps so no one has to wake him up."
      },
      {
        "type": "p",
        "text": "Industry knowledge is a lovely thing to have. It is a beautiful souvenir of the way the world used to work, and it is great for winning corporate trivia night. However, using it as a shield against the future is a fantastic way to end up very proudly, and very knowledgeably, left entirely behind."
      },
      {
        "type": "p",
        "text": "The companies that will actually survive the next decade aren't the ones throwing AI-assisted letters in the trash out of some misplaced sense of purity. They are the ones who understand a very simple, tragic truth about the modern age: if a team lacks the actual human skills to innovate, handing them an artificial intelligence is like giving a state-of-the-art microwave oven to a man whose only ambition in life is to protect his favorite block of ice. It is completely, fundamentally worthless. You can buy all the glittering probability engines in the universe, but without the modernized, restless minds required to wield them, all that technology is nothing more than very expensive electricity waiting in the dark.\n\nAnywho, I took a sip of my own coffee, smiled at the glowing rectangle one last time, made some excuse about how I forgot what I was saying, and quietly wondered exactly how many lines of code it would take to replace him entirely."
      },
      {
        "type": "p",
        "text": "My guess was about twelve.\n\nAnyway, I am taking on one more leadership level mentee if anyone is interested."
      }
    ]
  },
  {
    "slug": "context-debt",
    "title": "Context Debt",
    "dek": "The algorithm is fine, but your company’s duct-taped workflows are a problem",
    "date": "2026-03-03",
    "substack": "https://michellecavanaugh.substack.com/p/context-debt",
    "work": "dolorifuge",
    "blocks": [
      {
        "type": "h3",
        "text": "Here is the skinny:"
      },
      {
        "type": "p",
        "text": "Enterprise AI is collapsing because enterprises keep treating AI like a feature you can bolt onto a workflow that is taped together with policy, habit, and fear."
      },
      {
        "type": "p",
        "text": "The evidence is blunt:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "A big share of AI never makes it out of the lab. Gartner projected that at least 30% of GenAI projects would be abandoned after proof-of-concept by end of 2025, citing data quality, risk controls, costs, and unclear value.",
          "The “pilot-to-production” gap is widening. S&P Global reported the share of companies abandoning most AI initiatives before production jumped from 17% to 42% YoY, and that 46% of projects are scrapped between PoC and broad adoption.",
          "Value is concentrated in a small minority. Boston Consulting Group found only 5% of companies achieving AI value “at scale,” while 60% report no material value.",
          "GenAI is often “everywhere” and “nowhere” at once. MIT NANDA’s report argued 95% of organizations see zero return, and that enterprise-grade tools frequently stall due to brittle workflows and lack of contextual learning (i.e., the system doesn’t get better inside real operations).",
          "Data readiness is the quiet killer. Gartner found 63% of organizations either lack, or aren’t sure they have, the data management practices needed for AI."
        ]
      },
      {
        "type": "p",
        "text": "If you’re looking for a single sentence to print on a mug, here you go…"
      },
      {
        "type": "p",
        "text": "The enterprise keeps buying probability engines and deploying them in certainty-based organizations."
      },
      {
        "type": "h2",
        "text": "What AI looks like after it meets an enterprise"
      },
      {
        "type": "p",
        "text": "There’s a popular fantasy in boardrooms: you purchase AI the way you purchase office chairs. You choose a vendor, and then you sign things. Soon, the chairs show up, people sit in them, and productivity scooters into the glittering sunset."
      },
      {
        "type": "p",
        "text": "Enterprise AI doesn’t behave like chairs, though."
      },
      {
        "type": "p",
        "text": "Enterprise AI behaves like releasing a curious raccoon into the ductwork of a hospital, a bank, or a manufacturer and then acting shocked when it returns with:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Secrets",
          "Incorrect conclusions, and;",
          "A deep affection for the worst possible place to nest"
        ]
      },
      {
        "type": "p",
        "text": "The reason is simple and old: AI in enterprises is a socio-technical system, not a model. It is data pipelines, permissions, policies, incentives, interfaces, exceptions, escalation paths, training, audits, and the quiet art of humans deciding when to ignore the machine."
      },
      {
        "type": "p",
        "text": "This is why those “it worked in the demo” moments are so common. The demo is a world without the enterprise. In the demo, nobody is out sick, no one copy-pasted last quarter’s spreadsheet template into this quarter’s reality, and no regulator is asking who approved the model and why."
      },
      {
        "type": "p",
        "text": "A lot of enterprise AI failure is simply context debt: meaning, the organization doesn’t know (or can’t reliably reproduce) the conditions under which the model is supposed to be right. That’s why research into managing ML lifecycle “context” (metadata, versioning, change tracking) keeps showing up as practical infrastructure, not academic decoration."
      },
      {
        "type": "h3",
        "text": "Mermaid lifecycle sketch with common failure points (haha)"
      },
      {
        "type": "code",
        "text": "mermaid"
      },
      {
        "type": "p",
        "text": "Copy"
      },
      {
        "type": "code",
        "text": "flowchart LR\n A[Ambition: \"We need AI\"] --> B[Use-case selection]\n B -->|Failure: vague KPI / wrong problem| X1[PoC theater]\n B --> C[Data access & governance]\n C -->|Failure: data not AI-ready| X2[Data swamp]\n C --> D[Build or buy decision]\n D -->|Failure: vendor hype / \"agent washing\"| X3[Shiny tool mismatch]\n D --> E[Prototype & offline evaluation]\n E -->|Failure: offline ≠ real workflow| X4[Demo success, prod failure]\n E --> F[Workflow integration + change mgmt]\n F -->|Failure: no owner / no training| X5[Adoption stall]\n F --> G[Production rollout]\n G --> H[Monitoring, audits, retraining]\n H -->|Failure: drift, no surveillance| X6[Silent degradation]\n H --> I[Scale or retire]\n I -->|Failure: costs exceed value| X7[Budget guillotine]"
      },
      {
        "type": "h2",
        "text": "Case files from the real world"
      },
      {
        "type": "p",
        "text": "A few stories, because stories are what enterprises actually remember when the dashboard is lying."
      },
      {
        "type": "h3",
        "text": "A hospital-grade model that didn’t survive the hospital"
      },
      {
        "type": "p",
        "text": "The Epic sepsis prediction model was widely deployed, but in an external validation at Michigan Medicine it showed AUC 0.63 at the hospitalization level, with 33% sensitivity at the commonly used alert threshold and a large alert burden (alerts on 18% of hospitalizations while missing many true sepsis cases)."
      },
      {
        "type": "p",
        "text": "Later, a multicenter prospective validation of an updated version (v2) reported better discrimination (AUROC roughly 0.82 to 0.92 across sites) but still emphasized low positive predictive value and high alert burden, with substantial institutional variability."
      },
      {
        "type": "p",
        "text": "This is enterprise AI failure in its purest form: even when the model improves, the experience can remain punishing unless workflow integration, silencing strategies, and governance are treated as first-class engineering. Hospitals need an operational safety system."
      },
      {
        "type": "p",
        "text": "Hospitals need an operational safety system opposed to a tricky demo without solid change management."
      },
      {
        "type": "h3",
        "text": "A real estate algorithm meets an unpredictable world"
      },
      {
        "type": "p",
        "text": "Zillow’s SEC filings describe how its home-buying business depended on “data science and proprietary algorithms” to price homes, and how it ultimately decided to wind down operations in light of “home pricing unpredictability,” capacity constraints, and operational challenges."
      },
      {
        "type": "p",
        "text": "That’s an enterprise AI lesson you can hang on the wall: forecasting systems fail hardest when the business demands certainty from an uncertain market, and when operational constraints (renovation capacity, supply chain, labor) become the real bottleneck, not the model. I will type it louder for the kids in the back of the room."
      },
      {
        "type": "p",
        "text": "Forecasting systems fail hardest when the business demands certainty from an uncertain market."
      },
      {
        "type": "h3",
        "text": "Hiring software that quietly broke the law"
      },
      {
        "type": "p",
        "text": "The U.S. Equal Employment Opportunity Commission described a case where iTutorGroup allegedly programmed its hiring software to automatically reject older applicants (women 55+, men 60+), resulting in a settlement and ongoing compliance obligations."
      },
      {
        "type": "p",
        "text": "This is the enterprise encoding a policy choice into software, then acting surprised when regulators treat it like what it is: a decision system with accountability."
      },
      {
        "type": "p",
        "text": "“The algorithm went rogue” isn’t a reasonable excuse for encoding bad behaviors and processes."
      },
      {
        "type": "h3",
        "text": "A chatbot tries to become a separate legal entity"
      },
      {
        "type": "p",
        "text": "In a 2024 British Columbia CRT decision (summarized by CanLII), the tribunal rejected Air Canada’s argument that it wasn’t responsible for what its chatbot told customers, emphasizing that the chatbot was part of the company’s website and the company didn’t take reasonable care to ensure accuracy."
      },
      {
        "type": "p",
        "text": "If a system speaks on your behalf, it is part of your company for users, regulators, and courts."
      },
      {
        "type": "h2",
        "text": "Why engineering-led development makes it worse"
      },
      {
        "type": "p",
        "text": "Enterprises love an engineering led approach because it feels like progress: code is shipping, costs are tracked, a dashboard exists, and someone can say “iteration velocity” with a straight face."
      },
      {
        "type": "p",
        "text": "AI punishes this approach when it isn’t paired with product, design, and operations discipline because AI is less like a feature and more like a new layer of decision-making inside a living organization."
      },
      {
        "type": "p",
        "text": "Here are the organizational patterns that repeatedly show up behind “AI didn’t work”:"
      },
      {
        "type": "p",
        "text": "Success is measured like software…but it is more like operations.\nMIT NANDA’s report argues that adoption of generic tools may boost individual productivity, while enterprise grade systems fail when they can’t integrate into day-to-day workflows or learn from feedback in context. \n\nThat’s a product operating model problem."
      },
      {
        "type": "p",
        "text": "Ownership is unclear, so reality has no place to report bugs.\nNIST’s AI RMF frames AI risk management as a lifecycle responsibility—mapping, measuring, managing, and governing context-specific risks—because deployment is where harms and failures emerge."
      },
      {
        "type": "p",
        "text": "If no one owns monitoring and response, your “intelligent system” becomes a ghost story."
      },
      {
        "type": "p",
        "text": "Enterprises underinvest in MLOps and monitoring because the ROI is “invisible.”\nS&P Global notes increased interest in MLOps tools while also reporting that difficulty proving ROI is a reason organizations don’t invest…right before those same orgs scrap projects in bulk between PoC and adoption."
      },
      {
        "type": "p",
        "text": "This is like refusing to buy smoke detectors because you can’t quantify the value of the fires that didn’t happen."
      },
      {
        "type": "p",
        "text": "Context drift is treated as a surprise instead of a certainty.\nResearch across domains keeps emphasizing that data drift can threaten safety and effectiveness after deployment and that monitoring needs to be built in. \nEnterprises still behave as if their data will remain polite and stationary, like a portrait in a hallway."
      },
      {
        "type": "p",
        "text": "So, yes: engineering-led shipping can build AI fast. It can also build it wrong at scale."
      },
      {
        "type": "p",
        "text": "The counterweight is an operating model where product, design, ops, legal/compliance, and data governance share responsibility and where there’s someone paid to care about what happens after launch. BCG frames “future-built” success as an operating model with shared ownership between business and IT and a willingness to reshape workflows end-to-end rather than layering AI on top."
      },
      {
        "type": "h2",
        "text": "Procurement, regulation, and the economics of disappointment"
      },
      {
        "type": "p",
        "text": "Enterprise AI fails in a triangle: procurement, compliance, and cost."
      },
      {
        "type": "p",
        "text": "Procurement: You can now buy “agents” from thousands of vendors, many of whom are just rebranding existing automation. Reuters summarized Gartner’s warning about “agent washing,” where chatbot-like tools are marketed as agentic systems. \nWhen buyers can’t reliably test capability boundaries (autonomy, tool use, rollback safety), they purchase confusion."
      },
      {
        "type": "p",
        "text": "Regulation and compliance: Governments are moving toward enforceable governance requirements for higher-risk AI uses. The U.S. Office of Management and Budget memorandum M-24-10 requires agencies to implement minimum risk practices and, in some cases, to stop using systems that lack required safeguards. \nMeanwhile, the EU AI Act establishes risk-tiered obligations and significant penalties, with phased implementation. \nEven outside regulated sectors, this shapes enterprise behavior because the compliance muscle tends to grow everywhere."
      },
      {
        "type": "p",
        "text": "Economics: GPU bills aren’t your biggest worry. Costs associated with integration, security, audits, vendor management, and the staff time needed to make adoption real are a bigger concern. Gartner’s forecasts about GenAI and agentic AI cancellations cite escalating costs and unclear business value as dominant factors. The “AI value gap” data is a reminder that money doesn’t magically turn into outcomes: most firms still report limited or no value."
      },
      {
        "type": "p",
        "text": "Here is the cruel joke: the enterprise buys AI to reduce complexity, then discovers AI requires a mature relationship with complexity...and a skilled workforce."
      },
      {
        "type": "h2",
        "text": "Practical recommendations for product leaders and executives"
      },
      {
        "type": "p",
        "text": "This is the part where the article usually says “be strategic.” That’s like telling someone in a flood to “be drier.” Instead, here are actions that change failure odds."
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Define production as a contract, not a vibe.\nName the workflow step, the user persona, the success metric, and the rollback plan before building. Tie budgets to adoption and measurable outcomes, not demo completion.",
          "Treat data readiness like a prerequisite gate.\nIf your data governance can’t answer “where did this value come from?” and “who owns its definition?”, you don’t have AI-ready data but you do have a lot of misplaced hope. Gartner’s data readiness findings are the “check engine light” you shouldn’t ignore.",
          "Build monitoring and retraining policies as part of the feature.\nAssume drift, instrument it, define when to recalibrate, when to pause, and who approves changes. Drift isn’t a rare event; in many domains it’s expected behavior.",
          "Assign a single accountable owner for the deployed system.\nNot “the data science team.” Not “the vendor.” A named internal owner who is responsible for outcomes, auditability, and user impact across the lifecycle and make it consistent with a risk-management approach.",
          "Stop buying labels; buy tested capabilities.\nRun sandbox evaluations that test autonomy boundaries, error handling, data controls, and failure recovery. Contract for audit support and measurable outcomes. Assume “agent washing” exists until proven otherwise.",
          "Design the human workflow, not just the model.\nThe quickest way to kill adoption is to make humans do extra work to validate the system. The Epic sepsis model story is partly about model performance and largely about operational burden and alert fatigue.",
          "Stand up Product Ops for AI systems.\nYou need an operating function that coordinates: data governance, model lifecycle, evaluation discipline, release readiness, training, support, and compliance reporting."
        ]
      },
      {
        "type": "p",
        "text": "AI success is operational success wearing a new hat."
      },
      {
        "type": "p",
        "text": "If you do these things, your AI project may still fail, and that is okay because some should. But it will fail for honest reasons, quickly, and with learnings that transfer. That’s the kind of failure you want because that flavor of failure doesn’t poison the organization (or the goal)."
      },
      {
        "type": "p",
        "text": "Snark coming in 3, 2, 1…"
      },
      {
        "type": "p",
        "text": "And if you don’t do these things, don’t worry: your AI initiative will still produce something. Probably a dashboard."
      },
      {
        "type": "p",
        "text": "It will be so beautiful in spite of it being so, so wrong. Give it a name like “Intelligence 360,” which is the kind of name you give to something right before you quietly stop talking about it."
      },
      {
        "type": "p",
        "text": "Sources:\nUse AI to look it up."
      }
    ]
  },
  {
    "slug": "breakfast-of-consultants",
    "title": "Breakfast of Consultants",
    "dek": "Because the supercomputer still doesn't know what Gary does all day",
    "date": "2026-02-26",
    "substack": "https://michellecavanaugh.substack.com/p/breakfast-of-consultants",
    "work": "rue",
    "blocks": [
      {
        "type": "p",
        "text": "Listen…"
      },
      {
        "type": "p",
        "text": "There is a company in California called OpenAI. They’ve spent billions of dollars and enough electricity to power a medium-sized European country to build a brain in a box. They told us this brain was going to change everything. It was going to write our code, cure our diseases, and probably walk our dogs."
      },
      {
        "type": "p",
        "text": "Instead, they just hired McKinsey."
      },
      {
        "type": "p",
        "text": "OpenAI recently announced the “Frontier Alliance,” a multi-year partnership with Boston Consulting Group, McKinsey, Accenture, and Capgemini."
      },
      {
        "type": "p",
        "text": "The goal? To help enterprises figure out how to use their no-code AI agent platform."
      },
      {
        "type": "p",
        "text": "Let that sink in for a moment. The most hyped, purportedly paradigm-shifting technology in the history of human commerce cannot sell itself. It cannot explain its own value. It needs a 28 year old consultant, armed with a two-by-two matrix and a Patagonia fleece, to explain to Fortune 500 CEOs why they need it."
      },
      {
        "type": "p",
        "text": "If you work in product, this news should make you stop dead in your tracks because what OpenAI is quietly admitting is something we’ve all been whispering loudly for the last eighteen months: AI is missing the mark."
      },
      {
        "type": "p",
        "text": "Massively."
      },
      {
        "type": "h3",
        "text": "The Pilot Purgatory"
      },
      {
        "type": "p",
        "text": "Here is how enterprise AI works right now:"
      },
      {
        "type": "p",
        "text": "A CEO reads a magazine on an airplane. The magazine says AI is the future. The CEO lands, calls their VP of Product, and says, “Put the AI in the thing.” The product team panics. They build a chatbot. They stick it in the corner of the app. It costs a fortune to run. It occasionally hallucinates and offers a customer a refund for a product they never bought. The company issues a press release. The stock bumps up 2%."
      },
      {
        "type": "p",
        "text": "Then, nothing happens."
      },
      {
        "type": "p",
        "text": "The pilot fails to scale. The customers don’t use it, because it turns out people don’t want to have a deep, generative conversation with their accounting software. They just want to balance their books and go home to their children."
      },
      {
        "type": "p",
        "text": "This is why OpenAI had to call the consultants. Because fragmented tooling, siloed data, and bespoke integrations are ruining the fantasy. You can’t just sprinkle an LLM on a broken business process and expect magic. A bad process automated by a supercomputer is just a bad process that happens at the speed of light."
      },
      {
        "type": "h3",
        "text": "A Very Expensive Hammer"
      },
      {
        "type": "p",
        "text": "Let’s get this straight: AI is not a strategy. It is a commodity. Like electricity, or gravel, or anxiety."
      },
      {
        "type": "p",
        "text": "We have spent the last two years pretending that if we just buy enough compute, the strategy will magically reveal itself. That the machine will somehow figure out our business model, fix our supply chain, and write our Q3 OKRs."
      },
      {
        "type": "p",
        "text": "But a tool is only as good as its application. If you give a nail gun to a golden retriever, you don’t get a house. You do get a lot of noise and a trip to the vet."
      },
      {
        "type": "p",
        "text": "This is the reality of the enterprise right now. We have handed the most powerful cognitive nail gun in human history to middle managers who don’t even know where the studs are, but have been handed a mandate that is akin to “Do maths.\" Simply put, they lack a fundamental strategy for why they are doing any of this."
      },
      {
        "type": "p",
        "text": "Application requires intent. It requires looking at the unglamorous, fleshy parts of your business and deciding exactly where a probabilistic word-calculator can actually reduce friction. That takes time. It takes discipline. And it takes strategy…a word we seem to have largely replaced with “prompt engineering.”"
      },
      {
        "type": "h3",
        "text": "The Illusion of the Automated Workforce"
      },
      {
        "type": "p",
        "text": "Let’s rewind the tape. When the consumer-focused AI applications started to stall, when regular people realized they didn’t actually want to pay twenty dollars a month to have a chatbot write a mediocre email or plan a generic vacation, the narrative had to pivot. If the tech companies couldn’t sell to the masses, they would sell to the bosses."
      },
      {
        "type": "p",
        "text": "Suddenly, we were promised “agents.” We were promised autonomous, tireless digital workers that would seamlessly integrate with our systems, eliminate the need for bloated payrolls, and reduce the human workforce to dust. We were told the trajectory of AI was a steep, unstoppable curve toward artificial general intelligence. But the OpenAI and Big Consulting partnership reveals a much more boring reality: the trajectory of AI is hitting the hard wall of human friction."
      },
      {
        "type": "p",
        "text": "Because here is another dirty little secret: not a lot has changed. We still need competent humans."
      },
      {
        "type": "p",
        "text": "Spoiler."
      },
      {
        "type": "p",
        "text": "The plumbing of the global economy is still held together by Excel spreadsheets from 2014 and a guy named Gary who knows the legacy database passwords. The media loves to run breathless headlines about AI replacing millions of jobs, but there is exactly zero evidence that AI can replace a job without context."
      },
      {
        "type": "p",
        "text": "An LLM can write a beautifully structured Python script or generate a sparkling Q3 marketing plan. But it doesn’t know why the Python script needs to bypass a broken API that nobody has bothered to fix since the Obama administration. It doesn’t know which VP will throw a fit if the logo is on the left instead of the right."
      },
      {
        "type": "p",
        "text": "Context is everything, and right now, context is a closely guarded hostage."
      },
      {
        "type": "h3",
        "text": "The Context Hoarders in Layoff Land"
      },
      {
        "type": "p",
        "text": "In our current hiring climate, where tech workers are exhausted, companies are running endless “efficiency exercises,” and everyone is quietly terrified of losing their health insurance, institutional knowledge is the ultimate moat. Employees know that their undocumented, duct-taped workflows are the only thing keeping them indispensable. So, they hoard the context. They guard their messy, idiosyncratic business processes like dragons guarding gold."
      },
      {
        "type": "p",
        "text": "This is the brick wall that OpenAI and their new consulting buddies are going to hit at a hundred miles per hour. No consulting firm, no matter how many billable hours they log, can wrangle that information free. You can’t send a junior analyst to interrogate a veteran supply-chain manager and expect them to happily hand over the secret sauce so a chatbot can take their job. It defies human survival instincts."
      },
      {
        "type": "p",
        "text": "Without that hoarded context, the smartest AI in the world is just a very fast, very confident idiot. A bad process automated by a supercomputer is just a bad process that happens at the speed of light."
      },
      {
        "type": "h3",
        "text": "Why You Still Need the Damn Tractor"
      },
      {
        "type": "p",
        "text": "Look. Just because the tech billionaires lied to you about the impending singularity does not mean you get to ignore the technology entirely. Should we throw the servers into the ocean and go back to carbon paper?"
      },
      {
        "type": "p",
        "text": "No. Don’t be ridiculous."
      },
      {
        "type": "p",
        "text": "AI is not your new Chief Marketing Officer, and it is not a magical replacement for Gary in IT, but it is a phenomenally powerful tractor."
      },
      {
        "type": "p",
        "text": "When John Deere started mass-producing tractors, it didn’t eliminate the need for farmers. It eliminated the need for farmers to break their spines plowing dirt by hand. It let them farm more, and it let them farm better."
      },
      {
        "type": "p",
        "text": "Your company is full of digital dirt. You have highly paid professionals spending half their waking lives doing robotic, soul-sucking tasks: formatting spreadsheets, cross-referencing PDFs, writing repetitive status updates, and summarizing meetings that should have been an email in the first place. This is a profound waste of human life."
      },
      {
        "type": "p",
        "text": "You must still use AI to streamline your processes, because a human brain is too precious to be used as a copy-paste machine. Use the LLM to shovel the dirt. Give your employees the tractor. If you deploy AI as a tool to remove friction rather than a scheme to remove payroll, you will actually see the productivity gains everyone else is merely pretending to have."
      },
      {
        "type": "h3",
        "text": "The Boring Business of Babysitting the Brain"
      },
      {
        "type": "p",
        "text": "Here is where the actual, tangible value of AI sits right now: It isn’t in the models…It is in the leash."
      },
      {
        "type": "p",
        "text": "The greatest value in AI today is running governance and building structured strategies for deployment. Everyone is obsessed with what the brain can do, but enterprise value is entirely dependent on ensuring what the brain won’t do. It won’t leak customer data. It won’t hallucinate a legally binding contract. It won’t accidentally email the payroll spreadsheet to the entire marketing department."
      },
      {
        "type": "p",
        "text": "This is precisely why OpenAI had to call the consultants. They realized that you can’t just drop an omnivorous, unpredictable intelligence into a rigid corporate structure and expect it to magically align with compliance standards. You have to build fences. You need a strategy. You need governance frameworks, risk assessments, and deployment structures that map to the agonizingly slow reality of human “bureaucracy.”"
      },
      {
        "type": "p",
        "text": "This is where I’d like to make a pithy statement about layoffs, but I will hold my tongue."
      },
      {
        "type": "p",
        "text": "The companies that win the next five years wont be the ones with the smartest, most “agentic” AI. They will be the ones that master the deeply unsexy art of AI governance. They will figure out how to safely pipe their data into the machine without violating privacy laws."
      },
      {
        "type": "h3",
        "text": "What This Means for Product"
      },
      {
        "type": "p",
        "text": "If you are a product manager, a designer, or an engineer, the Frontier Alliance is a massive, blinking warning light for how you build."
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "The tech is no longer the product: OpenAI is openly admitting that model intelligence is not the bottleneck anymore. Organizational design is the bottleneck. If the smartest AI in the world needs corporate change management to be useful, your little wrapper app certainly isn’t going to survive on its own. You have to build for the messy human reality, not the technological capability.",
          "Stop building features looking for problems: We have spent two years shoving generative AI into every crevice of software because we could, not because we should. If you don’t deeply understand the user’s workflow, and the hoarded context behind it, no amount of AI will save your feature from abandonment.",
          "The Emperor’s New Tech Stack: The trajectory of AI isn’t democratizing intelligence; it’s just centralizing IT budgets into the hands of the people who already run the world. OpenAI’s engineers are going to sit alongside BCG and charge millions to tell your boss how to run your tech stack.",
          "The Product is now the brand: When the underlying technology is a commoditized brain rented by the millisecond from a server farm, you no longer have a technical moat. Everyone has the same magic trick. What you have is trust. Your brand isn't just your logo or your clever marketing copy anymore. Your brand is the actual, tactile experience of using your product. If your software feels like a chore, no amount of AI pixie dust will save you. You must build something people actually like."
        ]
      },
      {
        "type": "p",
        "text": "The machines are very smart, but the humans are very tired."
      },
      {
        "type": "p",
        "text": "We were promised a revolution. Instead, it is the same circus, just with slightly smarter elephants. If you are building products today, ignore the noise. Ignore the alliances. Stop worrying about whether your AI agents are “agentic” enough."
      },
      {
        "type": "p",
        "text": "Look at the person using your product. Are you saving them time? Are you navigating their lack of context? Are you helping them get away from the screen faster so they can go look at a tree or kiss their spouse?"
      },
      {
        "type": "p",
        "text": "If not, all the consultants in the world can’t save you.\n\nI promise I didn’t make this up, and here are some sources for you to check if you’d like."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "p",
        "text": "TechCrunch (February 23, 2026): https://techcrunch.com/2026/02/23/openai-calls-in-the-consultants-for-its-enterprise-push/"
      },
      {
        "type": "p",
        "text": "OpenAI Announcement (February 23, 2026): https://openai.com/index/frontier-alliance-partners/"
      }
    ]
  },
  {
    "slug": "product-management-is-brand-management",
    "title": "Product Management is Brand Management, Now.",
    "dek": "There’s a shift happening that a lot of teams can feel but still can’t name without reaching for a buzzword.",
    "date": "2026-01-14",
    "substack": "https://michellecavanaugh.substack.com/p/product-management-is-brand-management",
    "work": "awen",
    "blocks": [
      {
        "type": "p",
        "text": "There’s a shift happening that a lot of teams can feel but still can’t name without reaching for a buzzword. Growth used to be about finding a channel that worked, feeding it money, and pretending your retention problems are “a later sprint” problem. Now, the channels are fickle, the market is loud, and AI keeps handing everyone the same baseline competence (and hive-mind, but that is for a different post). When everything starts to look similar from a distance, the thing people use to decide is whether they trust you, and the only place that trust can be earned consistently is inside the product."
      },
      {
        "type": "p",
        "text": "I read a recent post by Elena Verna about growth turning into a trust problem. She also points at the part that lands hardest for product teams: product has become brand. That idea gets repeated like it’s a clever line (I’m kind of guilty for repeating it right now). The problem is that it’s also a set of consequences. Once you accept it, you have to run the whole operation differently."
      },
      {
        "type": "h3",
        "text": "Growth has to be believable."
      },
      {
        "type": "p",
        "text": "The old growth era rewarded volume. You could brute-force awareness, rent distribution, and a lot of companies built their entire identity on that rhythm: market loudly, ship quickly, patch the rough edges, repeat."
      },
      {
        "type": "p",
        "text": "That rhythm is collapsing. Channels are messy and attention is expensive. Switching is easy, now, and AI made “good enough” so cheap your customers can find an alternative in the time it takes you to schedule a meeting about whether alternatives exist. The market isn’t hungry for novelty. It’s tired. Customers want a tool that behaves, and they want to know they won’t get punished for trusting it."
      },
      {
        "type": "p",
        "text": "This is where trust starts behaving like a growth constraint. If people don’t trust you, you’re on a Peleton fast-track to nowhere. People want to know that a company isn’t trying to take advantage of them, and this hasn’t happened in years…"
      },
      {
        "type": "h3",
        "text": "Big tech stopped being a useful blueprint"
      },
      {
        "type": "p",
        "text": "This is where I’m going to gently kick over a sacred cow. A lot of product thinking is still haunted by the big tech era, where the MAANG companies became the default reference point for how to build, how to scale, how to hire, how to measure, and how to “do product.” That mythology is losing relevance in this new world, not because those companies disappeared, but because their conditions aren’t portable."
      },
      {
        "type": "p",
        "text": "Those businesses were built in an environment where distribution was unusually powerful, attention was cheaper, and scale advantages were so strong that process could be inefficient and still look brilliant from the outside. They also had the luxury of setting the rules for entire categories. That shaped a generation of product leaders who learned to optimize for internal machinery: frameworks, ladders, rituals, and metrics that made sense in a company where the default outcome was growth."
      },
      {
        "type": "p",
        "text": "Now, look at where they have come…"
      },
      {
        "type": "h3",
        "text": "Meta"
      },
      {
        "type": "p",
        "text": "Open any Meta product and you can tell, immediately, who the customer is, and it isn’t you. The app greets you the way a magician greets a volunteer, with warmth and a smile and the quiet understanding that you’re about to be used as a prop. Within minutes, you’re in a brightly lit corridor of little temptations, all carefully arranged to keep you scrolling past whatever you meant to do in the first place."
      },
      {
        "type": "p",
        "text": "What did you do to everyone’s grandparents, Mark?!"
      },
      {
        "type": "p",
        "text": "The whole thing feels like a slot machine that learned how to talk. The feed keeps interrupting itself like it’s allergic to stillness, the loading stutters just enough to keep you hovering, and the ads show up like a Kramer-esque neighbor who “just wanted to stop by to say hi,” except they don’t leave, and they keep asking you personal questions."
      },
      {
        "type": "p",
        "text": "Please leave me alone, mister."
      },
      {
        "type": "p",
        "text": "Nobody’s shocked there are studies linking heavy social media use to mental health harms. If you spend long enough in an environment engineered to tug at your attention, your mood, and your sense of social standing, you don’t walk away feeling connected. You walk away feeling a little hollow, like you just ate a whole bag of chips and somehow still feel hungry."
      },
      {
        "type": "h3",
        "text": "Amazon"
      },
      {
        "type": "p",
        "text": "The Amazon shopping app works, in the same way a crowded airport works. You eventually get where you’re going, but you’ll arrive overstimulated and strangely disappointed in yourself. Yes, you can find what you need. You’ll just have to pay a small cognitive toll at every turn because every pixel is fighting for custody of your eyeballs like it’s a contested divorce."
      },
      {
        "type": "p",
        "text": "It doesn’t feel like shopping. It feels like an escape room designed by advertisers, where the clues are sponsored, the exits keep relocating, and somebody keeps shouting “Customers also bought!” as if that’s a personality trait. You open it with a simple intention and then spend the next ten minutes being herded, redirected, and upsold until you forget why you came, remember you have a finite lifespan, and close the app like you’re escaping a small fire. For some reason, we have become so accustomed to it, we act like it is normal."
      },
      {
        "type": "p",
        "text": "It was this or an adorable dog telling you there is an error. I still trust the dog, but not the company."
      },
      {
        "type": "p",
        "text": "I’m not convinced there are designers in the building. If there are, I picture them behind glass like rare birds, while an assembly line shovels interface decisions into an incinerator and measures success by the smoke. This is what happens when “product” turns into program in disguise: the experience stops being the point, and the conveyor belt becomes the point. Suddenly you’re not building a product, you’re running a shipping operation with a UI taped to the front like a smiley face sticker. Everything is “on track,” every dependency has its own doc, and the customer experience becomes the place where all compromises go to live out their retirement. The team celebrates velocity while the user quietly develops new coping skills, like closing the app and going outside. Speaking of retirement, many of the Amazon folks I have met make the joke that they are going to work at Microsoft when they retire, so let’s talk about them for a minute…"
      },
      {
        "type": "h3",
        "text": "Apple"
      },
      {
        "type": "p",
        "text": "Apple sells serenity. The hardware looks like it was designed by someone who irons their jeans, and for a while you believe you’ve joined a simpler life where nothing breaks and everything glides. Then you try to do one mildly advanced thing, like manage storage or move photos between devices, and you discover an ecosystem of polite little traps. iCloud is either a guardian angel or a haunted attic, and which one you get depends on the phase of the moon and whether you clicked the wrong toggle three years ago."
      },
      {
        "type": "p",
        "text": "Apple support voice: “Your photos are safe in iCloud.”"
      },
      {
        "type": "p",
        "text": "That’s where the trust starts to wobble. The whole Apple deal is built on confidence. You’re paying for the feeling that you won’t have to think about it. The moment you have to think about it, the spell breaks. You start watching your photos like they’re tenants who might skip town, and you start treating storage warnings like prophecies. The UI stays calm and pleasant while you’re quietly panicking, which somehow makes it worse. It’s like being told everything’s fine by a person standing in front of a burning toaster."
      },
      {
        "type": "p",
        "text": "Apple also perfected the art of removing ports and selling you the feeling of progress. You start your day with a beautiful device and end it with a pouch full of adapters like you’re a traveling magician whose specialty is cables. It’s premium, sure, but it’s also a recurring tax on normal behavior, and the tax is paid in dongles, subscriptions, and small moments of indignity at the worst possible times, like when you’re trying to present something and realize you forgot the correct ceremonial adapter."
      },
      {
        "type": "p",
        "text": "Apple’s Liquid Glass rollout, sponsored by my charging cable’s will to live."
      },
      {
        "type": "p",
        "text": "And now we have Liquid Glass, which sounds like a perfume and behaves like a design decision made by someone who really missed reflective surfaces. Everything is shiny and translucent, as if your phone has decided it’s a high-end cocktail bar. It looks cool for about eight seconds, and then you realize you’re reading text on top of a moving blur like you’re trying to check directions through a wet windshield. When the aesthetic starts interfering with clarity, it doesn’t feel luxurious. It feels like the product is asking you to admire it instead of use it."
      },
      {
        "type": "p",
        "text": "Apple’s brand promise is calm, coherent, and reliable, so every confusing iCloud moment, every missing port, every glossy layer that makes things harder to read lands as a small betrayal. You don’t lose trust because one thing is annoying. You lose trust because the annoyances start forming a pattern, and the pattern says, “You’ll adapt. You’ll pay. You’ll keep up.”"
      },
      {
        "type": "h3",
        "text": "Netflix"
      },
      {
        "type": "p",
        "text": "Netflix has a special talent for taking a massive library and making it feel like you’ve only got twelve options. The algorithm doesn’t guide you through possibility. It herds you into a small fenced-in yard filled with slightly different versions of whatever you watched last week, and then it stands there proudly like it invented choice. If the original pitch of streaming was “endless selection,” the lived experience is starting to feel like “endless selection of the same three moods.”"
      },
      {
        "type": "p",
        "text": "“What if we show you the same five shows again… but in a new row?”"
      },
      {
        "type": "p",
        "text": "Watch one documentary and suddenly you’re trapped in Documentary World. Watch one romantic comedy and you’ll be escorted into a hallway of smiling thumbnails forever. Watch a crime series and congratulations, you now live in Crime Town, where everything looks like it was shot through the same gray filter and everyone is always one episode away from “a shocking twist.” The library can be enormous, but if the system keeps serving you a loop based on your last few clicks, the size stops mattering. Discovery turns into reruns of your own behavior, which defeats the entire point of paying for variety in the first place."
      },
      {
        "type": "p",
        "text": "Then you hit the pricing side of the trust problem, where the rules keep shifting in ways that feel convenient for Netflix and exhausting for everyone else. The tiers change, the price creeps up, ads sneak in, household rules tighten, device limits start acting strange, and add-ons appear like a new toll booth on a road you already paid to drive on. It’s all packaged in cheerful, reassuring language that frames it as an improvement, even though what you’re actually experiencing is a moving target. You’re paying for access, but the terms of that access can be rewritten whenever Netflix decides it wants a narrower funnel and a higher rent."
      },
      {
        "type": "p",
        "text": "None of this is catastrophic on its own, which is exactly why it works. Trust usually doesn’t blow up in one dramatic moment. It wears down through a steady drip of small signals. The algorithm keeps narrowing your world instead of opening it up, and the pricing and plan changes keep shifting the ground under your feet while the copy smiles and calls it an improvement. Eventually you stop opening Netflix with any real excitement and start opening it the way you check the fridge, hoping something new showed up while you weren’t looking."
      },
      {
        "type": "h3",
        "text": "Google"
      },
      {
        "type": "p",
        "text": "Google is what happens when a company builds half the modern internet and then leaves all the doors unlocked. The individual products can be excellent, and the overall experience can still feel like living in a house where every room was remodeled by a different contractor who refuses to speak to the others. You open settings and it turns into a choose your own adventure novel, except every ending leads to another settings page, and some of them are duplicated just to keep things exciting. The Winchester House. It is the tech version of the Winchester House."
      },
      {
        "type": "p",
        "text": "I tried to change my settings and ended up three doors deep with no exit sign."
      },
      {
        "type": "p",
        "text": "Search is the weirdest one now because it’s still powerful, but the experience has started to feel like you’re trying to ask a simple question while an overconfident assistant keeps interrupting to “help.” You came for an answer, and instead you get an AI summary that speaks with the certainty of a person who didn’t do the reading, followed by a collage of links that may or may not relate to what you asked in the first place. Sometimes it’s useful, and sometimes it’s confidently wrong in a way that makes you trust your own memory less, which is a fascinating product outcome if you’re into psychological horror."
      },
      {
        "type": "p",
        "text": "This is also why traditional SEO is dead, or at least on life support with a tube full of nostalgia. The old game was ranking: keywords, backlinks, pages engineered to satisfy the algorithm, and an entire industry dedicated to turning the internet into a landfill of “Top 10” lists written by nobody for no one. Now the AI layer is eating the click, summarizing the content, and handing users an answer-shaped object before they ever reach the site. Even when your page ranks, you’re competing with a machine-generated response that sits above you like a bouncer. The result is grim: brands and publishers pay to create content, and the platform captures the value without sending the traffic, which makes the whole ecosystem feel less like search and more like extraction."
      },
      {
        "type": "p",
        "text": "You can see the next move already happening. Companies are routing around Google altogether by building AI-first front doors where the “search” happens inside their own ecosystem. Retailers, especially, don’t want to rent attention from an algorithm and hope the customer finds them. They want to answer the question directly and keep the journey end-to-end, which is why you’re seeing partnerships and integrations that push people toward conversational discovery inside apps instead of classic web search. Hell, Google is even rerouting around Google. We live in wild times."
      },
      {
        "type": "h3",
        "text": "Your product is already your brand, even if nobody wants to admit it…"
      },
      {
        "type": "p",
        "text": "Once upon a time, brand lived in marketing and people would say it was “expressed” through the product or service. During that time, housing was affordable, and everyone would send messages to their friends on their shiny new Nokia phones."
      },
      {
        "type": "p",
        "text": "I’m being sarcastic, but seriously: your product is your brand, and frankly, it’s been that way for a while now. We just pretended like it wasn’t this way because the big tech companies were paying a lot of money."
      },
      {
        "type": "p",
        "text": "The truth that we all knew but were too ambitious to admit is that the customers don’t live in your org chart. They don’t live in your brand guidelines. They definitely don’t live in that slide where everyone agreed you’re “premium, but approachable” right before shipping three different versions of the same button. They live in the product."
      },
      {
        "type": "p",
        "text": "They notice how quickly they can get to the thing they came for, or how quickly they get redirected into a maze of setup steps, popups, and helpful hints that are only helpful if you already know what they mean. They notice whether the interface does the polite thing and explains itself, or whether it expects them to earn a minor in your internal terminology before they’re allowed to proceed."
      },
      {
        "type": "p",
        "text": "“I don’t want to talk to your AI…where are my grandma’s 85th birthday pics?”"
      },
      {
        "type": "p",
        "text": "Then reality shows up, because reality always shows up. Something fails, a flow breaks, a page loads forever, an edge case appears, and suddenly your product reveals who it really is. You either help people recover like you respect their time, or you hand them an error message that feels like a smirk. The billing moment arrives, too, which is where a lot of companies mysteriously develop selective memory about their “values.” Customers can tell whether pricing is a fair exchange or a puzzle box designed to see what you can get away with."
      },
      {
        "type": "p",
        "text": "And when support enters the picture, customers learn the truth about your company structure. Do they feel like they’re talking to one coordinated team, or like they’ve been dropped into a relay race where everyone passes the baton back and forth? Yeah, customers can feel that…"
      },
      {
        "type": "p",
        "text": "If you’re a PM, you’re the one shaping that answer. You can call it activation, retention, engagement, or whatever else makes it sound appropriately scientific. Hell, you can call it “experience,” “retention,” or “activation” if it helps you sleep at night. It’s still brand work. Customers, on the other hand, experience it as trust, and trust is brand. Marketing hasn’t owned this in a long time."
      },
      {
        "type": "p",
        "text": "Let’s get another thing straight: trust isn’t abstract. It’s a physical sensation. You can feel it when you’re using a product and you’re not bracing for impact. That’s why I pay attention to the products I trust, because they’ve earned a place in my life through behavior, not through marketing. Elena mentioned a few she trusts in her post, and I think it si a great idea to share in the event any of you feel the same (and maybe you will be inclined to share the ones you trust, too)."
      },
      {
        "type": "p",
        "text": "Spotify: Spotify keeps me moving and the experience feels personalized without feeling intrusive. I don’t feel like I’m fighting it to get an experience I was promised, but can’t find."
      },
      {
        "type": "p",
        "text": "ChatGPT: ChatGPT stays responsive in the messy middle of thinking, which is where most tools abandon you. There are quirks that come with new (ish) products, but this one doesn’t hide it. I like the honesty."
      },
      {
        "type": "p",
        "text": "Miro: Miro makes complexity feel navigable instead of punishing. Unlike Mural, it doesn’t feel like it is trying to be complicated to prove something (or because of feature creep)."
      },
      {
        "type": "p",
        "text": "Canva: Canva lets me create without making me pay an entrance fee in confusion. It is a replacement for lower thought design that has been obsolete for some time, now."
      },
      {
        "type": "p",
        "text": "Lovable: Lovable is newer on my list, and what stands out is how quickly it gets me to something real without making me learn a private language first. While thsi is the entire point of it, it doesn’t make me feel like I should have learned anything prior to using it. The complete lack of condescension is what makes it, well, Lovable."
      },
      {
        "type": "p",
        "text": "Substack: Substack is the more emotionally mature sibling of Medium. I abandoned Medium shortly after writing two articles, and never returned. Partly out of lack of interest in the experience, but mostly because it reminded me of a cleaned up Lotus Notes interface had a baby with WordPress and then put makeup on it."
      },
      {
        "type": "p",
        "text": "None of these products are perfect. They’ve earned trust by being consistent enough that I can relax, and I don’t feel like I am being personally insulted by outages or sneaky pricing practices. That relaxation is what product teams earn with the way the product behaves over time."
      },
      {
        "type": "p",
        "text": "So, where do we go from here?"
      },
      {
        "type": "h3",
        "text": "Take Action"
      },
      {
        "type": "p",
        "text": "Here are so me actionable changes for Product Managers to make to ensure trust is embedded in the product:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Pick 3 trust metrics and ship against them. Time to value, key-flow success rate, support contacts per task, pricing confusion rate. If you can’t measure it yet, add instrumentation and treat it like product work.",
          "Run a “trust review” before every release. What promise did we just make, where can it break, what does failure look like, and what will support say when it does?",
          "Stop shipping program work in a product costume. Every roadmap item needs a customer-facing outcome and a quality bar, not just a dependency plan and a deadline.",
          "Make pricing behave like a feature opposed to a surprise. No hidden fees, no puzzle-box packaging, no “friendly” copy that’s really a trap. If it’d feel gross in person, it’ll feel gross in the product.",
          "Kill handoffs and build together. If design shows up after decisions are “final,” you’re manufacturing seams. Seams lead to confusion and confusion becomes churn."
        ]
      }
    ]
  }
];

export function getNote(slug: string) {
  return notes.find((note) => note.slug === slug);
}
