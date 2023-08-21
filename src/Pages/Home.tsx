import React, { useEffect } from 'react'
import Header from '../components/Header';
import { useAppContext } from '../context';
import { baseURL } from '../utils';
import { FirstSectionInfo, Galery, GaleryAtifacts, LargeImg, LinkButton, ParagStyled, SecondSection, SecondSectionInfo, SplashArt, ThirdSection, ThirdSectionInfo, Title } from '../style';
import { Footer } from '../components/Footer';


const Home : React.FC = () => {

  //usando o hook personalizado do useAppContext
  const {contextValues} = useAppContext();
  const {setIsCharacter} = contextValues;

  useEffect(() => {
    setIsCharacter(false);
  }, []);

  return (
    <div>
      <Header title='Genhsin Wiki' />
      <FirstSectionInfo>
        <LargeImg src={`${baseURL}/characters/arataki-itto/gacha-splash`} alt="" />
        <div>
        <Title size='60px' color='green300'>Genshin Impact Wiki</Title>
        <ParagStyled color='green300'>Esse site utiliza da API de Genshin Impact para mostrar informações do jogo. Aqui você pode encontrar indormações sobre personagens e artefatos. O repostório dessa aplicação está ao final dessa página junto com mais informações sobre o desenvolvedor</ParagStyled>
        </div>
      </FirstSectionInfo>

      <SecondSection>
        <SecondSectionInfo>
          <Title color='gray100'>Personagens</Title>
          <ParagStyled color='gray100'>Cada persongem em Genshin Impact possui suas próprias caracteristcas e elementos. Além disso, suas hstórias são profundas o suficiente para entender a personalidade de cada um. Clique em ver mais para saber mais sobre seu personagem favorito.</ParagStyled>
          <LinkButton to="/character"> Ver mais </LinkButton>
        </SecondSectionInfo>
          <Galery>
            <SplashArt width={200} src="https://api.genshin.dev/characters/venti/gacha-card.png" alt="" />
            <SplashArt width={200} src="https://api.genshin.dev/characters/raiden/gacha-card.png" alt="" />
            <SplashArt width={200} src="https://api.genshin.dev/characters/zhongli/gacha-card.png" alt="" />
          </Galery>
      </SecondSection>

      <ThirdSection>
        <ThirdSectionInfo>
        <Title color='green300'>Artefatos</Title>
        <ParagStyled color='green300'>Em Genshin Imapct os status dos personagens são aumentados de acordo com o artefato que você equipa. Cada um deles possui um determinado efeito para a quantidade de artefatos do mesmo tipo. Esse efeitos podem ser ativados através de dois artefato do mesmo tipo ou com quatro, dando uma utilidade única do Item. Para entender melhor sobre os tipos e efeitos de cada artefato clique em saiba mais.</ParagStyled>
        <LinkButton to="/artifacts">Saiba mais</LinkButton>
        </ThirdSectionInfo>
        <GaleryAtifacts>
          <SplashArt width={250} src="https://api.genshin.dev/artifacts/instructor/flower-of-life" alt="" />
          <SplashArt width={250} src="https://api.genshin.dev/artifacts/pale-flame/flower-of-life" alt="" />
          <SplashArt width={250}  src="https://api.genshin.dev/artifacts/emblem-of-severed-fate/flower-of-life" alt="" />
        </GaleryAtifacts>
      </ThirdSection>
      <Footer />
    </div>
  )
}

export default Home;