const fileSystem = [
  {
    id: 1,
    name: "Documents",
    type: "folder",
    children: [
      {
        id: 2,
        name: "Resume.pdf",
        type: "file",
      },
      {
        id: 3,
        name: "Projects",
        type: "folder",
        children: [
          {
            id: 4,
            name: "Project1.docx",
            type: "file",
          },
          {
            id: 5,
            name: "Project2.pptx",
            type: "file",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Photos",
    type: "folder",
    children: [
      {
        id: 7,
        name: "Vacation.jpg",
        type: "file",
      },
    ],
  },
  {
    id: 8,
    name: "todo.txt",
    type: "file",
  },
];

const categories = [
  {
    id: 1,
    name: "Electronique",
    children: [
      { id: 2, name: "Téléphones" },
      {
        id: 3,
        name: "Ordinateurs",
        children: [
          { id: 4, name: "Laptops" },
          { id: 5, name: "Desktops" },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Maison",
    children: [
      { id: 7, name: "Meubles" },
      { id: 8, name: "Décoration" },
    ],
  },
];

export { fileSystem, categories };
