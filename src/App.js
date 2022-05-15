import Header from "./components/Header";
import Footer from "./components/Footer";
import Separator from "./components/UI/Separator";
import Form from "./components/Form";
import uniqid from "uniqid";
import Step from "./components/Step";
import Button from "./components/UI/Button";
import StyleChoice from "./components/StyleChoice";

import ResumeOrange from "../src/images/resume_template_orange.png";
import ResumeBlue from "../src/images/resume_template_blue.png";
import ResumeGreen from "../src/images/resume_template_green.png";

function App() {

  const GenInfoData = [
    {
      title:"Name",
      placeholder:"John Smith",
      id: uniqid(),
    },
    {
      title:"Job",
      placeholder:"Actuary",
      id: uniqid(),
    },
    {
      title:"Email",
      placeholder:"abc@gmail.com",
      id: uniqid(),
    },
    {
      title:"Phone #",
      placeholder:"123-45-67",
      id: uniqid(),
    },
  ];

  const EducationData = [
    {
      title:"School",
      placeholder:"Harvard University",
      id: uniqid(),
    },
    {
      title:"Degree",
      placeholder:"Mathematics",
      id: uniqid(),
    },
    {
      title:"Start",
      placeholder:"2016",
      id: uniqid(),
    },
    {
      title:"End",
      placeholder:"2020",
      id: uniqid(),
    },
  ];

  const WorkData = [
    {
      title:"Company",
      placeholder:"JP Morgan",
      id: uniqid(),
    },
    {
      title:"Position",
      placeholder:"Lead Actuary",
      id: uniqid(),
    },
    {
      title:"Start",
      placeholder:"2020",
      id: uniqid(),
    },
    {
      title:"End",
      placeholder:"Present",
      id: uniqid(),
    },
  ];

  return (
    <div className="App min-h-screen bg-slate-800 text-slate-900 flex justify-center selection:bg-slate-800 selection:text-slate-50">
      <section className="w-screen max-w-xl bg-slate-200 min-h-screen shadow-lg px-8 pt-4 pb-2">
        <Header />

        <Separator />
        <Step text="Step 1: Fill Out Details" />
        <Form title="General Info" data={GenInfoData}/>
        <h2 className='text-lg font-semibold my-2'>Education</h2>
        <Button text={"Add"}/>
        <h2 className='text-lg font-semibold my-2'>Work Experience</h2>
        <Button text={"Add"}/>

        {/* <Form title="Education" data={EducationData} /> */}
        {/* <Form title="Work Experience" data={WorkData} /> */}

        <Separator />

        <Step text="Step 2: Pick a Style" />
        <div className="grid grid-cols-1 2xs:grid-cols-2 sm:grid-cols-3 gap-4 my-4">
          <StyleChoice path={ResumeOrange} title="Orange" />
          <StyleChoice path={ResumeBlue} title="Blue" />
          <StyleChoice path={ResumeGreen} title="Green" />
        </div>

        <Separator />

        <Step text="Step 3: Check Details" />
          <h3 className="mt-3 flex justify-center italic font-bold text-center">Please do the first two steps!</h3>
        <Separator />

        <Step text="Step 4: Download" />

        <section className="flex items-center 3xs:justify-center flex-col 3xs:flex-row 3xs:gap-2">
          <Button text="Open in New Tab"/>
          <Button text="Download as PDF"/>
        </section>


        <Footer />
      </section>
    </div>
  );
}


export default App;