import { useEffect } from "react";
import { useAppContext } from "../context";
import Header from "../components/Header";
import { baseURL } from "../utils";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { CardSection, SplashArt, Title } from "../style";
import { Footer } from "../components/Footer";

export const ArtifactsList = () => {
  const { contextValues } = useAppContext();
  const {
    setIsCharacter,
    doFecthArtifactsList,
    isLoading,
    setIsLoading,
    artifactsList,
    setArtifactsList,
  } = contextValues;

  useEffect(() => {
    const fecthArtifactsList = async () => {
      setIsLoading(true);
      const dataArtifacts = await doFecthArtifactsList();
      setArtifactsList(dataArtifacts);
      setIsLoading(false);
    };

    fecthArtifactsList();
    setIsCharacter(false);
  }, []);

  const filtredArtifacts: string[] = artifactsList.filter(
    (artifact) =>
      ![
        "resolution-of-sojourner",
        "prayers-to-the-firmament",
        "prayers-to-springtime",
        "prayers-for-wisdom",
        "prayers-for-illumination",
        "prayers-for-destiny",
        "glacier-and-snowfield",
      ].includes(artifact)
  );

  return (
    <div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <Header title="Artefatos" />
          <CardSection>
            <Title size="50px" color="green300">
              Escolha um Artefato
            </Title>
            {filtredArtifacts?.map((artifact: string, index: number) => (
              <Link key={index} to={`/artifacts/${artifact}`}>
                <SplashArt
                  isClick
                  src={`${baseURL}/artifacts/${artifact}/flower-of-life.png`}
                  alt={`${artifact}`}
                />
              </Link>
            ))}
          </CardSection>
          <Footer />
        </div>
      )}
    </div>
  );
};
