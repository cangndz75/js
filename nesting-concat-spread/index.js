//Burada iki array oluşturulmuş ve birleştirilmiştir. İlk array meyveleri, ikinci array ise meyveleri içermektedir.
//İki array birleştirilerek tek bir array oluşturulmuştur.
//... operatörü kullanılarak iki array birleştirilmiştir.
const fruits = ["apple", "banana", "cherry"];
const berries = ["blueberry", "strawberry", "raspberry"];

const allFruits = [fruits, berries];

x = allFruits[1][0];

x = [...fruits, ...berries];

console.log(x);
