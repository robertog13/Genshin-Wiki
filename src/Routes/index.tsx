import { Route, Routes } from "react-router-dom";
import CharacterDetails from "../Pages/ChacaracterDetails";
import Home from "../Pages/Home";
import { CharacterList } from "../Pages/CharacterList";
import { ArtifactsList } from "../Pages/ArtifactsList";
import { ArtifactsDetails } from "../Pages/ArtifactsDetails";

const RouteFC = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/character" element={<CharacterList />} />
      <Route path="/character/:id" element={<CharacterDetails />} />
      <Route path="/artifacts" element={<ArtifactsList />} />
      <Route path="/artifacts/:id" element={<ArtifactsDetails />} />
    </Routes>
  );
};

export default RouteFC;
