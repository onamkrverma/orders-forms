import Home from "./page/home/Home";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import FormDetails from "./page/form details/FormDetails";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/debug/form/:id" element={<FormDetails/>}/>
      <Route path="*" element={<div>Page not found</div>}/>
      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
