const preseasonFavorites = [
  ['M. Reed', 'QB · Texas A&M', 'texas-am'],
  ['E. Wilson III', 'WR · LSU', 'lsu'],
  ['A. Colandrea', 'QB · Nebraska', 'nebraska'],
  ['K. Taylor', 'WR · Mississippi State', 'mississippi-state']
];
document.querySelector('.page-hero .eyebrow').textContent='2026 · Week 2';document.querySelector('.page-hero p:last-child').textContent='The current Heisman watch, national weekly honors, and dynasty milestones.';

const heismanCard = document.querySelectorAll('.award-card')[1];
heismanCard.classList.add('heisman-card', 'dynasty-heisman');
heismanCard.style.gridRow = 'auto';
const awardLogo=(logo)=>({nebraska:'https://a.espncdn.com/i/teamlogos/ncaa/500/158.png','mississippi-state':'https://a.espncdn.com/i/teamlogos/ncaa/500/344.png'}[logo]||`assets/teams/${logo}.png`);
heismanCard.innerHTML = `<header><span>2026 · After Week 2</span><h2>Heisman Watch</h2><p>The commissioner-provided Week 2 order has a completely new top four.</p></header><div class="heisman-stage" aria-label="JNN original Heisman watch graphic"><div class="heisman-trophy" aria-hidden="true">H</div><div><small>JNN AWARDS DESK</small><strong>THE RACE<br>HAS MOVED</strong><p>Four listed contenders. One trophy. Every week matters.</p></div></div><div class="heisman-list">${preseasonFavorites.map(([name, school, logo], index) => `<div class="heisman-row"><b>${index + 1}</b><span class="heisman-logo"><img src="${awardLogo(logo)}" alt="${school.split(' · ')[1]}"></span><span><strong>${name}</strong><small>${school}</small></span><em>Week 2</em></div>`).join('')}</div>`;

const weeklyCard=document.querySelectorAll('.award-card')[3];
weeklyCard.innerHTML=`<header><span>National · Week 2</span><h2>Players of the Week</h2><p>The official national weekly honors supplied by the commissioner.</p></header><div class="heisman-list"><div class="heisman-row"><b>D</b><span class="heisman-logo"><img src="assets/teams/lsu.png" alt="LSU"></span><span><strong>DJ Pickett</strong><small>LSU CB · 3 TKL · 1 TFL · INT · FF · 2 FR · TD</small></span><em>DEFENSE</em></div><div class="heisman-row"><b>O</b><span class="heisman-logo"><img src="https://a.espncdn.com/i/teamlogos/ncaa/500/2050.png" alt="Ball State"></span><span><strong>Keldric Luster</strong><small>Ball State QB · 359 pass yds · 169 rush yds · 5 total TD</small></span><em>OFFENSE</em></div></div>`;
