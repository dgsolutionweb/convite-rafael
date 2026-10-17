const motionToggle = document.getElementById('motion-toggle');
const invitation = document.querySelector('.invitation');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
motionToggle.hidden = motionPreference.matches;
motionPreference.addEventListener('change', (event) => {
    motionToggle.hidden = event.matches;
});
motionToggle.addEventListener('click', () => {
    const paused = invitation.classList.toggle('motion-paused');
    motionToggle.setAttribute('aria-pressed', String(paused));
    motionToggle.textContent = paused ? 'Retomar animação' : 'Pausar animação';
});

const form = document.getElementById('rsvp-form');
const nameInput = document.getElementById('guest-name');
const status = document.getElementById('rsvp-status');

nameInput.addEventListener('input', () => {
    nameInput.setCustomValidity('');
    status.textContent = '';
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const guestName = nameInput.value.trim();
    if (!guestName) {
        nameInput.setCustomValidity('Por favor, informe seu nome para confirmar a presença.');
        nameInput.reportValidity();
        return;
    }
    const guestCount = Number(document.getElementById('guest-count').value);
    const phone = event.submitter?.dataset.phone || form.querySelector('[data-phone]').dataset.phone;
    const message = `Olá! Gostaria de confirmar a presença de ${guestName} no aniversário de 5 anos da Maria Julia, dia 18/10, às 17:30. Seremos ${guestCount} pessoa${guestCount === 1 ? '' : 's'} no total. Até lá!`;
    status.textContent = 'Agora, envie a mensagem no WhatsApp para concluir sua confirmação.';
    window.location.assign(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
});
