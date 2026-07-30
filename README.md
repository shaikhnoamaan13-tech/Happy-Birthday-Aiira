# 💗 Aiira's Birthday Site

A countdown, a love letter, your photo gallery, and a surprise gift box.

**Total time to get it live: about 15 minutes.**

---

## ✅ Already done for you

- **All 11 of your photos** are in the gallery, each with a caption
- Two car photos were **rotated upright**, the "Wednesday" one had its
  **black bars trimmed**, and the flowers photo was **brightened** so it's
  visible on a phone screen
- Every photo was **compressed** — the whole gallery is 1.3 MB, so it loads
  fast on mobile data
- Your Snow Kingdom photo is the **hero image**, cropped to both your faces
- Your **name** signs the letter
- The **timeline** has your real story: the sea in Thane, the car on 5 January,
  strawbelle.co, the Indus Wok ribbon, and Brew & Batter
- A **"Something I Need To Say"** section with your apology and what you
  believe about her
- A **proposal** in the gift box — the forgiveness line, an animated
  diamond ring, and "Will you marry me?"
- A **midnight lock** so the link stays sealed until her birthday
- **Mobile-tested** on 6 real screen sizes, portrait and landscape
- A **WhatsApp link preview** is set up

## ⏱️ The only thing left

1. **Read the letter and captions** (below) — change anything that isn't you
2. **Put it online** — STEP 4

---

## STEP 1 — Add the photos

### Her main photo — ✅ already done

Your Snow Kingdom photo is already in as `images/aiira.jpg`, cropped so you're
both centred in the circle.

Want a different one? Replace that file. Use a square-ish photo — it gets
cropped into a circle, so anything at the edges gets cut off.

### The gallery photos — ✅ already done

All 11 are in, in this order:

| # | Photo | Caption |
|---|---|---|
| 1 | Snow Kingdom | "Snow Kingdom, Thane — 17 June 2024. Where it all started." |
| 2 | Your hands on the table | "Your hand always finds mine." |
| 3 | "Wednesday" car selfie | "An ordinary Wednesday. My favourite kind of day." |
| 4 | Her leaning on you in the car | "Car rides with you hit different." |
| 5 | Cheek-to-cheek selfie | "This is the face you make when you're happy. I love it." |
| 6 | "mood:" car photo | "Mood: exactly this." |
| 7 | Her squishing her face | "Ridiculous. Adorable. You." |
| 8 | Marine Drive, white skirt | "Mumbai looked good that day. You looked better." |
| 9 | Cafe, denim jacket | "That smile. Every single time." |
| 10 | Green window cafe | "Even when you're not posing, you're stunning." |
| 11 | Holding flowers | "Flowers, and the girl who deserves all of them." |

**Change any caption** in `config.js` — that's the part worth personalising.
I guessed at these; you know what actually happened in each one.

**Want to add more?** Name them `12.jpg`, `13.jpg`… and add a matching line
to the photo list in `config.js`.

Good to know:
- Use **as many or as few as you want.** The site is set up for 20. If you only
  add 7, the other 13 are skipped automatically — nothing breaks, no empty boxes.
- Want more than 20? Open `config.js` and copy another line into the photo list.
- Files must end in `.jpg` (lowercase). If yours are `.png` or `.jpeg`, either
  rename them or update the names in `config.js`.
- **Phone photos are huge (4–8 MB each).** Shrink them first or the site will
  load slowly on mobile data — see "Make photos load fast" below.

### Want captions?

In `config.js`, find the gallery list and fill in the caption:

```js
{ src: "images/gallery/1.jpg",  caption: "Goa, that sunset" },
```

Leave `caption: ""` for no caption.

---

## STEP 2 — Make it yours

Open **`config.js`** in Notepad, TextEdit, or VS Code. It's the only file you
need to touch, and it's full of comments explaining each part.

| What | Where in the file |
|---|---|
| Your name (signs the letter) | `yourName` — ✅ set to Noamaan |
| The love letter | `letter.paragraphs` |
| The apology + what you believe | `saying` |
| Reasons you love her | `reasons.items` |
| Your story timeline | `timeline.items` |
| The proposal + forgiveness line | `gift` |
| The midnight lock screen | `lock` |
| The date/time it counts to | `birthday` |

