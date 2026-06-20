const categories = ["All", "Rings", "Necklace", "Earrings", "Bridal"];

const CategoryFilter = ({ category,  setCategory}) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`

px-6

py-2

rounded-full

border

${category === item ? "bg-[#C9A227] text-white" : ""}

`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
