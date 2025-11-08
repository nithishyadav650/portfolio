// Basic interactivity: nav toggle, theme toggle, copy email, smooth scroll
(function(){
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  const themeToggle = document.getElementById('themeToggle');
  const copyEmailBtn = document.getElementById('copyEmail');
  const yearEl = document.getElementById('year');

  // set year
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // nav toggle for small screens
  navToggle && navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('show');
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
        // close nav on mobile
        if(siteNav.classList.contains('show')) siteNav.classList.remove('show');
      }
    });
  });

  // theme toggle using data-theme on <html>
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme) root.setAttribute('data-theme', savedTheme);
  updateThemeButton();

  themeToggle && themeToggle.addEventListener('click', () => {
    const cur = root.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    if(next === 'dark') root.setAttribute('data-theme','dark'); else root.removeAttribute('data-theme');
    localStorage.setItem('theme', next);
    updateThemeButton();
  });

  function updateThemeButton(){
    const cur = root.getAttribute('data-theme');
    if(themeToggle) themeToggle.textContent = cur === 'dark' ? '☀️' : '🌙';
  }

  // copy email
  copyEmailBtn && copyEmailBtn.addEventListener('click', async ()=>{
    try{
      await navigator.clipboard.writeText('youremail@example.com');
      copyEmailBtn.textContent = 'Copied ✓';
      setTimeout(()=> copyEmailBtn.textContent = 'Copy email', 2000);
    }catch(err){
      // fallback: prompt
      prompt('Copy email', 'youremail@example.com');
    }
  });
})();