**⚠️ The two rules of editing this file:**
1. Only change text **between the "quote marks"**.
2. Don't delete the commas at the end of lines.

If the page ever goes blank after an edit, you deleted a quote or a comma.
Undo with `Ctrl+Z` and it'll come back.

### ✍️ Read it all before you send it

The letter, the apology, and the timeline all use your real story now — the sea
in Thane, the car on 5 January, strawbelle.co, the Indus Wok ribbon, Brew &
Batter. But **the words are still mine, not yours.**

The apology especially: read it twice. If a line doesn't sound like how you'd
actually say sorry to her, change it. An apology in someone else's phrasing
is the one thing on this page she might feel the seam in.

Don't want the apology public? Delete the `saying` block in `config.js` and
that whole section disappears on its own — or say it to her face and keep the
site purely celebratory. Your call.

Read it once. Change anything that doesn't sound like you — an inside joke, the
way you actually talk to her. Even a few swapped sentences make it unmistakably
yours, and that's the part she'll reread.

Also worth editing: **"Reasons I Love You"** in `config.js`. Those nine are
generic guesses. Swap in real ones — the specific, slightly embarrassing details
are the ones that land.

---

## STEP 3 — Add "Perfect" by Ed Sheeran

**I couldn't download the song for you** — it's copyrighted and I can't pull it
from YouTube or a streaming service. But adding your own copy takes 2 minutes.

### If you already own the mp3
Rename it to **`song.mp3`**, drop it in the `music/` folder. Done — the play
button appears by itself.

### If you don't have it
Buy the single (about ₹15–20) on Amazon Music, iTunes, or Google Play, download
the mp3, rename it `song.mp3`, put it in `music/`.

### ⚠️ One thing you should know
GitHub Pages is **public** hosting. Putting a copyrighted song on a public site
is technically distribution, and GitHub can take a repo down after a complaint.

For a tiny personal page nobody will find, the realistic risk is very low — but
you should know before you do it. Safer options:

- **Use a 30-second clip** instead of the full song (lower risk, and the chorus
  is the part that matters anyway)
