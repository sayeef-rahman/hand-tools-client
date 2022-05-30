import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import Footer from "./Pages/Shared/Footer";
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from "./Pages/Login/RequireAuth";
import Products from "./Pages/Home/Products";
import Purchase from "./Pages/Home/Purchase";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AddReview from "./Pages/Dashboard/AddReview";
import MyPortfolio from "./Pages/Dashboard/MyPortfolio";
import Checkout from "./Pages/Dashboard/Checkout";
import AddProduct from "./Pages/Dashboard/AddProduct";
import NotFound from "./Pages/Shared/NotFound";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import Blogs from "./Pages/Home/Blogs";


function App() {
  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="products" element={
          <RequireAuth>
            <Products />
          </RequireAuth>
        } />
        <Route path="/purchase/:productID" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>

        {/* <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }></Route> */}

        {/* Nested Routes */}
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>

        }>
          <Route index element={<MyOrders />}></Route>
          <Route path="myprofile" element={<MyProfile />}></Route>
          <Route path="addreview" element={<AddReview />}></Route>
          <Route path="portfolio" element={<MyPortfolio />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="addproduct" element={<AddProduct />}></Route>
          <Route path="manageproduct" element={<ManageProduct />}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
