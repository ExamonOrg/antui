import { Menu } from "antd";


const NavBar = () => {
  return (
    <Menu
      mode="horizontal"
      items={[
        { key: "mail", label: "Story" },
        { key: "app", label: "Study" },
        { key: "app", label: "Progress" },
        { key: "app", label: "Cheat Sheet" },
      ]}
    />
  );
};

export default NavBar;
