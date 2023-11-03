import Link from "next/link";

const Category = () => {
  const categories = [
    { icon: "flaticon-home-1", text: "Houses" },
    { icon: "flaticon-corporation", text: "Apartments" },
    { icon: "flaticon-network", text: "Office" },
    { icon: "flaticon-garden", text: "Villa" },
  ];

  return (
    <div className="home4-icon-style mt20 d-none d-sm-flex animate-up-4">
      {categories.map((category, index) => (
        <Link
          key={index}
          href="/map-v2"
          className="d-flex align-items-center text-white ff-heading me-4"
        >
          <i className={`icon mr10 ${category.icon}`} /> {category.text}
        </Link>
      ))}
    </div>
  );
};

export default Category;
