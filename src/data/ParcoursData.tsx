import { ParcoursType } from "../types/ParcoursType";

/**
 * Données du parcours
 *
 * `ParcoursData` est un tableau d'objets représentant le parcours
 * professionnel et académique. Chaque objet contient des informations
 * sur une expérience, y compris la date, le titre, le sous-titre,
 * une description, la localisation et une icône associée.
 *
 * @type {ParcoursType[]} ParcoursData - Tableau des objets représentant les expériences.
 * @property {number} id - Identifiant unique pour chaque expérience, utilisé pour la gestion des clés dans les listes.
 * @property {string} date - Date ou période de l'expérience.
 * @property {string} title - Titre de l'expérience (par exemple, poste occupé).
 * @property {string} subtitle - Sous-titre pour fournir un contexte supplémentaire (par exemple, type de projet ou organisation).
 * @property {string} description - Description détaillée de l'expérience.
 * @property {string} location - Localisation de l'expérience (ville, pays).
 * @property {string} icon - Nom de l'icône associée à l'expérience (utile pour l'affichage).
 */
const ParcoursData: ParcoursType[] = [
  {
    id: 1,
    date: "Septembre 2024",
    title: "Développeuse front-end",
    subtitle: "Projet personnel",
    description: "Création de mon portfolio",
    location: "France, Villeneuve d'Ascq",
    icon: "work",
  },
  {
    id: 2,
    date: "Août 2023 - Juin 2024",
    title: "Développeuse full stack",
    subtitle: "Projet personnel",
    description: "Développement d'une application de traçabilité des aliments",
    location: "France, Villeneuve d'Ascq",
    icon: "work",
  },
  {
    id: 3,
    date: "Mars 2023 - Juin 2024",
    title: "Développeuse full stack",
    subtitle: "Incubateur - M2i Formation",
    description: "Développement d'une application de covoiturage",
    location: "France, Lille",
    icon: "work",
  },
  {
    id: 4,
    date: "Septembre 2022 - Juin 2024",
    title: "Auditrice",
    subtitle: "Conservatoire National des Arts et Métiers",
    description: "Licence informatique",
    location: "France, Lille",
    icon: "school",
  },
  {
    id: 5,
    date: "Septembre 2019 - Juin 2023",
    title: "Auditrice",
    subtitle: "Conservatoire National des Arts et Métiers",
    description: "Technicien développeur",
    location: "France, Lille",
    icon: "school",
  },
];

export default ParcoursData;
