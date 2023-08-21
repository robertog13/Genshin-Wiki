import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { baseURL, capitalizeFirstLetter } from "../utils";
import { useAppContext } from "../context";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { FirstSectionInfo, Galery, GaleryAtifacts, LargeImg, ParagStyled, SecondSection, SecondSectionInfo, SplashArt, ThirdSection, ThirdSectionInfo, Title } from "../style";
import { Footer } from "../components/Footer";

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
      <Header title={capName} element={characterDetail.vision.toLowerCase()} />
      {isLoading ? 
        <div>
          <Loading/>
        </div>
      : 
        <div>
          <SecondSection>
          <Galery>
           <SplashArt width={450} src={`${baseURL}/characters/${nameCharacter}/card.png`} alt={capName} />
          </Galery>
            <SecondSectionInfo>
              <Title color="gray100" aling="center" size="80px">{capName}</Title>
              <Title color="green300" size="25px" maxWidth={500}>{characterDetail.description}</Title>
              <ParagStyled color="gray100"  >
                {characterDetail.rarity} Estrelas <br />
                Visão: {characterDetail.vision} <br />
                Arma: {characterDetail.weapon} <br />
                Nação: {characterDetail.nation}
              </ParagStyled>  
            </SecondSectionInfo>
          </SecondSection>

          <ThirdSection>
            <ThirdSectionInfo>
              <Title color="green300" size="50px">Constelações</Title>
              {characterDetail.constellations.map ((constellation, index) => (
                <div key={index}>
                 <Title color="green200">{constellation.level}º:{constellation.name}</Title>
                 <ParagStyled color="green300">{constellation.description}</ParagStyled>
               </div>
            ))}
            </ThirdSectionInfo>
            <SplashArt width={700} borderradios={1000} padding={50} src={`${baseURL}/characters/${nameCharacter}/constellation.png`} />
          </ThirdSection>


            <SecondSection>
              <SecondSectionInfo>
              <Title color="gray100" size="50px">Habilidades</Title>
              <Title color="gray100" size="40px">Passivas</Title>
              {characterDetail.passiveTalents.map((passive, index) => (
                <div key={index}>
                  <Title color="green100" size="30px">{passive.name}</Title>
                  <ParagStyled color="green100">{passive.unlock}</ParagStyled>
                  <ParagStyled color="green300">{passive.description}</ParagStyled>
                </div>
              ))}
              </SecondSectionInfo>
              <GaleryAtifacts>
                <SplashArt width={200} padding={30}  src={`${baseURL}/characters/${id}/talent-passive-0.png`}/>
                <SplashArt width={200} padding={30}  src={`${baseURL}/characters/${id}/talent-passive-1.png`}/>
                <SplashArt width={200} padding={30}  src={`${baseURL}/characters/${id}/talent-passive-2.png`}/>
              </GaleryAtifacts>
              </SecondSection>
              <SecondSection>
                <SecondSectionInfo>
              <Title color="gray100" size="40px">Ativas</Title>
              {characterDetail.skillTalents.map((skill, index) => (
                <div key={index}>
                  <Title size="30px" color="green100">{skill.name}</Title>
                  <ParagStyled color="green100">{skill.unlock}</ParagStyled>
                  <ParagStyled color="green300">{skill.description}</ParagStyled>
                </div>
              ))}
              </SecondSectionInfo>
              <GaleryAtifacts>
                <SplashArt width={200} padding={30}  src={`${baseURL}/characters/${id}/talent-skill.png`}/>
                <SplashArt width={200} padding={30} src={`${baseURL}/characters/${id}/talent-burst.png`}/>
                <SplashArt width={200} padding={30} src={`${baseURL}/characters/${id}/talent-na.png`}/>
              </GaleryAtifacts>
            </SecondSection>
        
        </div>
      }
    <Footer />
    </div>
  );
}

export default CharacterDetails;