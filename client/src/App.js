import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./Components/Routes/Private"
import Forgotpassword from "./pages/auth/Forgotpassword";
import AdminRoute from "./Components/Routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/dashboard" element={<PrivateRoute/>}>
        <Route path="user" element={<Dashboard/>}></Route>
      </Route>
      <Route path="/dashboard" element={<AdminRoute/>}>
        <Route path="admin" element={<AdminDashboard/>}></Route>
      </Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/forgot-password" element={<Forgotpassword></Forgotpassword>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/policy" element={<Policy></Policy>}></Route>
      <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
    </>
  );
}

export default App;
