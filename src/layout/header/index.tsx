import React, { useState } from "react";
import HeaderLogo from "./logo";
import Navigation from "./navigation";
import HRight from "./right";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <header className="[ header ] [ h-header p-y-header gap-header ]">
      {/* Header Logo */}
      <HeaderLogo handleOpenMenu={handleOpenMenu} />
      {/* Header Navigation */}
      <Navigation open={open} handleOpenMenu={handleOpenMenu} />
      {/* Header Right */}
      <HRight />
    </header>
  );
};

export default Header;
