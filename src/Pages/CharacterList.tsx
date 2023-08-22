import React, { useEffect } from "react";
import { useAppContext } from "../context";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { CardSection, SplashArt, Title } from "../style";
import Loading from "../components/Loading";
import { Footer } from "../components/Footer";

export const CharacterList: React.FC = () => {
  //usando o hook personalizado do useAppContext
  const { contextValues } = useAppContext();
  const { doFetchCharacterList, characterList, setIsCharacter, isLoading } =
    contextValues;

  useEffect(() => {
    doFetchCharacterList();
    setIsCharacter(false);
  }, []);

  // @bruno coloquei o array em uma variavel pra deixar o filter mais legivel
  const removeCharacter = [
    "traveler-anemo",
    "traveler-dendro",
    "traveler-electro",
    "traveler-geo",
  ];

  const filtredCharacterList = characterList.filter(
    (character) => !removeCharacter.includes(String(character))
  );

  return (
    <div>
      <Header title="Personagens" />
      {isLoading ? (
        <Loading />
      ) : (
        <CardSection>
          <Title aling="center" color="green300" size="50px">
            Escolha um personagem
          </Title>
          {filtredCharacterList.map((character, index: number) => (
            <Link key={index} to={`/character/${character}`}>
              <SplashArt
                isClick
                borderradios={100}
                height={170}
                width={150}
                padding={10}
                transition={450}
                src={`https://api.genshin.dev/characters/${character}/icon-big.png`}
                alt={`${character} icon`}
              />
            </Link>
          ))}
        </CardSection>
      )}
      <Footer />
    </div>
  );
};
