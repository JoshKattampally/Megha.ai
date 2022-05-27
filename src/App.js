import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/contact";
import Login from "./pages/login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        {/*The products page takes you back to the page with all the cards as it is a dummy page. */}
        <Route path="/products" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
