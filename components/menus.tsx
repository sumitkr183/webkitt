import Menu from "./menu";
import { MENU_ITEMS } from "@/lib/constants";

const Menus = () => {

  return (
    <div className="sidebar-body">
      <ul className="nav nav-sidebar">
        {MENU_ITEMS.map((menu, index) => (
          <Menu
            key={index}
            {...menu}
          />
        ))}
      </ul>
    </div>
  );
};

export default Menus;
