import PageNavbar from "./pages/pageNavbar";
import About from "./pages/AboutMe/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import Home from "./pages/HomePage";

function App() {
  return (
    <Fullpage>
      <BrowserRouter>
        <FullpageNavigation className="cursor-pointer" />
        <PageNavbar />
        <FullPageSections>
          <FullpageSection>
            <Home className="h-screen" />
          </FullpageSection>
          <FullpageSection>
            <About className="h-screen" />
          </FullpageSection>
        </FullPageSections>
        <Routes>
          <Route path="/Home" />
          <Route path="/About" />
          <Route path="/Contack" />
          <Route path="/Projects" />
          <Route path="/*" />
        </Routes>
      </BrowserRouter>
    </Fullpage>
  );
}

export default App;
