export function MySquare({clickFuncao, jogadorDaVez}) {
  return <button onClick={clickFuncao} value={jogadorDaVez}></button>;
}