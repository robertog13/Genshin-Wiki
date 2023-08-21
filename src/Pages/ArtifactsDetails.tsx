import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { baseURL, capitalizeFirstLetter } from "../utils";
import { useAppContext } from "../context";
import { useEffect } from "react";
import Loading from "../components/Loading";
import { GaleryAtifacts, ParagStyled, SecondSection, SecondSectionInfo, SplashArt, Title } from "../style";
import { Footer } from "../components/Footer";

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
        <Loading />
      </div>
      :
      <div>
        <SecondSection width={100} height={100}>
          <SecondSectionInfo>
            <Title size="50px" color="gray100">{artifactName}</Title>
            <Title color="gray100">Efeitos</Title>
            <ParagStyled color="green300">
              Raridade Máxima: {artifactsDetails.max_rarity} <br />
              Bônus de 2 peças: {artifactsDetails["2-piece_bonus"]} <br />
              Bônus de 4 peças: {artifactsDetails["4-piece_bonus"]}
            </ParagStyled>
            <GaleryAtifacts>
              <SplashArt width={200} src={`${baseURL}/artifacts/${id}/circlet-of-logos.png`} alt="circlet-of-logos" />
              <SplashArt width={200} src={`${baseURL}/artifacts/${id}/flower-of-life.png`} alt="flower-of-life" />
              <SplashArt width={200} src={`${baseURL}/artifacts/${id}/goblet-of-eonothem.png`} alt="goblet-of-eonothem" />
              <SplashArt width={200} src={`${baseURL}/artifacts/${id}/plume-of-death.png`} alt="plume-of-death" />
              <SplashArt width={200} src={`${baseURL}/artifacts/${id}/sands-of-eon.png`} alt="sands-of-eon" />
            </GaleryAtifacts>
          </SecondSectionInfo>
        </SecondSection>
        <Footer />
      </div>
      }

    </div>
  )
}