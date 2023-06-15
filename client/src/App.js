import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/auth/Register";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/policy" element={<Policy></Policy>}></Route>
      <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
    </>
  );
}

export default App;
