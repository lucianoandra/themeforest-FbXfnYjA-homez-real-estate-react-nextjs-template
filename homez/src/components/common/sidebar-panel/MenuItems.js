const MenuItems = () => {
  const menuItems = [
    { id: 1, title: "Apartments" },
    { id: 2, title: "Bungalow" },
    { id: 3, title: "Houses" },
    { id: 4, title: "Loft" },
    { id: 5, title: "Office" },
    { id: 6, title: "Townhome" },
    { id: 7, title: "Villa" },
  ];

  return (
    <ul className="navbar-nav">
      {menuItems.map((item) => (
        <li className="nav-item" key={item.id}>
          <a className="nav-link" href="#" role="button">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
