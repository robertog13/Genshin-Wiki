import React, { ReactNode } from "react";

export interface ISkillTalents {
  name: string;
  unlock: string;
  description: string;
  type: string;
}

export interface IPassiveTalent {
  name: string;
  unlock: string;
  description: string;
  level: number;
}

export interface IConstellations {
  name: string;
  unlock: string;
  description: string;
  level: number;
}

export interface ICharacterDetail {
  name: string;
  title: string;
  vision: string;
  weapon: string;
  nation: string;
  affiliation: string;
  rarity: number;
  constellation: string;
  birthday: string;
  description: string;
  skillTalents: ISkillTalents[];
  passiveTalents: IPassiveTalent[];
  constellations: IConstellations[];
  vision_key: string;
  weapon_type: string;
}

export interface IArtifactsDetail {
  max_rarity: number;
  "2-piece_bonus": string;
  "4-piece_bonus": string;
}

// Defina as tipagens para os valores no contexto
export interface ContextValues {
  characterDetail: ICharacterDetail;
  setCharacterDetail: React.Dispatch<React.SetStateAction<ICharacterDetail>>;
  characterList: Array<string>;
  setCharacterList: React.Dispatch<React.SetStateAction<Array<string>>>;
  isCharacter: boolean;
  setIsCharacter: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  artifactsList: Array<string>;
  setArtifactsList: React.Dispatch<React.SetStateAction<Array<string>>>;
  artifactsDetails: IArtifactsDetail;
  setArtifactsDetails: React.Dispatch<React.SetStateAction<IArtifactsDetail>>;

  doFetchCharacterDetail: (name: string) => Promise<ICharacterDetail>;
  doFetchCharacterList: () => Promise<void>;
  doFecthArtifactsList: () => Promise<Array<string>>;
  dofetchArtifactsDetail: (artifact: string) => Promise<IArtifactsDetail>;
  hasError: string;
}

// Crie a interface para o contexto
export interface AppContextType {
  contextValues: ContextValues;
}

//Interface para props
export interface ProviderProps {
  children: ReactNode;
}
