import { HeroType } from "../types/HeroType";

/**
 * Données de l'Héro
 *
 * `HeroData` est un objet qui stocke les informations d'un héro, généralement utilisé
 * pour afficher des détails sur une personne sur une page d'accueil ou un profil.
 *
 * @type {HeroType} HeroData - L'objet contenant les informations de l'héro.
 * @property {string} name - Le nom de l'héro.
 * @property {string} jobName - Le titre du poste ou rôle de l'héro.
 * @property {string} job - Une phrase décrivant la disponibilité de l'héro.
 * @property {string} mail - L'adresse e-mail de contact de l'héro.
 * @property {string} location - La localisation géographique de l'héro.
 * @property {string} mobility - Les possibilités de mobilité de l'héro (zones géographiques où il peut travailler).
 */
const HeroData: HeroType = {
  name: "Eva LEFIEF",
  jobName: "Développeuse Full Stack",
  job: "Disponible pour un contrat d'apprentissage",
  mail: "e.lefief@gmail.com",
  location: "France, Nord, Villeneuve d'Ascq",
  mobility: "France, Nord, Lille et périphérie | ou full remote",
};

export default HeroData;
