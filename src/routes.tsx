import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";

const AppRoutes = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
