console.log('1. พื้นฐานของตัวแปรและชนิดข้อมูล');
let myString = "Hello สวัสดี" // String
let myNumber = 66           // Number
let myBoolean = true        // Boolean

// let myArray = [1, 2, 3]     // Array
// let myObject = { a: 1, b: 2 } // Object

console.log(myString, myNumber, myBoolean)

// console.log(typeof myString, typeof myNumber, typeof myBoolean, typeof myArray, typeof myObject)

// // ตัวอย่างการแปลงข้อมูล

// // แปลง String → Number
// let strToNum = parseInt("10"); // 10
// let floatToNum = parseFloat("3.14"); // 3.14

// // แปลง Number → String
// let numToStr = String(100); // "100"

// // แปลง Boolean → Number
// let boolToNum = Number(true); // 1

// console.log(strToNum, floatToNum, numToStr, boolToNum);

console.log('----------------------------------')

console.log('2. สร้างและใช้งานโครงสร้างข้อมูล');
console.log('2.1 การใช้งาน List (Array)')
let fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)
// เพิ่ม, ลบข้อมูล, แก้ไขข้อมูล
fruits.push('Durian')
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits[1] = 'Blueberry'
console.log(fruits)

console.log('2.2 การใช้งาน Object (Dictionary)')
let person = {
  name: 'John Cena',
  age: 30,
  city: 'Bangkok'
}
console.log(person.name, person.age, person.city)

console.log('2.3 การใช้งาน Set และ Tuple')
let mySet = new Set([1, 2, 3, 3, 4, 5])
console.log(mySet)

let myTuple = [10, 'Hello', true] // เป็น Array ที่มีขนาดคงที่ Data ที่อยู่ภายใน Tuple ไม่จำเป็นต้องเป็น Type ชนิดเดียวกัน
console.log(myTuple)

console.log('----------------------------------')

console.log('3. จัดการ JSON Data')
console.log('3.1 การแปลง JSON String เป็น Object และ Object เป็น JSON String')
let studentData = {
    name: "นายสมปอง ครองใจ",
    age: 21,
    courses: ["Math", "Science", "History"]
  };
  
  // แปลง Object เป็น JSON String
  let jsonData = JSON.stringify(studentData);
  console.log("JSON String",":",jsonData);
  
  // แปลง JSON String เป็น Object
  let parsedData = JSON.parse(jsonData);
  console.log("Object",":",parsedData);  


