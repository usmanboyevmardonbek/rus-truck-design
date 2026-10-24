import { Outlet } from "react-router-dom";
import Feedback from "./Feedback";
import Footer from "./footer";
import Header from "./Header";

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
      <Feedback />
      <Footer />
    </>
  );
}
