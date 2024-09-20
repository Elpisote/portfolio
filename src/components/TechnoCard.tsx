import { Card } from "@chakra-ui/react";
import { TagData } from "../data/TagData";
import { getIcons } from "../icons/IconMap";

type TechnoCardType = {
  iconNames: { name: string; size?: number; className?: string }[]; // Liste de noms d'icônes avec options pour la taille et la classe CSS
  title: string; // Titre principal de la carte
  version: string; // version
  subtitle: string; // Sous-titre affiché sous le titre
  tags: string[]; // Liste de tags
};

/**
 * Composant TechnoCard
 *
 * Le composant `TechnoCard` est utilisé pour afficher une carte personnalisée avec un titre, un sous-titre, et des tags.
 * Il accepte des enfants (`children`) pour inclure un composant d'icône ou tout autre contenu personnalisé.
 *
 * @param {TechnoCardType} props - Les propriétés passées au composant.
 * @param {Array<{name: string, size?: number, className?: string}>} props.iconNames - Liste de noms d'icônes avec options pour la taille et la classe CSS.
 * @param {string} props.title - Titre principal de la carte.
 * @param {string} props.version - Version
 * @param {string} props.subtitle - Sous-titre affiché sous le titre.
 * @param {string[]} props.tags - Liste des tags (noms seulement) associés à la carte.
 *
 * @returns {JSX.Element} Le composant CustomCard avec le titre, version, sous-titre, tags, et les enfants.
 */
const TechnoCard = (props: TechnoCardType): JSX.Element => {
  // Utilisation de getIcons pour obtenir les icônes JSX avec les options fournies
  const icons = getIcons(props.iconNames);

  // Fonction pour récupérer la couleur du tag à partir de TagData
  const getTagColor = (label: string): string => {
    const tag = TagData.find((tag: { label: string }) => tag.label === label);
    return tag ? tag.color : "text-gray-500"; // Couleur par défaut si le tag n'est pas trouvé
  };

  return (
    <div>
      <Card className="max-w-sm rounded-lg bg-ui-element-background p-8 shadow-lg">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="flex space-x-4">{icons}</div>
          {/* Title */}
          <p className="mt-6 text-xl font-semibold">{props.title}</p>

          {/* Version */}
          <p className="text-xs italic">{props.version}</p>

          {/* Subtitle */}
          <p className="mt-2">{props.subtitle}</p>

          {/* Tags */}
          <div className="mt-2 flex items-center justify-center space-x-3">
            {props.tags.map((tag, index) => (
              <p
                key={index}
                className={getTagColor(tag)} // Ajout de la couleur dynamique
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TechnoCard;
