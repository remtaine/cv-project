import Header from "./components/Header";
import Footer from "./components/Footer";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Work from "./components/Work";
import Separator from "./components/UI/Separator";

function App() {
  return (
    <div className="App min-h-screen bg-slate-800 text-slate-900 flex justify-center selection:bg-slate-800 selection:text-slate-50">
      <section className="w-screen md:w-[700px] bg-slate-50 min-h-screen shadow-lg px-8 py-4">
        <Header />
        <Separator />
        <GeneralInfo />
        <Education />
        <Work />
        <Separator />
        <Footer />
      </section>
    </div>
  );
}

export default App;
