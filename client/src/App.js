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
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct"
import Users from "./pages/admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/admin/Products";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/admin/AdminOrder";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/product/:slug" element={<ProductDetails></ProductDetails>}></Route>
      <Route path="/categories" element={<Categories></Categories>}></Route>
      <Route path="/cart" element={<CartPage></CartPage>}></Route>
      <Route path="/category/:slug" element={<CategoryProduct></CategoryProduct>}></Route>
      <Route path="/search" element={<Search></Search>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/dashboard" element={<PrivateRoute/>}>
        <Route path="user" element={<Dashboard/>}></Route>
        <Route path="user/orders" element={<Orders/>}></Route>
        <Route path="user/profile" element={<Profile/>}></Route>
      </Route>
      <Route path="/dashboard" element={<AdminRoute/>}>
        <Route path="admin" element={<AdminDashboard/>}></Route>
        <Route path="admin/create-category" element={<CreateCategory/>}></Route>
        <Route path="admin/create-product" element={<CreateProduct/>}></Route>
        <Route path="admin/products" element={<Products/>}></Route>
        <Route path="admin/product/:slug" element={<UpdateProduct/>}></Route>
        <Route path="admin/users" element={<Users/>}></Route>
        <Route path="admin/orders" element={<AdminOrders/>}></Route>
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
