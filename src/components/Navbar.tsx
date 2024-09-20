import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import NavLinkData from "../data/NavLinkData";
import { getIcons } from "../icons/IconMap";

/**
 * Composant Navbar
 *
 * La `Navbar` est un composant de navigation affichant les icônes des réseaux sociaux,
 * les liens de navigation, et un menu responsive pour les petits écrans.
 *
 * Elle utilise l'état local pour gérer l'ouverture et la fermeture du menu mobile.
 */
const Navbar = () => {
  // État pour suivre si le menu est ouvert ou fermé
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="relative m-auto flex max-w-screen-2xl items-center justify-between bg-subtle-background p-4 text-2xl md:px-6 lg:px-8 xl:px-10">
        {/* Icônes des réseaux sociaux */}
        <div className="flex gap-1 md:gap-2 lg:gap-4 xl:gap-6">
          <a
            href="https://github.com/elpisote"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ui-element-background p-2 hover:bg-hover-ui-element-background"
          >
            {/* Nom de l'icône et style */}
            {getIcons([
              {
                name: "github",
                className: "hover:text-hight-contrast-text",
              },
            ])}
          </a>
          <a
            href="https://www.linkedin.com/in/eva-lefief-alternance-2024-2025-developpeur"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ui-element-background p-2 hover:bg-hover-ui-element-background"
          >
            {/* Nom de l'icône et style */}
            {getIcons([
              {
                name: "linkedIn",
                className: "hover:text-hight-contrast-text",
              },
            ])}
          </a>
        </div>

        {/* Menu pour grands écrans */}
        <ul className="hidden gap-1 md:flex md:gap-2 lg:gap-4 xl:gap-6">
          {NavLinkData.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="rounded-full border border-transparent px-4 py-2 hover:border-hovered-ui-element-border hover:bg-hover-ui-element-background hover:text-hight-contrast-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Icône menu pour petits écrans */}
        <button
          className="block rounded-full bg-ui-element-background p-2 hover:bg-hover-ui-element-background md:hidden"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <MdClose size={32} className="hover:text-hight-contrast-text" />
          ) : (
            <FiMenu size={32} className="hover:text-hight-contrast-text" />
          )}
        </button>

        {/* Menu déroulant pour petits écrans */}
        <div
          className={`absolute right-4 top-16 flex flex-col gap-2 rounded-lg bg-subtle-background p-4 shadow-lg transition-all duration-100 ease-in-out md:hidden md:gap-4${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          }`}
        >
          {NavLinkData.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="rounded-full border border-transparent px-4 py-2 hover:border-hovered-ui-element-border hover:bg-hover-ui-element-background hover:text-hight-contrast-text"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
