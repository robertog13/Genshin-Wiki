import { useAppContext } from "../../context";
import { IPropsHeader, baseURL } from "../../utils";
import "./style.css"


function Header(props : IPropsHeader) {

  //usando o hook personalizado do useAppContext
  const {contextValues} = useAppContext();
  const {isCharacter} = contextValues;



  return (
    <div className="Header">
      {isCharacter ?
        <img src={`${baseURL}/elements/${props.element}/icon.png`} alt="" />
        :
        <img src={`${baseURL}/nations/mondstadt/icon.png`} alt="Mondstadt Icon" />
      }
      <h1>{props.title}</h1>
      <div>
        buttons
      </div>
    </div>
  );
}

export default Header;