let x;
const arr = [1, 2, 3, 4, 5];

console.log(arr);

//push() methodu dizinin sonuna eleman ekler.
arr.push(6);

console.log(arr);

//pop() methodu dizinin son elemanını siler.
arr.pop();

console.log(arr);

//unshift() methodu dizinin başına eleman ekler.
arr.unshift(0);

console.log(arr);

// arr.splice(2, 1, 2.5) şunu yapar:
// Dizideki 2. indeksten (yani 3. elemandan) başlayarak 1 elemanı siler.
// Bu silinen elemanın yerine 2.5 değerini ekler.
// splice() metodu, silinen eleman(lar)ı bir dizi olarak döner ve bunu x değişkenine atar.
x = arr.splice(2, 1, 2.5);

console.log(x, arr);
