import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
//import { roomData } from "./data";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext, useState } from "react";
import { RoomContext } from "./context/RoomContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/room/:id",
    element: <RoomDetails />,
  },
]);

const App = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
