import { PropsWithChildren } from "react";

type SectionProps = {
  className?: string; // Classe CSS optionnelle pour personnaliser le style de la section
  id?: string; // Identifiant optionnel pour l'élément <section>, utile pour les ancres ou les styles spécifiques
  paddingX?: string; // Propriété optionnelle pour définir les valeurs de padding horizontal (px)
};

/**
 * Composant Section
 *
 * Le composant `Section` est un conteneur flexible utilisé pour structurer et styliser des sections de la page.
 * Il accepte des enfants (`children`) et permet d'ajouter des classes CSS, un identifiant, et des valeurs de padding
 * pour personnaliser le style et la structure du conteneur.
 *
 * Ce composant est généralement utilisé pour définir des sections distinctes de la page avec une mise en page cohérente.
 *
 * @param {SectionProps} props - Les propriétés passées au composant.
 * @param {string} [props.className] - Classe CSS supplémentaire pour personnaliser le style de la section.
 * @param {string} [props.id] - Identifiant pour la section, utile pour les ancres ou les styles spécifiques.
 * @param {string} [props.paddingX] - Padding horizontal pour personnaliser l'espacement horizontal (px).
 * @param {React.ReactNode} props.children - Contenu ou éléments enfants à inclure dans la section.
 *
 * @returns {JSX.Element} Le composant Section avec le contenu passé en enfants.
 */
const Section = (props: PropsWithChildren<SectionProps>) => {
  // Valeur par défaut pour le padding horizontal (px) si elle n'est pas fournie
  const defaultPaddingX = "px-4 md:px-8 lg:px-14 xl:px-24";

  return (
    <section
      id={props.id} // L'identifiant de la section, utile pour les ancres ou le ciblage CSS
      className={`m-auto max-w-screen-2xl py-12 ${
        props.paddingX || defaultPaddingX
      } ${props.className}`} // Classes CSS pour le style de la section
    >
      {/* Contenu ou éléments enfants passés au composant */}
      {props.children}
    </section>
  );
};

export default Section;
