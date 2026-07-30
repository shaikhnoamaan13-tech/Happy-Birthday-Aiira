/* ============================================================
   💗  EDIT EVERYTHING HERE  💗
   This is the ONLY file you need to change.
   Change the text between the 'quotes'. Don't delete commas.
   ============================================================ */

const CONFIG = {

  /* ---------- 1. THE BASICS ---------- */
  herName: "Aiira",
  yourName: "Noamaan",            // shown at the bottom of the letter

  // Her birthday — set to midnight on 31 July 2026, India time.
  // The "+05:30" pins it to IST, so it hits zero at midnight in India
  // even if she opens the site while travelling abroad.
  // (Not in India? Change +05:30 to your offset, or delete it to use
  //  whatever timezone her phone is set to.)
  birthday: "2026-07-31T00:00:00+05:30",

  // The tab title
  pageTitle: "Happy Birthday, Aiira 💗",


  /* ---------- 2. HERO (top of page) ---------- */
  hero: {
    smallText: "Something special is loading...",
    // Big script name shown on the hero
    bigText: "Aiira",
    subText: "The world's favourite person turns a year more wonderful.",
    // Main photo of her. Put the file in images/ and write the name here.
    photo: "images/aiira.jpg",
    // Message that replaces the countdown once the birthday arrives
    celebrationText: "Happy Birthday, Aiira!",
    celebrationSub: "Today the whole world gets to celebrate you. 🎂",
  },


  /* ---------- 3. THE LOVE LETTER ---------- */
  letter: {
    title: "A Letter For You",
    // Each string is one paragraph. Add or remove paragraphs freely.
    paragraphs: [
      "My Aiira,",
      "I've started writing this a hundred times in my head and every version ended the same way — with me realising there aren't enough words in any language for what you are to me.",
      "I keep thinking about that evening by the sea in Thane. The first time it was just us, no one else, nowhere to be. I didn't know it then, but I think some part of me already did.",
      "And then January. We were driving around with nowhere in particular to go, and you held my arm and said yes. I have had a lot of good days in my life. That one is still the best.",
      "Since then we've actually built things, you and me. strawbelle.co, from nothing. Cutting that ribbon at Indus Wok together. Brew & Batter tucked inside it. Most people our age are still talking about what they'd like to do one day — we just went and did it.",
      "You have this way of walking into a room and making it softer. You laugh and suddenly the day is fixable. You look at me like I'm someone worth looking at, and honestly, that alone has changed my whole life.",
      "Thank you for your patience, your chaos, your 2 a.m. voice notes, your terrible-but-somehow-perfect jokes, and every single ordinary day you've made feel like something worth remembering.",
      "Today is yours. I hope it's loud and sweet and full of everything you love. And I hope you know that whatever comes next, I'm choosing you. Every time.",
      "Happy birthday, my favourite person.",
    ],
    signOff: "All my love,",
  },


  /* ---------- 4. SOMETHING I NEED TO SAY ---------- */
  saying: {
    title: "Something I Need To Say",
    subtitle: "The honest part.",

    // The apology. Each string is a paragraph.
    apology: [
      "Before anything else — I'm sorry.",
      "I'm sorry for yesterday. For raising my voice at you. There's no version of that where I was right, and you didn't deserve a second of it. You deserve someone who is gentle with you on the hard days too, not just the easy ones. I'm working on being that.",
      "And I'm sorry for something bigger. You have done so much for me — more than you ever say out loud, more than I think I've properly thanked you for. Some days I feel like I can't give back even a fraction of it, and it sits with me more than you know.",
      "I'm not writing this to be forgiven today. I just didn't want to hand you something this pretty without also saying the true thing.",
    ],

    // What you believe about her. This shows in a softer block underneath.
    beliefTitle: "And Here's What I Know",
    belief: [
      "You are strong in a way I don't think you give yourself enough credit for. I've watched you carry things that would have flattened most people, and you keep going — and somehow you stay kind while you do it. That's rare. I notice it every single time.",
      "You are going to be a brilliant lawyer. I'm not saying that because it's your birthday. I've seen the way your mind works, the way you argue, the way you refuse to let go of something you believe in. They genuinely will not know what hit them.",
      "Whatever you decide you want out of this life, you'll get it. I've never once doubted that. Not for a second.",
      "And honestly? All I really want is for you to be safe and happy. That's the entire list. Everything else is a bonus.",
    ],
  },


  /* ---------- 5. REASONS I LOVE YOU ---------- */
  reasons: {
    title: "Reasons I Love You",
    subtitle: "A very incomplete list.",
    items: [
      { emoji: "🌙", text: "The way you scrunch your nose when you laugh too hard." },
      { emoji: "☕", text: "How you remember the tiniest things I say and bring them up months later." },
      { emoji: "🎵", text: "Your terrible singing in the car. Never stop." },
      { emoji: "🫂", text: "You make hard days feel survivable just by existing." },
      { emoji: "✨", text: "The way you get excited about things — fully, unembarrassed, all in." },
      { emoji: "📱", text: "Your long texts. I read every single one twice." },
      { emoji: "🍜", text: "You steal my food and I let you. Every time." },
      { emoji: "💫", text: "You're kind to people who can do nothing for you. That's rare." },
      { emoji: "🌻", text: "Because being your person is my favourite thing about me." },
    ],
  },


  /* ---------- 6. OUR STORY TIMELINE ---------- */
  timeline: {
    title: "Our Story",
    subtitle: "So far.",
    items: [
      { date: "17 June 2024",   heading: "Our First Date",
        text: "A place by the sea in Thane. Just the two of us, a lot of nervous energy, and me quietly hoping the evening wouldn't end." },

      { date: "5 January",      heading: "You Said Yes",
        text: "We were driving around with nowhere to be. You held my arm and said yes. Best day of my life — and I'm not exaggerating that even slightly." },

      { date: "Our First Build", heading: "strawbelle.co",
        text: "The first thing we made together, out of nothing but an idea and a lot of stubbornness. Ours." },

      { date: "The Ribbon",     heading: "Indus Wok",
        text: "Cutting that ribbon together is a memory I will keep for the rest of my life. We actually did that. Us." },

      { date: "And Then",       heading: "Brew & Batter",
        text: "Our little cafe inside Indus Wok. Small, entirely ours, and proof that the first one wasn't luck." },

      { date: "31 July",        heading: "Your Birthday",
        text: "Celebrating the day the world got a whole lot better." },
    ],
  },


  /* ---------- 7. PHOTO GALLERY ---------- */
  gallery: {
    title: "Us",
    subtitle: "Tap any photo to see it bigger.",
    // ✅ EASIEST WAY: name your photos 1.jpg, 2.jpg, 3.jpg ... and drop them
    //    into the images/gallery/ folder. Any number that doesn't exist is
    //    hidden automatically, so you can use as many or as few as you like.
    //
    // Want custom names or captions? Edit the list below.
    // Example: { src: "images/gallery/goa.jpg", caption: "Goa, that sunset" }
    photos: [
      { src: "images/gallery/1.jpg",  caption: "Snow Kingdom — ridiculous jackets, yellow boots, and you." },
      { src: "images/gallery/2.jpg",  caption: "Your hand always finds mine." },
      { src: "images/gallery/3.jpg",  caption: "An ordinary Wednesday. My favourite kind of day." },
      { src: "images/gallery/4.jpg",  caption: "Car rides with you hit different." },
      { src: "images/gallery/5.jpg",  caption: "This is the face you make when you're happy. I love it." },
      { src: "images/gallery/6.jpg",  caption: "Mood: exactly this." },
      { src: "images/gallery/7.jpg",  caption: "Ridiculous. Adorable. You." },
      { src: "images/gallery/8.jpg",  caption: "Mumbai looked good that day. You looked better." },
      { src: "images/gallery/9.jpg",  caption: "That smile. Every single time." },
      { src: "images/gallery/10.jpg", caption: "Even when you're not posing, you're stunning." },
      { src: "images/gallery/11.jpg", caption: "Flowers, and the girl who deserves all of them." },
    ],
  },


  /* ---------- 8. THE SURPRISE GIFT ---------- */
  gift: {
    title: "One More Thing",
    subtitle: "Go on. Open it.",
    buttonText: "Open Me",

    // Shown first, above the ring — the softer part.
    forgiveLine: "Before the big question — I'm sorry. Not just for yesterday, but for every day I fall short of what you deserve. I hope you can forgive me for those.",

    // The lead-in line just above the question.
    leadIn: "And if you can —",

    // THE question.
    question: "Will you marry me?",

    // What comes after the question.
    afterText: "Not today, not tomorrow necessarily. But one day, and every ordinary day after that. It's you. I think it was always going to be you.",

    // Tiny line at the very bottom.
    revealSmall: "(you can say yes in person. I'll be waiting.)",
  },


  /* ---------- 9. MIDNIGHT LOCK ---------- */
  // If true, anyone opening the link before her birthday sees a locked
  // screen with the countdown. It unlocks BY ITSELF at midnight — she
  // doesn't even need to refresh.
  lock: {
    enabled: true,
    smallText: "For Aiira",
    title: "Not Yet.",
    message: "This opens at midnight on your birthday.",
    hint: "You can leave this open — it unlocks by itself.",
    unlockText: "It's midnight.",
  },


  /* ---------- 10. MUSIC ---------- */
  music: {
    enabled: true,

    // Put your mp3 in the music/ folder and name it song.mp3
    // (See music/HOW-TO-ADD-THE-SONG.txt — takes 2 minutes.)
    file: "music/song.mp3",

    // Shown next to the play button
    label: "Play our song",
  },


  /* ---------- 11. FOOTER ---------- */
  footer: "Made with far too much love, and a little bit of code.",
};

/* Don't touch this line — it hands your settings to the page. */
window.CONFIG = CONFIG;
