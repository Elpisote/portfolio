import { IconNameType } from "./IconNameType";

/**
 * Représente un projet avec ses informations clés et ses caractéristiques.
 *
 * @type {Object} ProjectType
 * @property {number} id - L'identifiant unique du projet.
 * @property {string} title - Le titre du projet.
 * @property {string} period - La période durant laquelle le projet a été réalisé.
 * @property {IconNameType[]} iconNames - Un tableau d'icônes associées au projet.
 * @property {string[]} description - Une description détaillée du projet.
 * @property {string} link - Un lien vers le projet (site web, dépôt, etc.).
 * @property {boolean} group - Indique si le projet a été réalisé en groupe ou non.
 * @property {number} [nbPerson] - Le nombre de personnes ayant participé au projet (optionnel).
 * @property {number} [nbDev] - Le nombre de développeurs ayant participé au projet (optionnel).
 * @property {string[]} pratique - Une liste de pratiques ou technologies utilisées dans le projet.
 * @property {string[]} [images] - Un tableau d'URL d'images associées au projet (optionnel).
 * @property {string[] | undefined} [labelImage] - Un tableau de légendes pour les images (optionnel).
 * @property {string[]} retour - Les retours d'expérience ou les leçons apprises lors du projet.
 */
export type ProjectType = {
  id: number;
  title: string;
  period: string;
  iconNames: IconNameType[];
  description: string[];
  link: string;
  group: boolean;
  nbPerson?: number;
  nbDev?: number;
  pratique: string[];
  images?: string[];
  labelImage?: string[] | undefined;
  retour: string[];
};
