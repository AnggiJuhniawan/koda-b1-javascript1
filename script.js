// string
// const name = "Budi";
// const welcome = `Selamat datang, ${name}`;
// welcome = welcome + ". Apa kabar?";
// console.log(welcome + ". Apa kabar?");

// Number
// let score = 100;
// score += 5;
// const newScore = score;
// console.log(score);
// console.log((newScore += 12));

// let isMarried = false;
// console.log(isMarried);

// const name = null;
// console.log(name);

const hobbies = [
  "Gaming",
  "Swimming",
  "Hiking",
  undefined,
  ["Hello", ["Hallo", ["World"]]],
];
hobbies[5] = "Sleeping";
hobbies.splice(2, 0, "Diving");
console.log(hobbies);

// const angka = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// angka[3] = [10, 11, 12];
// angka[0] = [13, 14, 15];
// angka[3][3] = [16, 17, 18];
// angka[3][3][3] = [19, 20, 21];
// console.log(angka[3][3][3]);

const highSchool = {
  name: "Koda Academy",
  year: 2021,
  student: {
    name: "Afif",
    kelas: 10,
  },
  hobbies: [
    "Hiking",
    "Sleeping",
    "Eating",
    "Coding",
    {
      name: "padel",
      details: "i love padel",
      with: [
        "rizal",
        "zakky",
        {
          istri: "Eli Putri",
          suami: "Chandra",
          domisili: ["Depok", 16459, "Leuwinanggung"],
        },
      ],
    },
  ],
};
// highSchool.hobbies[4].with[2] = "alvin";
console.log(highSchool.hobbies[4].with[2].domisili[1] + 3);
