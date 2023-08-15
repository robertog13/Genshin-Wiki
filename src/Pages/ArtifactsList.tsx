import { useEffect, useState } from "react";
import { useAppContext } from "../context";
import Header from "../components/Header";
import { baseURL } from "../utils";


export const ArtifactsList = () => {

  const {contextValues} = useAppContext();
  const {setIsCharacter, doFecthArtifactsList, isLoading, setIsLoading, artifactsList, setArtifactsList, fetchArtifactsDetail, artifactsDetails, setArtifactsDetails} = contextValues;


  useEffect(() => {
    const fecthArtifactsList = async () => {
      setIsLoading(true)
      const dataArtifacts = await doFecthArtifactsList();
      setArtifactsList(dataArtifacts);
      setIsLoading(false)
    }



    fecthArtifactsList();
    setIsCharacter(false);
  }, []);


  const filtredArtifacts: string[]= artifactsList.filter((artifact) => !["resolution-of-sojourner", "prayers-to-the-firmament", "prayers-to-springtime", "prayers-for-wisdom", "prayers-for-illumination", "prayers-for-destiny", "glacier-and-snowfield"].includes(artifact))

  const transformedArray = filtredArtifacts.map(item => {
    const words = item.split('-'); // Divide o item em palavras separadas pelo hífen
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); // Capitaliza a primeira letra de cada palavra
    return capitalizedWords.join(' '); // Junta as palavras com espaço entre elas
  });

  const [isShowing, setIsShowing] = useState(false);
  const [selectedArt, setSelectedArt] = useState('');


  console.log({selectedArt});
  
  

  return(
    <div>
      {isLoading ?
        <div>
          <p>Carregando ...</p>
        </div> 
      :
        <div>
          <Header title="Artefatos" />
          <h1>Artefatos</h1>
          {filtredArtifacts.map((artifact : string, index: number) => (
            <div key={index}>
              <img src={`${baseURL}/artifacts/${artifact}/flower-of-life.png`} alt={`${artifact}`} />
              <p>{transformedArray[index]}</p>
          
            </div>
          ))}
        </div>
      }
    </div>
  )
}