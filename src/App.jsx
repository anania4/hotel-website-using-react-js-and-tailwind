/* eslint-disable no-unused-vars */
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
//import { roomData } from "./data";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { useContext, useState } from "react";
import RoomProvider, { RoomContext } from "./context/RoomContext";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import Events from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MyBookings from "./pages/MyBookings";
import Rooms from "./components/Rooms";
import RoomSearch from "./pages/RoomSearch";
import PaymentDetails from "./pages/BookingDetails";
import BookingDetails from "./pages/BookingDetails";
import BookingProvider from "./context/BookingContext";
import PaymentSummary from "./pages/PaymentSummary";

export const queryClient = new QueryClient();
/*
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
  },
  {
    path:"/AboutUs",
    element:<AboutUs/>,
  },
  {
    path:"/ContactUs",
    element:<ContactUs/>,
  },
  {
    path:"/MyBookings",
    element:<MyBookings/>,
  }
]);

<QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <RoomProvider>
          <RouterProvider router={router} />
        </RoomProvider>
        <Footer />
      </div>
    </QueryClientProvider>*/
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BookingProvider>
        <BrowserRouter>
          <>
            <div>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/room/:id" element={<RoomDetails />} />
                <Route path="/roomsy" element={<RoomSearch />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/Events" element={<Events />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/MyBookings" element={<MyBookings />} />
                <Route path="/BookingDetails" element={<BookingDetails />} />
                <Route path="/PaymentSummary" element={<PaymentSummary />} />
              </Routes>
              <Footer />
            </div>
          </>
        </BrowserRouter>
      </BookingProvider>
    </QueryClientProvider>
  );
};

export default App;
