import codriveAccueil from "../assets/codrive-accueil.jpg";
import codriveProfil1 from "../assets/codrive-profil1.png";
import codriveProfil2 from "../assets/codrive-profil2.png";
import codriveProfil3 from "../assets/codrive-profil3.png";
import TrAccueil from "../assets/Tr-accueil.png";
import TrAddCat from "../assets/Tr-form-ajout-cat.png";
import TrHistorique from "../assets/Tr-historique.png";
import TrMdp from "../assets/Tr-modif-mdp.png";
import TrSelectImpr from "../assets/Tr-pdt-sel-imp.png";
import TrStock from "../assets/Tr-stock.png";
import TrVueEtiquette from "../assets/Tr-vue-etiquette.png";
import { ProjectType } from "../types/ProjectType";

/**
 * Données des projets
 *
 * `ProjectData` est un tableau d'objets représentant les projets réalisés.
 * Chaque objet contient des informations détaillées sur un projet spécifique,
 * y compris le titre, la période de réalisation, les technologies utilisées,
 * une description, des images, et des retours d'expérience.
 *
 * @type {ProjectType[]} ProjectData - Tableau des objets représentant les projets.
 * @property {number} id - Identifiant unique du projet.
 * @property {string} title - Titre du projet.
 * @property {string} period - Période de réalisation du projet.
 * @property {Array<{ name: string }>} iconNames - Liste des technologies utilisées dans le projet.
 * @property {string[]} description - Description détaillée des objectifs et réalisations du projet.
 * @property {string} link - Lien ou identifiant pour accéder aux détails du projet.
 * @property {boolean} group - Indique si le projet a été réalisé en groupe.
 * @property {number} nbPerson - Nombre de personnes ayant travaillé sur le projet.
 * @property {number} nbDev - Nombre de développeurs ayant participé au projet.
 * @property {string[]} pratique - Description des pratiques et méthodologies utilisées durant le projet.
 * @property {string[]} images - Liste des images illustrant le projet.
 * @property {string[]} labelImage - Étiquettes descriptives pour chaque image.
 * @property {string[]} retour - Retours d'expérience et réflexions sur le projet.
 */
