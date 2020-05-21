import React from 'react';
import { 
  render,
  fireEvent,
  waitForElement,
  getByTestId,
  findAllByText
} from '@testing-library/react';
import Data from './data/data.json'

import App from './App';

describe('App', () => {
  describe('Status', () => {
    it("Mostra Todos os personagens clicando no botão", async()=>{
      const{findAllByTestId,getAllByText} = render(<App/>);

      const button = await getAllByText("Todos");

      fireEvent.click(button[0]);
      const personagens = await findAllByTestId("personagem")

      expect(personagens.length).toBe(Data.results.length)
    })
    it('Mostra todos os personagens Vivos', async () => {
      const {findAllByText, getAllByText
      } = render(<App/>);

      const button = await getAllByText("Vivo");

      fireEvent.click(button[0]);
      const personagens = await findAllByText("Situação: Alive");

      expect(personagens.length).toBe(8);
    })
    it('Mostra todos os personagens Mortos', async () => {
      const {findAllByText, getAllByText} = render(<App/>);

      const button = await getAllByText("Morto");

      fireEvent.click(button[0]);
      const personagens = await findAllByText("Situação: Dead");

      expect(personagens.length).toBe(6);
    })
    it('Mostra todos os personagens Desconhecidos', async () => {
      const {findAllByText, getAllByText} = render(<App/>);

      const button = await getAllByText("Desconhecido");

      fireEvent.click(button[0]);
      const personagens = await findAllByText("Situação: unknown");

      expect(personagens.length).toBe(6);
    })
  })

  describe('Genero', () => {
    it("Mostra Todos os Generos clicando no botão", async()=>{
      const{findAllByTestId,getAllByText} = render(<App/>);

      const button = await getAllByText("Todos");

      fireEvent.click(button[1]);
      const personagens = await findAllByTestId("personagem")

      expect(personagens.length).toBe(Data.results.length)
    })
    it('Mostra todos os personagens Homens', async () => {
      const {findAllByText, getAllByText} = render(<App/>);

      const button = await getAllByText("Homem");

      fireEvent.click(button[0]);
      const personagens = await findAllByText("Sexo: Male");

      expect(personagens.length).toBe(15);
    })
    it('Mostra todas as personagens Mulheres', async () => {
      const {findAllByText, getAllByText} = render(<App/>);

      const button = await getAllByText("Mulher");

      fireEvent.click(button[0]);
      const personagens = await findAllByText("Sexo: Female");

      expect(personagens.length).toBe(4);
    })
    it('Mostra todos os personagens de genero Desconhecido', async () => {
      const {findAllByText, getAllByText} = render(<App/>);

      const button = await getAllByText("Desconhecido");

      fireEvent.click(button[0]);
      const personagens = await findAllByText("Sexo: unknown");

      expect(personagens.length).toBe(1);
    })
  })

  describe('Episodio', () => {
    it('Filtra os personagens do episodio 1', async () => {
      const rick = Data.results[0];
      const {findAllByTestId, findByTestId} = render(<App/>);

      const select = await findByTestId("select");
      fireEvent.change(select, { target: { value: "1"} } );

      const personagens = await findAllByTestId("personagem")

      expect(personagens.length).toBe(2);
      expect(personagens[0]).toHaveTextContent(rick.name);
      expect(personagens[0]).toHaveTextContent(ricky.status);
    })
  })  
})


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
