function kirimPesan() {
  const input = document.getElementById('user-input');
  const pesan = input.value.trim();
  if (!pesan) return;

  tampilkanPesan(pesan, 'user-message');
  input.value = '';
  input.style.height = 'auto';

  const statusEl = document.getElementById('bot-status');
  statusEl.innerText = 'sedang mengetik...';

  setTimeout(() => {
    const respon = balasanBot(pesan);
    tampilkanPesan(respon, 'bot-message');
    statusEl.innerText = 'online';
  }, 1200);
}

function tampilkanPesan(teks, kelas) {
  const chatBox = document.getElementById('chat-box');
  const pesanEl = document.createElement('div');
  pesanEl.className = `message ${kelas}`;

  const time = new Date();
  const jam = time.getHours().toString().padStart(2, '0');
  const menit = time.getMinutes().toString().padStart(2, '0');
  const timestamp = `${jam}.${menit}`;

  pesanEl.innerHTML = `
    ${teks}
    <span class="timestamp">
      ${timestamp}
      ${kelas === 'user-message' ? '<span class="check">✔✔</span>' : ''}
    </span>
  `;

  chatBox.appendChild(pesanEl);
  pesanEl.scrollIntoView({ behavior: 'smooth' });
}

function balasanBot(teks) {
  const t = teks.toLowerCase();

  if (t.includes("hai") || t.includes("halo")) {
    return "Hai juga kamu 😳";
  } else if (t.includes("udah makan") || t.includes("sudah makan")) {
    return "Belum nih... mau nya di suapin kamu 😋";
  } else if (t.includes("aku kangen") || t.includes("aku rindu")) {
    return "Aku juga kangen kok... tapi gak berani bilang 😶";
  } else if (t.includes("aku sayang kamu") || t.includes("suka")) {
    return "Hah? Serius? Aku juga suka kamu, tapi malu ngungkapinnya 🥺";
  } else if (t.includes("kamu lagi ngapain?")) {
    return "Lagi mikirin kamu sih... 😌";
  } else if (t.includes("main yuk") || t.includes("jalan")) {
    return "Mau banget! Tapi jangan lama-lama ya nunggu aku 🥹";
  } else if (t.includes("aku tidur dulu yaa") || t.includes("good night")) {
    return "Selamat tidur ya, semoga mimpiin aku 💤✨";
  } else if (t.includes("pagi") || t.includes("good morning")) {
    return "Pagi juga kamu ☀️ semoga harimu seindah senyum kamu 😍";
  } else if (t.includes("kamu mau ngga jadi pacar aku?") || t.includes("kamu mau ngga jadian sama aku?")) {
    return "Kalau aku bilang 'iya', kamu beneran serius? 😳❤️";
  } else {
    const fallback = [
      "Hmm... kamu bikin aku deg-degan ngomong gitu 😳",
      "Kamu tuh ya, bisa aja ngomongnya 🙈",
      "Kalau terus digombalin gini, aku bisa klepek-klepek loh 😅",
      "Jangan bikin aku baper terus dong 😌",
    ];
    return fallback[Math.floor(Math.random() * fallback.length)];
  }
}

const inputField = document.getElementById('user-input');
inputField.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    if (e.shiftKey) return;
    e.preventDefault();
    kirimPesan();
  }
});

inputField.addEventListener('input', function () {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

window.addEventListener('DOMContentLoaded', () => {
  tampilkanPesan("Eh kok kamu chat aku duluan 😳", 'bot-message');
});