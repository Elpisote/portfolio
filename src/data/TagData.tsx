import { TagType } from "../types/TagType";

/**
 * Données des étiquettes (tags)
 *
 * `TagData` est un tableau d'objets représentant des étiquettes utilisées pour catégoriser ou identifier
 * différents éléments dans l'application. Chaque objet contient une étiquette (label) et une couleur
 * associée pour le style.
 *
 * @type {TagType[]} - Tableau des objets représentant les étiquettes.
 */
const TagData: TagType[] = [
  { label: "CNAM", color: "text-red-500" }, // Tag pour CNAM avec couleur rouge
  { label: "Incubateur", color: "text-green-500" },
  { label: "Personnel", color: "text-blue-500" }, // Tag pour Personnel avec couleur bleue
];

export { TagData };
