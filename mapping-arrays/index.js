const numbers = [1, 2, 3];
const squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers);

const employees = [
  { name: "John", salary: 50000 },
  { name: "Jane", salary: 60000 },
  { name: "Jake", salary: 90000 },
];

// ({ kullanılma sebebi obje olduğunu belirtmek içindir.
// ...employee ile objenin içerisindeki tüm key ve valueleri alırız.
// salary değerini 1.1 ile çarparak arttırırız.
// map metodu ile tüm objeleri döngüye alırız.

employees.map((employee) => ({
  ...employee,
  salary: employee.salary * 1.1,
}));

console.log(employees);
