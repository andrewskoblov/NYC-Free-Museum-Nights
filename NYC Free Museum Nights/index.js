let count = 3;
let motion = true;
let deg = 0;
let timer = null;

// Dark Mode
document.getElementById('theme-button').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');

// Reduce Motion Button
const ul = document.querySelector('.navbar ul');
const li = document.createElement('li');
const btn = document.createElement('button');
btn.textContent = 'Reduce Motion';
btn.style.cssText = 'background:#7B1FA2;color:white;border:none;padding:10px 20px;border-radius:8px;margin-left:10px;cursor:pointer;font-weight:bold;';
btn.onclick = () => { motion = !motion; btn.textContent = motion ? 'Reduce Motion' : 'Enable Motion'; };
li.appendChild(btn);
ul.appendChild(li);

// Wave animation
const wave = () => {
    deg = deg === 0 ? -20 : 0;
    document.getElementById('celebrate').style.transform = `rotate(${deg}deg)`;
};

// Show modal
const showModal = (name, state) => {
    document.getElementById('success-modal').style.display = 'flex';
    document.getElementById('modal-text').textContent = `Thanks for RSVPing, ${name} from ${state}! We can't wait to see you! 🎉`;
    if (motion) {
        clearInterval(timer);
        timer = setInterval(wave, 500);
    }
    setTimeout(() => {
        document.getElementById('success-modal').style.display = 'none';
        clearInterval(timer);
        document.getElementById('celebrate').style.transform = 'rotate(0deg)';
    }, 7000);
};

// Close button
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('success-modal').style.display = 'none';
    clearInterval(timer);
    document.getElementById('celebrate').style.transform = 'rotate(0deg)';
});

// RSVP Submit
document.getElementById('rsvp-button').addEventListener('click', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const state = document.getElementById('state').value.trim();

    document.getElementById('name').classList.toggle('error', name.length < 2);
    document.getElementById('email').classList.toggle('error', !email.includes('@'));
    document.getElementById('state').classList.toggle('error', state.length < 2);

    if (name.length >= 2 && email.includes('@') && state.length >= 2) {
        const list = document.querySelector('.rsvp-participants');
        const p = document.createElement('p');
        p.textContent = `🎟️ ${name} from ${state} has RSVP'd.`;
        list.insertBefore(p, document.getElementById('rsvp-count'));
        count++;
        document.getElementById('rsvp-count').textContent = `⭐ ${count} people have RSVP'd to this event!`;
        showModal(name, state);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('state').value = '';
    }
});