// function fruit(name) {
//   alert(name);
// }

function FunctionCall() {
  const callFun = () => {
    alert("Function call");
  };

  function fruit(name) {
    alert(name);
  }

  return (
    <div>
      <h1>Event and Function call</h1>
      <button onClick={callFun}>Click Me</button>
      <button onClick={() => fruit("Apple")}>Apple</button>
      <button onClick={() => fruit("Banana")}>Banana</button>
    </div>
  );
}
export default FunctionCall;
