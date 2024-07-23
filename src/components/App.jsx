import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import FavoritePage from "../pages/FavoritePage/FavoritePage";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorite" element={<FavoritePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
