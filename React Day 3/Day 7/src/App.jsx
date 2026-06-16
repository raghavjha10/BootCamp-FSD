import TitleUpdater from "./TitleUpdater";
import Timer from "./Timer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>useEffect Hook Examples</h1>

      <TitleUpdater />
      <Timer />
    </div>
  );
}

export default App;
//navbar css
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// import React from 'react'
// import UseEffectOne from './UseEffectOne'
// import WindowResize from './WindowResize'

// const App = () => {
//   return (
//     <>
//       <div>App</div>
//       {/* <UseEffectOne /> */}
//       <Timer />
//       {/* <WindowResize /> */}
//     </>
//   )
// }

// export default App