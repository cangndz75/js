let characters = ["D", "C", "B", "A"];
characters.sort();
console.log(characters);
//[ 'A', 'B', 'C', 'D' ]

//Burada const ile names fonksiyonu oluşturulmuştur ve içerisinde 3 adet string ifade bulunmaktadır.
//return ile bu 3 adet string ifade döndürülmüştür.
//Daha sonra names fonksiyonu çağırılarak 3 adet string ifadeyi içeren bir array oluşturulmuştur.
//let sortedNames ile array elemanlar namees fonksiyonu çağırılarak oluşturulmuş ve sıralanmıştır.
const names = () => {
  const name1 = "John";
  const name2 = "Jane";
  const name3 = "Jake";
  return [name1, name2, name3];
};

const [firstPerson, secondPerson, thirdPerson] = names();

let sortedNames = names().sort();
console.log(sortedNames);

//Filter
//Burada employees adında bir array oluşturulmuştur ve içerisinde 3 adet obje bulunmaktadır.
//Bu objelerin içerisinde name ve salary adında keyler bulunmaktadır.
//employees.filter metodu kullanılarak salary değeri 60000'den büyük olan objeler seçilmiştir.
//employees.filter metodu ile seçilen objeler developers adında bir array içerisine atılmıştır.
//(employee=> demek her bir employee için yapılacak işlemi belirtir.)
//employee ismi rastgele verilmiştir.*
const employees = [
  { name: "John", salary: 50000 },
  { name: "Jane", salary: 60000 },
  { name: "Jake", salary: 90000 },
];

const developers = employees.filter((employee) => employee.salary > 60000);
console.log(developers);
