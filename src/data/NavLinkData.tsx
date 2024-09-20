import { NavLinkType } from "../types/NavLinkType";

/**
 * Définition des liens de navigation du menu
 *
 * `NavLinkData` est un tableau d'objets représentant les liens de navigation
 * à afficher dans le menu. Chaque lien contient une étiquette (label) pour
 * l'affichage et un href pour la destination du lien.
 *
 * @type {NavLinkType[]} NavLinkData - Tableau des objets de liens de navigation.
 * @property {number} id - Identifiant unique pour chaque lien, utilisé pour la gestion des clés dans les listes.
 * @property {string} label - Texte affiché pour le lien de navigation.
 * @property {string} href - URL ou ancre vers laquelle le lien redirige lors du clic.
 */
const NavLinkData: NavLinkType[] = [
  { id: 1, label: "Présentation", href: "#presentation" },
  { id: 2, label: "Technologies", href: "#technologies" },
  { id: 3, label: "Projets", href: "#projects" },
  { id: 4, label: "Parcours", href: "#parcours" },
];

export default NavLinkData;
