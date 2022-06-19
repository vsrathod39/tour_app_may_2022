import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/features/authSlice";
import AddEditTour from "./pages/AddEditTour";

function App() {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addtour" element={<AddEditTour />} />
          <Route path="/edittour/:id" element={<AddEditTour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
