import "./App.css";

function dailyReflectionButton() {
  alert("You clicked daily reflection!");
}

function gratitudeJournalButton() {
  alert("You clicked gratitude journal!");
}

function goalSettingButton() {
  alert("You clicked goal setting!");
}

function creativeWritingButton() {
  alert("You clicked creative writing!");
}

function freeFormButton() {
  alert("You clicked free form!");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="my-journal">
          <h2>My Journal</h2>
        </div>
        <div className="sidenav">
          <button
            onClick={dailyReflectionButton}
            className="w-[200px] px-4 py-2 mb-2 text-left rounded-lg bg-blue-300 text-white hover:bg-blue-500 transition"
          >
            Daily Reflection
          </button>

          <br></br>
          <button onClick={gratitudeJournalButton}
          className="w-[200px] px-4 py-2 mb-2 text-left rounded-lg bg-blue-300 text-white hover:bg-blue-500 transition"
          >Gratitude Journal</button>
          <br></br>
          <button onClick={goalSettingButton}
          className="w-[200px] px-4 py-2 mb-2 text-left rounded-lg bg-blue-300 text-white hover:bg-blue-500 transition"
          >Goal Setting</button>
          <br></br>
          <button onClick={creativeWritingButton}
          className="w-[200px] px-4 py-2 mb-2 text-left rounded-lg bg-blue-300 text-white hover:bg-blue-500 transition"
          >Creative Writing</button>
          <br></br>
          <button onClick={freeFormButton}
          className="w-[200px] px-4 py-2 mb-2 text-left rounded-lg bg-blue-300 text-white hover:bg-blue-500 transition"
          >Free Form</button>
        </div>
        <div class="main-page">
          <h3 className="text-lg font-medium">Select a Template</h3>
          <p className="text-muted-foreground">
            Choose a journaling template from the sidebar to begin writing
          </p>
        </div>
        <div class="topnav">
          <h3>Date</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
