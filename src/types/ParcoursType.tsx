/**
 * Représente le parcours d'une personne avec des informations sur une expérience ou un événement.
 *
 * @type {Object} ParcoursType
 * @property {number} id - L'identifiant unique du parcours.
 * @property {string} date - La date de l'événement ou de l'expérience.
 * @property {string} title - Le titre du parcours.
 * @property {string} subtitle - Un sous-titre ou une description courte du parcours.
 * @property {string} description - Une description détaillée du parcours.
 * @property {string} location - La localisation de l'événement ou de l'expérience.
 * @property {string} icon - Le nom de l'icône associée au parcours.
 */
export type ParcoursType = {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  icon: string;
};
