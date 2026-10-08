// // const isMarried = false;
// const bio = {
//   isMarried: false,
// };
// const age = 30;

// if (age >= 30) {
//   bio.isMarried = true;
// }
// if (bio.isMarried) {
//   console.log("Sudah punya istri");
// } else {
//   console.log("Nikah woy");
// }

// const age = 20;
// const hasKtp = true;

// if (age >= 17 && hasKtp === false) {
//   console.log("Boleh buat SIM");
// } else {
//   console.log("Mending Nembak");
// }

// let grade = "";

// if (score > 90) {
//   grade = "A";
// } else if (score !== 80) {
//   grade = "B";
// } else if (score > 75) {
//   grade = "C";
// } else {
//   grade = "F";
// }
// console.log(grade);

// const isLogin = false;
// console.log(isLogin);
// console.log(!isLogin);
// const name = "asdas";

// if (isLogin) {
//   console.log("Truthy");
// } else {
//   console.log("Falsey");
// }
// console.log(Boolean(-1));
// console.log(Boolean(1));
// console.log(Boolean(0));

// console.log(Boolean("Hello"));
// console.log(Boolean(""));

// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// console.log(Boolean([]));
// console.log(Boolean({}));

// const username = "";
// console.log(Boolean(username));
// console.log(!username);

// const role = "admin";

// switch (role) {
//   case "admin":
//     const pilih = 1;

//     switch (pilih) {
//       case 1:
//         console.log("1. Makanan");

//         break;
//       case 2:
//         console.log("2. Minuman");
//         break;
//       default:
//         console.log("Salah pilih");
//     }
//     break;
//   case "member":
//     console.log("Welcome member");
//     break;
//   case "guest":
//     console.log("Welcome Guest");
//     break;

//   default:
//     console.log("Role tidak dikenali");
// }

// PERULANGAN
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// Mini Task
// Buat program JavaScript yang memiliki variable:
// const mode = "fizzbuzz";
// Program memiliki 3 pilihan mode:
// "fizzbuzz"
// "odd-even"
// "multiplication"
// Gunakan switch-case untuk menentukan proses berdasarkan nilai mode.
// 1 - 20
// pekalian 3 dan 5 fizzbuzz

// 1 - 10
// 1. Ganjil 2. Genap 3. Ganjil
// 1 + 1 = 2, 1 + 2 = 3, 1 + 3 = 4,

// Typeof
// const radius = "ABC";
// const phi = 3.14;
// const area = phi * radius * radius;
// console.log(area);

// const radius = "ABC";
// if (typeof radius === "number") {
//   const area = 3.14 * radius * radius;
//   console.log("Luas: ", area);
// } else {
//   console.log("Salah");
// }

// instanceof

// class Mobil {}
// class Motor {}
// const avanza = new Mobil();
// const Vario = new Motor();
// console.log(avanza instanceof Motor);

// const today = new Date();
// console.log(today);
// console.log(typeof today === "object");

// Array
// const hobbies = [];
// if (Array.isArray(hobbies)) {
//   console.log("Hobbies merupakan array");
// } else {
//   console.log("Bukan Array");
// }

const age = "30";
console.log(age instanceof String);

const { createInterface } = require("node:readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input: ", function (ans) {
  //function biasa
  console.log(ans);
  rl.close();
});

// ==============================================
koda-b1-homework1
1. Membuat padanan kode pattern segitiga dengan menggunakan :
    - while
    - do-while
    - for
2. Membuat flowchart dari logic yang sudah dibuat

koda-b1-weekly1
1. Membuat program interaktif pemesanan makanan.
    - Afif : Warteg
    - Rizal : KFC
    - Zakky : Gacoan
    - Bando : Mie Ayam Bakso 
    - Alvin : Masakan Nusantara
    - Rifai : Burger
    - Chandra : Pizza

-----------------
Selamat datang di ...
-----------------
1. Menu Utama
2. Checkout
3. Exit
Silahkan Pilih Menu: 1
------------------
1. Ayam Bakar 
   Harga: Rp. 15.000,-

2. Ayam Kecap
    Harga: Rp. 20. 000,-
Silahkan masukan pilihan: 1

Keranjang :
1. Ayam Bakar (x3)
    Harga: 15.000

Total: Rp. 15.000 x3 = Rp. 45.000,-
Konfirmasi untuk Checkout (Y/n) : Y
-------------------------
Terima kasih sudah membeli!

Menu Utama
2. Checkout
    Pembelian Ayam Bayar
    1
    2
    3
    Pembelian Ayam Serundeng
