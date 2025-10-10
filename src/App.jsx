import { useDispatch } from "react-redux";
import "./App.css";
import { useState, useEffect } from "react";
import authService from "./appwrite/auth";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import { login, logout } from "./store/authSlice";

// this App.js is used for the page for '/' path in project, all routes setup in main.jsx

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
        console.log("dispatched");
        
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? null : (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  );

  // return (
  //   <>
  //     <h1>blog project in react and appwrite with redux as well</h1>
  //   </>
  // );
}

export default App;
