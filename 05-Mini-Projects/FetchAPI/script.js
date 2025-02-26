// ดึงข้อมูลจาก JSONPlaceholder API
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())  // แปลงข้อมูลที่ได้รับมาเป็น JSON
    .then(users => {
        // สำหรับแต่ละผู้ใช้ในข้อมูลที่ได้รับมา
        const userDataContainer = document.getElementById('user-data');
        users.forEach(user => {
            // สร้างแท็ก HTML สำหรับแสดงข้อมูลแต่ละผู้ใช้
            const userDiv = document.createElement('div');
            userDiv.style.marginBottom = '20px';
            userDiv.style.border = '1px solid #ddd';
            userDiv.style.padding = '10px';

            userDiv.innerHTML = `
                        <strong>Name:</strong> ${user.name}<br>
                        <strong>Email:</strong> ${user.email}<br>
                        <strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}<br><br>
                    `;

            // เพิ่มข้อมูลของผู้ใช้ลงในส่วนที่แสดงบนหน้าเว็บ
            userDataContainer.appendChild(userDiv);
        });
    })
    .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);  // จัดการข้อผิดพลาด
    });

