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

// Demo interativa do controle de volume flutuante
const demoVolume = document.getElementById('demoVolume');
const demoValor = document.getElementById('demoValor');
const demoSpeaker = document.getElementById('demoSpeaker');
const demoMensagem = document.getElementById('demoMensagem');

function atualizarDemo() {
  const volume = Number(demoVolume.value);
  demoValor.textContent = volume;

  const elevacao = 6 + (volume / 100) * 30;
  const escala = 1 + (volume / 100) * 0.15;
  const sombra = 10 + (volume / 100) * 20;

  demoSpeaker.style.transform = `translate(-50%, -${elevacao}px) scale(${escala})`;
  demoSpeaker.style.boxShadow = `0 ${sombra}px ${sombra * 2}px rgba(75, 74, 207, 0.4)`;

  if (volume >= 80) {
    demoMensagem.textContent = 'Rotação máxima: som se espalhando por todo o ambiente.';
  } else if (volume >= 40) {
    demoMensagem.textContent = 'Rotação moderada.';
  } else {
    demoMensagem.textContent = '';
  }
}

demoVolume.addEventListener('input', atualizarDemo);
atualizarDemo();

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
  formFeedback.textContent = 'Pronto! Você entrou na lista de espera da Orbital Sound.';
  waitlistForm.reset();
});
