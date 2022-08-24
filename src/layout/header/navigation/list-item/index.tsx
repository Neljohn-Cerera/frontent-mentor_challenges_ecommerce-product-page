import React from "react";
type Props = {
  className: string;
  title: string;
  ariaLabel: string;
  tabIndex: number;
};

const ListItem = ({ className, ariaLabel, title, tabIndex }: Props) => {
  return (
    <li className={className} aria-label={ariaLabel} tabIndex={tabIndex}>
      {title}
    </li>
  );
};

export default ListItem;
