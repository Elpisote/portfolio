import { FaArrowLeft } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { RiComputerLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import ProjectData from "../data/ProjectData";
import { getIcons } from "../icons/IconMap";
import Section from "./Section";

/**
 * Composant ProjectDetails
 *
 * Ce composant affiche les détails d'un projet spécifique sélectionné à partir de la liste.
 * Il permet aux utilisateurs de visualiser des informations détaillées sur un projet,
 * y compris le titre, la période, la description, les statistiques, les icônes et les retours d'expérience.
 *
 * @returns {JSX.Element} La page de détails du projet.
 */
const ProjectDetails = (): JSX.Element => {
  // Récupère l'identifiant du projet depuis l'URL
  const { link } = useParams<{ link: string }>();

  // Trouve le projet correspondant dans ProjectData
  const project = ProjectData.find((p) => p.link === link);

  // Si le projet n'existe pas, retourne un message d'erreur
  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <Section>
      {/* Lien pour revenir au portfolio */}
      <Link
        to="/"
        className="flex items-center space-x-2 text-lg text-hight-contrast-text"
      >
        <FaArrowLeft size={20} />
        <p>voir le portfolio</p>
      </Link>

      {/* Titre et période du projet */}
      <h2 className="mt-8 font-heading text-5xl">{project.title}</h2>
      <p className="mb-12 mt-4 font-heading text-2xl">{project.period}</p>

      {/* Description du projet */}
      <p className="text-lg">{project.description}</p>

      {/* Section pour afficher des statistiques si le projet appartient à un groupe */}
      {project.group && (
        <Section paddingX="px-0">
          <h1 className="custom-underline mb-10">Quelques chiffres</h1>
          <div className="flex items-center">
            <div className="m-auto flex flex-col justify-evenly gap-y-16 text-center sm:w-full sm:flex-row lg:justify-center lg:gap-x-32">
              {/* Statistiques sur l'équipe */}
              <div className="flex w-48 flex-col items-center">
                <GrGroup size={65} />
                <p className="my-3 text-5xl font-semibold">9</p>
                <p className="uppercase">Personnes dans l'équipe</p>
              </div>
              {/* Statistiques sur les développeurs */}
              <div className="flex w-48 flex-col items-center">
                <RiComputerLine size={65} />
                <p className="my-3 text-5xl font-semibold">6</p>
                <p className="uppercase">développeurs</p>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Section pour les technologies utilisées dans le projet */}
      <Section paddingX="px-0">
        <h1 className="custom-underline mb-10">En pratique</h1>
        <div className="mb-4 flex flex-wrap gap-4">
          {project.iconNames.map((icon, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 rounded-lg bg-ui-element-background p-2 px-3"
            >
              {getIcons([{ name: icon.name, size: 20 }])[0]}{" "}
              {/* Affiche l'icône */}
              <p className="capitalize">{icon.name}</p>{" "}
              {/* Affiche le nom de l'icône */}
            </div>
          ))}
        </div>

        {/* Affichage des pratiques du projet */}
        <div className="mt-6">
          {project.pratique.map((item, index) => (
            <p key={index} className="mb-4">
              {item}
            </p>
          ))}
        </div>
      </Section>

      {/* Section pour afficher des visuels si ce n'est pas le portfolio */}
      {project.link !== "portfolio" && (
        <Section paddingX="px-0">
          <h1 className="custom-underline mb-10">Visuels</h1>
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            {project.images?.map((image, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={image}
                  alt={project.labelImage?.[index] || `Visuel ${index + 1}`} // Utilise labelImage s'il est défini, sinon texte par défaut
                  className="max-h-72 w-full  rounded-lg object-contain"
                />
                <p className="mt-2 text-center text-lg">
                  {project.labelImage?.[index] || `Description non disponible`}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Section pour le retour d'expérience sur le projet */}
      <Section paddingX="px-0">
        <h1 className="custom-underline mb-10">Retour d'expérience</h1>
        <div>
          {project.retour.map((item, index) => (
            <p key={index} className="mb-4">
              {item}
            </p>
          ))}
        </div>
      </Section>
    </Section>
  );
};

export default ProjectDetails;
