import {
  RouterProvider,
} from "react-router-dom";
import NavbarLayout from "./components/layouts/Navbarlayout";
import { Routes } from "./routes";

function App() {
  return (
    <NavbarLayout>
      <RouterProvider router={Routes} />
    </NavbarLayout>
  )
}

export default App
