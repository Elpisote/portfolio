import CSharpIcon from "../icons/CSharpIcon";
import DotnetIcon from "../icons/DotnetIcon";
import GithubIcon from "../icons/GithubIcon";
import JavaIcon from "../icons/JavaIcon";
import JiraIcon from "../icons/JiraIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import MariaDBIcon from "../icons/MariaDBIcon";
import ReactIcon from "../icons/ReactIcon";
import AngularIcon from "./AngularIcon";

// Taille par défaut pour les icônes
const DEFAULT_SIZE = 32;

/**
 * Mapping des icônes disponibles.
 *
 * Chaque clé correspond à un nom d'icône et chaque valeur est une fonction
 * qui retourne le composant de l'icône associé. La fonction accepte des
 * paramètres pour la taille et les classes CSS.
 */
const iconMap: Record<
  string,
  // eslint-disable-next-line no-unused-vars
  (size?: number, className?: string) => JSX.Element
> = {
  linkedIn: (size = DEFAULT_SIZE, className) => (
    <LinkedInIcon size={size} className={className} />
  ),
  java: (size = DEFAULT_SIZE, className) => (
    <JavaIcon size={size} className={className} />
  ),
  react: (size = DEFAULT_SIZE, className) => (
    <ReactIcon size={size} className={className} />
  ),
  angular: (size = DEFAULT_SIZE, className) => (
    <AngularIcon size={size} className={className} />
  ),
  mariaDb: (size = DEFAULT_SIZE, className) => (
    <MariaDBIcon size={size} className={className} />
  ),
  jira: (size = DEFAULT_SIZE, className) => (
    <JiraIcon size={size} className={className} />
  ),
  github: (size = DEFAULT_SIZE, className) => (
    <GithubIcon size={size} className={className} />
  ),
  csharp: (size = DEFAULT_SIZE, className) => (
    <CSharpIcon size={size} className={className} />
  ),
  dotnet: (size = DEFAULT_SIZE, className) => (
    <DotnetIcon size={size} className={className} />
  ),
};

/**
 * Récupère les icônes spécifiées par le tableau iconItems.
 *
 * Chaque élément du tableau doit contenir un nom d'icône, ainsi que
 * des options facultatives pour la taille et les classes CSS.
 * La fonction retourne un tableau d'éléments JSX représentant
 * les icônes demandées.
 *
 * @param {Array<{ name: string; size?: number; className?: string }>} iconItems -
 *    Un tableau d'objets décrivant les icônes à récupérer.
 * @returns {JSX.Element[]} Un tableau d'éléments JSX représentant les icônes.
 */
const getIcons = (
  iconItems: { name: string; size?: number; className?: string }[]
): JSX.Element[] => {
  return iconItems.map((item, index) => (
    <span key={`${item.name}-${index}`}>
      {iconMap[item.name](item.size, item.className)}
    </span>
  ));
};

export { getIcons };
