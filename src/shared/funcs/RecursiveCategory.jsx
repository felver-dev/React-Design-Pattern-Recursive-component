/* eslint-disable react/prop-types */

const CategoryTree = ({ categories, onSelect }) => {
  return (
    <>
      {categories && categories.length > 0 ? (
        <div>
          {categories.map((cat) => (
            <RecursiveCategory
              key={cat.id}
              category={cat}
              onSelect={onSelect}
            />
          ))}
        </div>
      ) : (
        <p>No available category</p>
      )}
    </>
  );
};

const RecursiveCategory = ({ category }) => {
  const handleSelect = (item) => {
    console.log(item);
  };
  return (
    <li onClick={() => handleSelect(category)} style={{ cursor: "pointer" }}>
      {category.name}
      {category.children && category.children.length > 0 && (
        <div>
          {category.children.map((child) => {
            <div key={child.id}>
              <RecursiveCategory
                category={child}
                onSelect={() => handleSelect(child)}
              />
              ;
            </div>;
          })}
        </div>
      )}
    </li>
  );
};

export { RecursiveCategory, CategoryTree };
