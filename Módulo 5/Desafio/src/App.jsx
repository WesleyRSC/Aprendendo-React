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
      contatos: []
    }
  }

  componentDidMount(){
      const url= "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts"
      fetch(url)
      .then(response=> response.json())
      .then(result => {
        this.setState({
          contatos: result
        })
      })
    
  }

  render() {
    return (
      <React.Fragment>
        <Topbar/>
        <Filters/>
        <Contacts>
          {this.state.contatos.map(contato=>{
            return( 
              <Contact
                key={contato.id}
                contactAvatar={contato.avatar}
                contactName={contato.name}
                contactPhone={contato.phone}
                contactCountry={contato.country}
                contactAdmission={contato.admissionDate}
                contactCompany={contato.company}
                contactDepartament={contato.department}
              />
            )
          })}
        </Contacts>
        

        <div className="container">
          <section className="contacts">
            <article className="contact">
              <span className="contact__avatar" />
              <span className="contact__data">Nome</span>
              <span className="contact__data">Telefone</span>
              <span className="contact__data">País</span>
              <span className="contact__data">Admissão</span>
              <span className="contact__data">Empresa</span>
              <span className="contact__data">Departamento</span>
            </article>
          </section>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
