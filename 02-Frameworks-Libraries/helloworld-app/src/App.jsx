import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Hello World!</h1>
      </header>
      <main>
        <p>ยินดีต้อนรับสู่แอปพลิเคชัน React + Vite</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Hello {count} ครั้ง
          </button>
        </div>
        <p className="info">
          {/* แก้ไขไฟล์ <code>src/App.jsx</code> แล้ว save เพื่อทดสอบ Hot Module Replacement */}
          CSI204
        </p>
      </main>
    </div>
  )
}

export default App