import { BiWorld } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import profilePic from "../assets/profile-pic.png";
import HeroData from "../data/HeroData";
import Section from "./Section";

/**
 * Composant Hero
 *
 * Le composant `Hero` est une section de la page d'accueil qui affiche des informations
 * principales sur la personne, incluant un titre, une description de son métier,
 * sa disponibilité, ainsi que sa localisation et ses préférences en termes de télétravail.
 *
 * Ce composant est utilisé pour mettre en avant les informations de profil principal,
 * généralement en haut de la page d'accueil ou dans une section dédiée du site.
 */

const Hero = () => {
  return (
    <Section className="flex max-md:flex-col-reverse">
      {/* Bloc contenant les informations principales */}
      <div className="flex flex-[2] flex-col max-md:mx-auto max-md:mt-8">
        {/* Nom de la personne avec une grande taille de police */}
        <p className="font-hero text-7xl">{HeroData.name}</p>

        {/* Description du métier avec une taille de police légèrement plus petite */}
        <p className="text-4xl">{HeroData.jobName}</p>

        {/* Informations supplémentaires sur la disponibilité */}
        <p className="mt-3 text-lg">{HeroData.job}</p>

        {/* Informations sur l'email */}
        <p className="mb-3 mt-1 text-lg">{HeroData.mail}</p>

        {/* Bloc contenant les informations de localisation et de télétravail */}
        <div className="flex max-lg:flex-col">
          {/* Informations sur la localisation */}
          <div className="flex items-center text-xs">
            <FaMapMarkerAlt size={15} /> {/* Icône de localisation */}
            <p className="ml-1"> {HeroData.location}</p>
          </div>

          {/* Informations sur la mobilité */}
          <div className="flex items-center text-xs lg:ml-4">
            <BiWorld size={15} /> {/* Icône de globe pour la mobilité*/}
            <p className="ml-1">{HeroData.mobility}</p>
          </div>
        </div>
      </div>

      {/* Bloc contenant la photo de profil */}
      <div className="flex flex-1 justify-center">
        <img
          src={profilePic} // Chemin vers l'image de profil
          className="h-full max-h-[215px] w-auto rounded-full object-cover" // Styles pour l'image
          alt="photo profil" // Texte alternatif pour l'image
        />
      </div>
    </Section>
  );
};

export default Hero;
