import React from 'react';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contact from './components/Contact';
import Contacts from './components/Contacts';

import './App.scss';

function App (){

  const [contatos,setContatos] = React.useState([]);
  const [filtrados,setFiltrados] = React.useState([]);
  const [pesquisa,setPesquisa] =React.useState('');


  React.useEffect(()=>{
    const url = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts"
    fetch(url)
    .then(response=> response.json())
    .then(result => {
      setContatos(result);
      setFiltrados(result);
    });
  },[])
      

   const searchByName = () =>{
    let filtered = contatos.filter(contato=>
      contato.name.toLowerCase().includes(pesquisa)
    )
    setFiltrados(filtered);
  }

   const filterByAttribute = att=>{
     console.log(att);
    let filtered = contatos.sort((a,b)=>{
      if (a[att]<b[att]) {
        return -1
      }
      if (a[att]>b[att]) {
        return 1
      }
      return 0;
    })
    setFiltrados(filtered);
  }

  return (
    <React.Fragment>
      <div className="app" data-testid="app">
      <Topbar/>
      <Filters
        pesquisa = {pesquisa}
        handleChange={event=>{
            event.preventDefault();
            setPesquisa(event.target.value);
            searchByName();
          }
        }
        handleClick = {(att,event) =>{
          [...document.getElementsByClassName('filters__item')].forEach(element=>element.classList.remove("is-selected"));
          event.target.classList.add("is-selected");
          filterByAttribute(att);
          }
        }
      />
      {console.log(pesquisa)}
      <Contacts>
        {filtrados.map(contato=>{
          return( 
            <Contact
              key={contato.id}
              data={contato}
            />
          )
        })}
      </Contacts>
      </div>
    </React.Fragment>
  )
}


export default App;
