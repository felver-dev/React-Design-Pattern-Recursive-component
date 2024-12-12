/* eslint-disable react/prop-types */
import { useState } from "react";

const FileTree = ({ item, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };
  return (
    <span>
      <div
        onClick={() => {
          if (item.type === "folder") {
            toggleFolder();
          }
          onSelect(item);
        }}
        style={{
          cursor: "pointer",
          fontWeight: item.type === "folder" ? "bold" : "normal",
        }}
      >
        {item.type === "folder" ? (isOpen ? "📂" : "📁") : "📄"} {item.name}{" "}
      </div>
      {item.type === "folder" && isOpen && item.children && (
        <RecursiveFileExplorer data={item.children} onSelect={onSelect} />
      )}
    </span>
  );
};

const RecursiveFileExplorer = ({ data, onSelect }) => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <FileTree key={item.id} item={item} onSelect={onSelect} />
        ))}
      </ul>
    </div>
  );
};
export { RecursiveFileExplorer, FileTree };
