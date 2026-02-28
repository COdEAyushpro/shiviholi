import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [typingText, setTypingText] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const correctPassword = "shruti123";
  const fullText = "Someone Special is Waiting Inside...";

  /* Typing Effect */
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypingText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  /* Unlock */
  const unlock = () => {
    if (password === correctPassword) {
      setUnlocked(true);
    } else {
      alert("Wrong Password 💔");
    }
  };

  /* Heart Explosion */
  const heartExplosion = () => {
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML = "💖";
      heart.style.left = "50%";
      heart.style.top = "50%";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 3000);
    }
  };

  return (
    <div className="container">
      {!unlocked ? (
        <div className="glass">
          <h2>Only Shruti Can Enter 💖</h2>
          <p>{typingText}</p>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={unlock}>Unlock</button>
        </div>
      ) : (
        <div className="main">
          <h1 onClick={heartExplosion}>
            Happy Holi My Love Shruti 🌈💖
          </h1>

          <div className="message">
            Shruti, just like these colors, you make my life bright,
            beautiful and magical.
          </div>

          <button
            className="proposal"
            onClick={() => setShowPopup(true)}
          >
            💍 Surprise
          </button>

          <footer>Made with ❤️ by Ayush</footer>

          {/* Popup */}
          {showPopup && (
            <div className="popup">
              <h2>
                Will you celebrate every Holi with me forever? 💍
              </h2>
              <button onClick={() => setShowPopup(false)}>
                Yes 💖
              </button>
            </div>
          )}

          {/* Background Music */}
          <audio autoPlay loop>
            <source
              src="https://www.bensound.com/bensound-music/bensound-romantic.mp3"
              type="audio/mp3"
            />
          </audio>
        </div>
      )}
    </div>
  );
}

export default App;