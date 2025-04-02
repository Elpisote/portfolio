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
      <div className="flex flex-col gap-4">
        <p>
          Ancienne infirmière, je me suis reconvertie dans le développement web
          pour mettre ma{" "}
          <span className="text-hight-contrast-text">curiosité</span>, ma{" "}
          <span className="text-hight-contrast-text">rigueur</span> et mon sens
          du concret au service de la tech.
        </p>
        <p>
          Aujourd’hui, je développe un{" "}
          <span className="text-hight-contrast-text">
            SaaS pour le suivi de la santé animale
          </span>
          , né d’un besoin réel que j’ai rencontré avec mes propres animaux.{" "}
        </p>
        <p>
          Mon parcours me donne une approche centrée utilisateur, une grande
          adaptabilité et une{" "}
          <span className="text-hight-contrast-text">
            forte capacité d’analyse
          </span>
          .{" "}
        </p>
        <p>
          Je conçois des applications utiles, avec méthode et passion, en
          combinant mes compétences{" "}
          <span className="text-hight-contrast-text">
            techniques et humaines
          </span>
          .
        </p>
      </div>
    </Section>
  );
};

export default Presentation;
