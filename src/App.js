import { Route, Routes } from "react-router-dom";
import AnimeInfo from "./components/AnimeInfo";
import MainDiv from "./components/MainDiv";
import Navbar from "./components/Navbar";

function App() {


  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<MainDiv />} />
          <Route exact path="/:id" element={<AnimeInfo />} />
        </Routes>
      </main>

    </>
  );
}

export default App;
