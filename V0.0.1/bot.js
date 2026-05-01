const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container")[0];

let init = 0;
let userData = {};

const botSay = (data) => {
  return [
    "Halo! Aku ZipBot. Siapa nama kamu?",
    `Hai ${data.nama}! Berapa usiamu?`,
    `Wah, ${data.usia} tahun. Apa hobi kamu?`,
    `Keren! Aku juga suka ${data.hobi}. Sudah punya pacar belum?`,
    `${data.pacar}? Menarik... Makasih ya udah ngobrol 😄`
  ];
};

pertanyaan.innerHTML = botSay(userData)[0];

function botStart() {
  const input = jawaban.value.trim();
  if (input.length < 1) {
    alert("Kamu belum mengisi jawaban!");
    return;
  }

  // Simpan data user sesuai tahap
  switch (init) {
    case 0:
      userData.nama = input;
      break;
    case 1:
      userData.usia = input;
      break;
    case 2:
      userData.hobi = input;
      break;
    case 3:
      userData.pacar = input;
      break;
    default:
      break;
  }

  loaders.style.display = "block";
  container.style.filter = "blur(2px)";

  setTimeout(() => {
    loaders.style.display = "none";
    container.style.filter = "none";

    init++;

    if (init < 5) {
      pertanyaan.innerHTML = botSay(userData)[init];
      jawaban.value = "";
    } else {
      showFinalMessage();
    }
  }, 1000);
}

function showFinalMessage() {
  pertanyaan.innerHTML = `Terima kasih ${userData.nama} udah ngobrol bareng ZipBot! 👋<br/>Kapan-kapan kita main <b>${userData.hobi}</b> bareng ya 😄`;
  jawaban.style.display = "none";
  const btn = document.querySelector("button");
  btn.textContent = "Mulai Lagi";
  btn.onclick = () => window.location.reload();
}
