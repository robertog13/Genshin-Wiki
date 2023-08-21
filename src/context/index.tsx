import React, { ReactNode, useContext, useState } from "react";
import { baseURL } from "../utils";



export interface ISkillTalents {
  name: string;
  unlock: string;
  description: string;
  type: string;
}

export interface IPassiveTalent {
  name: string,
  unlock: string,
  description: string,
  level: number,
}

export interface IConstellations {
  name: string,
  unlock: string,
  description: string,
  level: number,
}

export interface ICharacterDetail  {
  name: string,
  title: string,
  vision: string,
  weapon: string,
  nation: string,
  affiliation: string,
  rarity: number,
  constellation: string,
  birthday: string,
  description: string,
  skillTalents: ISkillTalents[],
  passiveTalents:IPassiveTalent[],
  constellations:IConstellations[],
  vision_key: string,
  weapon_type: string, 
}

export interface IArtifactsDetail { 
  max_rarity: number,
  "2-piece_bonus": string,
  "4-piece_bonus": string,
}


// Defina as tipagens para os valores no contexto
interface ContextValues {
  characterDetail: ICharacterDetail ;
  setCharacterDetail: React.Dispatch<React.SetStateAction<ICharacterDetail>>,
  characterList: Array<string>[];
  setCharacterList: React.Dispatch<React.SetStateAction<Array<string>>>;
  isCharacter: boolean,
  setIsCharacter: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  artifactsList: Array<string>,
  setArtifactsList: React.Dispatch<React.SetStateAction<Array<string>>>,
  artifactsDetails: IArtifactsDetail;
  setArtifactsDetails: React.Dispatch<React.SetStateAction<IArtifactsDetail>>
  
  doFetchCharacterDetail: (name : string) => Promise<ICharacterDetail>;
  doFetchCharacterList: () => Promise<Array<string>>;
  doFecthArtifactsList: () => Promise<Array<string>>;
  dofetchArtifactsDetail: (artifact: string ) => Promise<IArtifactsDetail>;
  
}

// Crie a interface para o contexto
interface AppContextType {
  contextValues: ContextValues;
}

//Interface para props
interface ProviderProps {
  children: ReactNode;
}


export const Context = React.createContext<AppContextType | undefined> (undefined);

// Crie um hook customizado para usar o contexto

export const useAppContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um Provider");
  }
  return context;
};


export const Provider: React.FC<ProviderProps> = ({children}) => {

  //setStates
  const [isLoading, setIsLoading] = useState(true);
  const [characterList, setCharacterList] = useState<Array<string>>([]);
  const [characterDetail, setCharacterDetail] = useState<ICharacterDetail>({
    name: '',
    title: '',
    vision: '',
    weapon: '',
    nation: '',
    affiliation: '',
    rarity: 0,
    constellation: '',
    birthday: '',
    description: '',
    skillTalents: [],
    passiveTalents: [],
    constellations: [],
    vision_key: '',
    weapon_type: '', 
  });
  const [isCharacter, setIsCharacter] = useState(false);
  const [artifactsList, setArtifactsList] = useState<Array<string>>([]);
  const [artifactsDetails, setArtifactsDetails] = useState<IArtifactsDetail>({
    max_rarity: 0,
    "2-piece_bonus": '',
    "4-piece_bonus": '',
  });
 

  //funções para resgatar e armazenar os dados das APIS
  
  const doFetchCharacterList = async () => {
    const charactersEndpoint = `${baseURL}/characters`;
    const response = await fetch(charactersEndpoint);
    const data  = await response.json() as Array<string>;
    return data;
  }

  const doFetchCharacterDetail = async (name : string) => {

   const detailEndpoint = `${baseURL}/characters/${name}`;
   const response = await fetch(detailEndpoint);
   const data = await response.json() as ICharacterDetail;
   return data;
  }

  const doFecthArtifactsList = async () => {
    const artifactsEndpoint = `${baseURL}/artifacts`;
    const response = await fetch(artifactsEndpoint);
    const data = await response.json() as string[];
    return data;
  }

  const dofetchArtifactsDetail = async (artifact : string) => {
    const detailEndpoint = `${baseURL}/artifacts/${artifact}`;
    const response = await fetch(detailEndpoint);
    const data = await response.json() as IArtifactsDetail;
    return data;
  }





  //valores do contexto
  const contextValues : ContextValues = {
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

    doFetchCharacterList,
    doFetchCharacterDetail,
    doFecthArtifactsList,
    dofetchArtifactsDetail,
  }
  return (
    <Context.Provider value={{ contextValues }}>
      {children}
    </Context.Provider>
  )
}