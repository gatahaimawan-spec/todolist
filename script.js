const inputan = document.querySelector("#todo-input");
const tombol = document.querySelector("#task-btn");
const wadah = document.querySelector("#task-list");

console.log("cek!");
console.log("cek:", wadah);

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
  wadah.appendChild(listBaru);
  // PENEGASAN BAHWA TANGKI KOSONG
  inputan.value = "";
  //   SAKLAR SELESAI
  listBaru.addEventListener("click", function () {
  listBaru.classList.toggle("selesai");
});
});
