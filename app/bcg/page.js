"use client"
import './page.css';
import { useState, useEffect } from 'react';

export default function ButtonClickGame() {
  const [clickCount, setClickCount] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [highScore, setHighScore] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('highScore') || 0 : 0
  );
  
  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            endGame();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [gameStarted]);

  const startGame = () => {
    setClickCount(0);
    setTimeLeft(30);
    setGameStarted(true);
  };

  const incrementCount = () => {
    if (gameStarted) {
      setClickCount((prevCount) => prevCount + 1);
    } else {
      alert('Game not started!');
    }
  };

  const endGame = () => {
    setGameStarted(false);
    alert('Game Over! Your score: ' + clickCount);
    if (clickCount > highScore) {
      setHighScore(clickCount);
      if (typeof window !== 'undefined') {
        localStorage.setItem('highScore', clickCount);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHighScore(localStorage.getItem('highScore') || 0);
    }
  }, []);

  return (
    <div className="bcg-container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>ボタンクリックゲーム</h1>
      <button onClick={incrementCount} style={{ padding: '10px 20px', fontSize: '18px', marginBottom: '10px' }}>
        ボタン
      </button>
      <p>ボタン押した回数: <span>{clickCount}</span></p>
      <p>残り時間: <span>{timeLeft}</span> seconds</p>
      <button onClick={startGame} style={{ padding: '10px 20px', fontSize: '18px', marginBottom: '10px' }}>
        Start Game
      </button>
    </div>
  );
}
