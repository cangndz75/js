//Primitive types: string, number, boolean, null, undefined, symbol
//Reference types: object, array, function
//İlkel tipler bellekte stack'te tutulur. Referans tipler ise heap'te tutulur.
//İlkel tiplerin değerleri doğrudan bellekte tutulur. Referans tiplerin değerleri ise bellekteki adresleri tutar.
//İlkel tiplerde değerler kopyalanırken, referans tiplerde adresler kopyalanır.
//Örneğin:
let a = 10;
let b = a;
a = 20;
console.log(a, b);
//Burada a'nın değeri 20, b'nin değeri 10 olur. Çünkü a'nın değeri b'ye kopyalanır. a'nın değeri değişse bile b'nin değeri değişmez.

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4);
console.log(arr1, arr2);
//Burada arr1'e 4 eklenirken arr2'de de 4 eklenir. Çünkü arr1'in adresi arr2'ye kopyalanır. Yani arr1 ve arr2 aynı adrese sahiptir.
//Bu yüzden arr1'de yapılan değişiklikler arr2'yi de etkiler.
//Yukarıda neden aynı olmadılar çünkü ilkel tiplerde değerler kopyalanırken, referans tiplerde adresler kopyalanır.
//Değer ve adres farkı ise şudur: Değerler bellekteki değerleri tutar. Adresler ise bellekteki adresleri tutar.
