import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@progress/kendo-react-layout";

const MenuNavbar = ({ children }) => {
  const navigate = useNavigate();

  const onSelect = (event) => {
    navigate(event.item.data.route);
  };

  return (
    <div>
      <Menu onSelect={onSelect}>
        <MenuItem text="Home" data={{ route: "/" }} />
        <MenuItem text="Products" data={{ route: "/products" }} />
        <MenuItem text="About" data={{ route: "/about" }}>
          <MenuItem text="Team" data={{ route: "/about/team" }} />
        </MenuItem>
      </Menu>
      <div style={{ padding: 10 }}>{children}</div>
    </div>
  );
};

export default MenuNavbar;
