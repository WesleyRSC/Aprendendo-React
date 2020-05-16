import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody
} from './components/Card';
import Label from './components/Label';
import FormGroup from './components/FormGroup';
import Select from './components/Select';
import Container from './components/Container';
import Data from './data/data.json'; 
import Loading from './components/Loading';
import {
  filterByStatus,
  filterByGender,
  filterByEpisode,
  getEpisodeFromURL,
  generateEpisodeList,
  mapCharacterToEpisodes,
  generateEpisodesCharacters
} from './uteis/filtro' 


// Criando o componente Button


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      nome:'React',
      personagens: [],
      loading:false
    }
    console.log(`Constructor`);
  }

  componentDidMount(){
    console.log('Console Did Mount');
    this.setState({loading:true})

    // Interação com a API
    setTimeout(() => {
      this.setState({
        personagens: Data.results,
        loading:false
      })
    }, 2000);

  }

  componentDidUpdate(){
    console.log('Did Update');
  }

  handleClickStatus(evento, status){
    evento.preventDefault();

    const newPersonagens= filterByStatus(Data.results,status);
    this.setState({
      personagens:newPersonagens
    })
  }

  handleClickGender(evento,gender){
    evento.preventDefault();

    const newPersonagens = filterByGender(Data.results, gender);
    this.setState({
      personagens: newPersonagens
    })
  }

  handleChange (episodio){
    console.log(episodio);

    const episodios= generateEpisodesCharacters(Data.results);
    this.setState({
      personagens:episodios[episodio]
    })

  }

  render(){
    console.log(`Render ${this.state.nome}`);

    return (
      <Container>
        <FormGroup>  
          {/* Chamando o componente criado */}
          <Label label="Status: "/>
          <div>
            <Button 
              name="Todos" 
              handleClick={evento => this.handleClickStatus(evento,'')}
            />
            <Button 
              name="Vivo" 
              handleClick={evento => this.handleClickStatus(evento,'Alive')}
            />
            <Button 
              name="Morto" 
              handleClick={evento => this.handleClickStatus(evento,'Dead')}
            />
            <Button 
              name="Desconhecido" 
              handleClick={evento => this.handleClickStatus(evento,'unknown')}
            />
          </div>
        </FormGroup>

        <FormGroup>
          <Label label="Sexo:"/>
          <div>
          <Button 
              name="Todos" 
              handleClick={evento => this.handleClickGender(evento,'')}
            />
            <Button 
              name="Homem" 
              handleClick={evento => this.handleClickGender(evento,'Male')}
            />
            <Button 
              name="Mulher" 
              handleClick={evento => this.handleClickGender(evento,'Female')}
            />
            <Button 
              name="Desconhecido" 
              handleClick={evento => this.handleClickGender(evento,'unknown')}
            />
          </div>          
        </FormGroup>
        <FormGroup>
          <Label label="Episódio: "/>
          <Select 
            options={[1,2,3,4,5,6,7,8,9,10,11,12,13]}
            handleChange={(value)=>this.handleChange(value)}
          />
        </FormGroup>

        {/* Loading */}
        {this.state.loading? <Loading/> : null }

        <section>
          {this.state.personagens.map(personagem=>{
            return (
              <Card key={personagem.id}>
              <CardImg
                image={personagem.image}
                alt={personagem.name}
              />
              <CardBody>
                <CardTitle title={personagem.name}/>
                <CardText text={`Situação: ${personagem.status}`}/>
                <CardText text={`Sexo: ${personagem.gender}`}/>
              </CardBody>
            </Card>
            )
          })}
        </section>
      </Container>
    );
  }
}

export default App;
