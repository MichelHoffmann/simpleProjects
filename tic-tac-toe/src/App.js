import { useState } from "react";
import "./App.css";
import "./Components/Square";
import { MySquare } from "./Components/Square";

function App() {
  const [jogadorDaVez, setJogadorDaVez] = useState("X");

  function btClick() {
    const valorJogador = jogadorDaVez;

    if (jogadorDaVez === "X") {
      return setJogadorDaVez("O");
    }
    return setJogadorDaVez("X");
  }

  return (
    <div className="App">
      <MySquare clickFuncao={btClick} />
      <MySquare clickFuncao={btClick} />
      <MySquare clickFuncao={btClick} />
      <MySquare clickFuncao={btClick} />
      <MySquare clickFuncao={btClick} />
      <MySquare clickFuncao={btClick} />
      <MySquare clickFuncao={btClick} />
      <MySquare clickFuncao={btClick} />
      <MySquare clickFuncao={btClick} />
    </div>
  );
}

export default App;
