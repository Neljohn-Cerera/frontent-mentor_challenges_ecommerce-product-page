import React from "react";
import { IconMenu, Logo } from "../../../assets/icons";

const HeaderLogo = ({ handleOpenMenu }: { handleOpenMenu: () => void }) => {
  return (
    <>
      <button
        className="header__menu bg-none border-none cursor-pointer"
        aria-label="Icon Menu Button"
        title="Open Menu"
        onClick={handleOpenMenu}
      >
        <IconMenu />
      </button>
      <Logo />
    </>
  );
};

export default HeaderLogo;
