/**
 * Représente un lien de navigation dans l'application.
 *
 * @type {Object} NavLinkType
 * @property {number} id - L'identifiant unique du lien.
 * @property {string} label - Le texte affiché pour le lien.
 * @property {string} href - L'URL vers laquelle le lien pointe.
 */
export type NavLinkType = {
  id: number;
  label: string;
  href: string;
};
