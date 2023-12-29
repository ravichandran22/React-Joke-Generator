import Joke from "./Component/Joke";

function App() {
  return (
    <div className="App">
      <h1 style={{ 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center", 
                        fontSize: "3rem", 
                        fontWeight: "bolder", 
                    }}>Joke Generator Using React and Joke API</h1>
      <Joke />
    </div>
  );
}

export default App;
