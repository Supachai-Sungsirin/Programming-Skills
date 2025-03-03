function calculateGPA() {
    // รับข้อมูลจากฟอร์ม
    const score1 = parseFloat(document.getElementById("score1").value);
    const score2 = parseFloat(document.getElementById("score2").value);
    const score3 = parseFloat(document.getElementById("score3").value);
    const score4 = parseFloat(document.getElementById("score4").value);
    const score5 = parseFloat(document.getElementById("score5").value);
    
    const credit1 = parseFloat(document.getElementById("credit1").value);
    const credit2 = parseFloat(document.getElementById("credit2").value);
    const credit3 = parseFloat(document.getElementById("credit3").value);
    const credit4 = parseFloat(document.getElementById("credit4").value);
    const credit5 = parseFloat(document.getElementById("credit5").value);

    // ฟังก์ชันแปลงคะแนน 0-100 เป็นคะแนนเต็ม 4.00
    function convertToGPA(score) {
        if (score >= 80) return 4.00;
        else if (score >= 75) return 3.50;
        else if (score >= 70) return 3.00;
        else if (score >= 65) return 2.50;
        else if (score >= 60) return 2.00;
        else if (score >= 55) return 1.50;
        else if (score >= 50) return 1.00;
        else return 0.00;
    }

    // แปลงคะแนนแต่ละวิชาเป็น GPA
    const gpa1 = convertToGPA(score1);
    const gpa2 = convertToGPA(score2);
    const gpa3 = convertToGPA(score3);
    const gpa4 = convertToGPA(score4);
    const gpa5 = convertToGPA(score5);

    // คำนวณ GPA โดยการถ่วงน้ำหนักด้วยหน่วยกิต
    const totalScore = (gpa1 * credit1) + (gpa2 * credit2) + (gpa3 * credit3) + (gpa4 * credit4) + (gpa5 * credit5);
    const totalCredits = credit1 + credit2 + credit3 + credit4 + credit5;

    // คำนวณ GPA
    const gpa = (totalScore / totalCredits).toFixed(2);

    // แสดงผล GPA
    document.getElementById("gpaResult").textContent = gpa;
}
