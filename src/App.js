import "./App.css";
import { useState } from "react";

function App() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);

  const handleSave = () => {
    if (entry.trim() === "") return;
    setEntries([...entries, entry]);
    setEntry("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Daily Reflection</h1>
        <p>How are you feeling today?</p>
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write your reflection here..."
          className="w-full p-3 border rounded-xl mb-4"
          rows="4"
        />
        <button
          onClick={handleSave}
        >
          Save Entry
        </button>
        <div>
          <h5>Saved Entries</h5>
          <ul>
            {entries.map((savedEntry, index) => (
              <li key={index}>
                {savedEntry}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
