import { IconNameType } from "./IconNameType";

/**
 * Représente une technologie avec ses caractéristiques.
 *
 * @typedef {Object} TechnoType
 * @property {number} id - L'identifiant unique de la technologie.
 * @property {string} title - Le titre de la technologie.
 * @property {string} version - La version de la technologie.
 * @property {IconNameType[]} iconNames - Une liste d'icônes associées à la technologie.
 * @property {string} subtitle - Le sous-titre ou la description brève de la technologie.
 * @property {string[]} tag - Une liste de tags associés à la technologie pour la catégorisation.
 */
export type TechnoType = {
  id: number;
  title: string;
  version: string;
  iconNames: IconNameType[];
  subtitle: string;
  tag: string[];
};
