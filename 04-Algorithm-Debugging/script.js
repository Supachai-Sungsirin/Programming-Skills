function calculateArea() {
    let radius = document.getElementById("radius").value;
    let area = Math.PI * Math.pow(radius, 2);
    document.getElementById("result").innerText = `พื้นที่วงกลมคือ: ${area.toFixed(2)} ตารางหน่วย`;
}

function checkAge() {
    let age = document.getElementById("age").value;
    let result = "";

    if (age < 13) {
        result = "เด็ก";
    } else if (age >= 13 && age <= 19) {
        result = "วัยรุ่น";
    } else {
        result = "ผู้ใหญ่";
    }

    document.getElementById("ageResult").innerText = `คุณเป็น: ${result}`;
}


function checkEvenOdd() {
    let num = document.getElementById("number").value;
    let result = (num % 2 === 0) ? "เลขคู่" : "เลขคี่";
    document.getElementById("numResult").innerText = `ผลลัพธ์: ${result}`;
}

// For Loop แสดงเลข 1-10
function showNumbers() {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += i + " ";
    }
    document.getElementById("loopResult").innerText = output;
}

// While Loop รับค่าผู้ใช้
function askUser() {
    let input;
    while (input !== "exit") {
        input = prompt("พิมพ์ข้อความ (พิมพ์ 'exit' เพื่อออก)");
        console.log(input);
    }
}

// สร้าง Array ขนาด 100 ช่องที่มีค่าสุ่ม
let numbers = createRandomArray(100, 1, 1000);

// แสดงค่า Array ก่อนเรียงลำดับ
document.getElementById("beforeSort").innerText = `ก่อนเรียง: ${numbers.join(", ")}`;

// ฟังก์ชันสร้าง Array ขนาดที่กำหนดด้วยค่าสุ่ม
function createRandomArray(size = 100, min = 1, max = 1000) {
    const randomArray = [];
    for (let i = 0; i < size; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
    }
    return randomArray;
}

// Bubble Sort
function bubbleSort() {
    let sortedNumbers = [...numbers]; // สร้างสำเนาของ array เพื่อไม่ให้เปลี่ยนแปลงตัวแปรหลัก
    for (let i = 0; i < sortedNumbers.length; i++) {
        for (let j = 0; j < sortedNumbers.length - i - 1; j++) {
            if (sortedNumbers[j] > sortedNumbers[j + 1]) {
                [sortedNumbers[j], sortedNumbers[j + 1]] = [sortedNumbers[j + 1], sortedNumbers[j]]; // สลับที่
            }
        }
    }
    document.getElementById("afterSort").innerText = `หลังเรียง (Bubble Sort): ${sortedNumbers.join(", ")}`;
}

// Selection Sort
function selectSort() {
    let sortedNumbers = [...numbers]; // สร้างสำเนาของ array เพื่อไม่ให้เปลี่ยนแปลงตัวแปรหลัก
    for (let i = 0; i < sortedNumbers.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < sortedNumbers.length; j++) {
            if (sortedNumbers[j] < sortedNumbers[minIndex]) {
                minIndex = j;
            }
        }
        [sortedNumbers[i], sortedNumbers[minIndex]] = [sortedNumbers[minIndex], sortedNumbers[i]]; // สลับที่
    }
    document.getElementById("afterSort").innerText = `หลังเรียง (Selection Sort): ${sortedNumbers.join(", ")}`;
}



// ----------------------------------------------
// สร้างฟังก์ชัน factorial

//  กันลืมมมมมมมมมม
// เริ่มต้น  
//   ถ้า n = 1 ให้คืนค่า 1  
//   ไม่เช่นนั้น คืนค่า n * factorial(n-1)  
// จบ

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// สร้างฟังก์ชัน fibonacci

//  กันลืมมมมม
// เริ่มต้น  
//   ถ้า n = 0 ให้คืนค่า 0  
//   ถ้า n = 1 ให้คืนค่า 1  
//   ไม่เช่นนั้น คืนค่า fibonacci(n-1) + fibonacci(n-2)  
// จบ

function fibonacciRecursive(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(10)); // 55

// ----------------------------------------------

console.log("เริ่มต้น Debugging Tools");
let x = 10;
console.log("ค่าของ x:", x);

// let a = 5, b = 10;
// let sumDebug = a + b;
// debugger; // หยุดโค้ดที่บรรทัดนี้
// console.log("ผลรวม:", sumDebug);

console.log("สิ้นสุด Debugging Tools");

console.log("เริ่มต้น try-catch");

try {
    let result = 10 / 0;
    console.log("ผลลัพธ์:", result);
} catch (error) {
    console.log("เกิดข้อผิดพลาด:", error.message);
}

console.log("สิ้นสุด try-catch-finally");


// function validateAge() {
//     let age = document.getElementById("ageInput").value;
//     let message = "";

//     try {
//         if (!age) throw new Error("กรุณากรอกอายุ");
//         if (isNaN(age)) throw new Error("กรุณากรอกตัวเลขเท่านั้น");
//         if (age < 18) throw new Error("อายุไม่ถึงเกณฑ์");

//         message = "อายุผ่านเกณฑ์ สามารถเข้าระบบได้";
//     } catch (error) {
//         message = error.message;
//     } finally {
//         document.getElementById("resultAge").innerText = message;
//     }
// }
