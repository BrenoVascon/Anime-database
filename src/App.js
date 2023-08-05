import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeItem from "./components/Animeitem";
import Homepage from "./components/Homepage";
import Gallery from "./components/gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
        <Route path="/character/:id" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
