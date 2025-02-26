function generateLottery() {
    const userInput = document.getElementById("userInput").value;
    const lotteryNumber = Math.floor(Math.random() * 1000000); // สุ่มเลข 6 หลัก

    if (userInput == lotteryNumber) {
        document.getElementById("result").innerText = `คุณถูกรางวัล! หมายเลขที่ออกคือ ${lotteryNumber}`;
    } else {
        document.getElementById("result").innerText = `ไม่ถูกรางวัล หมายเลขที่ออกคือ ${lotteryNumber}`;
    }
}