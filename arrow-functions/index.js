//Burada a,b parametreleri alınarak toplama işlemi yapılmıştır.
// => operatörü kullanılarak fonksiyon tanımlanmıştır.
const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

// this'i tanımlandığı yerden devraldığı için bağlamla ilgili sorunları ortadan kaldırır.
