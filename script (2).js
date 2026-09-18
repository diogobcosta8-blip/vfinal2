// Menu mobile
const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });

  // fecha o menu ao clicar em um link
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
    });
  });
}

// Formulário da lista de espera
const form = document.getElementById('waitlistForm');
const status = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
      showStatus('Digite seu nome completo.', 'err');
      return;
    }

    if (!emailPattern.test(email)) {
      showStatus('Digite um e-mail válido.', 'err');
      return;
    }

    // Simulação de envio (não há backend neste projeto acadêmico)
    showStatus(`Prontinho, ${name.split(' ')[0]}! Você entrou na lista de espera.`, 'ok');
    form.reset();
  });
}

function showStatus(message, type) {
  status.textContent = message;
  status.className = 'form-status ' + type;
}
