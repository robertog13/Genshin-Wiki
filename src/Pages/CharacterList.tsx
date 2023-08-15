import React, { useEffect } from 'react'
import { useAppContext } from '../context';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


export const CharacterList : React.FC = () => {

  //usando o hook personalizado do useAppContext
  const {contextValues} = useAppContext();
  const {doFetchCharacterList, characterList,setCharacterList, setIsCharacter} = contextValues;

  useEffect(() => {
    const fetchCharacterList = async () => {
      const characaterData = await doFetchCharacterList();
      setCharacterList(characaterData);
    }
    fetchCharacterList();
    setIsCharacter(false)
  }, []);


  const filtredCharacterList = characterList.filter((character) => !["traveler-anemo", "traveler-dendro", "traveler-electro", "traveler-geo"].includes(character))
  

  return (
    <>
    <Header title='Personagens' />
      {filtredCharacterList.map((character : string, index: number) => (
        <Link key={index} to={`/character/${character}`} >
          <img  src={`https://api.genshin.dev/characters/${character}/icon-big.png`} alt={`${character} icon`} />
        </Link>
      ))}


    </>
  )
}
