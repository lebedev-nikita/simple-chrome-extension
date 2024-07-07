import { useState } from "react";
import "./App.css";

export default function App() {
  const [color, setColor] = useState("#FFFFFF");

  const onClick = async () => {
    const [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: (color) => {
        document.body.style.backgroundColor = color;
      },
      args: [color],
    });
  };

  return (
    <>
      <h1>Vite + React</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <div className="card">
        <button onClick={onClick}>Change Background Color</button>
      </div>
    </>
  );
}
