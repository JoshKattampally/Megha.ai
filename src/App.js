import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/contact";
import Login from "./pages/login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/Megha.ai" element={<Layout />} />
        <Route path="/Megha.ai/login" element={<Login />} />
        <Route path="/Megha.ai/contact" element={<Contact />} />
        {/*The products page takes you back to the page with all the cards as it is a dummy page. */}
        <Route path="/Megha.ai/products" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
