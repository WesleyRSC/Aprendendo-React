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
  const [isFiltred,setFiltred]=React.useState(false)


  React.useEffect(()=>{
    const url = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts"
    fetch(url)
    .then(response=> response.json())
    .then(result => {
      setContatos(result);
    });
  },[]);


  const searchByName = () =>{
    if (pesquisa.length>0) {
      setFiltred(true);
      setFiltrados( contatos.filter(contato=>
        contato.name.toLowerCase().includes(pesquisa)
      ));
    }
    else
      setFiltred(false);    
  }

  const filterByAttribute = att=>{
    console.log(att);
    const filtered = contatos.sort((a,b)=>{
      if (a[att]<b[att]) {
        return -1
      }
       else if (a[att]>b[att]) {
        return 1
      }else
        return 0;
    })
    setFiltrados(filtered);    
  }

  const handleChange = event=>{
    event.preventDefault();
    setPesquisa(event.target.value);
    searchByName();
  }

  const handleClick = (att,event) =>{
    [...document.getElementsByClassName('filters__item')].forEach(element=>element.classList.remove("is-selected"));
    event.target.classList.add("is-selected");
    filterByAttribute(att);
    setFiltred(true);
    }


    let outputContacts;

    if (isFiltred) {
      outputContacts= filtrados.map(contato=>{
        return <Contact key={contato.id} data={contato}/>
      });
    }else
      outputContacts=contatos.map(contato=>{
        return <Contact key={contato.id} data={contato}/>
      });

  return (
    <React.Fragment>
      <div className="app" data-testid="app">
        <Topbar/>
        <Filters
          pesquisa = {pesquisa}
          handleChange={handleChange}
        handleClick = {handleClick}
        />
        {console.log(pesquisa)}
        <Contacts>{outputContacts}</Contacts>
      </div>
    </React.Fragment>
  )
}


export default App;