const ProjectData: ProjectType[] = [
  {
    id: 1,
    title: "Codrive",
    period: "Mars 2023 - Juin 2023",
    iconNames: [
      { name: "java" },
      { name: "react" },
      { name: "mariaDb" },
      { name: "jira" },
      { name: "github" },
    ],
    description: [
      "Développement d'une application de covoiturage permettant aux utilisateurs de proposer ou profiter des services de transport d'autres utilisateurs.",
      "Projet réalisé avec une équipe de 9 personnes, dont 6 développeurs.",
      "Gestion de projet avec Jira et GitHub en méthode agile.",
      "Participation active au développement, à la gestion de l'équipe et présentation lors de reviews.",
    ],
    link: "codrive",
    group: true,
    nbPerson: 9,
    nbDev: 6,
    pratique: [
      "J'ai consacré les 15 premiers jours à la montée en compétences sur React, en me familiarisant avec les concepts clés comme les hooks, le routage, et la gestion d'état. Après cette phase d'apprentissage intensif, j'ai intégré une équipe de développement où j'ai eu l'opportunité de mettre en pratique ces compétences.",
      "Nous avons adopté une méthode Agile pour structurer notre travail. J'ai participé activement à la définition des exigences du projet et à la création d'une conception technique. Nous avons travaillé sur le développement des fonctionnalités principales, en suivant le cahier des charges. Des revues de projet ont été réalisées tous les 15 jours, me permettant de présenter les avancements et d'ajuster le développement en fonction des retours de l'équipe",
      "J'ai principalement travaillé sur le développement du profil utilisateur et de la page d'accueil.",
    ],
    images: [codriveAccueil, codriveProfil1, codriveProfil2, codriveProfil3],
    labelImage: [
      "Page d'accueil",
      "Profil utilisateur - Tableau de bord",
      "Profil utilisateur - Information voiture",
      "Profil utilisateur - Avis",
    ],
    retour: [
      "Au sein de l'incubateur du numérique, j'ai acquis une expérience précieuse en développement web. J'ai découvert la méthode Agile, qui a transformé ma manière de gérer les projets, en favorisant une approche itérative et collaborative. L'utilisation de Jira m'a permis de maîtriser la gestion de projet en organisant et en priorisant efficacement les tâches.",
      "En parallèle, j'ai approfondi mes compétences en React, apprenant à créer des interfaces utilisateur dynamiques et à gérer l'état des composants de manière optimisée. Cette immersion dans l'incubateur m'a offert une compréhension approfondie des outils et des méthodes modernes dans le développement web.",
    ],
  },
  {
    id: 2,
    title: "Traçabilité des aliments",
    period: "Août 2024 - Juin 2024",
    iconNames: [
      { name: "csharp" },
      { name: "dotnet" },
      { name: "mariaDb" },
      { name: "github" },
    ],
    description: [
      "Dans le cadre de ce projet personnel, j'ai développé une application destinée aux restaurants pour améliorer la traçabilité des aliments.",
      "Cette application permet aux utilisateurs d’imprimer des étiquettes afin de suivre les dates limites de consommation (DLC) des produits alimentaires.",
      "L'objectif principal est de faciliter une gestion efficace des stocks en fournissant des outils pour une meilleure gestion des produits et une réduction du gaspillage alimentaire.",
    ],
    link: "tracability",
    group: false,
    pratique: [
      "Pour réaliser mon projet, j'ai d'abord utilisé des vidéos YouTube pour apprendre les bases d'Angular et de .NET. J'ai commencé par me familiariser avec .NET 6 en étudiant ASP.NET Core et Entity Framework, ce qui m'a permis de construire progressivement le back-end de l'application.",
      " Une fois les bases du back-end en place, j'ai intégré des fonctionnalités de sécurité pour gérer les connexions avec login et mot de passe.",
      "Après avoir consolidé cette partie, j'ai entamé l'apprentissage d'Angular, que j'ai utilisé pour développer le front-end de l'application. Le développement du front-end s'est fait de manière modulaire : j'ai d'abord créé le composant de connexion, puis j'ai construit les autres composants un par un, en ajoutant progressivement des fonctionnalités à chaque étape.",
      "Cette approche m'a permis de construire le projet de manière structurée et efficace.",
    ],
    images: [
      TrAccueil,
      TrMdp,
      TrAddCat,
      TrStock,
      TrSelectImpr,
      TrVueEtiquette,
      TrHistorique,
    ],
    labelImage: [
      "Page d'accueil avec menu et navbar",
      "Formulaire de modification de mot de passe",
      "Pop up pour ajouter une catégorie d'aliment",
      "Tableau de bord des stocks",
      "Produits sélectionnés afin d'imprimer les étiquettes",
      "Vue sur les étiquettes qui vont être imprimées",
      "Page avec l'historique des évènements",
    ],
    retour: [
      "En réfléchissant à mon expérience de développement de ce projet, plusieurs aspects clés ressortent. Tout d'abord, la transition entre l'apprentissage théorique et la mise en pratique a été une étape cruciale.",
      "Les vidéos YouTube se sont révélées être une ressource précieuse, mais elles ne peuvent pas remplacer l'expérience pratique. La construction progressive du back-end en .NET m'a permis de mieux comprendre la sécurité des connexions et la gestion des données, tandis que le développement du front-end avec Angular m'a appris l'importance de la modularité et de la gestion des états.",
      "Un défi majeur a été l'intégration fluide entre le back-end et le front-end, nécessitant des ajustements constants et une bonne compréhension des mécanismes de communication entre les deux. J'ai également appris à gérer les problèmes de compatibilité et à optimiser la performance de l'application.",
      "Cette expérience m'a non seulement renforcé dans mes compétences techniques, mais elle m'a aussi appris à aborder les problèmes de manière méthodique et à chercher des solutions créatives. En somme, ce projet a été une occasion précieuse de développer mes compétences en développement logiciel et de renforcer ma capacité à résoudre des problèmes complexes.",
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    period: "Septembre 2024",
    iconNames: [{ name: "react" }],
    description: [
      "Je suis actuellement en train de créer un portfolio en ligne pour présenter mes projets et compétences en développement web.",
      "Ce projet a pour but de montrer une vue d'ensemble de mes travaux, avec des sections dédiées à chaque projet. Le portfolio inclura également une présentation de mes compétences techniques et de mon parcours professionnel.",
    ],
    link: "portfolio",
    group: false,
    pratique: [
      "Pour créer mon portfolio, j'ai commencé par définir le contenu et le design souhaité, puis j'ai élaboré une maquette pour visualiser l'interface. J'ai sélectionné les couleurs et les éléments visuels pour garantir une cohérence esthétique. J'ai choisi React pour le développement en raison de sa flexibilité.",
      "J'ai structuré le projet en utilisant des composants réutilisables et intégré React Router pour la gestion des routes. Le portfolio est également conçu pour être responsive, assurant une expérience utilisateur optimale sur tous les appareils. Cette approche m'a permis de créer un site visuellement attrayant et fonctionnel, tout en mettant en avant mes compétences techniques.",
    ],
    retour: [
      "En réfléchissant à mon expérience de création de ce portfolio, plusieurs points ressortent. L'un des principaux défis a été d'assurer la compatibilité responsive du site sur différents appareils, ce qui a nécessité des ajustements constants des styles CSS.",
      "Une leçon clé a été l'importance de tester régulièrement le design sur différents écrans pour garantir une expérience utilisateur fluide. Ce projet m'a non seulement permis d'approfondir mes compétences en React, mais aussi de mieux comprendre les pratiques de développement web moderne.",
      "Je suis satisfaite du résultat final et je considère cette expérience comme un tremplin important pour mes futurs projets.",
    ],
  },
];

export default ProjectData;
