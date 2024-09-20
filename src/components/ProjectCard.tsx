import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import { LuMousePointerClick } from "react-icons/lu";
import { Link } from "react-router-dom";
import { getIcons } from "../icons/IconMap";

// Définition du type des propriétés attendues pour le composant ProjectCard
type ProjectCardType = {
  title: string; // Titre du projet
  period: string; // Période pendant laquelle le projet a été réalisé
  iconNames: { name: string; size?: number; className?: string }[]; // Liste de noms d'icônes avec options pour la taille et la classe CSS
  description: string[]; // Description du projet, chaque élément est une ligne de texte
  link: string; // Lien vers la page du projet
};

/**
 * Composant ProjectCard
 *
 * Le composant `ProjectCard` est utilisé pour afficher une carte présentant les détails d'un projet.
 * Il accepte des icônes pour représenter les technologies ou outils utilisés dans le projet
 * ainsi qu'une description détaillée du projet.
 *
 * @param {ProjectCardType} props - Les propriétés passées au composant.
 * @param {string} props.title - Titre du projet à afficher en haut de la carte.
 * @param {string} props.period - Période pendant laquelle le projet a été réalisé, affichée sous le titre.
 * @param {Array<{name: string, size?: number, className?: string}>} props.iconNames - Liste de noms d'icônes avec options pour la taille et la classe CSS.
 * @param {string[]} props.description - Description du projet, sous forme de tableau de lignes de texte.
 * @param {string} props.link - Lien vers la page de détails du projet, utilisé dans le composant `Link`.
 *
 * @returns {JSX.Element} Le composant ProjectCard avec le titre, la période, les icônes et la description du projet.
 */
const ProjectCard = (props: ProjectCardType): JSX.Element => {
  // Utilisation de getIcons pour obtenir les icônes JSX avec les options fournies
  const icons = getIcons(props.iconNames);

  return (
    <div>
      <Card className="max-w-lg rounded-lg bg-ui-element-background p-8 shadow-lg">
        {/* En-tête de la carte */}
        <CardHeader>
          {/* Titre et période du projet */}
          <Heading className="flex flex-col justify-start">
            <p className="font-heading text-xl font-semibold">{props.title}</p>
            <p className="mt-2 uppercase">{props.period}</p>
          </Heading>
        </CardHeader>

        {/* Corps de la carte */}
        <CardBody className="my-4 flex flex-col justify-start">
          {/* Icônes associées au projet */}
          <div className="flex space-x-4">{icons}</div>

          {/* Description du projet */}
          <div className="mt-4">
            {props.description.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </CardBody>

        {/* Pied de page de la carte */}
        <CardFooter className="flex items-center justify-end pt-4">
          <Link
            to={`/projects/${props.link}`}
            onClick={() => {
              window.scroll(0, 0);
            }}
            className="flex space-x-4"
          >
            {/* Texte pour le bouton "en savoir plus" */}
            <p className="text-lg font-semibold uppercase text-hight-contrast-text hover:text-solid-background">
              en savoir plus
            </p>
            {/* Icône pour le bouton "en savoir plus" */}
            <LuMousePointerClick size={20} className="shrink-0" />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
