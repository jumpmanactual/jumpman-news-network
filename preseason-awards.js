const preseasonFavorites = [
  ['Jeremiah Smith', 'WR · Ohio State', 'ohio-state'],
  ['Dante Moore', 'QB · Oregon', 'oregon'],
  ['Malachi Toney', 'WR · Miami', 'miami'],
  ['Julian Sayin', 'QB · Ohio State', 'ohio-state']
];

const heismanCard = document.querySelectorAll('.award-card')[1];
heismanCard.classList.add('heisman-card', 'dynasty-heisman');
heismanCard.style.gridRow = 'auto';
heismanCard.innerHTML = `<header><span>2026 · After Week 1</span><h2>Heisman Watch</h2><p>The commissioner-provided order remains unchanged after opening weekend.</p></header><div class="heisman-stage" aria-label="JNN original Heisman watch graphic"><div class="heisman-trophy" aria-hidden="true">H</div><div><small>JNN AWARDS DESK</small><strong>THE RACE<br>IS LIVE</strong><p>Four listed contenders. One trophy. Every week matters.</p></div></div><div class="heisman-list">${preseasonFavorites.map(([name, school, logo], index) => `<div class="heisman-row"><b>${index + 1}</b><span class="heisman-logo"><img src="assets/teams/${logo}.png" alt="${school.split(' · ')[1]}"></span><span><strong>${name}</strong><small>${school}</small></span><em>Week 1</em></div>`).join('')}</div>`;
