//var,let,const

let firstName = "Can";

let lastName = "Gündüz";

console.log(firstName, lastName, age);

var age = 24;

console.log(age);

//let koyduğumuzda yukarıdaki log'a age undefined olarak basar. Çünkü let ve const hoisting yapmaz. var ise hoisting yapar.
//hoisting: tanımlamaların en başa alınmasıdır.
//Özetle let ve const tanımlamaları yukarıda olmalıdır. Aksi takdirde undefined hatası alırız.

// let code1 tanımlanırken const code1 tanımlanamaz.
//const'ta değişkenin değeri değiştirilemez. let ise değiştirilebilir.

//Const ile diziye değer atama;

const arr = [1, 2, 3, 4, 5];
arr.push(6);

console.log(arr);
//Çıktı: [1, 2, 3, 4, 5, 6]. Const ile tanımlanan bir diziye push yapılabilir. Ancak diziye yeni bir değer atanamaz.

const person = {
  name: "Can",
};

person.name = "Gündüz";
person.email = "test@gmail.com";

console.log(person);

//Çıktı: {name: "Gündüz", email: "test@gmail.com"}
