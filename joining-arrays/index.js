//Burada .join metodu kullanılarak array elemanları birleştirilmiştir ve virgül ile ayrılmıştır.

{
  /*
const numbers = [1, 2, 3];
const joined = numbers.join(",");
console.log(joined);  */
}

//Burada .split metodu kullanılarak string ifade parçalanmış ve array oluşturulmuştur.
//.join metodu kullanılarak array elemanları birleştirilmiştir ve aralarına - işareti eklenmiştir.
//.toLowerCase metodu kullanılarak string ifade küçük harfe çevrilmiştir.
const courseName = "Modern JavaScript Kursu";
{
  /*const lowerCase = courseName.toLowerCase();
const chars = courseName.split(" ");
const urlSlug = chars.join("-");
console.log(lowerCase);
*/
}

//[ 'Modern', 'JavaScript', 'Kursu' ]
//Modern-JavaScript-Kursu
//modern javascript kursu

const split = courseName.toLowerCase().split(" ").join("-");
console.log(split);
//modern-javascript-kursu
