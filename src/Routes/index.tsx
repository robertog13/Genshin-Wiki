import React from "react";
import { Route, Routes } from 'react-router-dom';
import CharacterDetails from "../Pages/ChacaracterDetails";
import Home from "../Pages/Home";
import { CharacterList } from "../Pages/CharacterList";
import { ArtifactsList } from "../Pages/ArtifactsList";

const RouteFC : React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character" element={<CharacterList/>} />
      <Route path="/character/:id" element={<CharacterDetails />} />
      <Route path="/artifacts" element={<ArtifactsList/>}/>
    </Routes>
  )
}

export default RouteFC;