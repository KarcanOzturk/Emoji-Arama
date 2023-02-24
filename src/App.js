import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import EmojiData from "./emoji.json";
function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = EmojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);
  return (
    <div className="App">
      <center>
        <h1>😺Emoji Searching App😸</h1>
        <input
          size="30"
          type="text"
          value={search}
          placeholder="Search Emoji"
          onChange={(e) => setSearch(e.target.value)}
        />
      </center>
      {data.map((emoji) => (
        <div className="card" key={emoji.title}>
          <div
            className="card-body"
            onClick={() => {
              navigator.clipboard.writeText(emoji.symbol);
              alert("Emoji Copy");
            }}
          >
            <span>
              {emoji.symbol} {emoji.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
