import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import VanDetailsPage from "./pages/Vans/VanDetail";
import NotFound from "./pages/NotFound";
import HostVans from "./pages/Host/HostVans";

// layouts
import Layout from "./layout/Layout";
import HostLayout from "./layout/HostLayout";

import "./server";

import {
  VanDetail,
  VanListLoader,
  VansLoader,
  HostVanDetail,
} from "./utils/loaders";
import HostVanDetails from "./pages/Host/HostVanDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import Error from "./components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Relative Path - No need to add / as React knows the url is relative to the parent route */}

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="vans"
          element={<Vans />}
          loader={VansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<VanDetailsPage />}
          loader={VanDetail}
        />

        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route
            path="vans"
            element={<HostVans />}
            loader={VanListLoader}
            errorElement={<ErrorBoundary />}
          />

          <Route
            path="vans/:id"
            element={<HostVanDetails />}
            loader={HostVanDetail}
            errorElement={<ErrorBoundary />}
          >
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div> ERROR IN YOUR VANS COMPONENT</div>;
}