- **Royalty-free romantic music** from [pixabay.com/music](https://pixabay.com/music) — free and legal
- **Skip site music and just play Perfect out loud** when she opens it.
  Honestly the nicest version of this.

Full details in `music/HOW-TO-ADD-THE-SONG.txt`.

### If the file is big
A full song is 3–8 MB — slow on mobile data. Compress to ~128kbps at
[freeconvert.com/mp3-compressor](https://www.freeconvert.com/mp3-compressor).

### No music at all?
In `config.js` set `enabled: false`. The button disappears.

> **Good to know:** the play button now **hides itself** if there's no song
> file, so she'll never tap a button that does nothing.

> **Why she has to tap play:** phone browsers block auto-playing audio. Every
> browser does this — there's no way around it.

## STEP 4 — Put it on GitHub (free hosting)

You said you've got an account but haven't used it much — here's the no-command-line way.

### 1. Create the repository
- Go to [github.com/new](https://github.com/new)
- **Repository name:** `for-aiira` (or anything)
- Select **Public** ← *must be public, or free hosting won't work*
- **Don't** tick "Add a README file"
- Click **Create repository**

### 2. Upload the files
- On the next page click **uploading an existing file**
- Open your `aiira-birthday` folder, select **everything inside it**
  (`index.html`, `config.js`, `css`, `js`, `images`, `music`)
- Drag it all into the browser window

> ⚠️ Upload the **contents** of the folder, not the folder itself.
> `index.html` must sit at the top level of the repo, not inside a subfolder.
> If GitHub shows a folder named `aiira-birthday` after uploading, that's wrong —
> delete it and re-upload the contents.

- Click **Commit changes**

### 3. Turn on hosting
- In your repo click **Settings** (top right)
- Click **Pages** in the left sidebar
- Under **Source**, choose **Deploy from a branch**
- Branch: **main**, folder: **/ (root)** → click **Save**

### 4. Wait, then get your link

Give it **1–3 minutes**, then refresh the Settings → Pages screen. Your link
appears at the top:

```
https://YOUR-USERNAME.github.io/for-aiira/
```

**Open it on your own phone first.** If you see the countdown ticking, you're done. 🎉

### Changing something later
Go to the file on GitHub → click the ✏️ pencil → edit → **Commit changes**.
The live site updates in about a minute. (Hard-refresh if you don't see it.)

---

## 🔒 The midnight lock (important — read this)

The site now **locks itself** until midnight on her birthday.

If she opens the link early she sees a pretty locked screen — a lock icon,
"Not Yet.", and the countdown. **No spoilers.** Nothing from the letter,
photos, or proposal is visible.

**It unlocks by itself at midnight.** She doesn't need to refresh. If she
leaves the tab open, the lock fades away on its own, confetti fires, and the
site appears. If her phone was asleep, it catches up the moment she wakes it.

### Your two links

| Link | Who | What it does |
|---|---|---|
| `https://you.github.io/for-aiira/` | **Send this to her** | Locked until midnight |
| `https://you.github.io/for-aiira/?key` | **Only you** | Skips the lock so you can check everything |

⚠️ **Do not send her the `?key` link.** That's your backstage pass.

Use `?key` to read the whole site through before you send it — proposal and all.

### Turning the lock off
In `config.js`, under `lock`, set `enabled: false`. The site then opens
straight away for anyone.

### One honest caveat
The lock reads the clock **on the device opening it**. Someone who really
wanted to peek could change their phone's date. It's a lovely surprise
mechanism, not a bank vault — and she has no reason to go looking.

---

## 💍 About the proposal

The gift box now holds, in order:

1. The forgiveness line — *"Before the big question — I'm sorry..."*
2. An animated diamond ring (drawn in code, so it's razor sharp on any screen)
3. **"Will you marry me?"**
4. *"Not today, not tomorrow necessarily. But one day..."*
5. *"(you can say yes in person. I'll be waiting.)"*

**Please read this part twice.** It's the biggest thing on the page and the
words are still mine. Change the phrasing until it sounds like you asking, not
a website asking. Everything is in the `gift` block in `config.js`.

If you'd rather not propose over a webpage, empty the `question` line and it
disappears cleanly — the apology and the rest stay.

---

## 🎁 Sending it to her

Send the link **just before midnight** so she opens it while the countdown is
still ticking, watches it hit zero, and gets the confetti. That's the moment.

Message idea:
> open this at midnight, don't open it before 🤍

**Test it on your phone first** using the `?key` link. Not just your laptop —
she'll open it on mobile.

Because of the lock you can now send the link **whenever you like** — even this
afternoon. It won't open early. That takes the timing pressure off completely.

---

## Make photos load fast (worth 2 minutes)

Straight-from-the-phone photos are 4–8 MB each. Twelve of those is ~70 MB and
will crawl on mobile data.

Go to **[squoosh.app](https://squoosh.app)** → drag a photo in → set quality to
about 75 → download. Each photo drops to ~300 KB and looks identical on a phone.

GitHub Pages also has a **1 GB repo limit**, so compressed photos keep you safe.

---

## If something goes wrong

**Blank white page**
A typo in `config.js` — a missing quote or comma. Undo your last edit.

**Photos don't show up**
- Names must match exactly: `1.jpg` not `1.JPG` or `1 .jpg`
- They must be in `images/gallery/`, not loose in `images/`
- Uppercase `.JPG` fails on GitHub even though it works on your computer

**Link shows "404"**
Wait 3 more minutes — first deploy is slow. Still broken? `index.html` is
probably inside a subfolder instead of at the top of the repo.

**Countdown shows the wrong time**
It's set to midnight **India time**. In `config.js` the `+05:30` locks it to
IST so it fires correctly even if she's abroad.

**Music won't play**
File must be at `music/song.mp3`, all lowercase, and be a real `.mp3`.

---

## Want to see the birthday version early?

Add `?preview` to the end of your link:

```
https://your-username.github.io/for-aiira/?preview
```

Skips the countdown and shows the confetti celebration, so you can check it
looks right before the big moment. **Send her the link without `?preview`.**

---

Made with love. Go make her day. 💗
