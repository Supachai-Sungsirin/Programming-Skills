function generateLottery() {
    const userInput = document.getElementById("userInput").value;

    // ตรวจสอบให้แน่ใจว่าผู้ใช้กรอกเลข 6 หลัก
    if (userInput.length !== 6 || isNaN(userInput)) {
        alert("กรุณากรอกหมายเลข 6 หลัก");
        return;
    }

    // สุ่มเลข 6 หลัก
    const lotteryNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0'); 
    
    // เช็คว่าเลขที่กรอกตรงกับเลขที่สุ่ม
    if (userInput === lotteryNumber) {
        document.getElementById("result").innerText = `คุณถูกรางวัล! หมายเลขที่ออกคือ ${lotteryNumber}`;
    } else {
        document.getElementById("result").innerText = `ไม่ถูกรางวัล หมายเลขที่ออกคือ ${lotteryNumber}`;
    }
}