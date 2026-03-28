let daftarTugas = [];
const inputan = document.querySelector("#todo-input");
const tombol = document.querySelector("#task-btn");
const hapusSemua = document.querySelector("#btn-hapus");
const daftarUL = document.querySelector("#task-list-ul");
const dataDariGudang = localStorage.getItem("TUGAS_USER");
if (dataDariGudang) {
  daftarTugas = JSON.parse(dataDariGudang);
  daftarTugas.forEach(function (paketTugas) {
    const listBaru = document.createElement("li");
    listBaru.innerText = paketTugas.pesanan;
    daftarUL.appendChild(listBaru);
    listBaru.addEventListener("click", function () {
      listBaru.classList.toggle("selesai");
      paketTugas.selesai = !paketTugas.selesai;
      localStorage.setItem("TUGAS_USER", JSON.stringify(daftarTugas));
      console.log("status terbaru", paketTugas);
    });
    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "X";
    tombolHapus.classList.add("btn-hapus");
    tombolHapus.addEventListener("click", function (event) {
      event.stopPropagation();
      const index = daftarTugas.indexOf(paketTugas);
      daftarTugas.splice(index, 1);
      listBaru.remove();
      localStorage.setItem("TUGAS_USER", JSON.stringify(daftarTugas));
    });
    listBaru.appendChild(tombolHapus);
    if (paketTugas.selesai) {
      listBaru.classList.toggle("selesai");
    }
  });
}
console.log("cek!");
console.log("cek:", daftarUL);

tombol.addEventListener("click", function () {
  //  TANGKI KOSONG
  const pesanan = inputan.value;
  const paketTugas = {
    pesanan: pesanan,
    selesai: false,
  };
  daftarTugas.push(paketTugas);
  console.log("isibukulogsekarang:", daftarTugas);
  // proses penataan dan penyimpanan data
  const dataTeks = JSON.stringify(daftarTugas);
  localStorage.setItem("TUGAS_USER", dataTeks);
  console.log("data berhasil dipack");
  // PENGISI TANGKI
  const listBaru = document.createElement("li");
  listBaru.textContent = pesanan;
  //  RUANG MESIN YANG AKAN DIISI OLEH
  // BAHAN BAKAR DARI TANGKI YANG DIHASILKAN
  // OLEH PEGISI TANGKI
  const tombolHapus = document.createElement("button");
  tombolHapus.textContent = "X";
  tombolHapus.classList.add("btn-hapus");
  tombolHapus.addEventListener("click", function (event) {
    event.stopPropagation();
    const indexTugas = daftarTugas.indexOf(paketTugas);
    if (indexTugas > -1) {
      daftarTugas.splice(indexTugas, 1);
    }
    listBaru.remove();
    localStorage.setItem("TUGAS_USER", JSON.stringify(daftarTugas));
  });
  listBaru.appendChild(tombolHapus);
  daftarUL.appendChild(listBaru);
  // PENEGASAN BAHWA TANGKI KOSONG
  inputan.value = "";
  //   SAKLAR SELESAI
  listBaru.addEventListener("click", function () {
    listBaru.classList.toggle("selesai");
    paketTugas.selesai = !paketTugas.selesai;
    localStorage.setItem("TUGAS_USER", JSON.stringify(daftarTugas));
    console.log("status terbaru", paketTugas);
  });
});

inputan.addEventListener("keydown", function (event) {
  console.log('inputan jalan')
  {
    if (event.key === "Enter")
      tombol.click()
  }

});

hapusSemua.addEventListener("click", function () {
  console.log("1.tomboldiklik");
  const daftarUL = document.querySelector("#task-list-ul");
  console.log("2.mencari ul");
  if (daftarUL) {
    daftarUL.innerHTML = ""; // clear content
    daftarTugas = [];
    localStorage.removeItem("TUGAS_USER");
    console.log("3.haruskosong");
  } else {
    console.log("4.ultidakketemu");
  }
});
