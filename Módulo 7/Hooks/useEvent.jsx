//Exemplo useEvent
//Feito no https://codesandbox.io/s/new

import React from "react";

const api = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["User 1", "User 2"]);
    }, 2000);
  });
};

function Loading() {
    //Dentro do componente Loading
  React.useEffect(() => {
      //Component Did mount
    console.log("Loading...");

    return () => {
        //Component Will Unmount 
      console.log("Loading OK");
    };
  });

  return <h1>Loading ...</h1>;
}

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [name, setName] = React.useState("CodeSandbox");

  const handleChange = event => setName(event.target.value);

  React.useEffect(() => {
    api().then(response => {
      setUsers(response);
      setLoading(false);
    });
  }, []);

  //Dentro do componente App
  //Só vai acontecer quando o componente [name] for alterado
  React.useEffect(() => {
    if (name === "React") {
        //Component Update
      console.log("change");
    }
  }, [name]);



  return (
    <div className="App">
      {loading && <Loading />}

      <ul>
        {users.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>

      <div className="App">
        <div>
          <input type="text" value={name} onChange={handleChange} />
        </div>
        <h1>Hello {name}</h1>
      </div>
    </div>
  );
}

// export default class App extends React.Component {
//   constructor(props) {
//     console.log('constructor')
//     super(props);

//     this.state = {
//       users: [],
//       loading: true
//     };
//   }

//   componentDidMount() {
//     console.log('didMount')
//     api().then(response => {
//       this.setState({
//         users: response,
//         loading: false
//       });
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Com class</h1>
//         {this.state.loading && "...loading"}

//         <ul>
//           {this.state.users.map(user => (
//             <li key={user}>{user}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
