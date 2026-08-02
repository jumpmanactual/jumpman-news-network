const teams=[
  {
    "coach": "Sam Small",
    "team": "South Carolina Gamecocks",
    "location": "Columbia, South Carolina",
    "image": "assets/coaches/sam-small-decision.png?v=20260716-2",
    "awards": "2025 National Champion · Reigning Dynasty Champion",
    "story": "Sam erased an early 14-point deficit with a 63–10 closing run, extending the champion's winning streak in Mexico City.",
    "result": "W 70–31 at Universidad México",
    "leaders": "L. Sellers · 417 pass yds, 5 TD<br>B. Hunt · 161 rec yds, 3 TD",
    "next": "Week 2 · BYE",
    "stats": "1–0 · 70 PF · 31 PA · +3 turnover margin",
    "history": [
      "2026-2027 Preseason: Hired at South Carolina Gamecocks"
    ],
    "teamSlug": "real:south-carolina",
    "bio": "A Charlotte native with deep South Carolina roots, Sam has spent most of his professional life protecting others. His background includes working in asset protection, serving as a correctional officer, and becoming a police officer in Kannapolis. Sam runs a structured and accountable program built on discipline, loyalty, and consistency. His teams are composed, observant, physically tough, and rarely fooled twice. He believes trust must be earned every day."
  },
  {
    "coach": "Jordan Thomas",
    "team": "Universidad Mexico Panteras",
    "location": "Mexico City, Mexico",
    "image": "assets/coaches/jordan-thomas-umx-v2.png",
    "awards": "Historic first non-U.S. NCAA program · Two-game win streak",
    "story": "Wayne Knight exploded for 253 yards as Jordan's Panteras earned their first winning record and a second straight victory.",
    "result": "W 38–28 vs Purdue",
    "leaders": "W. Knight · 253 rush yds, 2 TD<br>N. Iamaleava · 100 pass yds, 2 TD<br>B. Loftin · 66 rec yds, 1 TD<br>T. Johnson · 7 tackles",
    "next": "Week 4 · at Maryland",
    "stats": "2–1 · 79 PF · 105 PA · 322 Week 3 offensive yds",
    "history": [
      "2026-2027 Preseason: Hired at Universidad Mexico Panteras"
    ],
    "teamSlug": "custom:universidad-mexico",
    "bio": "Born in San Diego and raised as a military brat, Jordan eventually settled in Charlotte, where he built lifelong friendships with several of the coaches he now competes against. After briefly attending college, he joined the United States Marine Corps and met Dustin, who became one of his closest friends. Jordan builds adaptable, disciplined teams that remain composed when games become chaotic. A natural leader and connector, he believes preparation creates confidence and trust creates winning programs."
  },
  {
    "coach": "Chris Cathcart",
    "team": "BYU Cougars",
    "location": "Provo, Utah",
    "image": "assets/coaches/chris-cathcart-byu.png",
    "awards": "Week 1 win over No. 23 Washington · No. 10 ranking",
    "story": "Chris led Arizona 35–14 entering the fourth, but four interceptions and 24 unanswered points turned his first Top-10 game into a closing-time lesson.",
    "result": "L 35–38 vs Arizona",
    "leaders": "B. Bachmeier · 303 pass yds, 2 TD<br>T. Bachmeier · 153 rec yds, 1 TD<br>LJ Martin · 89 rush yds, 2 TD",
    "next": "Week 3 · BYE",
    "stats": "1–1 · 92 PF · 59 PA · 4 Week 2 turnovers",
    "history": [
      "2026-2027 Preseason: Hired at BYU Cougars"
    ],
    "teamSlug": "real:byu",
    "bio": "The son of Dustin Cathcart, Chris grew up around the coaching brotherhood but is determined to establish an identity of his own. He respects the foundation created by the older generation while believing the new school can improve upon it. Chris embraces analytics, technology, creativity, and an aggressive modern approach to football. Confident and ambitious, he is not afraid to challenge tradition—or his father—to prove that the next generation is ready."
  },
  {
    "coach": "Glenn Vernon",
    "team": "Florida State Seminoles",
    "location": "Tallahassee, Florida",
    "image": "assets/coaches/glenn-vernon-florida-state.png",
    "awards": "Week 1 ranked win over No. 22 SMU · 2–1 start",
    "story": "Glenn's unbeaten opening ended in Orlando after three turnovers, four failed fourth downs, and five UCF field goals.",
    "result": "L 8–22 at UCF",
    "leaders": "A. Daniels · 257 pass yds, 1 TD<br>M. Danzy · 79 rec yds<br>D. Robinson · 56 rec yds, 1 TD<br>A. Barker · 10 tackles",
    "next": "Week 4 · BYE",
    "stats": "2–1 · 84 PF · 58 PA · 274 Week 3 offensive yds",
    "history": [
      "2026-2027 Preseason: Hired at Florida State Seminoles"
    ],
    "teamSlug": "real:florida-state",
    "bio": "Born in Buffalo and raised in Charlotte, Glenn is the quiet problem-solver of the group. Nicknamed “Kobe” because of his resemblance to Kobe Bryant and his basketball ability, Glenn is also a serial entrepreneur and skilled do-it-yourselfer who can learn almost any job. His coaching style reflects his personality: calm, creative, resourceful, and quietly confident. Glenn builds flexible programs that find unconventional solutions because he believes there is always a way to get the job done."
  },
  {
    "coach": "Dustin “Dusty” Cathcart",
    "team": "Washington Huskies",
    "location": "Seattle, Washington",
    "image": "assets/coaches/dustin-cathcart-washington-v2.png",
    "awards": "No. 23 preseason ranking",
    "story": "Dusty led his son at halftime, but Washington's offense stalled completely as BYU closed the family showdown with 39 unanswered points.",
    "result": "L 21–57 at No. 12 BYU",
    "leaders": "D. Williams Jr. · 209 pass yds, 2 TD<br>D. Roebuck · 86 rec yds<br>R. Clark · 9 tackles",
    "next": "Week 2 · BYE",
    "stats": "0–1 · 21 PF · 57 PA · 2 turnovers",
    "history": [
      "2026-2027 Preseason: Hired at Washington Huskies"
    ],
    "teamSlug": "real:washington",
    "bio": "A native of Piqua, Ohio, Dustin met Jordan while serving in the Marine Corps, and the two quickly became best friends. Known as the “MacGyver of the Marines,” Dustin developed a reputation for solving problems with limited resources and always finding a way to complete the mission. After retiring because of a shoulder injury, he brought that same toughness, adaptability, and preparation to coaching. His teams are relentless, physical, and demanding because he believes pressure reveals who people truly are."
  }
];document.querySelector('#team-stack').innerHTML=teams.map(t=>`<article class="team-profile"><div class="team-photo"><img src="${t.image}" alt="${t.coach}"></div><div class="team-info"><span class="team-label">Head Coach</span><h2>${t.coach}</h2><p class="team-location"><b>${t.team}</b> · ${t.location}</p><div class="team-awards">🏆 ${t.awards}</div><p class="story-brew">BREWING: ${t.story}</p><div class="team-data"><section><h3>Recent result</h3><p>${t.result}</p></section><section><h3>Team leaders</h3><p>${t.leaders}</p></section><section><h3>Next game</h3><p>${t.next}</p></section><section><h3>Scores & stats</h3><p>${t.stats}</p></section></div></div></article>`).join('');
