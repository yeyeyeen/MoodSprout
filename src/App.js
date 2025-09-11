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
        <div class="sidenav">
          <button onClick={dailyReflectionButton}>Daily Reflection</button>
          <br></br>
          <button onClick={gratitudeJournalButton}>Gratitude Journal</button>
          <br></br>
          <button onClick={goalSettingButton}>Goal Setting</button>
          <br></br>
          <button onClick={creativeWritingButton}>Creative Writing</button>
          <br></br>
          <button onClick={freeFormButton}>Free Form</button>
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
        <div class="calendar">
          <h3>Calendar</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
