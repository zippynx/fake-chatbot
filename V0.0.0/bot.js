const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        "Perkenalkan nama saya zipbot, siapa nama kamu?",
        `Halo ${data?.nama}, berapa usia kamu`,
        `Ouhhh ${data?.usia}, kalo kamu hobinya apa?`,
        `WoW sama dong aku juga hobi ${data?.hobi}, btw kamu udah punya pacar belum?`,
        `Oalah ${data?.pacar}, ya udah kalo gitu, udahan yaa?`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    if(jawaban.value.length <1) return alert("Silahkan isi jawaban dulu")
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, 1000)
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Makasih yaa ${userData[0]} udah mampir ke zipbot😇.
    kapan-kapan kita main ${userData[2]} bareng yaa!`
    jawaban.value = "siap makasih juga!"
}

function botEnd() {
    alert(`Makasih ${userData[0]} udah mampir, kamu akan diarahkan ke halaman utama.`)
    window.location.reload()
}