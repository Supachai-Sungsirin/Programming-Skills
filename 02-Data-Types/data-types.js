// 1. พื้นฐานของตัวแปรและชนิดข้อมูล
function testVariables() {
  let myString = "Hello สวัสดี";
  let myNumber = 66;
  let myBoolean = true;
  console.log(myString, myNumber, myBoolean);

  // แปลงชนิดข้อมูล
  let strToNum = parseInt("10");
  let floatToNum = parseFloat("3.14");
  let numToStr = String(100);
  let boolToNum = Number(true);

  console.log(strToNum, floatToNum, numToStr, boolToNum);
}

// 2. สร้างและใช้งานโครงสร้างข้อมูล
function testArray() {
  let fruits = ['Apple', 'Banana', 'Cherry'];
  console.log(fruits);
  fruits.push('Durian');
  console.log(fruits);
  fruits.pop();
  console.log(fruits);
  fruits[1] = 'Blueberry';
  console.log(fruits);
}

function testObject() {
  let student = { name: 'Tom', age: 20, grade: 'A' };
  console.log(student);
}

function testSetAndTuple() {
  let mySet = new Set([1, 2, 3, 3, 4, 5]);
  console.log(mySet);

  let myTuple = [10, 'Hello', true];
  console.log(myTuple);
}

// 3. จัดการ JSON Data
function testJSON() {
  let studentData = {
    name: "นายสมปอง ครองใจ",
    age: 21,
    courses: ["Math", "Science", "History"]
  };

  // แปลง Object เป็น JSON String
  let jsonData = JSON.stringify(studentData);
  console.log("JSON String:", jsonData);

  // แปลง JSON String เป็น Object
  let parsedData = JSON.parse(jsonData);
  console.log("Object:", parsedData);
}

// ฟังก์ชันจัดการฟอร์มข้อมูลนักเรียน
document.getElementById("studentForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  let student = {
    name: name,
    age: age,
  };

  const jsonData = JSON.stringify(student);
  document.getElementById("output").textContent = "ข้อมูลที่บันทึก: " + jsonData;

  console.log("ข้อมูลนักเรียน:", student);
});