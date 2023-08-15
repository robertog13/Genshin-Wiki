import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { baseURL, capitalizeFirstLetter } from "../utils";
import { useAppContext } from "../context";
import Header from "../components/Header";

const CharacterDetails : React.FC = () => {


  const {id} = useParams<{id: string }>();
  const nameCharacter : string = id ?? '';
  const capName : string  = capitalizeFirstLetter(nameCharacter)


  
    //usando o hook personalizado do useAppContext
    const {contextValues} = useAppContext();
    const {doFetchCharacterDetail, setCharacterDetail, characterDetail, setIsCharacter, setIsLoading, isLoading} = contextValues;


  useEffect(() => {
    const doUse = async () => {
      setIsLoading(true);
      setIsCharacter(true);
      const dataCharacater = await doFetchCharacterDetail(nameCharacter);
      setCharacterDetail(dataCharacater);
      setIsLoading(false);
    }
    doUse();
  }, []);


  return (
    <div>
      {isLoading ? 
        <div>
          <p>Carregando ...</p>
        </div>
      : 
        <div>
          <Header title={capName} element={characterDetail.vision.toLowerCase()} />

          <h2>{characterDetail.description}</h2>
          <img src={`${baseURL}/characters/${nameCharacter}/card.png`} alt={capName} />
          <h2>Informações do Personagem</h2>
          <p>{characterDetail.rarity} Estrelas </p>
          <p>Visão: {characterDetail.vision}</p>
          <p>Arma: {characterDetail.weapon}</p>
          <p>Nação: {characterDetail.nation}</p>
          <h2>Constelações</h2>
          <img src={`${baseURL}/characters/${nameCharacter}/constellation.png`} />
          {characterDetail.constellations.map((constellation, index) => (
            <div key={index}>
              <h3>{constellation.level}º:{constellation.name}</h3>
              <p>{constellation.description}</p>
            </div>
          ))}
          <h2>Habilidaes</h2>
          <h3>Passivas</h3>
          {characterDetail.passiveTalents.map((passive, index) => (
            <div key={index}>
              <h4>{passive.name}</h4>
              <p>{passive.unlock}</p>
              <p>{passive.description}</p>
            </div>
          ))}
          <h3>Skils</h3>
          {characterDetail.skillTalents.map((skill, index) => (
            <div key={index}>
              <h4>{skill.name}</h4>
              <p>{skill.unlock}</p>
              <p>{skill.description}</p>
            </div>
          ))}
  
        </div>
      }

    </div>
  );
}

export default CharacterDetails;