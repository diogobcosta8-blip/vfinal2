// Menu mobile
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Demo interativa do contador de hidratação
const META_ML = 2000;
const GOLE_ML = 250;

let mlBebidos = 0;

const demoAgua = document.getElementById('demoAgua');
const demoContagem = document.getElementById('demoContagem');
const demoMensagem = document.getElementById('demoMensagem');
const demoBeber = document.getElementById('demoBeber');
const demoReset = document.getElementById('demoReset');

function atualizarDemo() {
  const percentual = Math.min((mlBebidos / META_ML) * 100, 100);
  demoAgua.style.height = percentual + '%';
  demoContagem.textContent = mlBebidos;

  if (mlBebidos >= META_ML) {
    demoMensagem.textContent = 'Meta do dia concluída! A luz da base ficaria verde.';
  } else if (percentual >= 50) {
    demoMensagem.textContent = 'Metade do caminho. Continue assim.';
  } else {
    demoMensagem.textContent = '';
  }
}

demoBeber.addEventListener('click', () => {
  mlBebidos = Math.min(mlBebidos + GOLE_ML, META_ML);
  atualizarDemo();
});

demoReset.addEventListener('click', () => {
  mlBebidos = 0;
  atualizarDemo();
});

// Validação simples do formulário de lista de espera
const waitlistForm = document.getElementById('waitlistForm');
const formFeedback = document.getElementById('formFeedback');

waitlistForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!emailValido) {
    formFeedback.style.color = '#C0392B';
    formFeedback.textContent = 'Digite um e-mail válido para continuar.';
    return;
  }

  formFeedback.style.color = '';
  formFeedback.textContent = 'Pronto! Você entrou na lista de espera do HydroSmart.';
  waitlistForm.reset();
});
