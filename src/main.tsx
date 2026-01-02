
  // Importation de la bibliothèque React DOM pour le rendu dans le navigateur
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  // Point d'entrée de l'application : recherche l'élément 'root' et y rend le composant App
  createRoot(document.getElementById("root")!).render(<App />);
  