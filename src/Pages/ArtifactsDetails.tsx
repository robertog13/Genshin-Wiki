import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { baseURL, capitalizeFirstLetter } from "../utils";
import { useAppContext } from "../context";
import { useEffect } from "react";

export const ArtifactsDetails = () => {

  const {id} = useParams<{id: string }>();
  const artifact : string = id ?? '';
  const artifactName = capitalizeFirstLetter(artifact);

  const {contextValues} = useAppContext();
  const { dofetchArtifactsDetail, setIsLoading, isLoading, setArtifactsDetails, artifactsDetails, setIsCharacter } = contextValues;

  useEffect(() => {
    const fecthArtifactsList = async () => {
      setIsLoading(true)
      const dataArtifactsDetail = await dofetchArtifactsDetail(artifact);
      setArtifactsDetails(dataArtifactsDetail);
      setIsLoading(false)
    }



    fecthArtifactsList();
    setIsCharacter(false);
  }, []);

  console.log(artifactsDetails);
  

  return(
    <div>
      <Header title={artifactName}/>
      {isLoading ?
      <div>
        <p>Carregando ...</p>
      </div>
      :
      <div>
        <h1>{artifactName}</h1>
        <div>
          <img src={`${baseURL}/artifacts/${id}/circlet-of-logos.png`} alt="circlet-of-logos" />
          <img src={`${baseURL}/artifacts/${id}/flower-of-life.png`} alt="flower-of-life" />
          <img src={`${baseURL}/artifacts/${id}/goblet-of-eonothem.png`} alt="goblet-of-eonothem" />
          <img src={`${baseURL}/artifacts/${id}/plume-of-death.png`} alt="plume-of-death" />
          <img src={`${baseURL}/artifacts/${id}/sands-of-eon.png`} alt="sands-of-eon" />
        </div>
        <div>
          <h2>Efeitos</h2>
          <p>Raridade Máxima: {artifactsDetails.max_rarity}</p>
          <p>Bônus de 2 peças: {artifactsDetails["2-piece_bonus"]}</p>
          <p>Bônus de 4 peças: {artifactsDetails["4-piece_bonus"]}</p>
        </div>
      </div>
      }

    </div>
  )
}