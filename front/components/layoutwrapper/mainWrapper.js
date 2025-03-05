import Footer from "./footer";
import Mainmenu from "./mainmenu";

export default function MainWrapper({ children }) {
  return (
    <>
      <Mainmenu />
      <main className="m-auto my-container text-justify min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
