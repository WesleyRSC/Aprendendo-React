//Feito no https://codesandbox.io/s/new

//Exemplo useState
import React from "react";

export default function App() {
  const [name, setName] = React.useState("");

  const handleChange = e => setName(e.target.value);
  return (
    <div className="App">
      <input type="text" value={name} onChange={handleChange} />
      <h1>Hello {name}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
//---------------------------------------------------------

