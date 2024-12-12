import { useState } from "react";
import { categories } from "./data/data";
import { CategoryTree } from "./shared/funcs/RecursiveCategory";
import { RecursiveFileExplorer } from "./shared/funcs/RecursiveFileExplorer";
import { fileSystem } from "./data/data";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleSelect = (item) => {
    setSelectedItem(item);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          padding: "10px",
        }}
      >
        <h2>Explorateur fichiers</h2>
        <RecursiveFileExplorer data={fileSystem} onSelect={handleSelect} />
      </div>

      <div style={{ flex: 1, padding: "10px" }}>
        <h2>Informations</h2>
        {selectedItem ? (
          <div>
            <p>
              <strong>Nom:</strong> {selectedItem.name}
            </p>
            <p>
              <strong>Type:</strong> {selectedItem.type}
            </p>
            {selectedItem.type === "file" && (
              <p>Ce fichier peut-être téléchargé ou ouvert</p>
            )}

            {selectedItem.type === "folder" && (
              <p>Ce dossier contient {selectedItem.children?.length || 0}</p>
            )}
          </div>
        ) : (
          <p> Sélectionnez un fichier ou un dossier pour voir ses détails </p>
        )}
      </div>
      {/* <CategoryTree categories={categories} /> */}
    </div>
  );
};

export default App;
