
export interface IPropsHeader {
  title: string;
  element?: string;
}



export const baseURL = "https://api.genshin.dev";

export function capitalizeFirstLetter(str : string) :string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
