import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Meme from "./components/Meme";
import MemeProvider from "./context/MemeContext";

import OwnMeme from "./pages/OwnMeme";

export default function App() {
  return (
    <MemeProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <Navbar />
          <Meme />
          <main className="flex-grow w-full mx-auto">
            <Routes>
              <Route path="/" element={<OwnMeme/>} />
            </Routes>
          </main>
        </div>
      </Router>
    </MemeProvider>
  );
}
