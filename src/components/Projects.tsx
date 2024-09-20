import ProjectData from "../data/ProjectData";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

/**
 * Composant Projects
 *
 * Le composant `Projects` est utilisé pour afficher une section de projets sur une page.
 * Il inclut des cartes pour différents projets, chacune décrite à l'aide du composant `ProjectCard`.
 *
 * @returns {JSX.Element} La section contenant les cartes de projet.
 */
const Projects = (): JSX.Element => {
  return (
    <Section id="projects">
      {/* Titre de la section des projets */}
      <h1 className="custom-underline mb-10">Projets</h1>

      {/* Conteneur pour les cartes de projet */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {ProjectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            period={project.period}
            iconNames={project.iconNames}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
