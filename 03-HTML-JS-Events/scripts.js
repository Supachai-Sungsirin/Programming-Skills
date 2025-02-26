document.getElementById("changeColorBtn").addEventListener("click", function() {
    let colors = ["#E6E6FA", "#483D8B", "#DB7093", "#4169E1", "#F0FFF0", "#778899"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// เมื่อพิมพ์ข้อความ เปลี่ยนแปลงค่าใน <p>
document.getElementById("nameInput").addEventListener("keyup", function() {
    let name = this.value;
    document.getElementById("greeting").innerText = name ? "สวัสดี, " + name + "!" : "";
});

// เมื่อ hover ปุ่ม เปลี่ยนสีปุ่ม
document.getElementById("changeColorBtn").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#CCCCFF";
});
document.getElementById("changeColorBtn").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
});

// 3: สร้างแบบฟอร์มรับค่าและตรวจสอบข้อมูล
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ป้องกันการโหลดหน้าใหม่

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = "";
    let messageType = ""; // กำหนดประเภทของข้อความ (success หรือ error)

    if (username === "") {
        message = "กรุณากรอกชื่อของคุณ!";
        messageType = "error"; // ถ้าไม่กรอกชื่อแสดงเป็นข้อผิดพลาด
    } else if (!email.includes("@") || !email.includes(".")) {
        message = "กรุณากรอกอีเมลที่ถูกต้อง!";
        messageType = "error"; // ถ้าอีเมลไม่ถูกต้องแสดงเป็นข้อผิดพลาด
    } else {
        message = "สมัครสมาชิกสำเร็จ!";
        messageType = "success"; // ถ้าทุกอย่างถูกต้องแสดงข้อความสำเร็จ
    }

    // เปลี่ยนแปลงข้อความใน <p id="formMessage">
    let formMessage = document.getElementById("formMessage");
    formMessage.innerText = message;

    // เปลี่ยนแปลง class ของ formMessage เพื่อแสดงข้อความที่เหมาะสม
    formMessage.className = messageType; // เพิ่ม class "success" หรือ "error"
});

