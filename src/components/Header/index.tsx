import { useAppContext } from "../../context";
import { HeaderButton, Icon, StyledHeader, Title } from "../../style";
import { IPropsHeader, baseURL } from "../../utils";
import { HiHome, HiUsers, HiOutlineSparkles } from "react-icons/hi";

function Header(props: IPropsHeader) {
  //usando o hook personalizado do useAppContext
  const { contextValues } = useAppContext();
  const { isCharacter } = contextValues;

  return (
    <StyledHeader>
      {isCharacter ? (
        <Icon src={`${baseURL}/elements/${props.element}/icon.png`} alt="" />
      ) : (
        <Icon
          src={`${baseURL}/nations/mondstadt/icon.png`}
          alt="Mondstadt Icon"
        />
      )}
      <Title color="gray100" size="40px">
        {props.title}
      </Title>
      <div>
        <HeaderButton to="/">
          <HiHome size={27} />
        </HeaderButton>
        <HeaderButton to="/character">
          <HiUsers size={27} />
        </HeaderButton>
        <HeaderButton to="/artifacts">
          <HiOutlineSparkles size={27} />
        </HeaderButton>
      </div>
    </StyledHeader>
  );
}

export default Header;
