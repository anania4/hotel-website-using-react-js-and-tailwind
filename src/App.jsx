import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
//import { roomData } from "./data";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext, useState } from "react";
import RoomProvider, { RoomContext } from "./context/RoomContext";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Events from "./pages/Events";


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/room/:id",
    element: <RoomDetails />,
  },
  {
    path:"/Events",
    element:<Events/>,
  }
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <RoomProvider>
          <RouterProvider router={router} />
        </RoomProvider>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;
