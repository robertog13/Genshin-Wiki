import React, { useEffect } from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context';


const Home : React.FC = () => {

  //usando o hook personalizado do useAppContext
  const {contextValues} = useAppContext();
  const {setIsCharacter} = contextValues;

  useEffect(() => {
    setIsCharacter(false);
  }, []);

  return (
    <div>
      <Header title='Home' />
      <div>
        <h1>Sobre o Site</h1>
        <p></p>
      </div>
      <div>
      <Link to="/character"> Personagens </Link>
      <Link to="/artifacts">Artefatos</Link>

      </div>

    </div>
  )
}

export default Home;