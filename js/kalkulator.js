const inputTugas = document.querySelector("#tugas");
const inputUts = document.querySelector("#uts");
const inputUas = document.querySelector("#uas");

const tombol = document.querySelector("#hitung");
const hasil = document.querySelector("#hasil");

const hitungRataRata = (tugas, uts, uas) => {
  return (tugas + uts + uas) / 3;
};

function predikat(rataRata) {
  if (rataRata >= 90) {
    return "A";
  } else if (rataRata >= 80) {
    return "B";
  } else if (rataRata >= 70) {
    return "C";
  } else if (rataRata >= 60) {
    return "D";
  } else {
    return "E";
  }
};

const form = document.getElementById("form");
const result = document.getElementById("hasil");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const tugas = Number(form.elements.tugas.value);
  const uts = Number(form.elements.uts.value);
  const uas = Number(form.elements.uas.value);

  const rataRata = hitungRataRata(tugas, uts, uas);
  const hasilPredikat = predikat(rataRata);

  result.innerText = "Rata-rata: " + rataRata.toFixed(2) +
    " | Predikat: " + hasilPredikat;

  console.log("Nilai Tugas:", tugas);
  console.log("Nilai UTS:", uts);
  console.log("Nilai UAS:", uas);
  console.log("Rata-rata:", rataRata.toFixed(2));
  console.log("Predikat:", hasilPredikat);
});