# SuziOnCall — "Night Rescue" animated ad script (30s master + 15s cut-down)

**Purpose:** 30-second master for YouTube / website hero, plus a 15-second cut-down for Reels/Stories/paid social. Same clips, two edit durations.
**Format:** Master 16:9; cut-downs 9:16 (Reels/Stories) and 1:1 (feed) from the same shots.
**Tone:** Cinematic, calm-under-pressure, warm ending. Australian English voiceover, male, ~35–50, warm and unhurried — not a shouty car-ad voice.
**Palette (matches brand):** near-black blue night (#0b0e13), amber/orange practical lights (#fcb41c / #ff8a1e), clean white light for the "fixed" moment.
**Opens on the spark** (Scene 2 of the original 50s draft). The aerial highway establishing shot was cut — the failure is the hook.

---

## How this is being produced

1. Clips are generated in **Google Flow (Veo)** — I drive the browser, using the four reference images below so the truck, driver, van and cable stay consistent across clips.
2. VO is generated in **ElevenLabs** (Australian male, calm/unhurried).
3. Assembly, supers, end card and audio mix happen in **Remotion + ffmpeg** (no CapCut). **No text or logos are ever AI-generated** — all words and branding go on in the edit.

### GLOBAL STYLE BLOCK (paste into every prompt)

> High-end 3D animated commercial, stylised realism, cinematic lighting, shallow depth of field, night scene, deep blue-black night palette with warm amber practical lights, subtle film grain, 24 fps, no text, no captions, no watermarks.

### RECURRING ELEMENTS — describe exactly like this every time

- **TRUCK:** "a white cab-over prime mover truck with a chrome bull bar towing a silver-grey semi-trailer"
- **DRIVER:** "a middle-aged Australian truck driver with a short grey beard, wearing an orange high-vis vest over a dark hoodie"
- **DISPATCHER:** "a young woman wearing a headset in a dim office lit by amber monitors"
- **SUZI COIL:** "a heavy-duty black spiral suzi cable with bright chrome connectors"
- **VAN:** "a dark navy delivery van with an amber beacon on the roof" *(unbranded — logo added in post)*

**Avoid in prompts:** daytime, readable text, captions, watermarks, extra vehicles, extra people, gore, rain storm.

---

## 30s MASTER — scene map

| # | Scene | Timeline | Clip to generate | Use |
|---|-------|----------|------------------|-----|
| 1 | The lights die | 0.0–4.5 | 6s | full |
| 2 | Stranded | 4.5–8.5 | 6s | 4s |
| 3A | The call — driver | 8.5–13.5 | 6s | 5s (split-screen left) |
| 3B | The call — dispatcher | 8.5–13.5 | 6s | 5s (split-screen right) |
| 4 | Dispatch | 13.5–17.5 | 6s | 4s |
| 5 | Racing to you | 17.5–21.5 | 6s | 4s |
| 6 | The fix | 21.5–25.5 | 8s | 4s |
| 7 | Rolling again → end card | 25.5–30 | 8s | 4.5s + end card hold |

Eight generations minimum; budget 12–20 with retakes.

## SCENE-BY-SCENE

### SCENE 1 — The lights die (0:00–0:04.5) · hook
- **Prompt:** Close-up low angle at the coupling between a white cab-over prime mover truck with a chrome bull bar and a silver-grey semi-trailer, moving at highway speed at night: a heavy-duty black spiral suzi cable with bright chrome connectors stretched taut, one section frayed. The cable sparks once with a white-blue flash, then the trailer's amber running lights flicker twice and die section by section, plunging the trailer into darkness against a pitch-black night sky. **[GLOBAL STYLE BLOCK]**
- **Motion + audio:** Macro tracking shot locked on the suzi cable as the truck vibrates at speed; single sharp spark, lights flicker and shut off. Audio: steady low diesel hum, sharp electric snap and crackle, then sudden quiet wind and distant tyre noise.
- **VO:** "On the edge of Sydney, a trailer goes dark. The suzi cable's failed — no spare."

### SCENE 2 — Stranded (0:04.5–0:08.5)
- **Prompt:** Wide shot on the gravel shoulder of a dark Australian country road at night. A white cab-over prime mover truck with a chrome bull bar towing a silver-grey semi-trailer stopped with amber hazard lights glowing. At the rear, a middle-aged Australian truck driver with a short grey beard in an orange high-vis vest over a dark hoodie crouches, holding a frayed heavy-duty black spiral suzi cable, lit only by his white headtorch and the blinking hazards. **[GLOBAL STYLE BLOCK]**
- **Motion + audio:** Static wide; hazards pulse rhythmically against silhouetted eucalyptus trees; the driver holds up the frayed cable, looks both ways down the empty pitch-dark road, shakes his head. Audio: hazard indicator tick, gravel crunch, quiet night wind.
- **VO:** "Stuck. Lights down, that load's going nowhere."
- **Super (in edit):** "Trailer lights down? No spare?"

### SCENE 3A — The call, driver (0:08.5–0:13.5, split-screen left)
- **Prompt:** Medium close-up inside the dark cab of a truck at night. A middle-aged Australian truck driver with a short grey beard, wearing an orange high-vis vest over a dark hoodie, holds a smartphone to his ear. Soft screen light on his weathered face; warm amber hazard lights pulse faintly through the windshield. **[GLOBAL STYLE BLOCK]**
- **Motion + audio:** Slow subtle push-in; he speaks calmly into the phone, glances out the side window, focused. Audio: quiet cab ambience, muffled hazard tick, soft murmur of a phone conversation.

### SCENE 3B — The call, dispatcher (0:08.5–0:13.5, split-screen right)
- **Prompt:** Medium close-up of a young woman wearing a headset in a dim office lit by amber monitors at night. She sits at a desk with an open notebook and pen, calm reassuring smile. Warm amber monitor glow on her face against a deep blue-black office background. **[GLOBAL STYLE BLOCK]**
- **Motion + audio:** Slow subtle push-in; she listens, nods with quiet confidence, writes swiftly while speaking calmly into her headset microphone. Audio: soft office hum, pen scratch, quiet phone click.
- **VO (over 3A + 3B):** "One call to SuziOnCall — we take the truck, the trailer, the cable type."
- **Super (in edit):** "One call."

### SCENE 4 — Dispatch (0:13.5–0:17.5)
- **Prompt:** Interior of a neat, dimly lit night warehouse. Rows of metal shelves stocked with coiled heavy-duty black spiral suzi cables with bright chrome connectors. In the foreground a gloved hand grips one coil, lit by a single warm overhead lamp; in the background a dark navy delivery van with an amber beacon on the roof parks near an open roller door. **[GLOBAL STYLE BLOCK]**
- **Motion + audio:** The hand lifts the coil cleanly off the shelf; fast smooth pan to the van as its roof beacon ignites and it reverses out the roller door into the pitch-black night. Audio: metallic shelf slide, heavy rubber coil thud, van engine start, roller-door rattle.
- **VO:** "The right coil goes straight into a van."

### SCENE 5 — Racing to you (0:17.5–0:21.5)
- **Prompt:** Night exterior on a winding pitch-dark Australian country road lined with eucalyptus silhouettes. A dark navy delivery van with a glowing amber beacon on the roof drives fast, headlights cutting the night. Far ahead on the road shoulder, the faint amber hazard lights of a stranded white cab-over prime mover glow in the distance. **[GLOBAL STYLE BLOCK]**
- **Motion + audio:** Low tracking shot alongside the van at speed, arcing behind it as it rounds a sweeping bend and closes on the blinking hazards, slowing as it pulls up behind the truck. Audio: tyres on asphalt, smooth engine accelerating then decelerating, faint crickets.
- **VO:** "And we come to you."

### SCENE 6 — The fix (0:21.5–0:25.5)
- **Prompt:** Close-up at the coupling between a white cab-over prime mover and a silver-grey semi-trailer parked on a dark country road at night. Two gloved hands hold the bright chrome connector of a new heavy-duty black spiral suzi cable, aligning it with the trailer socket, a focused beam of clean white headtorch light on the connection point. **[GLOBAL STYLE BLOCK]**
- **Motion + audio:** The gloved hands push the chrome connector in until it locks; camera pulls back and rises as the trailer's amber and white running lights snap on in a bright clean sequence front to rear, cutting the darkness. Audio: crisp metallic click, heavy relay clunk, quiet night air.
- **VO:** "Plugged in. Checked. Lights back on."
- **Super (in edit):** "Back on the road."

### SCENE 7 — Rolling again → end card (0:25.5–0:30)
- **Prompt:** Wide night exterior on a dark Australian highway shoulder. The white cab-over prime mover with its silver-grey semi-trailer fully illuminated — headlights and glowing amber and red running lights — angled to merge back onto the road. Parked safely behind it, the dark navy delivery van with its amber roof beacon glowing steadily. **[GLOBAL STYLE BLOCK]**
- **Motion + audio:** Static wide; the truck's indicator blinks, air brakes release, the lit truck and trailer pull smoothly onto the highway and roll past camera into the night, the driver's silhouette raising a brief wave from the cab window. Hold on the parked van, beacon gently pulsing. Audio: air-brake hiss, diesel pulling away into the distance, quiet night air. Crossfade to end card.
- **VO:** "SuziOnCall. Emergency suzi cable delivery, Sydney-wide. Call 0467 604 791."

---

## VOICEOVER SCRIPTS

### 30s master (~60 words, calm Australian male)

> On the edge of Sydney, a trailer goes dark. The suzi cable's failed — no spare.
> Stuck. Lights down, that load's going nowhere.
> One call to SuziOnCall — we take the truck, the trailer, the cable type.
> The right coil goes straight into a van.
> And we come to you.
> Plugged in. Checked. Lights back on.
> SuziOnCall. Emergency suzi cable delivery, Sydney-wide. Call 0467 604 791.

### 15s cut-down (Scenes 1 → 2 → 6 → end card)

> Trailer lights down? No spare suzi cable?
> One call. We deliver the right coil to you — anywhere in Sydney.
> Plugged in. Lights on. Rolling again.
> SuziOnCall. Call 0467 604 791.

### End card (built in the edit, on #0b0e13 — never AI-generated)

- SuziOnCall logo (shield + wordmark, from `public/brand/logo-dark-bg.png`)
- **0467 604 791 · suzioncall.com.au**
- WhatsApp · Book online
- *A unit of Coralstone Services Group Pty Ltd · ACN 690 335 034 · ABN 51 690 335 034*

---

## Production notes

- **No time promises anywhere** — no "there in 30 minutes" claims. The site publishes no response-time figures until proven, and advertising law treats unverifiable claims harshly.
- **No price shown** — the business is quote-on-callback.
- **Safety framing matches the site:** the driver stops because the load can't legally/safely move with lights down. Never animate anyone driving with dead lights.
- **AI text is unreliable** — generate clean footage; phone number, supers and logo go on in the edit.
- **Audio:** keep Veo's native ambient/SFX where usable, ducked under VO; music bed is an ambient pulsing synth — low tension scenes 1–3, warm lift from scene 4 to resolution.
- **Music:** free-licence bed (approved by Abhi before final render).
- **Deliverables:** 16:9 1080p master (YouTube/site), 9:16 vertical (Reels/TikTok/Stories), 1:1 (feed) — same clips, re-cropped. Loudness −14 LUFS.
