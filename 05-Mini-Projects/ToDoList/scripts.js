document.addEventListener('DOMContentLoaded', function() {
    // 1. เลือก Elements จาก DOM
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const totalTasks = document.getElementById('totalTasks');
    const completedTasks = document.getElementById('completedTasks');
    const remainingTasks = document.getElementById('remainingTasks');
    
    // 2. โหลดข้อมูลจาก LocalStorage
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    // 3. แสดงรายการ Todo
    function renderTodos() {
        // ล้างรายการปัจจุบัน
        todoList.innerHTML = '';
        
        // ตรวจสอบว่ามีรายการหรือไม่
        if (todos.length === 0) {
            todoList.innerHTML = '<div class="empty-message">ไม่มีรายการ To-Do</div>';
            updateStats();
            return;
        }
        
        // วนลูปสร้าง Elements สำหรับแต่ละรายการ
        todos.forEach((todo, index) => {
            const todoItem = document.createElement('li');
            todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            
            todoItem.innerHTML = `
                <span class="todo-text">${todo.text}</span>
                <div class="todo-actions">
                    <button class="todo-toggle">${todo.completed ? 'ยกเลิก' : 'เสร็จสิ้น'}</button>
                    <button class="todo-delete">ลบ</button>
                </div>
            `;
            
            // เพิ่ม Event Listener สำหรับปุ่ม "เสร็จสิ้น/ยกเลิก"
            const toggleBtn = todoItem.querySelector('.todo-toggle');
            toggleBtn.addEventListener('click', () => {
                toggleTodo(index);
            });
            
            // เพิ่ม Event Listener สำหรับปุ่ม "ลบ"
            const deleteBtn = todoItem.querySelector('.todo-delete');
            deleteBtn.addEventListener('click', () => {
                deleteTodo(index);
            });
            
            todoList.appendChild(todoItem);
        });
        
        // อัปเดตสถิติ
        updateStats();
    }
    
    // 4. เพิ่มรายการใหม่
    function addTodo(text) {
        const todo = {
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        todos.push(todo);
        saveTodos();
        renderTodos();
    }
    
    // 5. สลับสถานะ Complete/Incomplete
    function toggleTodo(index) {
        todos[index].completed = !todos[index].completed;
        saveTodos();
        renderTodos();
    }
    
    // 6. ลบรายการ
    function deleteTodo(index) {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    }
    
    // 7. บันทึกข้อมูลลง LocalStorage
    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    
    // 8. อัปเดตสถิติ
    function updateStats() {
        const completed = todos.filter(todo => todo.completed).length;
        const total = todos.length;
        const remaining = total - completed;
        
        totalTasks.textContent = total;
        completedTasks.textContent = completed;
        remainingTasks.textContent = remaining;
    }
    
    // 9. จัดการการส่งฟอร์ม
    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const text = todoInput.value.trim();
        
        if (text !== '') {
            addTodo(text);
            todoInput.value = '';
            todoInput.focus();
        }
    });
    
    // 10. แสดงรายการเมื่อโหลดหน้า
    renderTodos();
});