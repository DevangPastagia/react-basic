import Footer from "@components/Footer/Index.jsx";
import Header from "@components/Header/Index.jsx";

import { Outlet } from "react-router";

function Main() {
  return (
    <>
      <Header />
      <main>
        <div className="main">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Main;
