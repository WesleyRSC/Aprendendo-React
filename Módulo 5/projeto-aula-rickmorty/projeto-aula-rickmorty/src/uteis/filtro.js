function filterByStatus(personagens, status) {
  if (status==="") {
    return personagens;
  } else {
  return personagens.filter(personagens => personagens.status === status);
  }
}
function filterByGender(personagens, genero){
  if (genero==="") {
    return personagens;
  } else {
    return personagens.filter(personagens => personagens.gender === genero);
  }
}

function getEpisodeFromURL(url) {
    const urlSplited = url.split("/");
    return urlSplited[urlSplited.length - 1];
  }
  
  function generateEpisodeList(character) {
    return character.episode.map(url => getEpisodeFromURL(url));
  }

  function mapCharacterToEpisodes(episodes, character) {
    const characterEpisodes = generateEpisodeList(character);
  
    let newEpisodes = { ...episodes };
  
    characterEpisodes.map(episode => {
      if (newEpisodes[episode]) {
        newEpisodes = {
          ...newEpisodes,
          [episode]: [...newEpisodes[episode], character]
        };
        return;
      }
      newEpisodes[episode] = [character];
    });
  
    return newEpisodes;
  }
  
  function filterByEpisode(personagens, episode) {
    const episodios = personagens.reduce((episodes, character) => {
      return mapCharacterToEpisodes(episodes, character);
    }, {});
    return episodios[episode];
  }

  function generateEpisodesCharacters(characters) {
    return characters.reduce((episodes, character) => {
      return mapCharacterToEpisodes(episodes, character);
    }, {});
  }


export { 
    filterByStatus,
    filterByGender,
    filterByEpisode,
    getEpisodeFromURL,
    generateEpisodeList,
    mapCharacterToEpisodes,
    generateEpisodesCharacters
}