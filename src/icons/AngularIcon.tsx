// Définition des types pour les props du composant AngularIcon
type AngularIconProps = {
  size: number;
  className?: string;
};

/**
 * Composant AngularIcon.
 *
 * Rendu d'une icône SVG représentant Angular.
 * Le composant permet de personnaliser la taille et d'ajouter des classes CSS pour le style.
 *
 * @param {AngularIconProps} props - Les propriétés du composant.
 * @returns {JSX.Element} Un élément SVG représentant l'icône Angular.
 */
const AngularIcon = ({ size, className }: AngularIconProps): JSX.Element => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={size}
      height={size}
      className={className}
    >
      <polygon
        fill="#DD0031"
        points="125,30 31.9,63.2 46.1,186.3 125,230 203.9,186.3 218.1,63.2"
      />
      <polygon
        fill="#C3002F"
        points="125,30 125,52.2 125,153.4 125,230 203.9,186.3 218.1,63.2"
      />
      <path
        fill="#FFFFFF"
        d="M125,52.1L66.8,182.6h21.7l11.7-29.2h49.4l11.7,29.2h21.7L125,52.1z M142,135.4H108l17-40.9L142,135.4z"
      />
    </svg>
  );
};

export default AngularIcon;
