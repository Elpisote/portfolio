import TechnoData from "../data/TechnoData";
import Section from "./Section";
import TechnoCard from "./TechnoCard";

/**
 * Composant Technologies
 *
 * Le composant `Technologies` affiche une liste de cartes représentant diverses technologies avec leurs versions, sous-titres, et tags associés.
 * Il utilise le composant `TechnoCard` pour présenter chaque technologie de manière visuelle.
 *
 * @returns {JSX.Element} La section contenant les cartes de technologies.
 */
const Technologies = (): JSX.Element => {
  return (
    <Section id="technologies">
      {/* Titre de la section des technologies */}
      <h1 className="custom-underline mb-10">Technologies</h1>

      {/* Conteneur pour les cartes de technologie */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {TechnoData.map((techno) => (
          <TechnoCard
            key={techno.id}
            title={techno.title}
            subtitle={techno.subtitle}
            version={techno.version}
            iconNames={techno.iconNames}
            tags={techno.tag}
          />
        ))}
      </div>
    </Section>
  );
};

export default Technologies;
