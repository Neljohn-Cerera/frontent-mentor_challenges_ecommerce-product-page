import Image from "next/image";
import React from "react";
import { IconCart } from "../../../assets/icons";
import { img_avatar } from "../../../assets/images";

const HRight = () => {
  return (
    <div className="[ header__right ] [ gap-header__right ml-auto ]">
      <IconCart
        classname="header__right__icon-cart cursor-pointer "
        tabIndex={6}
      />
      <div
        className="[ avatar-image ] [ relative rounded-full cursor-pointer ]"
        title="Open Profile"
      >
        <Image
          className="rounded-full"
          src={img_avatar}
          alt="Image Profile"
          layout="fill"
          role="button"
          tabIndex={7}
        />
      </div>
    </div>
  );
};

export default HRight;
