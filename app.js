const stories=[
  {category:"Conference Chaos",title:"Commissioner hints at realignment shake-up",body:"Sources say two programs could be on the move after the season, setting off a recruiting battle across the region.",meta:"4 MIN READ · 36 MIN AGO"},
  {category:"Recruiting",title:"Five-star QB flips on signing day",body:"The nation's top passer stunned three user coaches with one last-minute decision.",meta:"2 MIN READ · 1 HR AGO"},
  {category:"Hot Seat",title:"Pressure builds after third straight loss",body:"A preseason contender is searching for answers as the schedule gets tougher.",meta:"3 MIN READ · 2 HRS AGO"}
];
const rankings=[
  [1,"Ohio State","7–0","—"],[2,"Metro State","7–0","▲ 2"],[3,"Georgia","6–1","▼ 1"],[4,"Oregon","6–1","▲ 1"],[5,"LSU","6–1","▼ 2"],[6,"Texas","5–2","—"],[7,"Penn State","6–1","▲ 3"],[8,"Miami","5–2","▼ 1"],[9,"Clemson","5–2","NEW"],[10,"Alabama","4–3","▼ 2"]
];
const scores=[
  ["FINAL","#2 Metro State",38,"#11 Coastal Tech",31],["FINAL / OT","#5 LSU",27,"#14 Florida",24],["FINAL","#1 Ohio State",45,"Wisconsin",17],["FINAL","#9 Clemson",20,"#6 Texas",34]
];
const players=[
  [1,"MARCUS REED","QB · METRO STATE","2,814","28","71%"],[2,"JALEN CROSS","HB · OHIO STATE","1,226","16","7.4"],[3,"DANTE WILLIAMS","WR · OREGON","1,087","12","18.1"]
];
// COACH PROFILES — edit these fields to update the Coaches section.
const coaches=[
  {name:"Dustin Cathcart",team:"Coaching Market",role:"Head Coach Candidate",image:"assets/coaches/dustin-cathcart-open-to-work.png",record:"Available",scheme:"Multiple offense",background:"One of the coaching market's most intriguing names, Cathcart is evaluating opportunities and has not committed to a program.",storyline:"Which school will make the call—and which opening will earn his signature?"},
  {name:"Chris Cathcart",team:"Arizona",role:"Head Coach",image:"assets/coaches/chris-cathcart-arizona.png",record:"First season",scheme:"Spread tempo",background:"Tasked with turning Arizona into a fearless desert contender through speed, spacing, and player development.",storyline:"Can the Wildcats crash the conference title race ahead of schedule?"},
  {name:"Glenn Vernon",team:"Duke",role:"Head Coach",image:"assets/coaches/glenn-vernon-duke.png",record:"First season",scheme:"Balanced attack",background:"Bringing energy and edge to Durham, Vernon wants Duke to become the league's most uncomfortable matchup.",storyline:"A culture rebuild is becoming one of the dynasty's fastest-rising stories."}
];
const tickers=["Metro State survives thriller, remains unbeaten","Top-ranked Ohio State rolls to 7–0","Five-star QB Malik King reopens recruitment","JNN Power Rankings updated after upset-filled Saturday"];
document.querySelector('#story-grid').innerHTML=stories.map(s=>`<article class="story-card"><span class="category">${s.category}</span><h3>${s.title}</h3><p>${s.body}</p><span class="story-meta">${s.meta}</span></article>`).join('');
document.querySelector('#rankings-list').innerHTML=rankings.map(([p,t,r,tr])=>`<div class="rank-row"><span class="pos">${p}</span><b>${t}</b><small>${r}</small><span class="trend ${tr.includes('▲')?'up':tr.includes('▼')?'down':''}">${tr}</span></div>`).join('');
document.querySelector('#score-list').innerHTML=scores.map(([s,a,as,b,bs])=>`<article class="score-card"><span class="status">${s}</span><div class="score-team"><strong>${a}</strong><b>${as}</b></div><div class="score-team"><strong>${b}</strong><b>${bs}</b></div></article>`).join('');
document.querySelector('#player-grid').innerHTML=players.map(([r,n,s,y,td,q])=>`<article class="player-card" data-rank="${r}"><span class="school">${s}</span><h3>${n}</h3><p>Dynamic playmaker powering a championship run.</p><div class="stats"><span><b>${y}</b><small>Yards</small></span><span><b>${td}</b><small>TDs</small></span><span><b>${q}</b><small>${r===1?'Comp':'Rate'}</small></span></div></article>`).join('');
document.querySelector('#coach-grid').innerHTML=coaches.map(c=>`<article class="coach-card"><div class="coach-photo"><img src="${c.image}" alt="${c.name}, ${c.team} ${c.role}" loading="lazy"><span>${c.team}</span></div><div class="coach-copy"><p class="coach-role">${c.role}</p><h3>${c.name}</h3><p class="coach-background">${c.background}</p><div class="coach-facts"><span><small>Record</small><b>${c.record}</b></span><span><small>Identity</small><b>${c.scheme}</b></span></div><blockquote>“${c.storyline}”</blockquote></div></article>`).join('');
const ticker=[...tickers,...tickers].map(t=>`<span>${t}</span>`).join('');document.querySelector('#ticker-track').innerHTML=ticker;
const now=new Date();document.querySelector('#date-stamp').textContent=now.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'}).toUpperCase();document.querySelector('#year').textContent=now.getFullYear();
const button=document.querySelector('.menu-button'),links=document.querySelector('.nav-links');button.addEventListener('click',()=>{const open=links.classList.toggle('open');button.setAttribute('aria-expanded',open)});links.addEventListener('click',()=>{links.classList.remove('open');button.setAttribute('aria-expanded','false')});
