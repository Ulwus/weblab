import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Background Blobs for Glassmorphism Effect */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="glass-card">
        <h1 className="title">Web Tasarımı ve Programlama</h1>
        <h2 className="subtitle">LAB-1</h2>

        <div className="info-container">
          <div className="info-item">
            <span className="info-label">Ad Soyad</span>
            <span className="info-value">Oğuzhan Gündüz</span>
          </div>
          <div className="info-item">
            <span className="info-label">Öğrenci No</span>
            <span className="info-value">230541054</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
