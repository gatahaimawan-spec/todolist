const inputan = document.querySelector("#todo-input");
const tombol = document.querySelector("#task-btn");
const hapusSemua = document.querySelector("#btn-hapus");
const daftarUL = document.querySelector("#task-list-ul");

console.log("cek!");
console.log("cek:", daftarUL);

tombol.addEventListener("click", function () {
  //  TANGKI KOSONG
  const pesanan = inputan.value;
  // PENGISI TANGKI
  const listBaru = document.createElement("li");
  listBaru.textContent = pesanan;
  //  RUANG MESIN YANG AKAN DIISI OLEH
  // BAHAN BAKAR DARI TANGKI YANG DIHASILKAN
  // OLEH PEGISI TANGKI
  const tombolHapus = document.createElement("button");
  tombolHapus.textContent = "X";
  tombolHapus.classList.add("btn-hapus");
  tombolHapus.addEventListener("click", function () {
    event.stopPropagation();
    listBaru.remove();
  });
  listBaru.appendChild(tombolHapus);
  daftarUL.appendChild(listBaru);
  // PENEGASAN BAHWA TANGKI KOSONG
  inputan.value = "";
  //   SAKLAR SELESAI
  listBaru.addEventListener("click", function () {
    listBaru.classList.toggle("selesai");
  });
});

hapusSemua.addEventListener("click", function () {
  console.log("1.tomboldiklik");
  const daftarUL = document.querySelector("#task-list-ul");
  console.log("2.mencari ul");
  if (daftarUL) {
    daftarUL.innerHTML = ""; // clear content
    console.log("3.haruskosong");
  } else {
    console.log("4.ultidakketemu");
  }
});
