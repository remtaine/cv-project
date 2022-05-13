import Header from "./components/Header";
import Footer from "./components/Footer";
import Separator from "./components/UI/Separator";
import Form from "./components/Form";
import uniqid from "uniqid";


function App() {

  const GenInfoData = [
    {
      title:"Name",
      placeholder:"John Smith",
      id: uniqid(),
    },
    {
      title:"Job",
      placeholder:"Fireman",
      id: uniqid(),
    },
  ];

  const EducationData = [
    {
      title:"Name",
      placeholder:"John Smith",
      id: uniqid(),
    },
    {
      title:"Job",
      placeholder:"Fireman",
      id: uniqid(),
    },
  ];

  return (
    <div className="App min-h-screen bg-slate-800 text-slate-900 flex justify-center selection:bg-slate-800 selection:text-slate-50">
      <section className="w-screen max-w-xl bg-slate-200 min-h-screen shadow-lg px-8 pt-4 pb-2">
        <Header />

        <Separator />
        
        <Form title="General Info" data={GenInfoData}/>
        <Form title="Education" />
        <Form title="Work Experience" />

        <Separator />

        <Footer />
      </section>
    </div>
  );
}


export default App;