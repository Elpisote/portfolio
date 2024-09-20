import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Parcours from "./components/Parcours";
import Presentation from "./components/Presentation";
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

/**
 * Composant qui conditionnellement affiche la barre de navigation.
 *
 * @returns {JSX.Element|null} Le composant Navbar si le chemin actuel ne commence pas par "/projects/", sinon null.
 */
const ConditionalNavbar = (): JSX.Element | null => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/projects/");

  return !hideNavbar ? <Navbar /> : null;
};

/**
 * Composant principal de l'application.
 *
 * Gère la structure de la route principale et affiche les composants
 * correspondants selon le chemin de l'URL.
 *
 * @returns {JSX.Element} Le rendu principal de l'application avec la navigation et les routes définies.
 */
function App(): JSX.Element {
  return (
    <Router>
      <div>
        <ConditionalNavbar />
        <main className="grow p-4">
          <Routes>
            {/* Page d'accueil */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Presentation />
                  <Technologies />
                  <Projects />
                  <Parcours />
                </>
              }
            />

            {/* Page des détails de projets */}
            <Route path="/projects/:link" element={<ProjectDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
