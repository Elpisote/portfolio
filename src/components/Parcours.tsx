import { FaMapMarkerAlt } from "react-icons/fa";
import { MdSchool, MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import ParcoursData from "../data/ParcoursData";
import Section from "./Section";

/**
 * Composant Parcours
 *
 * Ce composant affiche une chronologie verticale des événements de parcours,
 * tels que les expériences professionnelles et les formations académiques.
 *
 * Il utilise `react-vertical-timeline-component` pour afficher une chronologie stylisée,
 * avec des icônes représentant des événements liés au travail ou à l'école.
 *
 * @returns {JSX.Element} - Le rendu du composant Parcours.
 */
const Parcours = () => {
  return (
    <Section id="parcours">
      {/* Titre de la section */}
      <h1 className="custom-underline mb-10">Parcours</h1>

      {/* Sous-titre indiquant la période actuelle */}
      <p className="pb-6 text-center text-2xl font-semibold">Aujourd'hui</p>

      {/* Composant VerticalTimeline pour afficher les événements chronologiques */}
      <VerticalTimeline lineColor="#F6EEB4">
        {/* Boucle à travers chaque élément de la chronologie dans ParcoursData */}
        {ParcoursData.map((item) => {
          // Déterminez si l'icône doit être un icône de travail ou une icône scolaire
          const isWorkIcon = item.icon === "work";

          return (
            <VerticalTimelineElement
              key={item.id} // Utilisé comme identifiant unique pour chaque élément
              visible={true} // Assure que l'élément est visible
              contentStyle={{
                background: "#2D2305", // Couleur de fond du contenu
                color: "#F6EEB4", // Couleur du texte
                boxShadow: "0 3px 10px rgba(246, 238, 180, 0.3)", // Ombre portée pour le contenu
              }}
              contentArrowStyle={{ borderRight: "15px solid #FFE629" }} // Style de la flèche pointant vers l'élément de la chronologie
              date={item.date} // Date de l'événement
              icon={isWorkIcon ? <MdWork /> : <MdSchool />} // Choix de l'icône en fonction du type d'événement
              iconStyle={{
                background: "#2D2305", // Couleur de fond de l'icône
                color: "#F6EEB4", // Couleur de l'icône
                boxShadow:
                  "0 0 0 4px #F6EEB4, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 4px 0 6px rgba(0, 0, 0, 0.05)", // Ombre portée pour l'icône
              }}
            >
              {/* Contenu de l'élément de la chronologie */}
              <h2>{item.title}</h2> {/* Titre de l'événement */}
              <h3>{item.subtitle}</h3> {/* Sous-titre de l'événement */}
              <p>{item.description}</p>{" "}
              {/* Description détaillée de l'événement */}
              <div className="mt-4 flex items-center space-x-2 text-xs">
                <FaMapMarkerAlt /> {/* Icône de localisation */}
                <div>{item.location}</div> {/* Emplacement de l'événement */}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Section>
  );
};

export default Parcours;
