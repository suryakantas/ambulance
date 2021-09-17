import Home from "./component/home/Home";
import Service from "./component/service/Service";
import Success from "./component/success/Success";
import Work from "./component/work/Work";
import Testimonial from "./component/testimonial/Testimonial";
import Contact from "./component/contact/Contact";
import Topbar from "./component/topbar/Topbar";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="section">
        <Home/>
        <Service/>
        <Success/>
        <Work/>
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
