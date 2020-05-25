import React from 'react';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contact from './components/Contact';
import Contacts from './components/Contacts';

import './App.scss';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      contatos: [],
      filtrados:[],
      pesquisa:''
    }
  }

  async componentDidMount(){
      const url= "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts"
      const contatosApi = await fetch(url)
      .then(response=> response.json())
      .then(result => result)
      this.setState({
        contatos:contatosApi,
        filtrados: contatosApi
      })
    
  }

  searchByName = () =>{
    let filtered = this.state.contatos.filter(contato=>
      contato.name.toLowerCase().includes(this.state.pesquisa)
    )
    this.setState({
      filtrados:filtered
    })
  }

  filterByAttribute = att=>{
    let filtered = this.state.contatos.sort((a,b)=>{
      if (a[att]<b[att]) {
        return -1
      }
      if (a[att]>b[att]) {
        return 1
      }
      return 0;
    })
    this.setState({
      filtrados:filtered
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="app" data-testid="app">
        <Topbar/>
        <Filters
          pesquisa = {this.state.pesquisa}
          handleChange={event=>{
              this.setState({
                pesquisa:event.target.value
              })
              this.searchByName();
            }
          }
          handleClick = {(att,event) =>{
            [...document.getElementsByClassName('filters__item')].forEach(element=>element.classList.remove("is-selected"));
            event.target.classList.add("is-selected");
            this.filterByAttribute(att);

            }
          }
        />
        {console.log(this.state.pesquisa)}
        <Contacts>
          {this.state.filtrados.map(contato=>{
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
}

export default App;
