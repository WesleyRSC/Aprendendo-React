import React from "react";

//Importando o useInput que é o custom hook
import { useInput } from "./hooks/useInput";

export default function App() {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");

  return (
    <div className="App">
      <form>
        <div>
          <input type="text" value={name} onChange={setName} />
        </div>
        <div>
          <input type="email" value={email} onChange={setEmail} />
        </div>
      </form>

      <ul>
        <li>Name: {name}</li>
        <li>Email: {email} </li>
      </ul>
    </div>
  );
}


//---------Arquivo do customHooks-----
//Toda a lógica do useInput é definida desse arquivo

//import { useState } from "react";

// export function useInput(initialState) {
//     const [value, setValue] = useState(initialState);
  
//     function handleChangeValue(event) {
//       setValue(event.target.value);
//     }
  
//     return [value, handleChangeValue];
//   }
  