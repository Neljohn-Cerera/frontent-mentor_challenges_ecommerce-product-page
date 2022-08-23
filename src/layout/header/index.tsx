import Image from "next/image";
import React from "react";
import { IconCart, Logo } from "../../assets/icons";
import { img_avatar } from "../../assets/images";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="flex">
        <nav aria-label="Main Navigation">
          <ul role="list" className="flex gap-1">
            <li className="nav-item fw-semibold cursor-pointer">Collections</li>
            <li className="nav-item fw-semibold cursor-pointer">Men</li>
            <li className="nav-item fw-semibold cursor-pointer">Women</li>
            <li className="nav-item fw-semibold cursor-pointer">About</li>
            <li className="nav-item fw-semibold cursor-pointer">Contact</li>
          </ul>
        </nav>
        <div className="display-none">Container mobile close</div>
      </div>
      <div className="flex gap-2 ml-auto">
        <button
          className="bg-none border-none cursor-pointer"
          aria-label="Cart Button"
        >
          <IconCart />
        </button>
        <div
          className="avatar-image relative rounded-full cursor-pointer"
          role="button"
          aria-label="Profile Button"
        >
          <Image
            className="rounded-full"
            src={img_avatar}
            alt="Profile Image Button"
            layout="fill"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
