import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeItem from "../components/HomeItem";
import Home from "./Home";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default App;