const navButton=document.querySelector('.menu-button'),navLinks=document.querySelector('.nav-links');if(navButton){navButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');navButton.setAttribute('aria-expanded',open)})}document.querySelector('#year')?.append(new Date().getFullYear());

