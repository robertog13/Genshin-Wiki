import { styled } from "styled-components";
import "./style.css";
import { Link } from "react-router-dom";

export const Icon = styled.img`
  width: 80px;
  padding: 2px;
  margin: 5px;
  border: 2px solid var(--gray100);
  border-radius: 100px;
`;
export const ParagStyled = styled.p`
  font-family: var(--secundaryFont);
  text-decoration: none;
  font-size: 130%;
  border-radius: 41px;
  color: ${(props) => `var(--${props.color})`};
  width: 450px;
  padding: 15px;
  border-radius: 41px;
  margin: 0 0 15px 0;
`;

export const LargeImg = styled.img`
  max-width: 900px;
  width: 45%;
  min-width: 500px;
`;

export const SplashArt = styled.img<{
  margin?: number;
  padding?: number;
  borderradios?: number;
  backColor?: string;
  border?: string;
  transition?: number;
  widthHover?: number;
  isClick?: boolean;
}>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  margin: ${(props) => `${props.margin}px`};
  padding: ${(props) => `${props.padding}px`};
  border-radius: ${(props) => `${props.borderradios}px`};
  background-color: ${(props) => `var(--${props.backColor})`};
  border: ${(props) => props.border};
  filter: drop-shadow(10px 8px 4px #041a18);
  transition: ${(props) => `${props.transition}ms`};
  &:hover {
    filter: ${({ isClick }) =>
      `drop-shadow(${isClick ? `10px -8px 4px #42ecde` : ""})`};
  }
`;

export const FirstSectionInfo = styled.div`
  background: var(--gray100);
  box-shadow: inset 0 0 200px 50px var(--gray200);
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
  align-items: center;
  padding: 20px;
`;

export const SecondSection = styled.div<{ width?: number; height?: number }>`
  width: ${(props) => `${props.width}%`};
  height: ${(props) => `${props.height}vh`};
  background-color: var(--green200);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const SecondSectionInfo = styled.div`
  align-items: center;
  padding: 20px;
`;

export const ThirdSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: var(--gray100);
  box-shadow: inset 0 0 200px 50px var(--gray200);
  align-items: center;
`;

export const ThirdSectionInfo = styled.div`
  padding: 50px;
  align-items: center;
`;

export const Galery = styled.div`
  display: flex;
  clip-path: polygon(20% 0, 100% 0%, 80% 100%, 0% 100%);
  width: fit-content;
  background-color: #42b5f8;
`;

export const GaleryAtifacts = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 10px;
`;

export const StyledHeader = styled.div`
  background-color: var(--green300);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.h1<{
  size?: string;
  aling?: string;
  maxWidth?: number;
}>`
  font-family: var(--primaryFont);
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  letter-spacing: 3px;
  max-width: ${(props) => `${props.maxWidth}px`};
`;

export const HeaderButton = styled(Link)`
  color: var(--gray100);
  padding: 5px;
  &:hover {
    color: var(--green300);
    filter: drop-shadow(0px 0px 2px #abadad);
  }
`;

export const LinkButton = styled(Link)`
  background-color: var(--gray100);
  color: var(--green300);
  text-decoration: none;
  font-family: var(--secundaryFont);
  border: solid 3px var(--green300);
  border-radius: 15px;
  padding: 8px 15px;
  margin-left: 30px;
  transition: 180ms;
  &:hover {
    background-color: var(--green300);
    color: var(--gray100);
    box-shadow: 5px 3px 10px black;
    border: solid 3px var(--gray100);
  }
`;

export const CardSection = styled.div`
  background-color: var(--gray100);
  box-shadow: inset 0 0 200px 150px var(--gray200);
  padding: 30px;
  text-align: center;
  align-items: center;
`;

export const FooterSection = styled.div`
  background-color: var(--green300);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
`;

export const FooterSubSection = styled.div`
  padding: 10px;
  width: 500px;
`;

export const ParagFooter = styled.p`
  font-family: var(--secundaryFont);
  color: var(--gray100);
  padding: 5px 0;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: var(--green100);
`;
