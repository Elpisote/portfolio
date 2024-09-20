/**
 * Données des étiquettes (tags)
 *
 * `TagData` est un tableau d'objets représentant des étiquettes utilisées pour catégoriser ou identifier
 * différents éléments dans l'application. Chaque objet contient une étiquette (label) et une couleur
 * associée pour le style.
 *
 * @type {Array<{ label: string; color: string }>} TagData - Tableau des objets représentant les étiquettes.
 * @property {string} label - Texte de l'étiquette, qui sera affiché à l'utilisateur.
 * @property {string} color - Classe CSS définissant la couleur du texte de l'étiquette.
 */
const TagData = [
  { label: "CNAM", color: "text-red-500" }, // Tag pour CNAM avec couleur rouge
  { label: "Incubateur", color: "text-green-500" },
  { label: "Personnel", color: "text-blue-500" }, // Tag pour Incubateur avec couleur verte
];
