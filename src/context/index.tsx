import React, { useContext, useState } from "react";
import { baseURL } from "../utils";
import {
  AppContextType,
  ContextValues,
  IArtifactsDetail,
  ICharacterDetail,
  ProviderProps,
} from "./index.types";

export const Context = React.createContext<AppContextType | undefined>(
  undefined
);

// Crie um hook customizado para usar o contexto

export const useAppContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um Provider");
  }
  return context;
};

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [characterList, setCharacterList] = useState<Array<string>>([]);
  const [characterDetail, setCharacterDetail] = useState<ICharacterDetail>(
    {} as ICharacterDetail
  );
  const [hasError, setHasError] = useState("");
  const [isCharacter, setIsCharacter] = useState(false);
  const [artifactsList, setArtifactsList] = useState<Array<string>>([]);
  const [artifactsDetails, setArtifactsDetails] = useState<IArtifactsDetail>(
    {} as IArtifactsDetail
  );

  //funções para resgatar e armazenar os dados das APIS
  // só adicionei os set dos estados aqui pra desestruturar do context
  const doFetchCharacterList = async () => {
    try {
      setIsLoading(true);
      const charactersEndpoint = `${baseURL}/characters`;
      const response = await fetch(charactersEndpoint);
      const data = (await response.json()) as Array<string>;
      setCharacterList(data);
      setIsLoading(false);
    } catch (error) {
      setHasError("Serviço indisponível");
    }
  };

  const doFetchCharacterDetail = async (name: string) => {
    const detailEndpoint = `${baseURL}/characters/${name}`;
    const response = await fetch(detailEndpoint);
    const data = (await response.json()) as ICharacterDetail;
    return data;
  };

  const doFecthArtifactsList = async () => {
    const artifactsEndpoint = `${baseURL}/artifacts`;
    const response = await fetch(artifactsEndpoint);
    const data = (await response.json()) as string[];
    return data;
  };

  const dofetchArtifactsDetail = async (artifact: string) => {
    const detailEndpoint = `${baseURL}/artifacts/${artifact}`;
    const response = await fetch(detailEndpoint);
    const data = (await response.json()) as IArtifactsDetail;
    return data;
  };

  //valores do contexto
  const contextValues: ContextValues = {
    isLoading,
    setIsLoading,
    isCharacter,
    setIsCharacter,
    characterDetail,
    setCharacterDetail,
    characterList,
    setCharacterList,
    artifactsList,
    setArtifactsList,
    artifactsDetails,
    setArtifactsDetails,
    hasError,
    doFetchCharacterList,
    doFetchCharacterDetail,
    doFecthArtifactsList,
    dofetchArtifactsDetail,
  };
  return (
    <Context.Provider value={{ contextValues }}>{children}</Context.Provider>
  );
};
