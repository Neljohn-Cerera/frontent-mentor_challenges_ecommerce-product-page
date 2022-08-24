import React from "react";
import { nav_data } from "./list-data";
import ListItem from "./list-item";
type Props = {
  open: boolean;
  handleOpenMenu: () => void;
};

const Navigation = ({ open, handleOpenMenu }: Props) => {
  return (
    <div
      className={`${
        open ? "header__navigation__mobile" : "header__navigation"
      }`}
    >
      {/* nav */}
      <nav className="header__nav" aria-label="main navigation">
        <button
          className="header__nav__close"
          aria-label="Close Menu Button"
          title="Close Menu"
        >
          X
        </button>
        {/* list */}
        <ul role="list" className="header__nav__items">
          {/* item */}
          {nav_data.map((listitem) => (
            <ListItem
              className="[ header__nav__item ] [ fw-base cursor-pointer ]"
              key={listitem.id}
              title={listitem.title}
              ariaLabel={listitem.ariaLabel}
              tabIndex={listitem.id}
            />
          ))}
        </ul>
      </nav>
      {/* mobile nav backdrop */}
      <div
        className="[ header__nav__backdrop ] [ bg-backdrop ]"
        onClick={handleOpenMenu}
      ></div>
    </div>
  );
};

export default Navigation;
