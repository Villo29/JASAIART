import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Login from "../componentes/atomos/Login";


function App() {
    return ( 
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
     );
}

export default App;