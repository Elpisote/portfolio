/**
 * Représente les propriétés d'un icône.
 *
 * @typed {Object} IconNameType
 * @property {string} name - Le nom de l'icône.
 * @property {number} [size] - La taille de l'icône (en pixels). Si non spécifiée, une taille par défaut sera utilisée.
 * @property {string} [className] - Classes CSS optionnelles pour appliquer un style à l'icône.
 */
export type IconNameType = {
  name: string;
  size?: number;
  className?: string;
};
