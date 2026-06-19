import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LegacyScripts from "./components/LegacyScripts";
import MyResources from "./components/MyResources";
import OnlineResources from "./components/OnlineResources";
import Tutor from "./components/Tutor";

export default function App() {
  return (
    <>
      <Header />
      <div id="wrapper">
        <div id="main">
          <About />
          <MyResources />
          <OnlineResources />
          <Tutor />
        </div>
        <Footer />
      </div>
      <LegacyScripts />
    </>
  );
}
