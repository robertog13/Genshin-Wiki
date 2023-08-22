export enum Colors {
  yellow = "#F9F871",
  pink = "#D65DB1",
  purple = "#845EC2",
}

type ColorStype = typeof Colors;

export interface Theme {
  fontSize: Array<String>;
  colors: ColorStype;
}

export const theme: Theme = {
  fontSize: ["10px", "20px"],
  colors: Colors,
};
