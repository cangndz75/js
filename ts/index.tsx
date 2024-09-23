//any kullandığımız zaman değişkenin tipini belirtmemize gerek kalmaz ve değişkenin tipi çalışma zamanında belirlenir.
let val: any = "test";

val = 10;
console.log(typeof val);

//interface - type
//Tür kontrolü yapmak için kullanılır.
//interface ve type arasındaki farklar:
//interface: sadece referans tip oluşturabilir.
//type: referans ve değer tip oluşturabilir.
//referans: array, object
//değer: number, string, boolean
type IProps = {
  name: string | number;
  age: number;
};

let obj = {
  name: "test",
  age: 10,
};

console.log(obj.name);

//TypeScript, JavaScript’in tip sistemine ek olarak, daha sıkı bir tür kontrolü sağlar.
// IProps türü sayesinde, name ve age özelliklerinin hangi türde değer alması gerektiği belirtilmiştir.
// Bu, hataların daha erken aşamada tespit edilmesine yardımcı olur.

{
  /* 
    Tekrar özetlemek gerekirse interface, nesne yapıları ve miras alma gibi durumlar için kullanılırken, type, daha genel bir kullanım alanına sahiptir.
    
    interface: Kullanıcı ve çalışanların yapısını tanımlamak için kullanılır; çalışanlar kullanıcıların bir alt kümesidir ve bu nedenle miras alınabilir.
    
    type: Farklı kullanıcı türlerini birleştirmek ve karmaşık türler oluşturmak için kullanılır; örneğin, bir admin ve normal kullanıcı arasında seçim yapma imkanı sağlar.
*/
}
