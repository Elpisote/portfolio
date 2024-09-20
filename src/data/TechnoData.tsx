import { TechnoType } from "../types/TechnoType";

/**
 * Données des technologies
 *
 * `TechnoData` est un tableau d'objets représentant les technologies utilisées dans les projets.
 * Chaque objet contient des informations détaillées sur la technologie, y compris son titre, sa version,
 * un sous-titre, des icônes associées et des tags pour catégoriser la technologie.
 *
 * @type {TechnoType[]} - Tableau des objets représentant les technologies.
 *
 * @typedef {Object} TechnoType
 * @property {number} id - Identifiant unique de la technologie.
 * @property {string} title - Titre de la technologie.
 * @property {string} version - Version de la technologie.
 * @property {string} subtitle - Sous-titre décrivant l'utilisation de la technologie.
 * @property {Array<{name: string, size: number}>} iconNames - Liste d'icônes associées à la technologie.
 * @property {string[]} tag - Liste de tags associés à la technologie.
 */
const TechnoData: TechnoType[] = [
  {
    id: 1,
    title: "Java",
    version: "version 17",
    subtitle: "Depuis 2020",
    iconNames: [{ name: "java", size: 50 }],
    tag: ["CNAM", "Incubateur"],
  },
  {
    id: 2,
    title: "C Sharp",
    version: "version 10",
    subtitle: "Depuis 2023",
    iconNames: [{ name: "csharp", size: 50 }],
    tag: ["Personnel"],
  },
  {
    id: 3,
    title: "Dotnet",
    version: "version 6",
    subtitle: "Depuis 2023",
    iconNames: [{ name: "dotnet", size: 50 }],
    tag: ["Personnel"],
  },
  {
    id: 4,
    title: "Angular, React",
    version: "version 17",
    subtitle: "Depuis 2023",
    iconNames: [
      { name: "angular", size: 50 },
      { name: "react", size: 50 },
    ],
    tag: ["CNAM", "Incubateur", "Personnel"],
  },
];

export default TechnoData;
