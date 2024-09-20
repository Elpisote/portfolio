import Section from "./Section";

/**
 * Composant Presentation
 *
 * Le composant `Presentation` est utilisé pour afficher une section de présentation
 * dans la page. Il fournit un aperçu de la carrière et des compétences de l'utilisateur,
 * mettant en avant les expériences professionnelles et les qualités personnelles.
 *
 * Ce composant est utilisé pour introduire l'utilisateur et décrire brièvement son parcours et ses compétences.
 */
const Presentation = () => {
  return (
    <Section id="presentation">
      {/* Titre de la section */}
      <h1 className="custom-underline mb-10">Présentation</h1>

      {/* Contenu de la présentation */}
      <p>
        Après dix années de carrière en tant qu'infirmière, j'ai décidé de me
        réorienter vers le développement web, un domaine où je peux mettre à
        profit ma <span className="text-hight-contrast-text">curiosité</span> et
        ma <span className="text-hight-contrast-text">rigueur</span>. Mon
        parcours unique m'a appris à{" "}
        <span className="text-hight-contrast-text">
          coordonner des efforts collectifs
        </span>{" "}
        et à{" "}
        <span className="text-hight-contrast-text">communiquer clairement</span>
        , même dans des situations de stress intense. J'ai également développé
        une{" "}
        <span className="text-hight-contrast-text">
          capacité d'analyse approfondie
        </span>
        , que j'applique aujourd'hui pour résoudre des{" "}
        <span className="text-hight-contrast-text">
          défis techniques complexes
        </span>
        . Je suis prête à mettre ces compétences au service de projets web
        innovant.
      </p>
    </Section>
  );
};

export default Presentation;
